import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";

const Render  =()=>{
    const [Answer, setAnswer] = useState(0);
    const [count,setCount] = useState(0);
    useEffect (()=>{
        document.title=`you clicked ${count} times`
    })
    const getsum =()=>{
       let x = parseInt(
        document.getElementById("ElementA").value
       );
       let y = parseInt(
        document.getElementById("ElementB").value
       );
       console.log(x+y)
       setAnswer(x+y)
    };
    const getsub =()=>{
        let x = parseInt(
         document.getElementById("ElementA").value
        );
        let y = parseInt(
         document.getElementById("ElementB").value
        );
        console.log(x-y)
        setAnswer(x-y)
     };
     const getmul =()=>{
        let x = parseInt(
         document.getElementById("ElementA").value
        );
        let y = parseInt(
         document.getElementById("ElementB").value
        );
        console.log(x*y)
        setAnswer(x*y)
     };
    return(
        <div>
            <input type="text"  id="ElementA"/><br/><br/>
            <input type="text"  id="ElementA" />
            <button onClick={getsum}>Add</button><br/><br/>
            <input type="text" value={Answer}/>
            <button onClick={()=>{setCount(count+1)}}>ccccccccc</button>
            <p>{count}</p>
        </div>
    )
}

export default Render;
