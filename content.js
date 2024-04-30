chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "replaceText") {
    const findText = request.findText;
    const replaceText = request.replaceText;

    // Simple replace (you can enhance this with more complex logic)
    document.body.innerHTML = document.body.innerHTML.replaceAll(findText, replaceText);
  }
});