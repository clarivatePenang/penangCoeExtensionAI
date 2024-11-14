const observer = new MutationObserver(() => {
  handleAnchors();
  handleCases();
  handleStatus();
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
