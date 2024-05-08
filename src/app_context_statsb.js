import { useState,createContext,useContext } from "react";
import ReactDOM from "react-dom/client";

const WinContext = createContext();


function Game()
{
	const [winnings,setWinnings] = useState(0)
	const [amount,setAmount] = useState(0)
	return <>
	 <WinContext.Provider value = {[winnings, amount]}>
		<PlayGame clickHandler = {(e)=> {var amount= parseInt(Math.random()*100); 
								  if (amount%3===0) amount = -amount; 
								  setAmount(amount); setWinnings(winnings+ amount)}} />
	 </WinContext.Provider >
	</>
	
}

function ShowStats()
{
	const [win, amount] = useContext(WinContext);

	return <>
		Amount: $ {amount} <br />
		Winnings:$ {win}<br/>
		</>
	
}



function PlayGame(props)
{
	const win = useContext(WinContext);
	return <>
		<button onClick={props.clickHandler}>Click to Win More</button>
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