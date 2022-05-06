import {useState} from 'react'

function HookUseState() {
    const [card, setCard] = useState({
        title: 'My title',
        body: 'Body of Card'
    })
    const changeTitle= ()=>{
        setCard(prev=>{
            return {
                ...prev,
                title: 'Changed Title'
            }
        })
    }
    return ( 
        <div>
            <h2>State</h2>
            {card.title} <br/>
            {card.body} <br/>
            <button onClick={changeTitle} > Change title </button>
        </div>
     );
}

export default HookUseState;