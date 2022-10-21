class Game {
  constructor() {}
//consulta en la base de datos el estado del juego  y lo guarda en game state
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  //actualiza el estado del juego en la base de datos
  update(state) {
database.ref("/").update({
 gameState:state  
})
  }

//agrega nuevo jugador y nuevo formulario
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    car1= createSprite(width/2-50,height-100)
    car1.addImage("car1",car1_img)
    car1.scale=0.07
    car2=createSprite(width/2+100,height-100)
    car2.addImage("car2",car2_img)
    car2.scale=0.07
    cars=[car1,car2]
  }
//oculta formulario y muesta el titulo del juego
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
// mustra los autos y la pista
  play() {
 this.handleElements();
 Player.getPlayersInfo();
 if (allPlayers!==undefined) {
  image(track,0,-height*5,width,height*6)
  drawSprites();

 }
  }
}
