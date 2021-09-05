/*Open or close the menu when click on icon*/ 
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/* when click on a menu item, hidden the menu */

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* change the pag header when scroll the pag */
/* mudar o header da pag quando rolar a pagna */

const header = document.querySelector("header")
const navHeigth = header.offsetHeight

window.addEventListener('scroll', function(){
    if (window.scrollY >= navHeigth) {
        /* scroll é maior que a altura do header */
        /* scrollY is greater then theader heigth */
        header.classList.add('scroll')
    }
    else{
        header.classList.remove('scroll')
    }
})




/*ATM*/