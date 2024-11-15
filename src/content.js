import { EmailHighlighter } from './features/emailHighlighter.js';
import { CaseHighlighter } from './features/caseHighlighter.js';
import { StatusHighlighter } from './features/statusHighlighter.js';

let emailHighlighter, caseHighlighter, statusHighlighter;

chrome.runtime.sendMessage({ message: 'getSavedSelection' }, function(response) {
  if (response.status) {
    emailHighlighter = new EmailHighlighter(response.data);
    caseHighlighter = new CaseHighlighter();
    statusHighlighter = new StatusHighlighter();
    
    // Initialize features
    emailHighlighter.handleEmails();
    caseHighlighter.handleCases();
    statusHighlighter.handleStatus();

    // Set up mutation observer
    const observer = new MutationObserver(() => {
      emailHighlighter.handleEmails();
      caseHighlighter.handleCases();
      statusHighlighter.handleStatus();
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });
  }
});