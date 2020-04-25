/* eslint-disable import/prefer-default-export */
const openLink = (link, useNewTab = "") => {
  if (!useNewTab) {
    window.location.href = link;
  } else {
    window.open(link, "_blank");
  }
};

export {
  openLink
};
