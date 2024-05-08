import { useState,createContext,useContext } from "react";
import ReactDOM from "react-dom/client";

const WinContext = createContext();


function Game()
{
	const [winnings,setWinnings] = useState(0)
	return <>
	 <WinContext.Provider value = {winnings}>
		<PlayGame clickHandler = {(e)=> setWinnings(winnings+parseInt(Math.random()*100))} />
	 </WinContext.Provider >
	</>
	
}

function ShowStats()
{
	const win = useContext(WinContext);

	return <>
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