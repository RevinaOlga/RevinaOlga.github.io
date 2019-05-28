const colorPicker = document.querySelector('.colorPicker');
const paintBucket = document.querySelector('.paintBucket');
const currentColorEl = document.querySelector('.color-current');
const prevColorEl = document.querySelector('.color-prev');
const transform = document.querySelector('.transform');
const move = document.querySelector('.move');
const canvasItems = document.querySelectorAll('.canvas-item');

const state = {
  currentTool: '',
};

colorPicker.addEventListener('click', () => {
  move.classList.remove('-selected');
  transform.classList.remove('-selected');
  paintBucket.classList.remove('-selected');
  colorPicker.classList.add('-selected');
  state.currentTool = 'colorPicker';
});

document.querySelectorAll('.colors-icon').forEach((e) => {
  e.addEventListener('mousedown', (event) => {
    if (state.currentTool === 'colorPicker') {
      if (event.target === prevColorEl) {
        const current = getComputedStyle(currentColorEl).backgroundColor;
        currentColorEl.style.backgroundColor = getComputedStyle(prevColorEl).backgroundColor;
        prevColorEl.style.backgroundColor = current;
      } else {
        prevColorEl.style.backgroundColor = getComputedStyle(currentColorEl).backgroundColor;
        currentColorEl.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
      }
    }
  });
});

canvasItems.forEach((el) => {
  el.addEventListener('mousedown', () => {
    if (state.currentTool === 'colorPicker') {
      prevColorEl.style.backgroundColor = getComputedStyle(currentColorEl).backgroundColor;
      currentColorEl.style.backgroundColor = getComputedStyle(el).backgroundColor;
    }
  });
});

paintBucket.addEventListener('click', () => {
  move.classList.remove('-selected');
  transform.classList.remove('-selected');
  colorPicker.classList.remove('-selected');
  paintBucket.classList.add('-selected');
  state.currentTool = 'paintBucket';
});

canvasItems.forEach((elem) => {
  const el = elem;
  el.addEventListener('mousedown', () => {
    if (state.currentTool === 'paintBucket') {
      el.style.backgroundColor = getComputedStyle(currentColorEl).backgroundColor;
    }
  });
});

transform.addEventListener('click', () => {
  move.classList.remove('-selected');
  colorPicker.classList.remove('-selected');
  paintBucket.classList.remove('-selected');
  transform.classList.add('-selected');
  state.currentTool = 'transform';
});

canvasItems.forEach((el) => {
  el.addEventListener('mousedown', () => {
    if (state.currentTool === 'transform') {
      el.classList.toggle('-changed');
    }
  });
});

move.addEventListener('click', () => {
  colorPicker.classList.remove('-selected');
  paintBucket.classList.remove('-selected');
  transform.classList.remove('-selected');
  move.classList.add('-selected');
  state.currentTool = 'move';
});
function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

canvasItems.forEach((elem) => {
  const el = elem;
  el.addEventListener('mousedown', (e) => {
    if (state.currentTool === 'move') {
      const coords = getCoords(el);
      const shiftX = e.pageX - coords.left;
      const shiftY = e.pageY - coords.top;
      el.style.position = 'absolute';
      document.body.appendChild(el);

      el.style.zIndex = 1000;
      el.style.left = `${e.pageX - shiftX}px`;
      el.style.top = `${e.pageY - shiftY}px`;


      document.onmousemove = function mouseMove(element) {
        el.style.left = `${element.pageX - shiftX}px`;
        el.style.top = `${element.pageY - shiftY}px`;
      };

      el.addEventListener('mouseup', () => {
        document.onmousemove = null;
        el.onmouseup = null;
      });
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 'T'.charCodeAt(0)) {
    move.classList.remove('-selected');
    colorPicker.classList.remove('-selected');
    paintBucket.classList.remove('-selected');
    transform.classList.add('-selected');
    state.currentTool = 'transform';
  } else if (e.keyCode === 'M'.charCodeAt(0)) {
    colorPicker.classList.remove('-selected');
    paintBucket.classList.remove('-selected');
    transform.classList.remove('-selected');
    move.classList.add('-selected');
    state.currentTool = 'move';
  } else if (e.keyCode === 'C'.charCodeAt(0)) {
    move.classList.remove('-selected');
    transform.classList.remove('-selected');
    paintBucket.classList.remove('-selected');
    colorPicker.classList.add('-selected');
    state.currentTool = 'colorPicker';
  } else if (e.keyCode === 'P'.charCodeAt(0)) {
    move.classList.remove('-selected');
    transform.classList.remove('-selected');
    colorPicker.classList.remove('-selected');
    paintBucket.classList.add('-selected');
    state.currentTool = 'paintBucket';
  }
});
