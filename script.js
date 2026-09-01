/* =====================================================
   LIVRO DIGITAL — VERSÃO MOBILE
===================================================== */


/* =====================================================
   ELEMENTOS
===================================================== */

const cover =
    document.getElementById("cover");

const book =
    document.getElementById("book");

const openBook =
    document.getElementById("openBook");

const homeButton =
    document.getElementById("homeButton");

const editButton =
    document.getElementById("editButton");

const previousPage =
    document.getElementById("previousPage");

const nextPage =
    document.getElementById("nextPage");

const pageContent =
    document.getElementById("pageContent");

const pageCounter =
    document.getElementById("pageCounter");

const pageDots =
    document.getElementById("pageDots");


/* =====================================================
   EDITOR
===================================================== */

const editorPanel =
    document.getElementById("editorPanel");

const closeEditor =
    document.getElementById("closeEditor");

const chapterSelect =
    document.getElementById("chapterSelect");

const titleInput =
    document.getElementById("titleInput");

const subtitleInput =
    document.getElementById("subtitleInput");

const messageInput =
    document.getElementById("messageInput");

const choosePhoto =
    document.getElementById("choosePhoto");

const chooseVideo =
    document.getElementById("chooseVideo");

const photoInput =
    document.getElementById("photoInput");

const videoInput =
    document.getElementById("videoInput");

const mediaPreview =
    document.getElementById("mediaPreview");

const addPage =
    document.getElementById("addPage");

const savePage =
    document.getElementById("savePage");


/* =====================================================
   VISUALIZADOR
===================================================== */

const photoViewer =
    document.getElementById("photoViewer");

const viewerImage =
    document.getElementById("viewerImage");

const closeViewer =
    document.getElementById("closeViewer");


/* =====================================================
   PÁGINAS
===================================================== */

let chapters = [

    {
        id: "intro",

        title: "Antes de tudo...",

        subtitle:
            "Uma pequena introdução",

        text:
`Existem momentos que passam rápido demais para serem guardados apenas na memória.

Por isso eu quis criar este pequeno livro.

Cada página aqui foi feita para guardar um pedacinho de carinho, lembranças e pessoas que fazem parte da sua história.`,

        media: []
    },


    {
        id: "mom",

        title:
            "Uma mensagem da mãe",

        subtitle:
            "Amor que começou antes mesmo de você chegar",

        text:
`Parece que foi ontem que eu te segurei nos braços pela primeira vez, e chorei muito pq achei q não ia conseguir te criar direto.

O tempo passou voando, e hoje vc completa 18 anos. Olho para trás e vejo o quanto você cresceu. E hj sinto um orgulho enorme da mulher incrível que você está se tornando, forte, inteligente, sensível, chorona e cheia de alegria.

A maioridade chegou, trazendo novos sonhos, escolhas e caminhos. Quero que você saiba que, não importa o tamanho do mundo ou a distância que você decida voar, eu sempre serei o seu porto seguro. Sempre pode contar comigo.

Te amo muito muito, vc sempre vai ser o meu bb ❤️

Agora bora comprar um Civic no seu CPF kkkkkkk`,

        media: []
    },


    {
        id: "friend1",

        title:
            "Uma mensagem especial",

        subtitle:
            "De alguém que faz parte dessa história",

        text:
`Essa página está esperando uma mensagem especial.

Quando sua amiga mandar o texto, você pode colocar aqui.`,

        media: []
    },


    {
        id: "friend2",

        title:
            "Mais uma lembrança",

        subtitle:
            "Porque algumas amizades viram família",

        text:
`Aqui vai entrar outra mensagem.

Também dá para colocar fotos e vídeos dessa pessoa.`,

        media: []
    },


    {
        id: "stepfather",

        title:
            "Uma mensagem especial",

        subtitle:
            "De alguém importante na sua história",

        text:
`Essa página está reservada para uma mensagem especial.`,

        media: []
    },


    {
        id: "me",

        title:
            "De mim para você",

        subtitle:
            "Agora é a minha vez",

        text:
`Aqui vai ficar a minha mensagem.

Essa página pode ter fotos nossas, vídeos, histórias, lembranças e tudo aquilo que eu ainda quero te dizer.

❤️`,

        media: []
    },


    {
        id: "final",

        title:
            "E essa história continua...",

        subtitle:
            "O melhor ainda está por vir",

        text:
`Se chegamos até aqui, é porque já existe muita coisa bonita para lembrar.

Mas esse livro não termina nessa página.

Ainda existem muitos momentos que a gente não viveu.

Feliz aniversário, meu amor. ❤️`,

        media: []
    }

];


let currentPage = 0;


/* =====================================================
   BANCO DE DADOS
===================================================== */

let database = null;


function openDatabase() {

    return new Promise((resolve, reject) => {

        const request =
            indexedDB.open(
                "LivroSurpresaMobile",
                1
            );


        request.onupgradeneeded = event => {

            const db =
                event.target.result;


            if (
                !db.objectStoreNames.contains(
                    "media"
                )
            ) {

                db.createObjectStore(
                    "media",
                    {
                        keyPath: "id",
                        autoIncrement: true
                    }
                );

            }

        };


        request.onsuccess = event => {

            database =
                event.target.result;

            resolve(database);

        };


        request.onerror = () => {

            reject(
                request.error
            );

        };

    });

}


/* =====================================================
   SALVAR MÍDIA
===================================================== */

function saveMedia(
    chapterId,
    file
) {

    return new Promise(
        (resolve, reject) => {

            if (!database) {

                reject(
                    new Error(
                        "Banco de dados indisponível."
                    )
                );

                return;

            }


            const transaction =
                database.transaction(
                    "media",
                    "readwrite"
                );


            const store =
                transaction.objectStore(
                    "media"
                );


            const request =
                store.add({

                    chapterId,

                    name:
                        file.name,

                    type:
                        file.type,

                    blob:
                        file

                });


            request.onsuccess =
                () => resolve(
                    request.result
                );


            request.onerror =
                () => reject(
                    request.error
                );

        }
    );

}


/* =====================================================
   BUSCAR MÍDIA
===================================================== */

function getMedia(
    chapterId
) {

    return new Promise(
        (resolve, reject) => {

            if (!database) {

                resolve([]);

                return;

            }


            const transaction =
                database.transaction(
                    "media",
                    "readonly"
                );


            const store =
                transaction.objectStore(
                    "media"
                );


            const request =
                store.getAll();


            request.onsuccess =
                () => {

                    resolve(
                        request.result.filter(
                            item =>
                                item.chapterId ===
                                chapterId
                        )
                    );

                };


            request.onerror =
                () => reject(
                    request.error
                );

        }
    );

}


/* =====================================================
   SALVAR PÁGINAS
===================================================== */

function saveChapters() {

    localStorage.setItem(
        "livroSurpresaCapitulos",
        JSON.stringify(
            chapters
        )
    );

}


/* =====================================================
   CARREGAR PÁGINAS
===================================================== */

function loadChapters() {

    const saved =
        localStorage.getItem(
            "livroSurpresaCapitulos"
        );


    if (!saved) {

        return;

    }


    try {

        const parsed =
            JSON.parse(saved);


        if (
            Array.isArray(parsed) &&
            parsed.length > 0
        ) {

            chapters =
                parsed;

        }

    } catch (error) {

        console.log(
            "Não foi possível carregar as páginas."
        );

    }

}


/* =====================================================
   ESCAPAR HTML
===================================================== */

function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        text || "";

    return div.innerHTML;

}


/* =====================================================
   FORMATAR TEXTO
===================================================== */

function formatText(text) {

    return escapeHTML(
        text || ""
    )
    .replace(
        /\n\s*\n/g,
        "</p><p>"
    )
    .replace(
        /\n/g,
        "<br>"
    );

}


/* =====================================================
   RENDERIZAR LIVRO
===================================================== */

async function renderBook(
    direction = "normal"
) {

    const chapter =
        chapters[currentPage];


    if (!chapter) {

        return;

    }


    pageContent.innerHTML = "";


    const media =
        await getMedia(
            chapter.id
        );


    const isSpecial =
        chapter.id === "me" ||
        chapter.id === "final";


    let html = "";


    if (isSpecial) {

        html += `

            <div class="special-page">

                <div class="special-heart">
                    ❤️
                </div>

                <div class="chapter-label">
                    ${escapeHTML(chapter.subtitle)}
                </div>

                <h2>
                    ${escapeHTML(chapter.title)}
                </h2>

                <p>
                    ${formatText(chapter.text)}
                </p>

            </div>

        `;

    } else {

        html += `

            <div class="chapter-label">
                ${escapeHTML(chapter.subtitle)}
            </div>

            <h1 class="page-heading">
                ${escapeHTML(chapter.title)}
            </h1>

            <div class="page-subtitle">
                ${escapeHTML(chapter.subtitle)}
            </div>

            <div class="page-text">
                <p>
                    ${formatText(chapter.text)}
                </p>
            </div>

        `;

    }


    if (media.length > 0) {

        html += `
            <div class="page-media">
        `;


        media.forEach(item => {

            const url =
                URL.createObjectURL(
                    item.blob
                );


            if (
                item.type.startsWith(
                    "image/"
                )
            ) {

                html += `

                    <div
                        class="book-photo"
                        data-image="${url}"
                    >

                        <img
                            src="${url}"
                            alt="Lembrança"
                        >

                    </div>

                `;

            }


            if (
                item.type.startsWith(
                    "video/"
                )
            ) {

                html += `

                    <div class="book-video">

                        <video
                            src="${url}"
                            controls
                            playsinline
                        ></video>

                    </div>

                `;

            }

        });


        html += `
            </div>
        `;

    }


    pageContent.innerHTML =
        html;


    pageContent
        .querySelectorAll(
            ".book-photo"
        )
        .forEach(photo => {

            photo.addEventListener(
                "click",
                () => {

                    viewerImage.src =
                        photo.dataset.image;

                    photoViewer.classList.remove(
                        "hidden"
                    );

                }
            );

        });


    updateControls();

}


/* =====================================================
   CONTROLES
===================================================== */

function updateControls() {

    const total =
        chapters.length;


    pageCounter.textContent =
        `Página ${currentPage + 1} de ${total}`;


    previousPage.disabled =
        currentPage === 0;


    nextPage.disabled =
        currentPage >=
        total - 1;


    renderDots();

}


/* =====================================================
   DOTS
===================================================== */

function renderDots() {

    pageDots.innerHTML = "";


    chapters.forEach(
        (_, index) => {

            const dot =
                document.createElement(
                    "span"
                );


            dot.className =
                "page-dot";


            if (
                index === currentPage
            ) {

                dot.classList.add(
                    "active"
                );

            }


            pageDots.appendChild(
                dot
            );

        }
    );

}


/* =====================================================
   PRÓXIMA
===================================================== */

function goNext() {

    if (
        currentPage >=
        chapters.length - 1
    ) {

        return;

    }


    currentPage++;

    renderBook();

}


/* =====================================================
   ANTERIOR
===================================================== */

function goPrevious() {

    if (
        currentPage <= 0
    ) {

        return;

    }


    currentPage--;

    renderBook();

}


/* =====================================================
   ABRIR LIVRO
===================================================== */

openBook.addEventListener(
    "click",
    () => {

        cover.classList.add(
            "hidden"
        );

        book.classList.remove(
            "hidden"
        );

        currentPage = 0;

        renderBook();

    }
);


/* =====================================================
   VOLTAR PARA CAPA
===================================================== */

homeButton.addEventListener(
    "click",
    () => {

        book.classList.add(
            "hidden"
        );

        cover.classList.remove(
            "hidden"
        );

    }
);


/* =====================================================
   BOTÕES
===================================================== */

nextPage.addEventListener(
    "click",
    goNext
);

previousPage.addEventListener(
    "click",
    goPrevious
);


/* =====================================================
   SWIPE
===================================================== */

let touchStartX = 0;
let touchStartY = 0;


document.addEventListener(
    "touchstart",
    event => {

        if (
            book.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        const touch =
            event.changedTouches[0];


        touchStartX =
            touch.screenX;

        touchStartY =
            touch.screenY;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    event => {

        if (
            book.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        const touch =
            event.changedTouches[0];


        const differenceX =
            touch.screenX -
            touchStartX;


        const differenceY =
            touch.screenY -
            touchStartY;


        if (
            Math.abs(differenceX) <
            60
        ) {

            return;

        }


        if (
            Math.abs(differenceX) <
            Math.abs(differenceY)
        ) {

            return;

        }


        if (
            differenceX < 0
        ) {

            goNext();

        } else {

            goPrevious();

        }

    },
    {
        passive: true
    }
);


/* =====================================================
   EDITOR
===================================================== */

editButton.addEventListener(
    "click",
    openEditor
);


closeEditor.addEventListener(
    "click",
    closeEditorPanel
);


function openEditor() {

    editorPanel.classList.remove(
        "hidden"
    );


    populateChapterSelect();


    chapterSelect.value =
        chapters[currentPage].id;


    loadEditorPage();

}


function closeEditorPanel() {

    editorPanel.classList.add(
        "hidden"
    );

}


/* =====================================================
   SELECT DE PÁGINAS
===================================================== */

function populateChapterSelect() {

    chapterSelect.innerHTML = "";


    chapters.forEach(
        (chapter, index) => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                chapter.id;


            option.textContent =
                `${index + 1}. ${chapter.title}`;


            chapterSelect.appendChild(
                option
            );

        }
    );

}


chapterSelect.addEventListener(
    "change",
    loadEditorPage
);


/* =====================================================
   CARREGAR EDITOR
===================================================== */

async function loadEditorPage() {

    const chapter =
        chapters.find(
            item =>
                item.id ===
                chapterSelect.value
        );


    if (!chapter) {

        return;

    }


    titleInput.value =
        chapter.title || "";


    subtitleInput.value =
        chapter.subtitle || "";


    messageInput.value =
        chapter.text || "";


    await renderMediaPreview(
        chapter.id
    );

}


/* =====================================================
   FOTO
===================================================== */

choosePhoto.addEventListener(
    "click",
    () => {

        photoInput.click();

    }
);


photoInput.addEventListener(
    "change",
    async event => {

        const files =
            Array.from(
                event.target.files
            );


        const chapterId =
            chapterSelect.value;


        for (
            const file of files
        ) {

            await saveMedia(
                chapterId,
                file
            );

        }


        await renderMediaPreview(
            chapterId
        );


        photoInput.value = "";

    }
);


/* =====================================================
   VÍDEO
===================================================== */

chooseVideo.addEventListener(
    "click",
    () => {

        videoInput.click();

    }
);


videoInput.addEventListener(
    "change",
    async event => {

        const files =
            Array.from(
                event.target.files
            );


        const chapterId =
            chapterSelect.value;


        for (
            const file of files
        ) {

            await saveMedia(
                chapterId,
                file
            );

        }


        await renderMediaPreview(
            chapterId
        );


        videoInput.value = "";

    }
);


/* =====================================================
   PRÉVIA
===================================================== */

async function renderMediaPreview(
    chapterId
) {

    mediaPreview.innerHTML = "";


    const media =
        await getMedia(
            chapterId
        );


    if (
        media.length === 0
    ) {

        mediaPreview.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:15px;
                    color:#716673;
                    font-family:Arial;
                    font-size:10px;
                "
            >
                Nenhuma mídia adicionada.
            </div>

        `;

        return;

    }


    media.forEach(item => {

        const element =
            document.createElement(
                "div"
            );


        element.className =
            "preview-item";


        if (
            item.type.startsWith(
                "image/"
            )
        ) {

            const img =
                document.createElement(
                    "img"
                );


            img.src =
                URL.createObjectURL(
                    item.blob
                );


            element.appendChild(
                img
            );

        } else {

            element.innerHTML = `

                <div class="preview-video">
                    🎥
                </div>

            `;

        }


        mediaPreview.appendChild(
            element
        );

    });

}


/* =====================================================
   SALVAR PÁGINA
===================================================== */

savePage.addEventListener(
    "click",
    async () => {

        const id =
            chapterSelect.value;


        const chapter =
            chapters.find(
                item =>
                    item.id === id
            );


        if (!chapter) {

            return;

        }


        chapter.title =
            titleInput.value.trim() ||
            "Sem título";


        chapter.subtitle =
            subtitleInput.value.trim() ||
            "Uma lembrança especial";


        chapter.text =
            messageInput.value;


        saveChapters();


        currentPage =
            chapters.findIndex(
                item =>
                    item.id === id
            );


        closeEditorPanel();

        await renderBook();

    }
);


/* =====================================================
   CRIAR NOVA PÁGINA
===================================================== */

addPage.addEventListener(
    "click",
    () => {

        const newId =
            "page_" +
            Date.now();


        const newChapter = {

            id:
                newId,

            title:
                "Nova página",

            subtitle:
                "Uma nova lembrança",

            text:
                "Escreva aqui o que quiser guardar nesta página.",

            media: []

        };


        chapters.push(
            newChapter
        );


        saveChapters();


        currentPage =
            chapters.length - 1;


        populateChapterSelect();


        chapterSelect.value =
            newId;


        loadEditorPage();


        renderBook();

    }
);


/* =====================================================
   FECHAR FOTO
===================================================== */

closeViewer.addEventListener(
    "click",
    () => {

        photoViewer.classList.add(
            "hidden"
        );

        viewerImage.src = "";

    }
);


photoViewer.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            photoViewer
        ) {

            photoViewer.classList.add(
                "hidden"
            );

            viewerImage.src = "";

        }

    }
);


/* =====================================================
   TECLADO
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            !book.classList.contains(
                "hidden"
            )
        ) {

            if (
                event.key ===
                "ArrowRight"
            ) {

                goNext();

            }


            if (
                event.key ===
                "ArrowLeft"
            ) {

                goPrevious();

            }

        }


        if (
            event.key ===
            "Escape"
        ) {

            editorPanel.classList.add(
                "hidden"
            );

            photoViewer.classList.add(
                "hidden"
            );

        }

    }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

async function startApp() {

    loadChapters();


    try {

        await openDatabase();

    } catch (error) {

        console.error(
            "IndexedDB indisponível:",
            error
        );

    }

}


startApp();