import {useState,useEffect} from 'react'

function HookUseEffect() {
    const [type, setType] = useState('albums')
    const [content, setContent] = useState()

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${type}/?_limit=3 `)  
  .then(res=> res.json())
  .then(res=> setContent(res))

}, [type]);
    return ( 
        <div>
            <h2>Effect</h2>
            <button onClick={()=>{setType('albums')}} > Get albums </button>
            <button onClick={()=>{setType('posts')}} > Get posts </button>
            <button onClick={()=>{setType('todos')}} > Get todos </button>
            <p> {type} </p>
            <pre> {JSON.stringify(content, null, 2)}</pre>
        </div>
     );
}

export default HookUseEffect;