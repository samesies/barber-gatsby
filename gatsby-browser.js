exports.shouldUpdateScroll = () => false;

exports.onRouteUpdate = () => {
  window.setTimeout(() => {
    window.scrollTo(0, 0)
  }, 600);
};
