import React, { useState } from "react";



const SomeComponent = React.memo(({someProps})=>{
    console.log('some logic');
    return (<div>
        {someProps} <br/>
        render someComponent
        </div>)
})

function MyReactMemo() {
    const [num, setNum] = useState(0)
    return ( 
        <div>
            <h1>React.memo</h1>
            {num}
            <button onClick={()=>{setNum(prev => ++prev)}}>INCREMENT</button>
         <SomeComponent someProps={'someProps'}/>
        </div>
     );
}

export default MyReactMemo;