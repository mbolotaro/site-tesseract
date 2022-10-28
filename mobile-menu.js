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

