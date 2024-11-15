chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'saveSelection') {
      chrome.storage.sync.set({ 'savedSelection': request.data }, function() {
        console.log('Selection saved: ' + request.data);
      });
    } else if (request.message === 'getSavedSelection') {
      chrome.storage.sync.get('savedSelection', function(items) {
        if (chrome.runtime.lastError) {
          sendResponse({ status: false, error: chrome.runtime.lastError });
        } else {
          sendResponse({ status: true, data: items.savedSelection });
        }
      });
      return true;
    }
  });