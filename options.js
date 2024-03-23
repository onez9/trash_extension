



async function deleteAllExceptActive() {
    let link_on_current_page=(await chrome.tabs.query({active: true, currentWindow: true}))
    // alert(link_on_current_page)
    console.info(link_on_current_page[0].active)
    chrome.windows.getAll({populate:true}, (winData) => {
        let expr = /chrome:\/\/newtab/
        var winTabs = winData[0].tabs; // тут мы получаем набор первый затем второй затем третий набор вкладок
        var totTabs = winTabs.length; // получаем количество вкладок в первом затем во втором наборе
        for (var j=0; j<totTabs;j++) {
            if (!winTabs[j].active) {
                chrome.tabs.remove(winTabs[j].id)
                console.log(winTabs[j].id)
            }
        
        }
    
    });
}



function delTabsGoogle() {
    chrome.windows.getAll({populate:true}, (winData) => {
        let expr;

        for (var i in winData) {
            
            var winTabs = winData[i].tabs; // тут мы получаем набор первый затем второй затем третий набор вкладок
            var totTabs = winTabs.length; // получаем количество вкладок в первом затем во втором наборе
            for (var j=0; j<totTabs;j++) {
                expr = /(google.com|ya.ru|yandex.ru|dzen.ru)/
                if (winTabs[j].url.search(expr)!=-1) {
                    //console.log(j, 'Hello')
                    //window.open(winTabs[j].url, '_blank');
                    chrome.tabs.remove(winTabs[j].id)
                    console.log(winTabs[j].id)

                }

            }
        
        }

    });

}
// https://translate.google.com/

function delTabsNew() {
    chrome.windows.getAll({populate:true}, (winData) => {
        let expr = /chrome:\/\/newtab/
        var winTabs = winData[0].tabs; // тут мы получаем набор первый затем второй затем третий набор вкладок
        var totTabs = winTabs.length; // получаем количество вкладок в первом затем во втором наборе
        for (var j=0; j<totTabs;j++) {
            if (winTabs[j].url.search(expr)!=-1) {
                chrome.tabs.remove(winTabs[j].id)
                console.log(winTabs[j].id)
            }
        
        }
    
    });

}

function delTabsNew() {
    chrome.windows.getAll({populate:true}, (winData) => {
        let expr = /chrome:\/\/newtab/
        var winTabs = winData[0].tabs; // тут мы получаем набор первый затем второй затем третий набор вкладок
        var totTabs = winTabs.length; // получаем количество вкладок в первом затем во втором наборе
        for (var j=0; j<totTabs;j++) {
            if (winTabs[j].url.search(expr)!=-1) {
                chrome.tabs.remove(winTabs[j].id)
                console.log(winTabs[j].id)
            }
        
        }
    
    });

}


// function getAllOpenWindows(winData) {
//     let expr;
//     let count = 0;
//     for (var i in winData) {
//         var winTabs = winData[i].tabs; // тут мы получаем набор первый затем второй затем третий набор вкладок
//         var totTabs = winTabs.length; // получаем количество вкладок в первом затем во втором наборе
//         for (var j=0; j<totTabs;j++) {
//             if (num==1) {
//                 expr = /(google.com|extension|chrome:\/\/newtab)/
//                 if (winTabs[j].url.search(expr)!=-1) {
//                     //console.log(j, 'Hello')
//                     //window.open(winTabs[j].url, '_blank');
//                     chrome.tabs.remove(winTabs[j].id)
//                     console.log(winTabs[j].id)
//                 }
//             }
//             else if (num==2) {
//             }
//             else {
//                 // expr = /(chrome:\/\/newtab)/3
//                 //console.log(123123213, /google.com/.exec(winTabs[j].url))
//                 if (/google.com/.exec(winTabs[j].url) == null) {
//                 //     //window.open(winTabs[j].url, '_blank');
//                     if (j==totTabs-1) window.open('https://google.com', target='_blank')
//                     chrome.tabs.remove(winTabs[j].id)
//                 } else {
//                     count++;
//                     if (count > 1) {
//                         chrome.tabs.remove(winTabs[j].id)
//                     }
//                 }
//                 // window.open('https://google.com', target='_blank')
//             }
//             console.log(winTabs[j].url)
//         }
//     }
// }


// async function downloadImage(imageSrc) {
//     const response = await fetch(imageSrc)
//     if(response.ok){
//         const imageBlog = await response.blob()
//         const imageURL = URL.createObjectURL(imageBlog)
//         const link = document.createElement('a')
//         link.href = imageURL
//         let name_file=imageSrc.split('/').slice(3).join('-')
//         link.download = name_file
//         document.body.appendChild(link)
//         link.click()
//         document.body.removeChild(link)
//     }else{
//         console.log("An error occurred while loading the image. 234234234 243423424 234243243o44 234o234")
//         throw new Error("Image not loaded")
//     }
// }


// chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
//     const currentUrl=tabs[0].url
//     console.log("Curr")
// })
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve, ms))
}

function getRandomInt(min, max){
    min=Math.ceil(min)
    max=Math.floor(max)
    return Math.floor(Math.random()*(max-min+1)) + min
}
async function downloadImages() {
    // let number = parseInt(prompt('Укажите номер сета: '))
    // window.localStorage.setItem("zal2342upa", "941473418431")
    let site = /hentaihere.com/
    let link_on_current_page=(await chrome.tabs.query({active: true, currentWindow: true}))[0].url
    // let re=new RegExp('hentai\/d+', 'g')
    let flag=false
    if(site.test(link_on_current_page)){
        try{
            let arr = /(hentai\/\d+)|((?<=S)\d+)/.exec(link_on_current_page)
            console.log("Это массив аррай: ", arr)
            let number = parseInt(prompt("Введите номер: ", (arr)? arr[0] : undefined))
            if(isNaN(number)){
                throw new Error("Cancel!")
            }
            let count = parseInt(prompt('Введите количество: ', 90))
            if(isNaN(count)){
                throw new Error("Cancel!")
            }
            let part=parseInt(prompt('Укажите главу: ', 1))
            if(isNaN(part)){
                throw new Error("Cancel!")
            }
    
            console.log(number, count, part)
            // chrome.runtime.sendMessage({ action:"somefunc", number:number,count:count,part:part }) 




            for (let i=1;i<=count;i++){
                
                // (async () => {
                console.log(i, "attempt")
                // chrome.extension.getBackgroundPage().console.log(i, 'foo');
                let tmp = (i<10)? '0'+i : i;
                // downloadImage(`https://hentaicdn.com/hentai/${number}/${part}/ccdn00${tmp}.jpg`)
                let imageSrc = `https://hentaicdn.com/hentai/${number}/${part}/ccdn00${tmp}.jpg`
                // let imageSrc=`https://i3.nhentai.net/galleries/2405026/${i}.jpg`
                try{
                    // sleep(getRandomInt(0, 10000))
                    const response = await fetch(imageSrc)
                    .then(async response => {
                        try{
                            console.log("Сработало это говно: ")
                            // console.log(response)
                            if(response.ok){
                                const imageBlog = await response.blob()
                                const imageURL = URL.createObjectURL(imageBlog)
                                const link = document.createElement('a')
                                link.href = imageURL
                                let name_file=imageSrc.split('/').slice(3).join('-')
                                link.download = name_file
                                document.body.appendChild(link)
                                link.click()
                                document.body.removeChild(link)

                            }else{
                                console.log("An error occurred while loading the image. 234234234 243423424 234243243o44 234o234")
                                throw new Error("Image not loaded")
                            }
                        }catch(e){
                            // console.log(e)
                            console.log('ошибка фетча')
                            flag=true
                        }

                    }).catch((err)=>{
                        console.log(324324324234234)
                        console.log(err)
                        flag=true
                    })
                    // .catch((err)=>{
                    //     console.log(err, "эта залупа сработала во внетреннем catch")
                    // })
                }catch(e){
                    console.log('сука бля уу')
                    // flag=true
                }

                // })()

                // if(flag){
                //     break
                // }


            }
        }catch(e){
            console.log('Error into downloadImages: ', e)
        }
    
    }else{
        alert("Иди нахуй!")
        window.open("https://hentaihere.com")
    }

}



// (() => {
//     chrome.runtime.sendMessage({ action:"on_start_page", content: 'нюхай бэбру' }) 
// })()

// Получение выделенного текста
const selectedText = window.getSelection().toString();

// Отправка выделенного текста в фоновый скрипт
// chrome.runtime.sendMessage({ action: "selectedText", text: selectedText });

// Принимаем сообщения от фонового скрипта
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     // Проверяем тип сообщения
//     if (message.action === "menuClicked") {
//         // Обрабатываем информацию о выборе пункта меню
//         console.log("Выбран пункт меню: " + message.selectionText);
//         console.log("Выделенный текст: " + message.selectionText);
//         console.log("ID вкладки: " + message.tabId);
//         // Добавьте свои действия здесь
//         alert("Выбран пункт меню: " + message.selectionText);
//     }

// });


document.getElementById('btn1').addEventListener("click", () => delTabsGoogle())
document.getElementById('btn2').addEventListener("click", () => delTabsNew())
document.getElementById('btn5').addEventListener("click", () => downloadImages())
document.getElementById('btn6').addEventListener("click", () => {
    document.getElementById('selectedText').innerHTML="<b>Залупа</b>"
})
document.getElementById('btn7').addEventListener("click", () => deleteAllExceptActive())
// document.getElementById('btn5').addEventListener("click", () => { 
//     // (async () => {
//     //     console.log('23482348234238423482342394233429423749')
//     //     const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
//     //     const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
//     //     // do something with response here, not outside the function
//     //     console.log(response);
//     // })();


//     // chrome.runtime.sendMessage()
    


//     let number = 31337;
//     let count = 99;
//     let part =3;
//     // chrome.runtime.sendMessage(undefined, { action: "invokeFunction", number: number, count: count, part: part });
//     chrome.runtime.sendMessage({ action:"invokeFunction", number: number, count: count, part: part }) 
// })




// document.getElementById('btn3').addEventListener("click", () => test3)
