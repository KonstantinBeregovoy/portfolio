---
title: 'I Built a Working Android App Without Writing a Single Line of Code'
description: 'Including the bugs, the dead ends, and the exact prompt I''d use if I started over today.'
date: 2026-09-03
kind: article
tags: ['ai-tooling']
featured: false
# Draft: the LinkedIn export lost some code blocks and tag names, and images must be downloaded
# (media.licdn.com links expire around 29 Oct 2026). Fix, then set draft: false.
draft: true
---

Including the bugs, the dead ends, and the exact prompt I'd use if I started over today.

This is a breakdown of the real process behind building a working Android app (a workout timer) through a conversation with Claude, without writing a single line of code by hand. It covers four parts: a chronology of the requests that actually built or fixed functionality, a ready-to-use prompt template for reproducing the result from scratch, a breakdown of why each feature was built the way it was, and a conclusion on what I'd do differently starting over.

### Part 1. Chronology: the requests that built and fixed the app

**1. The initial request.** Described the functionality in plain language: a timer with a settable exercise duration, presets at 30/60/90/120/180/300 sec, an interim signal every N seconds (custom values or presets, "ding" or "tick" sound), a separate final signal, a delayed start (3 sec by default, adjustable). At the end of the request, I separately asked it to ask clarifying questions if anything was unclear. → The AI didn't start building right away. It first clarified: web format or native Android app, how to implement the sounds, whether extra features like vibration and keep-screen-on were needed.

**2. Choosing the parameters.** Native app in Kotlin, sounds generated programmatically (not custom files), vibration alongside sound, a separate "keep screen on" toggle. → The AI tried to technically verify it could build the app and hit a constraint: its sandbox has no access to Google/Maven servers, so building a finished .apk directly is physically impossible, same as for any developer without Android Studio.

**3. "I have Android Studio, I just don't know how to use it, what now?"** → The AI offered a choice: a full Kotlin project (paste 2 ready files into Android Studio) or a web version (PWA). Went with the first option. From there, the AI designed the timer's logic (states: "delay / running / paused / finished", sound-tone generation via , vibration, keep-screen-on flag), wrote , , and a detailed step-by-step walkthrough for someone new to the Android Studio interface. One tip from this same step turned out to be genuinely useful: since the phone was already connected via USB, skip building an APK manually through the Build menu and just hit the green Run button instead, simpler and faster for testing on a real device.

*(A few purely interface-level questions came up along the way: couldn't find a tab, couldn't find a file in the project tree, couldn't find a menu item. These don't show the app-building process itself, so I won't cover them separately here; only the requests below actually built or fixed functionality.)*

**4. Layout redesign.** Request: cut the duration presets down to three (60/120/180), combine the label and input field into one row ("Duration" on the left, input on the right), same for the interval signal, add bottom padding so the "keep screen on" toggle wouldn't overlap the phone's system nav bar. → The AI rewrote both files (XML and Kotlin) in full to account for the changes and re-checked the code's integrity.

**5. Attempting direct automation.** I hadn't tried this specific scenario before (the AI directly clicking around an unfamiliar IDE, without copy-paste), so I decided to try it for the first time: could the AI connect to the computer's screen itself and edit the code directly? Tested it: screen access works, but the IDE blocks automated text input for security reasons (clicking only), so we went around it through Finder and a plain text editor. → In practice, this turned out slower and fussier than plain copy-paste: third-party app pop-ups kept getting in the way on screen, there was a risk that autocorrect on quotes and dashes would break the code, and in terms of tokens, the whole process came out far more expensive than a direct text edit. As a first experiment with this scenario, the conclusion was clear: I went back to the simple approach: the AI hands over the finished file, the person pastes it in by hand.

**6. The sound-routing bug.** The signal kept playing through the phone speaker even with headphones connected, and this bug wasn't fixed on the first try. First swapped the audio attribute for . Didn't help. Then instead of . Also didn't immediately fix it. The AI asked clarifying questions (what kind of headphones, Bluetooth or wired, does regular music play through them fine) to figure out whether the bug was in the code or specific to the phone's firmware (in this case, Samsung One UI). In the end, the combination of + worked; apparently it also took a clean reinstall of the app and reconnecting Bluetooth.

### Part 2. Ready-made template: what to write to get the same app

Building it again with all the lessons learned, the whole process can be compressed into a single first prompt instead of more than 20 messages:

**📋 Ready-to-use prompt: copy, paste, adjust the specifics**

> I need an Android app: a workout timer, native Kotlin (not a web version). Features: — settable exercise duration, with quick preset buttons (e.g. 60/120/180 sec) and a field for a custom value; — an interim sound signal every N seconds during the exercise, also with presets and a custom value, choice of a short "tick" or a melodic "ding"; — a separate, more noticeable signal at the end (different from the interim one); — a delayed start with an adjustable delay (default 3 sec), with a countdown before start; — vibration alongside every signal, with an on/off toggle; — a "keep screen on" toggle while the timer is running; — the whole interface in English from the start; — generate the sounds programmatically (no sound files), but use audio attributes that route the sound wherever regular media goes (to headphones, if connected) rather than forcing it to the speaker; — I'm not an Android developer, I've barely used Android Studio, give me ready-made code files and a detailed step-by-step walkthrough of what to paste where, assuming I'm new to the Android Studio interface. If the phone is connected via USB, mention that I can just hit Run without building an APK manually.

This phrasing closes off most of the iterations right away: native/Kotlin is stated explicitly (no need to sort out the sandbox issue separately), English interface from the start, correct audio attributes from the start, user skill level stated upfront (needs a detailed walkthrough for a beginner).

For layout tweaks, phrasing like *"let's keep only 3 options X/Y/Z"*, *"combine the label and input field into one row, text on the left, input on the right"*, *"add bottom padding so it doesn't overlap the system menu"*, works great without any Android terminology; the AI translates it into concrete XML attributes on its own.

### Part 3. Breaking down the features: why each was built this way

**Native Kotlin, not a web app (PWA).** A web version would have come together faster and without Android Studio, but for that "native" app feel (working without a browser, direct access to vibration and system sounds), the choice landed on the native path. The cost is that Android Studio becomes mandatory for building, since the AI can't physically compile an .apk in its isolated environment: no access to the Google/Maven servers needed to pull the Android SDK and the Gradle plugin.

**The presets just fill in the input field.** The 60/120/180 buttons don't hold separate state: clicking one writes a number into the same field as manual entry. One source of truth (the value in ), not two states that need to stay in sync. This rules out a whole class of bugs where "the button shows one thing and the timer counts another."

**The timer runs on** , not on : that's what Claude chose and explained. A regular in Android gradually "drifts" through pauses and recalculations. Instead, the code records an "absolute end time" each time and, on every tick, computes the remainder as the difference from the current system time. This rules out accumulated error even after many pause/resume cycles. I didn't know going into this that could drift at all. My reaction was basically, "wait, that's a thing?" A routine Android-platform quirk, but the AI is the one who surfaced it, not something I'd have caught myself.

**Sounds are generated in code (** + a sine wave), not pulled from files. This removes the need to go hunting for sound files somewhere and the risk of infringing on someone else's audio. "Tick" is a short, clean tone; "ding" is two tones played together (a chord) with a soft decay, which reads to the ear as more "bell-like." The final end-of-exercise signal is three short signals rising in pitch, deliberately different from the interim one so it's immediately clear by ear "this is the end," not "this is just a time marker."

**Vibration alongside the sound, with a separate toggle.** Doubling the signal with vibration is there for when the phone's in a pocket and the sound isn't audible (or is muted), plus a toggle so it can be fully disabled if the workout is happening with headphones on and vibration isn't needed.

**"Keep screen on": via a window flag, no permission request.** Uses , a system window flag that doesn't require a separate user permission (unlike, say, a full wake lock), so the implementation stays simple and doesn't add extra "allow access" screens on first launch.

**Delayed start with a countdown and ticking.** Without an audio cue, the user wouldn't be able to tell whether the countdown is running or the app has frozen, so every second of the delay plays a short tick, and the transition into the exercise itself is marked by a separate, longer tone.

**Audio attributes** + : worked out together with Claude from the bug itself, not from prior knowledge. I'm not an Android developer and had no idea in advance what a given audio attribute would lead to. The bug showed up on the device, and honestly it was annoying: two rounds of "try this attribute" that didn't fix it before we landed on the right combination. The explanation for why came from the AI during debugging: the first version used , a category of "system" sounds like a keyboard click, which Android on many devices (especially with skins like Samsung One UI) forcibly routes to the phone speaker, bypassing connected headphones, regardless of whatever else is playing. Switching to with makes the system treat the timer's signals like ordinary media audio, meaning it routes to wherever any other music or video would go.

**Giving the AI direct control of the screen to make code edits: turned out not to be worth it.** There was an attempt to give the AI direct access to the actual computer (through Finder and a text editor, working around Android Studio, since typing directly into the IDE is blocked by security policy). In practice, this turned out to be a slower, more fragile approach (third-party app pop-ups got in the way, there was a risk of quote- and dash-autocorrect breaking the code), and it came out noticeably more expensive in token usage than the ordinary scheme of "the AI writes the whole file → the person pastes it in by hand via copy-paste."

### Part 4. Conclusion: what I'd do differently starting over

If I were building this same timer today, I'd send that exact prompt from Part 2 as the very first message, instead of stretching the process across two dozen iterations. The right move would have been to, from the start:

— explicitly specify native Kotlin instead of sorting out the format as a separate question; — state the correct audio attributes upfront ( + ) instead of spending several iterations on the sound bug; — state my own skill level upfront (not a developer, barely used Android Studio) to get beginner-level instructions right away instead of figuring out where things are in the interface as I went.

That would have closed off, arguably, most of the clarifying questions at the start: about format, audio attributes, user skill level. But let's not confuse that with speed: the build itself won't get dramatically faster, because I don't know in advance how complex the next project will be. What would actually change is the ease of it: fewer messy iterations spent figuring out the parameters, because I'd already know which questions to ask upfront. The layout redesign (an ordinary taste-driven iteration, impossible to predict in advance) and possibly part of the audio bug, specific to a particular phone's firmware, that kind of thing only shows up live on the device, and no prompt written in advance closes that off.
