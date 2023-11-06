

//recuperer le header et le footer a travers leurs Id
const header = document.getElementById('header');
const footer = document.getElementById('footer');

//recuperer le chemin du fichier
// const uri = document.baseURI;
//recuperer les element apres chaque slash et creer un tableau
// var eltsUri = uri.split('/');
//creer le chemin racine en recuperant que le 8 premiere element et ajouter de slash entre eux
// var root = eltsUri.slice(2, 7).join('/') + '/';

// console.log(basePath);

const uri = document.body.baseURI;
const val = uri.search(/G2/);
const root = uri.slice(0, (val + 2));

//injecter le code du header
header.innerHTML = `
    <div id="progress">
    <span id="progressValue">&#x1F815</span>
    </div>
    <header class="header">

        <a href="${root}/accueil/accueil.html" class="logo"><img src="${root}/public/images/logoTest.png" alt=""></a>

        <input type="checkbox" id="check">
        <label for="check" class="icon">
            <i class='bx bx-menu' id="menuIcon"></i>
            <i class='bx bx-x' id="closeMenu"></i>
        </label>

        <nav class="navBar">
            <a href="${root}/accueil/accueil.html" id="accueilLink">Acceuil</a>
            <a href="${root}/formations/formations.html" id="formationsLink">Formation</a>
            <a href="${root}/articles/arcticles.html" id="articlesLink">Articles</a>
            <a href="${root}/temoignages/temoignages.html" id="temoignagesLink">Temoignages</a>
            <a href="${root}/contact/contact.html" id="contactLink">Contact</a>
            <div class="search">
                <button><i class="bi bi-search"></i></button>
                <input type="search" name="search" id="search" placeholder="Que voulez-vous savoir ?">
            </div>
        </nav>


        </header>
        
    </div>
`;

//injecter le code du footer
footer.innerHTML = ` 
<footer>
<div class="footerTop">
    <div class="footerTopLeft">
        <div class="socialMedia">
            <div class="logoFooter">
                <a href="${root}/accueil/accueil.html"><img src="${root}/public/images/logo.png" alt=""></a>
            </div>
            <div class="socialMediaIcon">
                <a href="#"><i class="bi bi-github" style="color:rgb(130, 39, 248)"></i></a>
                <a href="#"><i class="bi bi-linkedin" style="color:rgb(0, 89, 255)"></i></a>
                <a href="#"><i class="bi bi-twitter" style="color:rgb(59, 158, 250)"></i></a>
                <a href="#"><i class="bi bi-youtube" style="color:rgb(248, 39, 39)"></i></a>
            </div>
        </div>
        <div class="usefulLink">
            <div class="links">
                <a href="${root}/accueil/accueil.html">Acceuil</a>
                <a href="${root}/articles/arcticles.html">Articles</a>
                <a href="${root}/formations/formations.html">Formations</a>
                <a href="${root}/temoignages/temoignages.html">Temoignages</a>
            </div>
        </div>
        <div class="legal">
            <div class="links">
                <a href="${root}/contact/contact.html">Contact</a>
                <a href="${root}/conditions_utilisation/condion_utilisation.html">Condition d'utilisation</a>
                <a href="${root}/mentions_lesgales/mentions_legales.html">Mention legal</a>
                <a href="${root}/utilisations_cookies/cookies.html">Utilisation des cookies</a>
            </div>
        </div>
    </div>
    <div class="footerTopRight">
        <p>
            S’INSCRIRE A LA NEWSLATTER
        </p>
        <form action="#">
            <input type="email" name="email" id="email" placeholder="veuillez entrer votre email">
            <input onclick='swl()' type="button" value="S'inscrire maintenant">
        </form>
    </div>
</div>
<div class="footerBottom">
    <div class="footerBottomLeft">© 2023 G2 - Tous droits réservés.</div>
    <div class="footerBottomRight"></div>
</div>
</footer>
`;

document.addEventListener('DOMContentLoaded', function () {
    // Récupérez l'URL de la page actuelle
    const currentURL = window.location.href;

    // Supprimez la classe 'activeMenu' de tous les liens
    const links = document.querySelectorAll('.navBar a');
    links.forEach(link => {
        link.classList.remove('activeMenu');
    });

    // Ajoutez la classe 'activeMenu' au lien correspondant à la page actuelle
    if (currentURL.includes("accueil.html")) {
        document.getElementById("accueilLink").classList.add("activeMenu");
    } else if (currentURL.includes("formations/formations.html")) {
        document.getElementById("formationsLink").classList.add("activeMenu");
    } else if (currentURL.includes("articles.html")) {
        document.getElementById("articlesLink").classList.add("activeMenu");
    } else if (currentURL.includes("temoignages.html")) {
        document.getElementById("temoignagesLink").classList.add("activeMenu");
    } else if (currentURL.includes("contact.html")) {
        document.getElementById("contactLink").classList.add("activeMenu");
    }
});

//fonction qui nous permet de revenir en haut de la page
let calcScrollValue = () => {
    //recuperer l' Id du conteneur et de l'element enfant
    let scrollProgress = document.getElementById('progress');
    let scrolProgressValue = document.getElementById('progressValue');

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight)
    if (pos > 100) {
        scrollProgress.style.display = 'grid';
    } else {
        scrollProgress.style.display = 'none';
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })

    scrollProgress.style.background = `conic-gradient(var(--baseColor) ${scrollValue}%, var(--secondColor) ${scrollValue}%)`;
}


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



function swl() {
    let input = document.querySelector('#email')
    if (input.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Veuillez entrer votre email'
          })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Inscription avec succées',
            text: 'A très bientôt'
          })
    }

}


