// returns the string ID associated with the card 
// once returned the XxXquiz componnt will run if ("string") conditionals
// and display the correct card by calling a seperate component or just doing it in there

export default function CardMath(
    introversion: number,
    extraversion: number,
    lazy: number,
    productive: number,
    basic: number,
    chaotic: number, 
    thinking: number, 
    feeling: number){

    let combo = "";
    if (introversion > extraversion){
        combo += "I";
    }else{
        combo += "E";
    }
    if (lazy > productive){
        combo += "L";
    }else{
        combo += "P";
    }
    if (basic > chaotic){
        combo += "B";
    }else{
        combo += "C";
    }
    if (thinking > feeling){
        combo += "T";
    }else{
        combo += "F";
    }
    return(combo);
}