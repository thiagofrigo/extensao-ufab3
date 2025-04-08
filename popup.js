document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("dados", (result) => {
        document.getElementById("output").innerText = JSON.stringify(result.dados, null, 2);
    });
});
