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

    //If we set it as true, it'll trigger everything starting from the outter element and work its way inwards
    //(default is false)
    h2.addEventListener("click", doSomething, false);
    

}

function doSomething(){
    alert("DOING SOMETHING AAAAAAAA!!!!!!!!!!!!")
}

function readyStateChange() {
    document.addEventListener("readystatechange", (event) => {
        if (event.target.readyState === "complete") {
            console.log("readyState: Complete")
            initApp();
        }
    });
}

const initApp = () => {

    const view = document.getElementById("view3");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event)=>{
        event.stopPropagation();
        view.style.backgroundColor="purple";
    },false);

    div.addEventListener("click", (event)=>{
        event.stopPropagation();
        div.style.backgroundColor="blue";
    },false);

    h2.addEventListener("click", (event)=>{
        event.stopPropagation();
        event.target.textContent="Clicked D:"
    },false);


}


//domTest();

//eventListenerTest1();

readyStateChange();