// Pointer "lamp": moves two decorative elements (.lamp-grid, .lamp-glow) to the cursor.
// Mouse only, skipped for reduced motion. The position is set on the elements themselves,
// so the rest of the page is not re-styled on every move. Without this file the site works the same.
if (matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const root = document.documentElement;
  const lamps = document.querySelectorAll('.lamp-grid, .lamp-glow');
  let frame = 0, x = 0, y = 0;
  addEventListener('pointermove', (e) => {
    x = e.clientX; y = e.clientY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      lamps.forEach((el) => { el.style.setProperty('--x', x + 'px'); el.style.setProperty('--y', y + 'px'); });
      root.classList.add('has-pointer');
      frame = 0;
    });
  }, { passive: true });
  root.addEventListener('mouseleave', () => root.classList.remove('has-pointer'));
}
