import { useState,useEffect } from "react";

function ValidGuess()
{
	const answer = "friendly";
	const [guess, setGuess] = useState('');
   	const [validGuess, setValidGuess] = useState(false);
	
	
	
	const guessHandler = e => {
        setGuess(e.target.value);
    };
	
	const IsValidGuess = () => {
		return <>
			{validGuess? <p>Yay!  Guess it</p> : <p>Keep Trying</p>}
			</>
	}
	
	
	const ShowValid =() => 
		<>
			<br />
			<IsValidGuess />
		</>
	
	
								

	
	useEffect(() => {
	   var valid = guess===answer;
	   setValidGuess(valid);   
	  }, [guess]);
	
	
	
	return (
        <div style={{margin: '20px'}}>
            <hr />
            <h2>Guess the Word</h2>
            <form >
			    <label htmlFor="input">Your Guess</label><br />
                <input type="text" id="input" onChange={guessHandler} style={{height: '24px'}} />
				<br/><br/>
            </form>
			<ShowValid />

        </div>
    );  //end return
}

export function MyApp()
{
    return (
            <>
            <ValidGuess />
            </>
        )
}