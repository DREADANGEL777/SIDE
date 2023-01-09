const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelector(".bottom")

let slideNumber =1;
const length=images.length

for(let i = 0; i<length; i++){
    const div = document.createElement("div")
    div.className="button"
    bottom.appendChild(div)
}



const resetBg = ()=>{
    buttons.forEach(button=>{
        button.style.backgroundColor ="transparent"
    })
}

const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor ="white"

buttons.forEach((button,i)=>{
    button.addEventListener("click",()=>{
        resetBg()
        slider.style.transform = `translateX(-${i * 300}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor ="white"
    })
})

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber * 300}px)`;
    slideNumber++
}

const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2) * 300}px)`;
    slideNumber--
}
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1
}

const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length - 1) * 300}px)`;
    slideNumber = length
}

const changeColor = ()=>{
    resetBg()  
    buttons[slideNumber-1].style.backgroundColor ="white"
}

left.addEventListener("click",()=>{
    slideNumber < length ? nextSlide() : prevSlide() 
    changeColor()
})

right.addEventListener("click",()=>{
   slideNumber > 1 ? prevSlide() : getLastSlide()
   changeColor()
})

