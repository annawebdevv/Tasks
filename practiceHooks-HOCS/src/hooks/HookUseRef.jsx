
import {useState, useRef, useEffect} from 'react'

function HookUseRef() {
    const renderCount = useRef(0)
    const prevValue = useRef('')
    const [inputValue, setInputValue] = useState('')
    
    useEffect(()=>{
        renderCount.current++
    })
    useEffect(()=>{
        prevValue.current = inputValue
    }, [inputValue])
   
    return ( 
        <div>
            <h2>Ref</h2>
            <p> render count {renderCount.current} </p> 
            <input type="text" value={inputValue} onChange={e=> setInputValue(e.target.value)} />
            <p> prev input value: {prevValue.current} </p> 
        </div>
     );
}

export default HookUseRef;