let button=document.querySelector('.button');
let inputValue=document.querySelector('.inputValue');
let name=document.querySelector('.name');
let desc=document.querySelector('.desc');
let temp=document.querySelector('.temp');
button.onclick=()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=a0cb2440b74e170dcb97757ad437a8bc")
    .then(response=>response.json())
    .then(data=>{


        let nameValue=data["name"];
        let tempValue=data["main"]["temp"];
        let descValue=data["weather"][0]["description"];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue+"Kelvin";
        desc.innerHTML=descValue;
    })

    .catch(err=>alert("Nome da cidade não exite"))
}