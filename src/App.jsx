import {useState} from 'react';
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from './components/Results';

function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment:1000,
    annualInvestment : 1000,
    expectedReturn : 6,
    duration:10
});

function handleUserInput(inputType,inputValue){
    setUserInput((prevUserInput)=>{
        return{...prevUserInput,
        [inputType]:+inputValue // converts the string to a number since all values from input is a string format even though the type is a number
      }
    });

}

const isValidInput = userInput.duration >0;
  return (
    <>
    <Header/>
    <UserInput onChange={handleUserInput} userInput ={userInput}/>
    {!isValidInput && <p className='center'> Please enter valid data!</p>}
    { isValidInput && <Results userInput={userInput}/>}
    </>
  )
}

export default App
