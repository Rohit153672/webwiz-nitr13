let btn1 = document.querySelector("#btn1");
let currmode = "light";

btn1.addEventListener("click", () => {
    alert("Changed theme successfully")
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";

    }else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "blue";
    }

    console.log(currmode);
})



 let hours = document.querySelector("#hours");
 let min = document.querySelector("#min");
 let sec = document.querySelector("#sec");

 setInterval(() => {
    let currenttime = new Date();
 
    hours.innerHTML = currenttime.getHours();
    min.innerHTML = currenttime.getMinutes();
    sec.innerHTML = currenttime.getSeconds();

 },1000)
