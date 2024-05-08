import {useToggle} from "./use_toggle";
import {useState} from "react"


function Title()
{
    var [currVal, toggleVal] = useToggle();


    return (
        <>
        <h1>Result: {currVal? 1 : 0}</h1>
        <button onClick={toggleVal}> Change the Value </button>
        </>
    )
}


export function MyApp()
{
    return (
            <>
            <Title />
            </>
        )
    }