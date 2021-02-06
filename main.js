const items = document.querySelectorAll('#timeline li');
// The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
// Referencia:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect


// The read-only innerHeight property of the Window interface 
// returns the interior height of the window in pixels, including 
// the height of the horizontal scroll bar, if present.
// Referencia:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight

// To obtain the height of the window minus its horizontal scroll bar 
// and any borders, use the root <html> element's clientHeight property instead.

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 && 
    rect.left >=0 && 
    rect.bottom <= 
    (window.innerHeight || document.documentElement.clientHeight) && 
    rect.right <= (window.innerWidth || 
      document.documentElement.clientWidth)
  );
};

const run = () => 
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
// Nota: Se ejecuta run al cargar la página, resize o hacer scroll
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
