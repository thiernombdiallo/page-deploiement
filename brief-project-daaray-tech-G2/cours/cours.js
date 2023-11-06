let f1 = document.getElementById('filter-1');
let f2 = document.getElementById('filter-2');
let desc = document.getElementById('cri-desc-all');
let som = document.getElementById('content-left');

f2.addEventListener('click', function () {
    som.style.display = 'grid';
    desc.style.display = 'none';
    f2.style.color = '#E45923';
    f1.style.color = 'black';
});

f1.addEventListener('click', function () {
    desc.style.display = 'grid';
    som.style.display = 'none';
    f1.style.color = '#E45923';
    f2.style.color = 'black';
});

let note = document.querySelectorAll('.note');
let nom = document.getElementById('nom');
let commentaire = document.getElementById('commentaire');
let valide = document.getElementById('valide');
let ajouCom = document.getElementById('ajoutComment');

var lsNote;
var etole = ['initial'];
for (let i = 0; i < note.length; i++) {
    note[i].addEventListener('click', function () {
        for (let j = 0; j < (i +1) ; j++) {
            note[j].style.color = '#E45923'; 
        }
        for (let j = (i +1); j < note.length; j++) {
            note[j].style.color = 'gray';
        }
        lsNote = i + 1;
    })
}
var lsNom = '', lsCom = '';
nom.addEventListener('change', function (e) {
    lsNom = localStorage.gettItem('nom', JSON.stringify(e.target.value));
});
commentaire.addEventListener('change', function (e) {
    lsCom = localStorage.setItem('com', JSON.stringify(e.target.value));
});
valide.addEventListener('click', function (e) {
    e.preventDefault();
    ajouCom.innerHTML += ` 
    <div class="cours-comment-part">
        <div class="comment-profil">
            <div class="img-profil">
                <img src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                    alt="">
            </div>
            <div class="name-profil">${localStorage.getItem('nom')}</div>
        </div>
        <div class="note-comment">
            <span><i class="fa-solid fa-star" style = "color : ${etole[1]}"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span class="comment-date">18/10/2023</span>
        </div>
        <p class="text-commnent">${localStorage.getItem('com')}</p>
    </div>
    `
});



