const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

var gameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  scene: {
    preload: preload,
    create: create,
  },
};

var game = new Phaser.Game(gameConfig);

var text;
var currentScene = 0;
var scenes = [
  "Scene 1: Once upon a time, in a faraway kingdom...",
  "Scene 2: The brave knight set out on a quest...",
  "Scene 3: The dragon appeared and blocked the path...",
  "Scene 4: Will the knight defeat the dragon and save the kingdom?",
];

function preload() {
  // ここで必要な画像や音声ファイルをプリロードできます
}

function create() {
  console.log("create");
  text = this.add.text(50, 50, "", { fontSize: "24px", fill: "white" });
  showNextScene();
}

function showNextScene() {
  if (currentScene < scenes.length) {
    text.setText(scenes[currentScene]);
    currentScene++;
  } else {
    text.setText("The End");
  }
}

// クリックイベントを追加して次のシーンを表示します
document.addEventListener("click", showNextScene);
