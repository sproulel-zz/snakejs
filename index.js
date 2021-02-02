import { draw as drawSnake, update as updateSnake, snake_speed, getSnakeHead, snakeIntersection,score} from './snake.js'
import { draw as drawFood, update as updateFood} from './food.js'
import { outsideGrid } from "./grid.js";

let lastRender = 0;
const gameBoard = document.getElementById('game-board')
let gameOver = false
function main(currentTime){
    if (gameOver){
        if (confirm(`tu perdiste pe, eres burro o que? puntos = ${score}`)){
            window.location = '/'
        }
        return 
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender= (currentTime-lastRender)/1000;
    if (secondsSinceLastRender < 1 / snake_speed) return 0;
    console.log('render')
    lastRender=currentTime;
    update()
    draw()
}

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}
function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}


window.requestAnimationFrame(main)
