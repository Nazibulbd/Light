const light = document.getElementById("light");
const offbtn =  document.getElementById("off");
const onbtn = document.getElementById("on");

const lights = {
    off : "https://www.w3schools.com/js/pic_bulboff.gif",
    on : "https://www.w3schools.com/js/pic_bulbon.gif",
};

offbtn.addEventListener("click", ()=>{
    light.src = lights.off
});
onbtn.addEventListener("click", ()=>{
    light.src = lights.on
});


const sun = document.getElementById("sun");
const sun_offbtn =  document.getElementById("off");
const son_onbtn = document.getElementById("on");

const suns = {
    off : "",
    on : "",
};

offbtn.addEventListener("clicks", ()=>{
    sun.src = suns.off
});
onbtn.addEventListener("clicks", ()=>{
    sun.src = lights.on
});