const keyboardHandler = mouseClickHandler => {
  return event => event.keyCode === 13 && mouseClickHandler();
};

const disableScrolling = () => {
  const x = window.scrollX;
  const y = window.scrollY;
  document.onscroll = () => {
    window.scrollTo(x, y);
  };
}

const enableScrolling = () => {
  document.onscroll = () => {};
}

export {
  disableScrolling,
  enableScrolling,
  keyboardHandler
};
