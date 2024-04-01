import React, { useState } from 'react';
import react,{Component} from 'react';
const StudentMark = () => {
    const [total, totalmark] = useState();
    const Id = 1;
    const name = "arun";
    const mark1 = 25
    const mark2 = 25;
    const mark3 = 25;

    function handleClick() {
        totalmark(mark1 + mark2 + mark3);
    }
    // componentDidMount(){
    //     setTimeout(()=>{
    //            console.log("Total Mark is : ", total);
    //     },1000)
    // }
    

    return (
        <div>
            <p>student Id:{Id}</p>
            <p>student name:{name}</p>
            <p>student mark 1:{mark1}</p>
            <p>student mark 2:{mark2}</p>
            <p>student mark 3:{mark3}</p>
            <p>total : {total}</p>
            <button onClick={handleClick}>click</button>
        </div>
    )
}
export default StudentMark;