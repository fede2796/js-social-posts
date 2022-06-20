// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

const post = [
    {
        id : 1,
        authorname : 'Phil Mangione',
        authorpic : 'https://unsplash.it/300/300?image=15',
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
                        <img class="profile-pic" src=${authorpic} alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${authorname}</div>
                        <div class="post-meta__time">${date}</div>
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