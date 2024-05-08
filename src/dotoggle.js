import {useToggle} from "./use_toggle";
import {useState} from "react"


function Toggle()
{
	const [toggle, toggleValue] = useToggle()
    
	return (
        <>
		<div>Result: {toggle ? 1 : 0} </div>
       <button onClick={toggleValue}>Toggle</button>
        </>
    )
}


export function MyApp()
{
    return (
            <>
            <Toggle />
            </>
        )
    }