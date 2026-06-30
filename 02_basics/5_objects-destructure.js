const game={
    gameName:"GTA6",
    gameId:"5454525221211414",
    gameInstructor:"skyy"
}
console.log(game.gameInstructor); //skyy

const {gameInstructor}=game
console.log(gameInstructor); //skyy

const {gameInstructor: instructor}=game // destructure
console.log(instructor); // skyy 