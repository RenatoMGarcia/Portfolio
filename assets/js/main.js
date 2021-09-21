/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== TRANSLATE BUTTON =====*/ 

var englishButton = document.querySelector('.translate-eng');
var portButton = document.querySelector('.translate-port');
var nomeAzul = document.querySelector('.home__title-color');

portButton.addEventListener('click', e => {
    
    document.querySelector('.home__title').innerHTML = `Olá, <br> Me chamo <span class="home__title-color">Renato</span> <br> Desenvolvedor Web`    
    document.querySelector('.sobre').innerHTML = "Sobre";
    document.querySelector('.habilidades').innerHTML = "Habilidades";
    document.querySelector('.trabalhos').innerHTML = "Trabalhos";
    document.querySelector('.contato').innerHTML = "Contato";
    document.querySelector('.section-title').innerHTML = "Sobre";
    document.querySelector('.about__subtitle').innerHTML = "Me chamo Renato";
    document.querySelector('.about__text').innerHTML = "Sou de São Paulo, sou um Desenvolvedor novato à procura de um trabalho. Estou cursando Desenvolvimento de Sistemas, pelo instituto SENAI, e também estudo pela plataforma online Alura. Estou procurando um trabalho como desenvolvedor Front-End ou mobile. Você pode ver alguns do meus projetos navegando por esse portifólio!";
    document.querySelector('.mainHabilidades').innerHTML = "Habilidades";
    document.querySelector('.skills__subtitle').innerHTML = "Habilidades Profissionais";
    document.querySelector('.skills__text').innerHTML = "Aqui estão algumas das Tecnologias que sei trabalhar";
    document.querySelector('.mainTrabalhos').innerHTML = "Trabalhos";
    document.querySelector('.mainContatos').innerHTML = "Contatos";
    document.querySelector('.infoEmail').innerHTML = "Meu email: ";
    document.querySelector('.infoTelefone').innerHTML = "Meu telefone: ";

});

englishButton.addEventListener('click', e => {

    document.querySelector('.home__title').innerHTML = `Hi, <br>I am <span class="home__title-color">Renato</span><br> Web Developer`    
    document.querySelector('.sobre').innerHTML = "About";
    document.querySelector('.habilidades').innerHTML = "Skills";
    document.querySelector('.trabalhos').innerHTML = "Work";
    document.querySelector('.contato').innerHTML = "Contact";
    document.querySelector('.section-title').innerHTML = "About";
    document.querySelector('.about__subtitle').innerHTML = "I am Renato";
    document.querySelector('.about__text').innerHTML = "I am from São Paulo and I'm a newbie Developer looking for a job. I'm graduating a technical course in System Development, at the institution SENAI, and I'm also a student of an online platform called Alura. I aim to work as a Front-End developer, web or mobile. You can see some of my projects by navigatin this portfolio!";
    document.querySelector('.mainHabilidades').innerHTML = "Skills";
    document.querySelector('.skills__subtitle').innerHTML = "Professional Skills";
    document.querySelector('.skills__text').innerHTML = "Here are some of the developing skills I have!";
    document.querySelector('.mainTrabalhos').innerHTML = "Work";
    document.querySelector('.mainContatos').innerHTML = "Contact";
    document.querySelector('.infoEmail').innerHTML = "My email: ";
    document.querySelector('.infoTelefone').innerHTML = "Phone: ";
})
// Hi, <br>I am <span class="home__title-color">Renato</span><br> Web Developer