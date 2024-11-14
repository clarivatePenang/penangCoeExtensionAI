function isClarivateEmailList(anchor) {
  const emailKeywords = emailKeywordsSelection || emailKeywordsEndNote;

  const clarivateDomain = '@clarivate.com';

  for (let keyword of emailKeywords) {
    if (anchor.textContent.includes(keyword) && anchor.textContent.includes(clarivateDomain)) {
      return true;
    }
  }

  return false;
}
