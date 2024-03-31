function getElementById(id){
    return document.getElementById(id);
}

function queryElementsByClass(parent, queryAtribute){
    let elementsList
    try {
        elementsList = parent.querySelectorAll(`.${queryAtribute}`);
    } catch (error) {
         console.error(error);
    } finally{
        return elementsList;
    }
}

function queryElementsById(parent, queryAtribute){
    try {
        let elementsList = parent.querySelectorAll(`#${queryAtribute}`);
    } catch (error) {
         console.error(error);
    } finally{
        return elementsList;
    }
}

function createElement(parent, type, className, text){
    let element=document.createElement(type);
    element.className=className;
    element.textContent=text;
    parent.append(element);
    console.log(element);
    console.log(element.text);
}

function changeListBackground(list, color){
    list.forEach(element => {
        element.style.backgroundColor=color;
    });
}

function domTest(){
    const board = getElementById("board");
    for (let index = 4; index < 10; index++) {
        createElement(board, "div", "box", index)
    }
    const boxes = queryElementsByClass(board, "box");    
    changeListBackground(boxes, "darkblue")
}

function eventListenerTest1(){

    const view = document.getElementById("view3");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    //Sintax addEventListener("event", function, useCapture);

    h2.addEventListener("click", doSomething, false);
    

}

function doSomething(){
    alert("DOING SOMETHING AAAAAAAA!!!!!!!!!!!!")
}

domTest();

eventListenerTest1();
