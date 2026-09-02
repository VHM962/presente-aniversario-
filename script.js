/* ==========================================
   PRESENTE DE ANIVERSÁRIO
   ========================================== */


/* PÁGINA ATUAL */

let paginaAtual = 0;


/* ==========================================
   CONTEÚDO DO LIVRO
   ========================================== */

const paginas = [

    /* ======================================
       PÁGINA 1 — INTRODUÇÃO
       ====================================== */

    {
        titulo: "Para você, Emy ❤️",

        subtitulo: "Um pequeno presente",

        conteudo: `
            <div class="ornamento">✦ ✧ ✦</div>

            <p class="mensagem">
                Hoje é um dia muito especial.

                E eu queria fazer alguma coisa diferente para você.

                Então pensei em reunir algumas das pessoas que
                fazem parte da sua vida e deixar aqui um pedacinho
                do carinho que cada uma delas sente por você.

                Talvez esse livro seja simples...

                Mas cada palavra aqui foi colocada com muito carinho.

                Espero que você goste. ❤️
            </p>

            <div class="ornamento">♡</div>

            <p class="assinatura">
                Com amor,<br>
                alguém que te ama muito.
            </p>
        `
    },


    /* ======================================
       PÁGINA 2 — MÃE
       ====================================== */

    {
        titulo: "Uma mensagem da mãe ❤️",

        subtitulo: "De quem sempre estará ao seu lado",

        fotos: [
            "img/mae1.jpg",
            "img/mae2.jpg"
        ],

        conteudo: `
            <p class="mensagem">
                Parece que foi ontem que eu te segurei nos braços pela primeira vez, e chorei muito pq achei q não ia conseguir te criar direto. O tempo passou voando, e hoje vc completa 18 anos. Olho para trás e vejo o quanto você cresceu. E hj sinto um orgulho enorme da mulher incrível que você está se tornando, forte, inteligente, sensível, chorona e cheia de alegria. A maioridade chegou, trazendo novos sonhos, escolhas e caminhos. Quero que você saiba que, não importa o tamanho do mundo ou a distância que você decida voar, eu sempre serei o seu porto seguro. Sempre pode contar comigo ..

                Te amo muito muito, vc sempre vai ser o meu bb❤️

                Agora bora comprar um Civic no seu CPF kkkkkkk
            </p>
        `
    },


    /* ======================================
       PÁGINA 3 — DANI
       ====================================== */

    {
        titulo: "Uma mensagem do Dani",

        subtitulo: "Tio Dani mandou um abraço 🤭",

        fotos: [
            "img/dani.jpg"
        ],

        conteudo: `
            <p class="mensagem">
                Parabéns pelos 18 aninhos Emy, saiba que vc é uma pessoa muito especial.

                Fico muito feliz de ver a jovem inteligente, divertida e responsável que vc se tornou.

                Se eu fosse seu pai estaria muito orgulhoso de ver todo seu esforço.

                Que essa nova fase venha cheia de sonhos, conquistas, aventuras e, claro, um pouquinho de juízo! 😅😂

                Tio Dani mandou um abraço 🤭🤭🤭
            </p>
        `
    },


    /* ======================================
       PÁGINA 4 — JADY
       ====================================== */

    {
        titulo: "Uma mensagem da Jady ❤️",

        subtitulo: "Sua irmãzona",

        fotos: [
            "img/jady1.jpg",
            "img/jady2.jpg",
            "img/jady3.jpg"
        ],

        conteudo: `
            <p class="mensagem">
                Oii emy, bom n sou muito
                Boa nas palavras ksksk

                Gatinha, feliz aniversário que o papai do céu te abençoe muito nesse seu dia, que vc continue sendo essa menino incrível que vc é❤️

                Saiba que independente de qualquer situação, vc sempre será minha irmãzona e q n me arrependo de nada ate agr.

                Vc foi a mlhr pessoa que eu pude conhecer em 2024, e sinceramente, foi o mlhr ano da minha vida por causa da sua amizade ❤️
                
                Obrigada por ser vc , obrigada por simplesmente existir maninha, te amoooo ❤️❤️❤️
            </p>

            <div class="video-area">

                <p class="video-titulo">
                    E ainda tem uma surpresa... 🎬❤️
                </p>

                <video
                    class="video"
                    controls
                    playsinline
                    preload="metadata">

                    <source
                        src="media/jady_video.mp4"
                        type="video/mp4">

                    Seu navegador não conseguiu carregar o vídeo.
                </video>

            </div>
        `
    },


    /* ======================================
       PÁGINA 5 — TIA DÉBORA
       ====================================== */

    {
        titulo: "Uma mensagem da Tia Débora ❤️",

        subtitulo: "Da princesa da tia",

        fotos: [
            "img/Tia_debora.jpg"
        ],

        conteudo: `
            <p class="mensagem">
                Parabéns princesa da tia, lembro de você pequena quando te conheci, e hoje está se tornando uma mulher linda, inteligente e de um coração enorme, muito obrigada por fazer parte da minha vida.

                A tia te ama muito tá, e desculpa a ausência viu❤️
            </p>
        `
    },


    /* ======================================
       PÁGINA 6 — TIO KAIQUE
       ====================================== */

    {
        titulo: "Uma mensagem do Tio Kaique",

        subtitulo: "Com muito carinho",

        fotos: [
            "img/Tio_kaique.jpg"
        ],

        conteudo: `
            <p class="mensagem">
                Você se tornou uma mulher maravilhosa, não estive presente mais sempre orei por você
            </p>
        `
    },


    /* ======================================
       PÁGINA 7 — Yasmin
       ====================================== */

    {
        titulo: "Uma mensagem da Yasmin ❤️",

        subtitulo: "Sua irmãzinha",

        fotos: [
            "img/yasmin.jpg",
            "img/yasmin2.jpg"
        ],

        conteudo: `
            <p class="mensagem">
                Oioi Emy!!
Não sei exatamente como esse texto vai chegar pra você mas enfim.. 

Eu gostaria de te desejar um feliz aniversário, espero que você continue sendo essa pessoa maravilhosa!!

Em apenas dois anos de amizade você me proporcionou e continua proporcionando inúmeras emoções, você é uma pessoa muito especial para mim, mesmo não se falando tanto, mesmo que aconteça algo em nossas vidas ou estarmos muito ocupadas para conversarmos, meu silêncio e distância não significa  que sou insenta de sentir algo, você é e sempre será alguém muito especial para mim, espero que nunca duvide disso!!
 
Eu estarei aqui nos seus momentos bons e ruins, sempre que você precisar, seja pra conversar, fofocar, falar merda ou até mesmo ficar em silêncio. Saiba que você nunca precisa ficar sozinha ou se sentir sozinha.

Te desejo tudo de bom que o mundo possa oferecer, você merece isso e muito mais!! Muito obrigada por ter simplesmente aparecido na minha vida mulher, amo você!!🫶💜
          </p>
        `
    },

    /* ======================================
       PÁGINA 8 — Kay
       ====================================== */
    
    {
        titulo: "Uma mensagem da sua prima kay ❤️",

        subtitulo: "✨De alguém especial✨",

        fotos: [
            "img/kay.jpg"
        ],
        conteudo: `
            <p class="mensagem">
                Quando os dias estavam nublados me peguei pulando na cama de alegria ao interpretar da boca de minha mãe que você viria.
Acostumada a sua presença quando ia de encontro a possíveis coisas chatas e entediantes, você era minha acompanhante, minha cúmplice de alegrias e idiotices,
então, para todos os dias que estivemos juntas, para todos os dias que tivemos separadas, das vidas uma da outra. Do meu coração, ao seu Coração.
             <p/>
        `
    },












    /* ======================================
       PÁGINA 8 — FINAL
       ====================================== */

    {
        titulo: "Para você ❤️",

        subtitulo: "E esse é só o começo...",

        conteudo: `
            <div class="final">

                <div class="coracao-final">
                    ❤️
                </div>

                <h2>
                    Feliz aniversário, Emy!
                </h2>

                <p class="mensagem">
                    Que seus 18 anos sejam apenas
                    o começo de uma fase incrível.

                    Que você realize seus sonhos,
                    conheça lugares novos,
                    viva momentos inesquecíveis
                    e continue sendo essa pessoa
                    maravilhosa que você é.

                    E lembre-se:

                    você nunca estará sozinha.

                    Existem pessoas que te amam,
                    que torcem por você
                    e que estarão ao seu lado.

                    ❤️
                </p>

                <div class="ornamento">
                    ✦ ♡ ✦
                </div>

            </div>
        `
    }

];


/* ==========================================
   ELEMENTOS
   ========================================== */

const paginaElemento =
    document.getElementById("pagina");

const paginaNumero =
    document.getElementById("paginaAtual");

const totalPaginas =
    document.getElementById("totalPaginas");

const indicadores =
    document.getElementById("indicadores");

const botaoAnterior =
    document.getElementById("anterior");

const botaoProxima =
    document.getElementById("proxima");


/* ==========================================
   INICIALIZAÇÃO
   ========================================== */

function iniciarLivro() {

    totalPaginas.textContent =
        paginas.length;

    criarIndicadores();

    mostrarPagina();

}


/* ==========================================
   ABRIR LIVRO
   ========================================== */

function abrirLivro() {

    const capa =
        document.getElementById("capa");

    const livro =
        document.getElementById("livro");


    capa.classList.remove("ativa");

    capa.style.animation =
        "aparecer .5s reverse";


    setTimeout(() => {

        capa.style.display =
            "none";

        livro.classList.remove(
            "escondido"
        );

        iniciarLivro();

    }, 500);
}


/* ==========================================
   MOSTRAR PÁGINA
   ========================================== */

function mostrarPagina() {

    const pagina =
        paginas[paginaAtual];


    /* Reinicia animação */

    paginaElemento.style.animation =
        "none";

    void paginaElemento.offsetWidth;

    paginaElemento.style.animation =
        "virarPagina .7s ease";


    /* Título */

    let html = `

        <h1 class="titulo-pagina">
            ${pagina.titulo}
        </h1>

        <p class="subtitulo">
            ${pagina.subtitulo}
        </p>

    `;


    /* Fotos */

    if (pagina.fotos) {

        if (pagina.fotos.length === 1) {

            html += `
                <div class="fotos">
                    <img
                        class="foto-unica"
                        src="${pagina.fotos[0]}"
                        alt="Foto especial">
                </div>
            `;

        } else {

            html += `
                <div class="fotos">
            `;

            pagina.fotos.forEach(
                (foto, index) => {

                    html += `
                        <img
                            class="foto"
                            src="${foto}"
                            alt="Foto especial ${index + 1}">
                    `;
                }
            );

            html += `
                </div>
            `;
        }
    }


    /* Conteúdo */

    html += pagina.conteudo;


    /* Coloca tudo na página */

    paginaElemento.innerHTML =
        html;


    /* Número */

    paginaNumero.textContent =
        paginaAtual + 1;


    /* Botões */

    botaoAnterior.disabled =
        paginaAtual === 0;

    botaoProxima.disabled =
        paginaAtual === paginas.length - 1;


    atualizarIndicadores();


    /* Volta para o topo */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   PRÓXIMA PÁGINA
   ========================================== */

function proximaPagina() {

    if (
        paginaAtual <
        paginas.length - 1
    ) {

        paginaAtual++;

        mostrarPagina();
    }
}


/* ==========================================
   PÁGINA ANTERIOR
   ========================================== */

function paginaAnterior() {

    if (paginaAtual > 0) {

        paginaAtual--;

        mostrarPagina();
    }
}


/* ==========================================
   INDICADORES
   ========================================== */

function criarIndicadores() {

    indicadores.innerHTML = "";

    paginas.forEach(
        (_, index) => {

            const bolinha =
                document.createElement("div");

            bolinha.className =
                "indicador";

            bolinha.addEventListener(
                "click",
                () => {

                    paginaAtual =
                        index;

                    mostrarPagina();
                }
            );

            indicadores.appendChild(
                bolinha
            );
        }
    );
}


function atualizarIndicadores() {

    const todos =
        document.querySelectorAll(
            ".indicador"
        );

    todos.forEach(
        (indicador, index) => {

            indicador.classList.toggle(
                "ativo",
                index === paginaAtual
            );

        }
    );
}


/* ==========================================
   TECLADO DO PC
   ========================================== */

document.addEventListener(
    "keydown",
    (evento) => {

        if (evento.key === "ArrowRight") {

            proximaPagina();

        }

        if (evento.key === "ArrowLeft") {

            paginaAnterior();

        }
    }
);


/* ==========================================
   DESLIZAR NO CELULAR
   ========================================== */

let toqueInicialX = 0;

let toqueFinalX = 0;


document.addEventListener(
    "touchstart",
    (evento) => {

        toqueInicialX =
            evento.changedTouches[0].screenX;
    }
);


document.addEventListener(
    "touchend",
    (evento) => {

        toqueFinalX =
            evento.changedTouches[0].screenX;


        const distancia =
            toqueFinalX -
            toqueInicialX;


        /* Arrastou para a esquerda */

        if (distancia < -60) {

            proximaPagina();
        }


        /* Arrastou para a direita */

        if (distancia > 60) {

            paginaAnterior();
        }
    }
);