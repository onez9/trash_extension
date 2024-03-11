// Принимаем сообщения от фонового скрипта
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "updatePopup") {
        // Обновляем содержимое всплывающего окна с выделенным текстом
        document.getElementById("selectedText").textContent = message.text;
    }
});