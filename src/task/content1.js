import React from "react";
import { FaShoppingCart } from "react-icons/fa";
export default function Next(){
    return(
        <div class= "flex">
        <div className="nxt">
                <img src="/images/piz.jpg"/>
            <div className="in">
                <h4>Tasty Thursday</h4>
                <h3>20% off</h3>
                <button className="btn-3">Order Online<FaShoppingCart/></button>
            </div>
        </div>
         <div className="nxt">
         <img src="/images/bug.jpg"/>
                <div className="in">
                    <h4>Pizza Day</h4>
                    <h3>15% off</h3>
                    <button className="btn-3">Order Online<FaShoppingCart/></button>
                </div>
            </div>
 </div>
        
    )
}