kaboom({
background: [135, 206, 235], // céu azul
});

// Gravidade do jogo
gravity(1200);

// Sprite do jogador
loadSprite("player", "https://i.imgur.com/Wb1qfhK.png");

// Criar o mapa
addLevel([
" ",
" ",
" @ ",
"==========================",
], {
width: 32,
height: 32,
"@": () => [
sprite("player"),
area(),
body(),
anchor("center"),
"player"
],
"=": () => [
rect(32, 32),
area(),
body({ isStatic: true }),
color(100, 200, 100),
]
});

// Pegar o jogador
const player = get("player")[0];

// Movimentação
onKeyDown("left", () => {
player.move(-200, 0);
});

onKeyDown("right", () => {
player.move(200, 0);
});

onKeyPress("space", () => {
if (player.isGrounded()) {
player.jump(500);
}
});
