import React from "react";
import JS1 from "../assets/images/JS1.jpeg"
import JS2 from "../assets/images/JS2.jpeg"
import JS3 from "../assets/images/JS3.jpeg"
import JS4 from "../assets/images/JS4.jpeg"
import JS5 from "../assets/images/JS5.jpeg"
import JS6 from "../assets/images/JS6.jpeg"
import JS7 from "../assets/images/JS7.jpeg"

export default function Pics() {
    return (
        <>
<h1 id="pics">Pics</h1>
<img src={JS1} className="p-8 max-w-md"></img>
<img src={JS2} className="p-8 max-w-md"></img>
<img src={JS3} className="p-8 max-w-md"></img>
<img src={JS4} className="p-8 max-w-md"></img>
<img src={JS5} className="p-8 max-w-md"></img>
<img src={JS6} className="p-8 max-w-md"></img>
<img src={JS7} className="p-8 max-w-md"></img>
        </>
    );
}