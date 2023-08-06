import {React,useState} from "react"
import "../style/Square.css"

const Square = ({turn, squareColor, onClick, index, sendLastTurn, isGameFinished})=>{

    const [currentTurn,setCurrentTurn] = useState(false);
    const [lastTurn,setLastTurn] = useState(null);
    const [lastColor,setLastColor] = useState(null);

    const takeTurn = ()=>{
        if(!isGameFinished)
        {
            if(lastTurn === null)
            onClick();
        else 
            return;
        setCurrentTurn(true);
        setLastTurn(turn);
        setLastColor(squareColor);
        console.log("last turn +" + turn);
        sendLastTurn(index,turn);
        }
    }

    const squareStyle = {
        backgroundColor : lastColor
    }

    return(
        <div className="grid-item" onClick={takeTurn} style={squareStyle}>
             {currentTurn && lastTurn}
        </div>
    );
}

export default Square;