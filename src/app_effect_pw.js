import { useState,useEffect } from "react";

function ValidPW()
{
	const [pw, setPW] = useState('');
   	const [validLength, setValidLength] = useState(false);
	const [validLetters, setValidLetters] = useState(false);
	const [validNumber, setValidNumber] = useState(false);

	
	
	const pwHandler = e => {
        setPW(e.target.value);
    };
	
	const ValidLength = () => {
		return <>
			{validLength? <p>Length is valid</p> : <p>Length is not valid</p>}
			</>
	}
	
	const ValidLetters = () => {
		return <>
			{validLetters? <p>Letter criteria is valid</p> : ''}
			</>
	}
	
	const ValidNumber = () => {
		return <>
			{validNumber? <p>Number criteria is valid</p> : ''}
			</>
	}
	const ShowValid =() => 
		<>
			<br />
			Password Criteria
			<ValidLength />
			<ValidLetters/>
			<ValidNumber />
		</>
	
	const hasUpper = () => pw.split('').reduce(((valid,i)=> 
								(valid || (i+'').toUpperCase()==i)),false);
	const hasLower = () => pw.split('').reduce(((valid,i)=> 
								(valid || (i+"").toLowerCase()==i)),false);
	const hasNumber = () => pw.split('').reduce(((valid,i)=> 
								(valid || !isNaN(i))),false);
								

	
	useEffect(() => {
	   var valid = pw.length >=8;
	   setValidLength(valid);   
	  }, [pw]);
	
	useEffect(() => {
	   setValidLetters(hasUpper() && hasLower());   
	   setValidNumber(hasNumber()); 
    }, [validLength])
	
	
	return (
        <div style={{margin: '20px'}}>
            <hr />
            <h2>Get Valid Password</h2>
            <form >
			    <div>A valid password is at least 8 characters,1 upper case,1 lower case,1 number</div>
                <label htmlFor="input">Password</label><br />
                <input type="text" id="input" onChange={pwHandler} style={{height: '24px'}} />
				<br/><br/><button>Register</button>
            </form>
			<ShowValid />

        </div>
    );  //end return
}

export function MyApp()
{
    return (
            <>
            <ValidPW />
            </>
        )
}