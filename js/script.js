/*================typing=========== */
var typed = new Typed(".typing",{
    strings:["Student"],
    typespeed:20,
    Backspeed:40,
    loop:true
})
/*================ aside =========== */
const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length;
        for(let i=0;i<totalNavList;i++)
        {
            console.log(navList[i])
        }
