import React, { useEffect, useState } from 'react'
import {evaluate, round} from "mathjs"

//CSS
import "./Calculator.css"

//COMPONENTS
import Button from '../components/layout/Button'
import Display from "../components/layout/Display"


const Calculator = () => {
	const [input, setInput] = useState("")
    const [history, setHistory] = useState("")
    const [aux, setAux] = useState("")
    const [result, setResult] = useState("")

    const isOperator = (value) => {
        return (value === "+") || (value === "-") || (value === "*") || (value === "/");
    }

	const addInput = (value) => {
        setAux(aux + value)

        if (isOperator(value)){
            setHistory(history + input + value)
        } else {
            if ( isOperator(history.slice(-1)) && isOperator(aux.slice(-1))) {
                setInput("")
                setInput(value)
            } else {
                setInput(input + value)
            }
        } 
	}

	const clearInput = () => {
		setInput("")
        setHistory("")
	}

    const deleteInput = () => {
        setInput( input.substring(0, input.length - 1) )
    }

	const calculateResult = () => {
        setResult(history + input)
	}

    useEffect( () => {
        if (result) {
            setHistory("")
            setAux("")
            setInput( round(evaluate(result), 2).toString() )
        }
    }, [result])

    
  return (
    <div className='calculator'>
        <div className='calculator-container'>
            <Display input={input} history={history}/>
            <div className="row">
				<Button handleClick={clearInput} class="operator clear">Clear</Button>
                <Button handleClick={deleteInput} class="operator">⌫</Button>
            </div>
            <div className="row">
                <Button handleClick={addInput}>7</Button>
                <Button handleClick={addInput}>8</Button>
                <Button handleClick={addInput}>9</Button>
                <Button handleClick={addInput} class="operator">/</Button>
            </div>
            <div className="row">
                <Button handleClick={addInput}>4</Button>
                <Button handleClick={addInput}>5</Button>
                <Button handleClick={addInput}>6</Button>
                <Button handleClick={addInput} class="operator">*</Button>
            </div>
            <div className="row">
                <Button handleClick={addInput}>1</Button>
                <Button handleClick={addInput}>2</Button>
                <Button handleClick={addInput}>3</Button>
                <Button handleClick={addInput} class="operator">-</Button>
            </div>
            <div className="row">
                <Button handleClick={addInput}>.</Button>
                <Button handleClick={addInput}>0</Button>
                <Button handleClick={calculateResult} class="others">=</Button>
                <Button handleClick={addInput} class="operator">+</Button>   
            </div>
        </div>
    </div>
  )
}

export default Calculator