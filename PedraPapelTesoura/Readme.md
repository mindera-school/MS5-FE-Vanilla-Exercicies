# Pedra Papel Tesoura

## Tutorial

Click on a **Button**

**``
ROCK
``**
**``
PAPER
``**
**``
SCISSORS
``**

and wait for the result 👍

## How the Game Works

The Game is simple :

```
const checkResult = (playerPlay) => {

    const botPlay = random(ROCK || PAPER || SCISSORS);

    switch(playerPlay){
        case ROCK: {
            
            if(botPlay === ROCK){
                return DRAW;
            }
            if(botPlay === PAPER){
                return LOSE;
            }
            if(botPlay === SCISSORS){
                return WIN;
            }
        }
        case PAPER: {

            if(botPlay === ROCK){
                return WIN;
            }
            if(botPlay === PAPER){
                return DRAW;
            }
            if(botPlay === SCISSORS){
                return LOSE;
            }
        }
        case SCISSORS: {

            if(botPlay === ROCK){
                return LOSE;
            }
            if(botPlay === PAPER){
                return WIN;
            }
            if(botPlay === SCISSORS){
                return DRAW;
            }
        }
    }
}
```

##  Credits

Thanks to **me** that make that project possible! 

## Example

https://jsfiddle.net/201flaviosilva/gLsdz8ro/show
