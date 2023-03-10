setInterval(()=>{

const d=new Date();
const time=(d.toLocaleTimeString('en-GB'));

const hrs=d.getHours();
const min=d.getMinutes();
const sec=d.getSeconds();


const b1=document.querySelector(".bx1");
const b2=document.querySelector(".bx2");
const b3=document.querySelector(".bx3");
b1.textContent=hrs;
b2.textContent=min;
b3.textContent=sec;
},1000)
