import React from "react";

export default function Mine(){
    return(<>
        <div className="main">
            <div className="ine">
                <h1>Book A Table</h1>
            <div className="new-style">
                <input type="text"  placeholder="Name"/>
                <input type="text" placeholder="phone-number"/>
                <input type="email" placeholder="Email"/>
                <input type="number" placeholder="How Many Person"/>
                <input type="date" placeholder="Date"/>
             </div>
            </div>
                <div className="gre">
                    <img src="/images/thumbnail.jpg"/>
                </div>
                
        </div>
        <button className="btn-5">Order Online</button>

         </>
    )
}