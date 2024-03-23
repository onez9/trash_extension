
// content.js: Этот файл предназначен для контентных скриптов, которые внедряются непосредственно на страницу, 
// с которой пользователь взаимодействует. Контентные скрипты могут взаимодействовать с DOM страницы, 
// изменять ее содержимое и внешний вид.



// изменяет значение атрибута style
function modifyElementsByXPath(xpath) {
    const elements = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    let element = elements.iterateNext();
    // element.setAttribute("style", "1");
    while (element) {
        element.setAttribute("style", "1");
        element = elements.iterateNext();

    }

}




// Функция для изменения содержимого элементов по XPath
function modifyElementsByClassName(xpath, oldClass, newClass) {

    // const elements = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    // const elements = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    const elements = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    // const elements = document.evaluate()
    console.log(elements)
    // let element = elements.iterateNext();
    // element.setAttribute("style", "1");
    // while (element) {
    try {
        // element.innerHTML = 1;
        // if (element.classList.contains(oldClass)) {
        //     element.classList.remove(oldClass);
        //     element.classList.add(newClass);
        // }
        console.log(`lenght: ${elements.snapshotLength}`)

        for (let i = 0; i < elements.snapshotLength; i++) {
            const element = elements.snapshotItem(i);
            if (element.classList.contains(oldClass)) {
                // element.classList.remove(oldClass);
                // element.classList.add(newClass);
                // element.classList.forEach(class_name => {
                //     element.classList.remove(class_name)
                // });
                while (element.classList.length > 0){
                    element.classList.remove(element.classList.item(0))
                }
            }
        }
        // element.setAttribute("style", "1");
        // element = elements.iterateNext();


    }catch(e){
        console.info(e)
    }


    // }

}







//*[@id="MULTIUN-V1.EN-RU_7285957"]
// let xpath='/html/body/div[2]'

// let xpath = '//*[@class="example blocked"]';
// let xpath = '//*[@class="badge w-100"]';
// let oldClass = 'badge';
// let newClass = '1';

// setTimeout(()=>{
//     modifyElementsByClassName(xpath, oldClass, newClass);
//     xpath = '//*[@class="p-0 px-1 align-middle col"]'
//     oldClass = 'ps-1'
//     setTimeout(()=>{
//         modifyElementsByClassName(xpath, oldClass, newClass);
//     }, 3000)
// }, 3000)
// Пример использования: изменение содержимого всех элементов по XPath


// xpath = '//*[@class="p-0 px-1 align-middle col"]'
// oldClass = 'ps-1'
// setTimeout(()=>{
//     modifyElementsByClassName(xpath, oldClass, newClass);
// }, 3000)