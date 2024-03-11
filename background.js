console.log("Background script connected and running");



chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "sampleContextMenu1",
        title: "пупа",
        contexts: ["selection"],
    });
    chrome.contextMenus.create({
        id: "sampleContextMenu2",
        title: "залупа",
        contexts: ["page"],
    });
    chrome.contextMenus.create({
        id: "sampleContextMenu3",
        title: "fuck",
        contexts: ["page"],
    });
});


// Добавляем обработчик события для контекстного меню
chrome.contextMenus.onClicked.addListener((info, tab) => {
    // Проверяем id выбранного пункта меню
    if (info.menuItemId === "sampleContextMenu1") {
        // Выполняем действие, соответствующее выбранному пункту меню
        console.log("Выбран пункт меню: " + info.menuItemId);
        console.log("Выделенный текст: " + info.selectionText);
        console.log("ID вкладки: " + tab.id);

        // Отправляем сообщение в options.js с информацией о выборе пункта меню
        // chrome.runtime.sendMessage({ 
        //     action: "menuClicked", 
        //     menuItemId: info.menuItemId, 
        //     selectionText: info.selectionText, 
        //     tabId: tab.id 
        // });
        // Добавьте свои действия здесь
    }
});

// это нужно для общения с приложениями на пк
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Отправляем сообщение в нативное приложение
    var port = chrome.runtime.connectNative('com.example.app1');
    port.postMessage(message);

    // Получаем ответ от нативного приложения
    port.onMessage.addListener(function(response) {
        console.log('Response from native app(Ответ от нативного приложения):', response);
        sendResponse(response);
        port.disconnect(); // Отключаемся от нативного приложения после получения ответа
    });

    // Указываем, что мы хотим получить ответ асинхронно
    return true;
});


// Принимаем сообщения от контентного скрипта
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === "selectedText") {
//         // Передаем выделенный текст во всплывающее окно
//         console.log('pizda: ', message.text)
//         chrome.runtime.sendMessage({ action: "updatePopup", text: message.text });
//     }
// });

chrome.tabs.onCreated.addListener(function(tab) {
    console.log('Новая вкладка создана:', tab);
    // Ваши действия при создании новой вкладки
    // chrome.extension.getBackgroundPage().console.log(123, 'foo');
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log('Вкладка обновлена:', tab);
    // Ваши действия при обновлении вкладки
    // chrome.extension.getBackgroundPage().console.log(123, 'foo');
    // alert('hello')

    // нет нужного эффекта сообщенине не отправляется - пизда
    // chrome.runtime.sendNativeMessage('com.example.app2', {message:'hello from extension fuck bith fuck'}, (response) => {
    //     console.log('Response from app2: ', response)
    // })


    // создаёт уведомление для от браузера
    // chrome.notifications.create({
    //     type: 'basic',
    //     iconUrl: 'images/nsfv.jpg',
    //     title: 'Заголовок говняный',
    //     message: 'Это сообщение могут видеть только пидорасы',
    //     // progres: 45,
    // });

    // chrome.notifications.clear(
    //     notificationId: string,
    //     callback?: function,
    // )
    console.log('ВСЁ')
});

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    console.log('Вкладка удалена:', tabId);
    // Ваши действия при удалении вкладки
});

chrome.tabGroups.onCreated.addListener(function(group) {
    console.log('Новая группа вкладок создана:', group);
    // Ваши действия при создании новой группы вкладок
});

chrome.tabGroups.onUpdated.addListener(function(groupId, changeInfo, group) {
    console.log('Группа вкладок обновлена:', group);
    // Ваши действия при обновлении группы вкладок
});

chrome.tabGroups.onRemoved.addListener(function(groupId, removeInfo) {
    console.log('Группа вкладок удалена:', groupId);
    // Ваши действия при удалении группы вкладок
});

// chrome.power.onSuspend.addListener(function() {
//     console.log('Система переходит в режим сна.');
//     // Ваши действия при переходе системы в режим сна
// });

// chrome.power.onSuspendCanceled.addListener(function() {
//     console.log('Переход в режим сна отменен.');
//     // Ваши действия при отмене перехода системы в режим сна
// });

// chrome.power.onSystemResume.addListener(function() {
//     console.log('Система возобновила работу после режима сна.');
//     // Ваши действия при возобновлении работы системы после режима сна
// });

// chrome.system.cpu.onInfo.addListener(function(info) {
//     console.log('Информация о процессоре:', info);
//     // Ваши действия с информацией о процессоре
// });

// async function downloadImage(imageSrc) {
//     try{
//         const image = await fetch(imageSrc)
//         const imageBlog = await image.blob()
//         const imageURL = URL.createObjectURL(imageBlog)
    
//         const link = document.createElement('a')
//         link.href = imageURL
//         let name_file=imageSrc.split('/').slice(3).join('-')
//         link.download = name_file
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)
//     }catch{
//         console.log('error')
//     }
// }


// function downloadImages(number, count, part) {

//     for (let i=1;i<=count;i++){
//         console.log(i, "attempt")
//         // chrome.extension.getBackgroundPage().console.log(i, 'foo');
//         let tmp = (i<10)? '0'+i : i;
//         downloadImage(`https://hentaicdn.com/hentai/${number}/${part}/ccdn00${tmp}.jpg`)
//     }

// }

// chrome.runtime
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponder) {
//     console.log('hello pidori')

    
//     if(message.action === "invokeFunction"){
//         console.log("hello")
//         // downloadImages(message.number, message.count, message.part)
//     }else if(message==="somefunc"){
//         console.log(message.number,message.count,message.part)
//     }else if(message==="on_start_page"){
//         console.log(message.content)
//     }
// })


// chrome.runtime.onMessage.addListener(function(message, sender, sendResponder) {
//     console.log('hello pidori')
//     console.log(message.number,message.count,message.part)
    
//     if(message.action === "invokeFunction"){
//         console.log("hello")
//         downloadImages(message.number, message.count, message.part)
//     }
// })