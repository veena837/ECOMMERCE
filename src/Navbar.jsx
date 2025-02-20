import { useState } from "react";

function Navbar(prop) {
    console.log(props.name)
    let[a,setA]=useState(200)
    //map;filter,reduce

    let arr=[1,2,3,4,5,6,7,8]

    let result=arr.filter(function (item) {

        console.log("Item",item)
        return item > 4
    })
    console.log("result---->",result);

    function handleButtonClick(){

        setA(a*100)
    }
    return(
        <div>
            {a}
            <h1>Navigation Bar</h1>
            <button onClick={handleButtonClick}>Change </button>
        </div>
    )
    }
    export default Navbar;

    
