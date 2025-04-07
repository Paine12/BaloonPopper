let body = document.querySelector(".ecran")
let baloon = document.querySelector(".baloon")

function animationFinish(n){
    Promise.all(n.getAnimations().map((animation) => animation.finished)).then(
        () => n.remove(),
      ); 
    
}

baloon.addEventListener("click", ()=> baloon.remove())

animationFinish(baloon)

function moreBaloons() {
    let balonNou = baloon.cloneNode(true)
    balonNou.style.width = `${Math.floor(Math.random() * 100) + 100}px`
    balonNou.style.left = `${Math.floor(Math.random() * 100)}%`
    document.body.appendChild(balonNou)
    animationFinish(balonNou)
    balonNou.addEventListener("click", ()=> balonNou.remove())
}



setInterval(moreBaloons,(3000));