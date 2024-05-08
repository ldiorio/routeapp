import { useState,createContext,useContext } from "react";
import ReactDOM from "react-dom/client";

const WinContext = createContext();
//const AmtContext = createContext();


function Game()
{
	const [winnings,setWinnings] = useState(0)
	const [amount,setAmount] = useState(0)
	return <>
	
	 <WinContext.Provider value = {[winnings,amount]}>
		<PlayGame clickHandler = {(e)=> {var amt = parseInt(Math.random()*100); amt= (amt%3)?amt:-amt; setAmount(amt); setWinnings(winnings+amt)} }/>
	 </WinContext.Provider >

	</>
}

function ShowStats() 
{
	const [win,amount] = useContext(WinContext);
	//const amount = useContext(AmtContext);

	return <>
		You won: $ {amount}<br />
		Winnings:$ {win}<br/>
		</>
	
}



function PlayGame(props)
{
	//const win = useContext(WinContext);
	return <>
		<button onClick={props.clickHandler}>Click to Play Again</button>
		<br /><br/>
		<ShowStats />
	</>
}



export function MyApp()
{
    return (
            <>
            <Game />
            </>
        )
}