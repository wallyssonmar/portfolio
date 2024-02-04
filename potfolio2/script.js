var btnMenu = document.getElementById('btn-menu');
var menuMobile = document.getElementById('menu-mobile');
var overlay = document.getElementById('overlay-menu');
var cordefundo = document.getElementById("corpodapagina");
var cabecalhoPage = document.getElementById('atecabecalho');
var btnAbrirMenu = document.getElementById('bi bi-list');
var nomeWa = document.getElementById('nomeca');
var menucabe = document.getElementsByClassName('link-cabeca');
var menuMobile = document.getElementById('menu-mobile');
var btnMobile = document.getElementsByClassName('btn-mobile');
var homePage = document.getElementById('home');
var luasc = document.getElementById("luas");
var solsc = document.getElementById("sols");
var imagemlinke = document.getElementById("imagemlinkedin");
var imagemgith = document.getElementById("imagemgithub");
var linkedin = document.getElementById('linkslinkedin');
var github = document.getElementById("linksgit");
var projetos = document.getElementById('irAteProjetos');
var parteSobre = document.getElementById('parteSobremim');
var tituloprojet = document.getElementById('tituloprojeto');
var numerodosProjetos = document.getElementsByClassName('projetosTema');
var linkcalcul = document.querySelector('.linkcalculadora');
var footer = document.querySelector('.rodape');
var btnFechar = document.getElementById ('bi bi-x');


btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('abrir-menu')
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu')
})

function luasumindo(){
    var luasc = document.getElementById("luas")
    luasc.classList.remove('lua');
    

    const botaoHomeButton = document.getElementById('buttonhome');
    botaoHomeButton.style.background = ('#969d9e');
    botaoHomeButton.style.borderRadius = '5px';

    
}



function Mudartema(){

    if (checkbox.checked) {
        cabecalhoPage.style.background = "#ccd8df";
        nomeWa.style.color = "#0D0D0D";
        nomeWa.style.background = "#ccd8df";
        btnAbrirMenu.style.color = "#0D0D0D";
        btnFechar.style.color = "#0D0D0D";
        menuMobile.style.background = "#ccd8df";
        homePage.style.background = "#ccd8df";
        homePage.style.color = "#0D0D0D";
        cordefundo.style.background = "#e3f7f8";
        imagemlinke.src = 'assets/linkedinpreto.svg';
        imagemgith.src = 'assets/temaclarogithub.svg';
        linkedin.style.color = '#000000';
        github.style.color = '#000000';
        parteSobre.style.background = "#ccd8df"
        parteSobre.style.color = "#0D0D0D"
        projetos.style.color = '#000000';
        linkcalcul.style.color = '#0D0D0D';
        tituloprojet.style.color = '#000000';
        luasc.classList.remove('lua-down');
        solsc.classList.add('sol-down');
        luasc.classList.add('lua-up');
        footer.style.background = ('#ccd8df');
        footer.style.color = ('#0D0D0D');
        for (var i = 0;i < numerodosProjetos.length; i++) {
            numerodosProjetos[i].style.background = '#ccd8df';
            }
        for (var i = 0;i < numerodosProjetos.length; i++) {
            numerodosProjetos[i].style.color = '#0D0D0D';
        }
        for (var i = 0;i < menucabe.length; i++) {
            menucabe[i].style.color = "#0D0D0D";
        } 
        for (var i = 0;i < btnMobile.length; i++) {
            btnMobile[i].style.color = "#0D0D0D";
         }
    } else {
        cabecalhoPage.style.background = "#404040";
        cabecalhoPage.style.color = "#ccd8df";
        btnAbrirMenu.style.color = "#ccd8df";
        btnFechar.style.color = "#ccd8df";
        menuMobile.style.background = "#404040";
        menuMobile.style.background = "#404040";       
        nomeWa.style.background = "#404040";
        nomeWa.style.color = "#ccd8df";
        homePage.style.background = "#404040";
        homePage.style.color = "#e3f7f8";
        cordefundo.style.backgroundColor = "#0D0D0D"; 
        imagemlinke.src = 'assets/linkedinazul.svg';
        imagemgith.src = 'assets/gitescuro.svg';
        linkedin.style.color = '#e3f7f8';
        github.style.color = '#e3f7f8';
        parteSobre.style.background = "#404040"
        parteSobre.style.color = "#ccd8df"
        tituloprojet.style.color = '#e3f7f8';
        luasc.classList.add('lua')
        solsc.classList.remove('sol-down');
        solsc.classList.add('sol-up');
        luasc.classList.add('lua-down');
        linkcalcul.style.color = '#ccd8df';
        footer.style.background = ('#404040')
        footer.style.color = ('#ccd8df');
        for (var i = 0;i < numerodosProjetos.length; i++) {
        numerodosProjetos[i].style.background = '#404040';
        }
        for (var i = 0;i < numerodosProjetos.length; i++) {
            numerodosProjetos[i].style.color = '#ccd8df';
        }

        for (var i = 0;i < menucabe.length; i++) {
            menucabe[i].style.color = "#ccd8df";
        } 
        for (var i = 0;i < btnMobile.length; i++) {
            btnMobile[i].style.color = "#ccd8df";
         }
    }
    

}
    
function irAteaTag(destino){   

    switch(destino){
        case 'atehome':
            var elemento = document.getElementById('atecabecalho');
            break;
        case 'atesobremim':
            var elemento = document.getElementById('parteSobremim');
            break;
        case 'ateprojetos':
            var elemento = document.getElementById('irAteProjetos');
            break;

    }

    if(elemento){

        var alturadocabecalho = document.getElementById('atecabecalho').offsetHeight;

        var alturafinal = elemento.offsetTop - (alturadocabecalho + 5);

        window.scrollTo({
            top: alturafinal,
            behavior: 'smooth'
        });
    }

}



document.addEventListener('DOMContentLoaded', function(){
    const botaoHomeButton = document.getElementById('buttonhome');
    const homeDiv = document.getElementById('home');
    const buttonSobre = document.querySelector('.botaosobremim');
    const buttonProjetos = document.querySelector('.botaoprojetos');
    const linksgithub = document.getElementById('linksgit');
    const imgHtml = document.querySelector('.html');

    
    
    
    

    window.addEventListener('scroll', function(){
        const scrollPosicao = window.scrollY || this.document.documentElement.scrollTop;

        if (scrollPosicao <= homeDiv.offsetTop || scrollPosicao <= linksgithub.offsetTop){
            botaoHomeButton.style.borderRadius = '5px';
            botaoHomeButton.style.background = ('#969d9e');
        } else{
            botaoHomeButton.style.background = ('transparent');
        }

        if(scrollPosicao > linksgithub.offsetTop && scrollPosicao <= imgHtml.offsetTop){
            buttonSobre.style.borderRadius = '5px';
            buttonSobre.style.background = ('#969d9e');
            
        } else{
            buttonSobre.style.background = ('transparent');
            
        }
        if(scrollPosicao >= imgHtml.offsetTop){
            buttonProjetos.style.borderRadius = '5px';
            buttonProjetos.style.background = ('#969d9e');
            
        } else{
        buttonProjetos.style.background = ('transparent');
        
        }
    })
})

function aparecerbarra(){
    var barra = document.getElementById()
    barra.style.width = "100%";
}

function desaparecerbarra(){
    var barra = document.getElementById()
    barra.style.width = "0";
}






