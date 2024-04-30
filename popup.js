document.getElementById('replaceButton').addEventListener('click', () => {
  const findText = document.getElementById('findText').value;
  const replaceText = document.getElementById('replaceText').value;

  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['content.js'] 
    }, () => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "replaceText",
        findText: findText,
        replaceText: replaceText
      });
    });
  });
});