import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show, setshow] = useState(false)
  const [color , setcolor] = useState('white')
  const increacNumber= ()=> {
    setCount(number => {
      if (number >= 1000) {
        setshow(true);
        return number;
      } else if (number >= 100) {
        return number + 100;
      } else if (number >= 10) {
        return number + 10;}
      else  {
        return number + 1;
      }
    });
  }
  const DecreaseNumber= ()=> {
    setCount(number => {
      if (number > 100) {
        return number - 100;
      } else if (number > 10) {
        return number - 10;
      } else if (number > 0) {
        return number - 1;}
      else {
        return 0;
      }
    });
  }
  useEffect(() => {
    window.alert("hello in my counter , can you use if you want");
  }, []);
  useEffect(() => {
   if (count ===10 || count === 100 || count === 1000) {
    window.alert (`the number is ${count}`)
   }
  }, [count]);

  useEffect(() => {
    if (count === 10 ){
      setcolor('red')
    }
    if (count === 100 ){
      setcolor('blue')
    }
    if (count === 1000 ){
      setcolor('green')
    }
  } , [count])
 
  return (
    <div className='box' style={{backgroundColor : color}}>
    <h1>the Count is {count}</h1>
    
      <button onClick={increacNumber}>
      increase the number
      </button>
  
    {
      show && <button onClick={DecreaseNumber}> 
        Decrease the number</button>
    }
    </div>
  )
}

export default App
