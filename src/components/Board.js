import { React, useState, useEffect } from "react"
import Square from "./Square";
import "../style/Board.css"

const Board = () => {
    const [turn, setTurn] = useState(null);
    const [boardPos, setBoardPos] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [squareColor, setSquareColor] = useState(null);
    const [isGameFinished, setIsGameFinished] = useState(false);

    const takeTurn = () => {
        setTurn(turn === 'X' ? 'O' : 'X');
        setSquareColor(squareColor === '#ff9203' ? '#01bfd5' : '#ff9203');
    }

    useEffect(() => {
        if (turn === null) {
            setTurn(turn === 'X' ? 'O' : 'X');
            setSquareColor(squareColor === '#ff9203' ? '#01bfd5' : '#ff9203');
        }
        if (checkWinner())
            setIsGameFinished(true);
    }, [turn, squareColor]);

    const sendLastTurn = (index, value) => {
        const newArray = [...boardPos];
        newArray[index] = value;
        setBoardPos(newArray);
        checkWinner();
    }

    const squareList = [];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++)
            squareList.push(<Square turn={turn} squareColor={squareColor} onClick={takeTurn} index={(i * 3) + j} sendLastTurn={sendLastTurn} isGameFinished={isGameFinished} />);
    }

    function printBoard() {
        return squareList;
    }

    const checkWinner = () => {

        for (let row = 0; row < 3; row++) {
            if (boardPos[(row * 3)] !== 0 && boardPos[(row * 3) + 1] !== 0 && boardPos[(row * 3) + 2] !== 0)
                if ((boardPos[(row * 3)] === boardPos[(row * 3) + 1]) && (boardPos[(row * 3) + 1] === boardPos[(row * 3) + 2])) {
                    if (!isGameFinished) {
                        setIsGameFinished(true);
                        return true;
                    }
                }
        }

        for (let col = 0; col < 3; col++)
            if (boardPos[col] !== 0 && boardPos[col + 3] !== 0 && boardPos[col + 6] !== 0)
                if ((boardPos[col] === boardPos[col + 3]) && (boardPos[col + 3] === boardPos[col + 6]))
                    if (!isGameFinished) {
                        setIsGameFinished(true);
                        return true;
                    }

        if (boardPos[0] !== 0 && boardPos[4] !== 0 && boardPos[8] !== 0)
            if ((boardPos[0] === boardPos[4]) && (boardPos[0] === boardPos[8]))
                if (!isGameFinished) {
                    setIsGameFinished(true);
                    return true;
                }

        if (boardPos[2] !== 0 && boardPos[4] !== 0 && boardPos[6] !== 0)
            if ((boardPos[2] === boardPos[4]) && (boardPos[4] === boardPos[6]))
                if (!isGameFinished) {
                    setIsGameFinished(true);
                    return true;
                }

        return false;
    }

    return (
        <div className="board">
            <div className="grid-container">
                {printBoard()}
            </div>
            {isGameFinished && <p>{turn === 'X' ? 'O' : 'X'} is winner</p>}
        </div>
    );
}

export default Board;