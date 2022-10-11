class menu{
    constructor(menuListSelector, menuButtonSelector){
        this.menuList = document.querySelector(menuListSelector)
        this.menuButton = document.querySelector(menuButtonSelector)
        this.addListener()
    }

    addListener(){
        this.menuButton.addEventListener('click', (event) =>{
            console.log('funcionou');
            this.menuList.classList.toggle('list--show')
            this.menuButton.classList.toggle('menu__button--toggled')
        })
    }
  
}

const mainMenu = new menu('.menu__list', '.menu__button')


const clickableSection = document.querySelector('.cube_section')
var angles = {x: 0, y: 0}
var isMouseDown = false

const cube = document.querySelector('.cube')

clickableSection.addEventListener('mousedown', () =>{
    isMouseDown = true
})

clickableSection.addEventListener('mouseup', () =>{
    isMouseDown = false
})

clickableSection.addEventListener('mousemove', (event) => {
    console.log(`X: ${angles.x}, Y: ${angles.y}`)
    if(isMouseDown){
    angles.x+=event.movementX
    angles.y+=event.movementY
    cube.style.transform = `rotateY(${angles.x}deg) rotateX(${angles.y}deg)`
    }
})



