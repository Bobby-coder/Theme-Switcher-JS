darkBtn = document.querySelector(".dark-btn")
lightBtn = document.querySelector(".light-btn")

const themeSwitcher = () =>{
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        darkBtn.style.display='none'
        lightBtn.style.display='initial'
    }
    else{
        lightBtn.style.display='none'
        darkBtn.style.display='initial'
    }
}

darkBtn.addEventListener("click",themeSwitcher)
lightBtn.addEventListener("click",themeSwitcher)
