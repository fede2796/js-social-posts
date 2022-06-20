
const post = [
    {
        id : 1,
        authorname : 'Phil Mangione',
        authorpic : null,
        date : '06-20-2022',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        imagepic:' https://unsplash.it/300/300?image=171',
        likes: 8 
    },
    {
        id : 2,
        authorname : 'Sofia Perlari',
        authorpic : 'https://unsplash.it/300/300?image=16',
        date : '04-26-2021',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias',
        imagepic:' https://unsplash.it/300/300?image=172',
        likes: 830
    }
]

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// -------------
// FUNCTIONS
// -------------

// Stampo ogni elemento di post in pagina
drawallPost (post);

// Funzione
function drawallPost(postArray){
    const postcontainer = document.getElementById('container');
    
    for(let i = 0; i < postArray.length; i++){
        
        const thisPost = postArray[i];
        const {authorname, authorpic, date, text, imagepic, likes} = thisPost;
        const postTemplate = ` 
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${authorpic === null ? 'Nessuna immagine' : authorpic} alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${authorname}</div>
                        <div class="post-meta__time">${getdateitalian(date)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text}</div>
            <div class="post__image">
                <img src=${imagepic} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`

        postcontainer.innerHTML += postTemplate;
    }
}

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
const allLikesClick = document.querySelectorAll('.js-like-button');
const alllikeText = document.querySelectorAll('.js-likes-counter');

for(let i = 0; i < allLikesClick.length; i++){

    const thisLikebtn = allLikesClick[i];

    thisLikebtn.addEventListener('click', function(event){
        //Togliamo il comportamento di default del browser
        event.preventDefault();

        //Incremento il like solo se l'elemento che ho cliccato non ha classe clicked
        if(!this.classList.contains('like-button--liked')){
            //Aggiungo all'elemento cliccato la classe clicked
            this.classList.add('like-button--liked');

            const relatednumbertext = alllikeText[i];

            let relatednumber = parseInt(relatednumbertext.innerHTML);

            relatednumber++;

            relatednumbertext.innerHTML = relatednumber;
            console.log(relatednumber);
        }
        else{
            this.classList.remove('like-button--liked');

            const relatednumbertext = alllikeText[i];

            let relatednumber = parseInt(relatednumbertext.innerHTML);

            relatednumber--;

            relatednumbertext.innerHTML = relatednumber;
            console.log(relatednumber);
        }
    })

}
//Bonus 1

function getdateitalian(date){
    const arr1 = date.split('-');
    const arr2 = arr1[1] +'/'+ arr1[0] + '/'+ arr1[2];
    return arr2;
}

// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
