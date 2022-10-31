// Pegando elemento canvas.
const c = document.getElementById("matrix");

// Definindo o contexto da tela.
const ctx = c.getContext("2d");

// Definindo a tela para full-screen.
c.height = window.innerHeight;
c.width = window.innerWidth;

// Letras usadas para o efeito matrix (kanji, katakana, números, algarísmo romano, operadores aritiméticos.)
const letras = [
    "国", ",", "+", "(", ")", "!", "?", "<", ">", "会", "は", "-", "す", "べ", "て", "の", "人", "*", "間", "は",
    "/", "I", "%", "&", ".", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "0", ";", "{", "}", "º",
    "1", "2", "3", "4", "5", "6", "7", "8", "9" 
]

const fontSize = 18;

// Definindo quantas colunas serão impressas com base na largura da tela e no tamanho da fonte.
const colunas = c.width / fontSize;

// Criando a queda das letras para cada coluna.
let queda = [];

// Iniciando a queda em um loop vertical.
for (let x = 0; x < colunas; x++) queda[x] = 1;

// Desenhando caracteres.
function desenhando(){
    // Definindo fundo
    // Usar rgba para o fundo como último parâmetro a opacidade.
    ctx.fillStyle = "rgba(18, 15, 23, 0.08)";
    ctx.fillRect(0, 0, c.width, c.height);

    // Definir a cor e estilo de fonte.
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px arial`;

    // Desenhando os caracteres
    for (let i = 0; i < queda.length; i++){
        // Obtenha uma letra aleatória para a matrix.
        const texto = letras[Math.floor(Math.random() * letras.length)];

        // Desenhando caracteres.
        ctx.fillText(texto, i * fontSize, queda[i] * fontSize);

        // Após atingir o final da tela retornar ao início.
        if (queda[i] * fontSize > c.height && Math.random() > 0.985)
        queda[i] = 0;

        // Definindo a queda na coordenada vertical.
        queda[i]++;
    }

    // Chamada recursiva para desenhar quadro a quadro.
    window.requestAnimationFrame(desenhando);
}

// Chamando a função para ser iniciada.
// desenhando();
