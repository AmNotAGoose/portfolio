import React, { useState, useEffect } from 'react';
import './TicTacToe.css';

export default function TicTacToe() {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);



    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];



    const makeAIMove = (currentBoard) => {
        // randomly pick a cell
        const emptyCells = [];
        for (let i = 0; i < currentBoard.length; i++) {
            if (currentBoard[i] === '') {
                emptyCells.push(i);
            }
        }
        if (emptyCells.length > 0) {
            return emptyCells[Math.floor(Math.random() * emptyCells.length)];
        }
        return -1;
    };

    const checkWinner = (currentBoard) => {
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a];
            }
        }
        if (currentBoard.every(cell => cell !== '')) {
            return 'tie';
        }
        return null;
    };

    const handleCellClick = (index) => {
        if (board[index] !== '' || gameOver || !isPlayerTurn) return;

        const newBoard = [...board];
        newBoard[index] = 'X';
        setBoard(newBoard);

        const playerWinner = checkWinner(newBoard);
        if (playerWinner) {
            setGameOver(true);
            setWinner(playerWinner);
            return;
        }

        setIsPlayerTurn(false);
    };



    useEffect(() => {
        if (!isPlayerTurn && !gameOver) {
            const timer = setTimeout(() => {
                const aiMoveIndex = makeAIMove(board);
                if (aiMoveIndex !== -1) { // ai couldnt find a move
                    const newBoard = [...board];
                    newBoard[aiMoveIndex] = 'O';
                    setBoard(newBoard);

                    const aiWinner = checkWinner(newBoard);
                    if (aiWinner) {
                        setGameOver(true);
                        setWinner(aiWinner);
                    } else {
                        setIsPlayerTurn(true);
                    }
                }
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [isPlayerTurn, board, gameOver]);



    const resetGame = () => {
        setBoard(['', '', '', '', '', '', '', '', '']);
        setIsPlayerTurn(true);
        setGameOver(false);
        setWinner(null);
    };

    const getStatusMessage = () => {
        if (winner === 'X') return 'You win!';
        if (winner === 'O') return 'I win!';
        if (winner === 'tie') return 'It\'s a tie!';
        return isPlayerTurn ? 'Your turn (X)' : 'AI thinking...';
    };

    return (
        <div className="tictactoe">
            <h2>Tic Tac Toe</h2>
            <div className="game-status">
                <p>{getStatusMessage()}</p>
            </div>
            <div className="game-board">
                <div className="game-row">
                    <div className="game-cell" onClick={() => handleCellClick(0)}>{board[0]}</div>
                    <div className="game-cell" onClick={() => handleCellClick(1)}>{board[1]}</div>
                    <div className="game-cell" onClick={() => handleCellClick(2)}>{board[2]}</div>
                </div>
                <div className="game-row">
                    <div className="game-cell" onClick={() => handleCellClick(3)}>{board[3]}</div>
                    <div className="game-cell" onClick={() => handleCellClick(4)}>{board[4]}</div>
                    <div className="game-cell" onClick={() => handleCellClick(5)}>{board[5]}</div>
                </div>
                <div className="game-row">
                    <div className="game-cell" onClick={() => handleCellClick(6)}>{board[6]}</div>
                    <div className="game-cell" onClick={() => handleCellClick(7)}>{board[7]}</div>
                    <div className="game-cell" onClick={() => handleCellClick(8)}>{board[8]}</div>
                </div>
            </div>
            <button onClick={resetGame} className="reset-button">New Game</button>
        </div>
    );
}
