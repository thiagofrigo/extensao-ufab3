chrome.action.onClicked.addListener((tab) => {
    console.log("Ícone clicado!");

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: interceptRequests
  });
});