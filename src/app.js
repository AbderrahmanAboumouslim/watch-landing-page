
// OPEN & CLOSE nav //////////////////////////////////
const mobileBtnMenu = document.getElementById("menu-btn-js")
const mobileBtnExit = document.getElementById("exit-btn-js")
const nav = document.querySelector("nav")
            mobileBtnMenu.addEventListener("click", openCloseNav)
            mobileBtnExit.addEventListener("click", openCloseNav)
//////////////////////////////////////////////////////

// turn on / off video////////////////////////////////
document.querySelector('.video__switch').addEventListener('click', controlSwitch);

//////////////////////////////////////////////////////

// BUY FORM-----------------------------------
    const openForm = document.querySelectorAll("#my-form-1")
    
    const exitForm = document.getElementById("close-buy-form")
    const main = document.querySelector("main")
    
    openForm.forEach(open => {
        open.addEventListener("click", () => {
        main.classList.add("body-btn");
    })
    })
    
    exitForm.addEventListener("click", () => {
        main.classList.remove("body-btn");
    })
//--------------------------------------------

//----smooth scrolling -----------------------------
const navScroll = document.querySelectorAll(".nav-link")

    navScroll.forEach((item)=>{
        item.addEventListener("click",()=>
        {
            let el = document.getElementById(item.getAttribute("data-link"));
            el.scrollIntoView({behavior:"smooth",block:"start"});
        })
    })


//------------// FUNCTIONS //------------//

// turn on / off video
function controlSwitch () {
  let btn = document.querySelector('.video__switch-btn');
  if (!btn.classList.contains('btnSlide')) {
    btn.classList.add('btnSlide')
    document.querySelector('.video__item').pause()
  }
  else {
    btn.classList.remove('btnSlide')
    document.querySelector('.video__item').play()
  }
}

// open / close nav
function openCloseNav () {
    if(!nav.classList.contains('btn-btn')){
        nav.classList.add('btn-btn')
    }else{
        nav.classList.remove('btn-btn')
    }
}