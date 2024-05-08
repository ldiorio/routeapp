import { useState,useEffect } from "react";

function GuessWord()
{
	const [guess, setGuess] = useState('');
	const [validGuess, setValidGuess] = useState(false);
    const answer="friendly";

	const guessHandler = e => {
        setGuess(e.target.value);
    };
	
	const ValidGuess = () => {
		return <>
			{
			   validGuess ? <p>Woohoo!</p> : 'Keep trying!'
		    }
			</>
	}
	
	
	const ShowValid =() => 
		<>
			<br />
			<ValidGuess />
		</>
	
		
	useEffect(() => {
	   setValidGuess(guess === answer);   
	}, [guess]);

	
	return (
        <div style={{margin: '20px'}}>
            <hr />
            <h2>Guess the Secret Word!</h2>
            <form >
			    <label htmlFor="input">Your Guess?</label><br />
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
            <GuessWord />
            </>
        )
}