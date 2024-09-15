function hideElemnetId (elemntId){
    const element= document.getElementById(elemntId);
    element.classList.add('hidden')
}
function addElement (elemnetiID){
    const element = document.getElementById(elemnetiID);
    element.classList.remove('hidden')

}


function setBackGroundColer(elemnentId){
    const element = document.getElementById(elemnentId);
    element.classList.add('bg-orange-400');
}


function removeBackGroundColor(elemenetId){
    const element = document.getElementById(elemenetId);
    element.classList.remove('bg-orange-400')
}

function getTextElementId(elemenetId){
    const element = document.getElementById(elemenetId);
    const text = element.innerText;
    return text;
}

function getTextGetElementVlaueId(elemenetId){
    const element =document.getElementById(elemenetId);
    const elementValueTask = element.innerText;
    const value = parseInt(elementValueTask);
    return value;
}
function  setTextGetElementVlaueId(elemenetId ,value){
    const element = document.getElementById(elemenetId)
    element.innerText = value;
}