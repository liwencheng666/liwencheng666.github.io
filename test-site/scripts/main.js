let myHeading = document.querySelector('h1')
myHeading.textContent = "Hello world";

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.jpg') {
        myImage.setAttribute('src',"images/photo_1.webp")
    } else {
        myImage.setAttribute('src','images/logo.jpg')
    }
}
let myButton = document.querySelector("button")

function setUserName(){
    let myName = prompt('请输入你的名字.')
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = "文成酷毙了,"+myName
    }
   
}

if(!localStorage.getItem('name')){
    setUserName()
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "文成酷毙了,"+storedName
}

myButton.onclick = function(){
    setUserName()
}