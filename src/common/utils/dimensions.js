const getViewportDimensions = () => {
  return {
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getViewportDimensions
};
