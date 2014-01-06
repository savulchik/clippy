chrome.commands.onCommand.addListener(function(command) {
  dispatchCommandToContentScript(command);
});

var dispatchCommandToContentScript = function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {command: command}, copyTextToClipboard);
  });
};

var copyTextToClipboard = function(text) {
  var input = document.createElement('input');
  input.id = 'clipboard';
  input.type = 'text';
  input.value = text;

  document.body.appendChild(input);

  input.select();
  document.execCommand('copy');

  document.body.removeChild(input);
};

