function getHumanSelection(){
    eleccion = parseInt(prompt("Elige entre Piedra(1), Papel(2) o Tijera(3)"));

    if (eleccion===1){
        console.log("Elegiste Piedra")
    } else if(eleccion===2){
        console.log("Elegiste Papel")
    } else if(eleccion===3){
        console.log("Elegiste Tijera")
    }
}

function getComputerSelection(){
    const minCeiled = Math.ceil(4);
    const maxFloored = Math.floor(6);
    valor =  Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    
    if (valor===4){
        console.log("La pc eligio: Piedra")
    } else if (valor===5){
        console.log("La pc eligio: Papel")
    }else if (valor===6){
        console.log("La pc eligio: Tijera")
    }
}
var humanScore = 0;
var computerScore = 0;

function playRound(){

    for (let i = 1; i<= 5; i++) {
        getHumanSelection()
        getComputerSelection()

        if (eleccion===1 && valor===6){
            humanScore ++;
            console.log("Ganaste humano.")
            console.log("----------------------------")
        } else if(eleccion===2 && valor===4){
            humanScore ++;
            console.log("Ganaste humano.")
            console.log("----------------------------")
        } else if(eleccion===3 && valor===5){
            humanScore ++;
            console.log("Ganaste humano.")
            console.log("----------------------------")       
        }else if(eleccion===1 && valor===4 || eleccion===2 && valor===5 || eleccion===3 && valor===6){
            console.log("Empate, nadie suma puntos.")
            console.log("----------------------------")
        } else {
            computerScore ++;
            console.log("Ganaste Pc.")
            console.log("----------------------------")
        } 
        
    }
    console.log("----------------------------")
    console.log("CONTADOR FINAL")
    console.log("Humano ganaste " + humanScore + " de las 5 partidas.")
    console.log("Computadora ganaste " + computerScore + " de las 5 partidas.")

    if(humanScore>computerScore){
        console.log("Felicidades Humano, GANASTE!!!")
    } else if(humanScore===computerScore){
        console.log("No hay ganador, EMPATARON.")
    } else {
        console.log("Felicidades Computadora, GANASTE!!!")
    }
    
}

playRound()
