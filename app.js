document.addEventListener('DOMContentLoaded', () => {
    const scoreDisplay = document.getElementById('score')
    const width = 28
    let score = 0
    const grid = document.querySelector('.grid')

    const layout =  [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    const squares = []

    //create board
    function createBoard() {
        for (let i = 0; i < layout.length; i++){
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)

            //layout

            if (layout[i] === 0){
                squares[i].classList.add('pac-dot')
            }
            if (layout[i] === 1){
                squares[i].classList.add('wall')
            }
            if (layout[i] === 2){
                squares[i].classList.add('ghost-lair')
            }
            if (layout[i] === 3){
                squares[i].classList.add('power-pellet')
            }
        }
    }

    createBoard()

    //draw pac man
    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man')

    pacDotEaten()
    

    // move pac man
    function movePacman(e){
        
        squares[pacmanCurrentIndex].classList.remove('pac-man')
        console.log(e.key)
        switch (e.key) {
            case 'ArrowLeft' :
            case 'a':
                if (pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair'))
                    {
                    pacmanCurrentIndex -= 1
                }

                if (squares[pacmanCurrentIndex -1] === squares[363]) {
                    pacmanCurrentIndex = 391
                }
                
                break
            
            case 'ArrowRight':
            case 'd':
                if (pacmanCurrentIndex % width < width-1 &&
                    !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair'))
                {
                    pacmanCurrentIndex += 1
                }
                if (squares[pacmanCurrentIndex +1] === squares[392]) {
                    pacmanCurrentIndex = 364
                }
                
                break
            
            case 'ArrowUp':
            case 'w':
                if (
                    pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                )
                {
                    pacmanCurrentIndex -= width
                }
                
                break

            case 'ArrowDown' :
            case 's':
                if (
                    pacmanCurrentIndex + width < width*width &&
                    !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                )
                {
                    pacmanCurrentIndex += width
                }
                break
        }
        squares[pacmanCurrentIndex].classList.add('pac-man')
        pacDotEaten()
        powerPelletEaten()

    }
    document.addEventListener('keyup', movePacman)

    //eat
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot'))
        {
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
        }
    }

    //power pallet
    function powerPelletEaten()
    {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet'))
        {
            score += 10
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
        }
        
    }
    

    //create constructor
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timeID = NaN
        }
    }

    //all my ghosts
    ghosts = [
        new Ghost ('blinky', 348, 250),
        new Ghost ('pinky', 376, 400),
        new Ghost ('inky', 351, 300),
        new Ghost ('clyde', 379, 500),
    ]

    //draw ghosts
    ghosts.forEach(ghosts => {
        squares[ghosts.currentIndex].classList.add(ghosts.className)
        squares[ghosts.currentIndex].classList.add('ghost')
        
    })

    //move ramsomly
    ghosts.forEach(ghosts => moveGhost(ghosts))

    function moveGhost(ghosts){
        const directions = [-1, 1, width, -width]
        let direction = directions[Math.floor(Math.random()*directions.length)]

        ghosts.timeID = setInterval(function(){
            if (
                !squares[ghosts.currentIndex + direction].classList.contains('ghost') &&
                !squares[ghosts.currentIndex + direction].classList.contains('wall')
            ){
                squares[ghosts.currentIndex].classList.remove(ghosts.className,'ghost')
                ghosts.currentIndex += direction
                squares[ghosts.currentIndex].classList.add(ghosts.className,'ghost')
        
            }
            else direction = directions[Math.floor(Math.random()*directions.length)]
            }, ghosts.speed)
    }
})