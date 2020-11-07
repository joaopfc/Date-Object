function initTaabNav(){

const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
const tabContent = document.querySelectorAll('[data-tab="content"] section')

if(tabContent.length && tabMenu.length){

tabContent[0].classList.add('ativo')

function activeTab (index){
    tabContent.forEach((section) => {
        section.classList.remove('ativo')
    })
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao)
}

tabMenu.forEach((itemMenu,index)=>{
    itemMenu.addEventListener('click',()=>{
        activeTab(index);
    })
})

}
}

initTaabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
    if(accordionList.length){
        
        accordionList[0].classList.add('ativo')
        accordionList[0].nextElementSibling.classList.add('ativo')


        function activeAccordion(){
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }

        accordionList.forEach((item)=>{
            item.addEventListener('click', activeAccordion)
        })
        }
}

initAccordion();


function initiScrollSuave (){
    
const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

function scrollToSection(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)

    section.scrollIntoView({
        behavior:'smooth',
        block:'start',
    })

    //Forma Alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //     top:topo,
    //     behavior:'smooth'
    // })
}

linksInternos.forEach((link)=>{
    link.addEventListener('click',scrollToSection)
})
}

initiScrollSuave();


function initiAnimacaoScroll(){

const sections = document.querySelectorAll('[data-anime="scroll"]')

if(sections.length){

const windowMetade = window.innerHeight * 0.6;

function animascroll(){
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible){
            section.classList.add('ativo')
        }
    })
}

animascroll()

window.addEventListener('scroll', animascroll)
}
}

initiAnimacaoScroll();