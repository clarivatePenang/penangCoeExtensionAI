import { EMAIL_CONFIG } from '../constants/emailConfig.js';

export class EmailHighlighter {
  constructor(selectedTeam) {
    this.config = EMAIL_CONFIG[selectedTeam];
  }

  isDesiredEmailAddress(anchor) {
    return anchor.textContent.includes(this.config.email);
  }

  isClarivateEmailList(anchor) {
    const clarivateDomain = '@clarivate.com';
    return this.config.keywords.some(keyword => 
      anchor.textContent.includes(keyword) && anchor.textContent.includes(clarivateDomain)
    );
  }

  highlightEmail(anchor, color) {
    anchor.style.backgroundColor = color;
  }

  handleEmails() {
    const fromFieldDiv = document.getElementsByClassName("standardField uiMenu");
    for (const fromDiv of fromFieldDiv) {
      const anchor = fromDiv.querySelector("a.select");
      if (!this.isDesiredEmailAddress(anchor)) {
        if (!this.isClarivateEmailList(anchor)) {
          this.highlightEmail(anchor, "red");
        } else {
          this.highlightEmail(anchor, "orange");
        }
      } else {
        this.highlightEmail(anchor, "");
      }
    }
  }
}