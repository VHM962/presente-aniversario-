/* =====================================================
   LIVRO DIGITAL
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

const previousPage =
    document.getElementById("previousPage");

const nextPage =
    document.getElementById("nextPage");

const mobilePrevious =
    document.getElementById("mobilePrevious");

const mobileNext =
    document.getElementById("mobileNext");

const mobilePage =
    document.getElementById("mobilePage");

const pageCounter =
    document.getElementById("pageCounter");

const leftContent =
    document.getElementById("leftContent");

const rightContent =
    document.getElementById("rightContent");

const leftPage =
    document.getElementById("leftPage");

const rightPage =
    document.getElementById("rightPage");

const pageDots =
    document.getElementById("pageDots");


/* =====================================================
   EDITOR
===================================================== */

const editButton =
    document.getElementById("editButton");

const editorPanel =
    document.getElementById("editorPanel");

const closeEditor =
    document.getElementById("closeEditor");

const chapterSelect =
    document.getElementById("chapterSelect");

const addPage =
    document.getElementById("addPage");

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
   DADOS INICIAIS
===================================================== */

const defaultChapters = [

    {
        id: "intro",

        title: "Antes de tudo...",

        subtitle: "Uma pequena introdução",

        text:
            "Existem momentos que passam rápido demais para serem guardados apenas na memória.\n\n" +
            "Por isso eu quis criar este pequeno livro.\n\n" +
            "Cada página aqui foi feita para guardar um pedacinho de carinho, de lembranças e de pessoas que fazem parte da sua história."
    },


    {
        id: "mom",

        title: "Uma mensagem da mãe",

        subtitle:
            "Amor que começou antes mesmo de você chegar",

        text:
            "Parece que foi ontem que eu te segurei nos braços pela primeira vez, e chorei muito pq achei q não ia conseguir te criar direto.\n\n" +

            "O tempo passou voando, e hoje vc completa 18 anos. Olho para trás e vejo o quanto você cresceu. E hj sinto um orgulho enorme da mulher incrível que você está se tornando, forte, inteligente, sensível, chorona e cheia de alegria.\n\n" +

            "A maioridade chegou, trazendo novos sonhos, escolhas e caminhos. Quero que você saiba que, não importa o tamanho do mundo ou a distância que você decida voar, eu sempre serei o seu porto seguro. Sempre pode contar comigo.\n\n" +

            "Te amo muito muito, vc sempre vai ser o meu bb ❤️\n\n" +

            "Agora bora comprar um Civic no seu CPF kkkkkkk"
    },


    {
        id: "friend1",

        title: "Uma mensagem de alguém especial",

        subtitle:
            "Porque algumas amizades viram família",

        text:
            "Aqui vai entrar a mensagem da sua amiga.\n\n" +
            "Quando ela mandar a mensagem, você pode substituir este texto pelo que ela escreveu."
    },


    {
        id: "friend2",

        title: "Mais uma lembrança",

        subtitle:
            "Um pedacinho dessa história",

        text:
            "Aqui vai entrar a mensagem da outra amiga.\n\n" +
            "Essa página pode receber fotos, vídeos e tudo aquilo que vocês quiserem guardar."
    },


    {
        id: "stepfather",

        title: "Uma mensagem especial",

        subtitle:
            "De alguém que também faz parte dessa história",

        text:
            "Aqui vai entrar a mensagem do padrasto.\n\n" +
            "Você poderá colocar aqui a mensagem e as fotos que ele quiser."
    },


    {
        id: "me",

        title: "De mim para você",

        subtitle:
            "Agora é a minha vez",

        text:
            "Aqui vai a sua mensagem.\n\n" +
            "Essa pode ser uma das partes mais importantes do livro.\n\n" +
            "Você pode escrever quantas coisas quiser, colocar fotos de vocês, vídeos, histórias engraçadas, momentos especiais e tudo aquilo que quiser dizer."
    },


    {
        id: "final",

        title: "E essa história continua...",

        subtitle:
            "O melhor ainda está por vir",

        text:
            "Se chegamos até aqui, é porque já existe muita coisa bonita para lembrar.\n\n" +

            "Mas esse livro não termina nessa página.\n\n" +

            "Porque ainda existem muitos momentos que a gente não viveu.\n\n" +

            "Feliz aniversário, meu amor. ❤️"
    }

];


/* =====================================================
   CAPÍTULOS
===================================================== */

let chapters = [];


/* =====================================================
   PÁGINA ATUAL
===================================================== */

let currentPage = 0;


/* =====================================================
   BANCO DE DADOS
===================================================== */

let database = null;


/* =====================================================
   ID ÚNICO
===================================================== */

function generateId() {

    return (
        "page_" +
        Date.now() +
        "_" +
        Math.random()
            .toString(36)
            .substring(2, 9)
    );

}


/* =====================================================
   MOBILE
===================================================== */

function isMobile() {

    return window.innerWidth <= 800;

}


/* =====================================================
   CARREGAR CAPÍTULOS
===================================================== */

function loadChapters() {

    const saved =
        localStorage.getItem(
            "livroSurpresaChapters"
        );


    if (!saved) {

        chapters =
            defaultChapters.map(
                chapter => ({
                    ...chapter
                })
            );

        saveChapters();

        return;
    }


    try {

        const parsed =
            JSON.parse(saved);


        if (
            Array.isArray(parsed) &&
            parsed.length > 0
        ) {

            chapters = parsed;

        } else {

            chapters =
                defaultChapters.map(
                    chapter => ({
                        ...chapter
                    })
                );

        }

    } catch (error) {

        console.error(
            "Erro ao carregar páginas:",
            error
        );


        chapters =
            defaultChapters.map(
                chapter => ({
                    ...chapter
                })
            );

    }

}


/* =====================================================
   SALVAR CAPÍTULOS
===================================================== */

function saveChapters() {

    localStorage.setItem(
        "livroSurpresaChapters",
        JSON.stringify(chapters)
    );

}


/* =====================================================
   BANCO INDEXEDDB
===================================================== */

function openDatabase() {

    return new Promise(
        (resolve, reject) => {

            const request =
                indexedDB.open(
                    "LivroSurpresaDB",
                    2
                );


            request.onupgradeneeded =
                event => {

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


            request.onsuccess =
                event => {

                    database =
                        event.target.result;

                    resolve(database);

                };


            request.onerror =
                () => {

                    reject(
                        request.error
                    );

                };

        }
    );

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
                        "Banco de mídia indisponível."
                    )
                );

                return;

            }


            const transaction =
                database.transaction(
                    ["media"],
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
                () => {

                    resolve(
                        request.result
                    );

                };


            request.onerror =
                () => {

                    reject(
                        request.error
                    );

                };

        }
    );

}


/* =====================================================
   PEGAR MÍDIAS
===================================================== */

function getChapterMedia(
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
                    ["media"],
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

                    const result =
                        request.result.filter(
                            item =>
                                item.chapterId ===
                                chapterId
                        );


                    resolve(result);

                };


            request.onerror =
                () => {

                    reject(
                        request.error
                    );

                };

        }
    );

}


/* =====================================================
   ATUALIZAR SELECT
===================================================== */

function updateChapterSelect() {

    const currentId =
        chapterSelect.value;


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
                `${index + 1}. ${chapter.title || "Sem título"}`;


            chapterSelect.appendChild(
                option
            );

        }
    );


    const exists =
        chapters.some(
            chapter =>
                chapter.id === currentId
        );


    if (exists) {

        chapterSelect.value =
            currentId;

    } else if (chapters.length > 0) {

        chapterSelect.value =
            chapters[0].id;

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


    return div.innerHTML
        .replace(
            /\n/g,
            "<br>"
        );

}


/* =====================================================
   RENDERIZAR LIVRO
===================================================== */

async function renderBook() {

    if (
        chapters.length === 0
    ) {

        return;

    }


    if (
        currentPage >=
        chapters.length
    ) {

        currentPage =
            Math.max(
                0,
                chapters.length - 1
            );

    }


    if (isMobile()) {

        const current =
            chapters[currentPage];


        await renderSinglePage(
            current,
            rightContent
        );


        leftContent.innerHTML =
            "";


        leftPage.style.display =
            "none";


        rightPage.style.display =
            "block";

    } else {

        leftPage.style.display =
            "block";


        rightPage.style.display =
            "block";


        const leftChapter =
            chapters[currentPage];


        const rightChapter =
            chapters[currentPage + 1];


        if (leftChapter) {

            await renderSinglePage(
                leftChapter,
                leftContent
            );

        } else {

            leftContent.innerHTML =
                "";

        }


        if (rightChapter) {

            await renderSinglePage(
                rightChapter,
                rightContent
            );

        } else {

            rightContent.innerHTML =
                "";

        }

    }


    updateControls();

}


/* =====================================================
   RENDERIZAR PÁGINA
===================================================== */

async function renderSinglePage(
    chapter,
    container
) {

    if (!chapter) {

        container.innerHTML =
            "";

        return;

    }


    const text =
        chapter.text || "";


    const media =
        await getChapterMedia(
            chapter.id
        );


    let html = `

        <div class="chapter-label">
            ${escapeHTML(
                chapter.subtitle ||
                ""
            )}
        </div>

        <h1 class="page-heading">
            ${escapeHTML(
                chapter.title ||
                "Sem título"
            )}
        </h1>

        <div class="page-text">
            ${escapeHTML(text)}
        </div>

    `;


    if (media.length > 0) {

        html += `
            <div class="page-media">
        `;


        media.forEach(
            item => {

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


                else if (
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
                                preload="metadata">
                            </video>

                        </div>

                    `;

                }

            }
        );


        html += `
            </div>
        `;

    }


    html += `

        <div class="page-number">
            ✦
        </div>

    `;


    container.innerHTML =
        html;


    container
        .querySelectorAll(
            ".book-photo"
        )
        .forEach(
            photo => {

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

            }
        );

}


/* =====================================================
   CONTROLES
===================================================== */

function updateControls() {

    const total =
        chapters.length;


    pageCounter.textContent =
        `Página ${currentPage + 1} de ${total}`;


    mobilePage.textContent =
        `${currentPage + 1} / ${total}`;


    previousPage.disabled =
        currentPage <= 0;


    const step =
        isMobile() ? 1 : 2;


    nextPage.disabled =
        currentPage + step >= total;


    renderDots();

}


/* =====================================================
   DOTS
===================================================== */

function renderDots() {

    pageDots.innerHTML =
        "";


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

    const step =
        isMobile() ? 1 : 2;


    if (
        currentPage + step >=
        chapters.length
    ) {

        return;

    }


    currentPage +=
        step;


    renderBook();

}


/* =====================================================
   ANTERIOR
===================================================== */

function goPrevious() {

    const step =
        isMobile() ? 1 : 2;


    if (
        currentPage <= 0
    ) {

        return;

    }


    currentPage =
        Math.max(
            0,
            currentPage - step
        );


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
   NAVEGAÇÃO
===================================================== */

nextPage.addEventListener(
    "click",
    goNext
);

previousPage.addEventListener(
    "click",
    goPrevious
);

mobileNext.addEventListener(
    "click",
    goNext
);

mobilePrevious.addEventListener(
    "click",
    goPrevious
);


/* =====================================================
   SWIPE
===================================================== */

let touchStartX = 0;


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


        touchStartX =
            event.changedTouches[0]
                .screenX;

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


        const touchEndX =
            event.changedTouches[0]
                .screenX;


        const difference =
            touchEndX -
            touchStartX;


        if (
            Math.abs(difference) < 60
        ) {

            return;

        }


        if (difference < 0) {

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
   TECLADO
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            book.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        if (
            event.key === "ArrowRight"
        ) {

            goNext();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            goPrevious();

        }


        if (
            event.key === "Escape"
        ) {

            editorPanel.classList.add(
                "hidden"
            );

        }

    }
);


/* =====================================================
   ABRIR EDITOR
===================================================== */

editButton.addEventListener(
    "click",
    openEditor
);


async function openEditor() {

    updateChapterSelect();


    const current =
        chapters[currentPage];


    if (current) {

        chapterSelect.value =
            current.id;

    }


    await loadChapterIntoEditor();


    editorPanel.classList.remove(
        "hidden"
    );

}


/* =====================================================
   FECHAR EDITOR
===================================================== */

closeEditor.addEventListener(
    "click",
    () => {

        editorPanel.classList.add(
            "hidden"
        );

    }
);


/* =====================================================
   TROCAR PÁGINA NO EDITOR
===================================================== */

chapterSelect.addEventListener(
    "change",
    loadChapterIntoEditor
);


/* =====================================================
   CARREGAR PÁGINA NO EDITOR
===================================================== */

async function loadChapterIntoEditor() {

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
   CRIAR NOVA PÁGINA
===================================================== */

addPage.addEventListener(
    "click",
    () => {

        const newChapter = {

            id:
                generateId(),

            title:
                "Nova página",

            subtitle:
                "Uma nova lembrança",

            text:
                "Escreva aqui o que quiser..."

        };


        chapters.push(
            newChapter
        );


        saveChapters();


        updateChapterSelect();


        chapterSelect.value =
            newChapter.id;


        titleInput.value =
            newChapter.title;


        subtitleInput.value =
            newChapter.subtitle;


        messageInput.value =
            newChapter.text;


        mediaPreview.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    color:#756b76;
                    font-family:Arial;
                    font-size:11px;
                    text-align:center;
                    padding:20px;
                "
            >
                Nenhuma foto ou vídeo ainda.
            </div>

        `;


        alert(
            "Nova página criada! ❤️"
        );

    }
);


/* =====================================================
   ESCOLHER FOTO
===================================================== */

choosePhoto.addEventListener(
    "click",
    () => {

        photoInput.click();

    }
);


/* =====================================================
   ESCOLHER VÍDEO
===================================================== */

chooseVideo.addEventListener(
    "click",
    () => {

        videoInput.click();

    }
);


/* =====================================================
   FOTO
===================================================== */

photoInput.addEventListener(
    "change",
    async event => {

        const files =
            Array.from(
                event.target.files
            );


        const chapterId =
            chapterSelect.value;


        if (!chapterId) {

            return;

        }


        for (
            const file of files
        ) {

            try {

                await saveMedia(
                    chapterId,
                    file
                );

            } catch (error) {

                console.error(
                    "Erro ao salvar foto:",
                    error
                );

            }

        }


        await renderMediaPreview(
            chapterId
        );


        photoInput.value =
            "";

    }
);


/* =====================================================
   VÍDEO
===================================================== */

videoInput.addEventListener(
    "change",
    async event => {

        const files =
            Array.from(
                event.target.files
            );


        const chapterId =
            chapterSelect.value;


        if (!chapterId) {

            return;

        }


        for (
            const file of files
        ) {

            try {

                await saveMedia(
                    chapterId,
                    file
                );

            } catch (error) {

                console.error(
                    "Erro ao salvar vídeo:",
                    error
                );

            }

        }


        await renderMediaPreview(
            chapterId
        );


        videoInput.value =
            "";

    }
);


/* =====================================================
   PRÉVIA
===================================================== */

async function renderMediaPreview(
    chapterId
) {

    mediaPreview.innerHTML =
        "";


    const media =
        await getChapterMedia(
            chapterId
        );


    if (
        media.length === 0
    ) {

        mediaPreview.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    color:#756b76;
                    font-family:Arial;
                    font-size:11px;
                    text-align:center;
                    padding:20px;
                "
            >
                Nenhuma foto ou vídeo ainda.
            </div>

        `;

        return;

    }


    media.forEach(
        item => {

            const preview =
                document.createElement(
                    "div"
                );


            preview.className =
                "preview-item";


            if (
                item.type.startsWith(
                    "image/"
                )
            ) {

                const image =
                    document.createElement(
                        "img"
                    );


                image.src =
                    URL.createObjectURL(
                        item.blob
                    );


                preview.appendChild(
                    image
                );

            } else {

                const icon =
                    document.createElement(
                        "span"
                    );


                icon.textContent =
                    "🎥";


                preview.appendChild(
                    icon
                );

            }


            mediaPreview.appendChild(
                preview
            );

        }
    );

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
            "";


        chapter.text =
            messageInput.value;


        saveChapters();


        const index =
            chapters.findIndex(
                item =>
                    item.id === id
            );


        if (index >= 0) {

            currentPage =
                isMobile()
                    ? index
                    : Math.floor(
                        index / 2
                    ) * 2;

        }


        updateChapterSelect();


        await renderBook();


        editorPanel.classList.add(
            "hidden"
        );

    }
);


/* =====================================================
   VISUALIZADOR
===================================================== */

closeViewer.addEventListener(
    "click",
    () => {

        photoViewer.classList.add(
            "hidden"
        );

        viewerImage.src =
            "";

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

            viewerImage.src =
                "";

        }

    }
);


/* =====================================================
   REDIMENSIONAMENTO
===================================================== */

window.addEventListener(
    "resize",
    () => {

        if (
            !book.classList.contains(
                "hidden"
            )
        ) {

            renderBook();

        }

    }
);


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

async function startApp() {

    loadChapters();


    updateChapterSelect();


    try {

        await openDatabase();

    } catch (error) {

        console.error(
            "Armazenamento de mídia indisponível:",
            error
        );

    }

}


startApp();