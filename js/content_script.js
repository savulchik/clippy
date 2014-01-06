chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command === "copy-selected-text-to-clipboard") {
    var selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
      sendResponse(selectedText);
    }
  }
});

