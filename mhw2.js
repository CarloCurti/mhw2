function toggle(event){
    const accedi=document.querySelector('#div-accesso');

    isVisible = !isVisible;
    if(isVisible){
        accedi.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }else{
        accedi.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
}

let isVisible=false;
/*per fare in modo che la funzione toggle venga eseguita quando clicchiamo sul link*/
const immagineAccesso = document.querySelector('#js-accesso');
immagineAccesso.addEventListener('click', toggle);

/*album foto*/

/*crea l'album delle foto*/
const photo_list = [];

function createImage(src){
    const image=document.createElement('img');
    image.src=src;
    return image;
}

const albumView = document.querySelector('#section-loghi-container');
for (let i=0; i<photo_list.length; i++){
    const photoSrc = photo_list[i];
    const image = createImage(photoSrc);
    albumView.appendChild(image);
}

function onThumbnailClick(event){
    const modalView = document.querySelector('#modal-view');
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.innerHTML = '';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
}

function onModalClick(event){
    document.body.classList.remove('no-scroll');
    const modalView = document.querySelector('#modal-view');
    modalView.classList.add('hidden');
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

const galleriaItems = document.querySelectorAll('#section-loghi-container img');
for (let i=0; i<galleriaItems.length; i++){
    const item = galleriaItems[i];
    item.addEventListener('click', onThumbnailClick);
}

/*menu a comparsa mobile*/

function toggle2(event) {
    event.preventDefault(); /*questo mi toglie il problema del link che mi faceva scomparire il div dopo che cliccavo sul menu*/
    const menucomparsa = document.querySelector('#menu-a-comparsa');

    isVisible1 = !isVisible1;
    if (isVisible1) {
        menucomparsa.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    } else {
        menucomparsa.classList.add('hidden'); 
        document.body.classList.remove('no-scroll');
    }
}

let isVisible1 = false;
const bottonemenu = document.querySelector('#link-menu');
bottonemenu.addEventListener('click', toggle2);

function toggle3(event){
    const tendinalingue=document.querySelector('#tendine-lingua');

    isVisible2 = !isVisible2;
    if(isVisible2){
        tendinalingue.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }else{
        tendinalingue.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
}

let isVisible2=false;
const bottoneimmagine = document.querySelector('#js-lingua');
bottoneimmagine.addEventListener('click', toggle3);