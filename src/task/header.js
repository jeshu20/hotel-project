import React from "react";
 import { FaShoppingCart } from "react-icons/fa";
 import { IoIosContact } from "react-icons/io";
 import { BsSearch } from "react-icons/bs";
export default function Home(){
    return(
        <div className="head">
             <h2>Feane</h2>
                 <ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#"> MENU</a></li>
					<li><a href="#">ABOUT</a></li>
					<li><a href="#">BOOKTABLE</a></li>
				</ul>
                <ul class="yu">
                <li><IoIosContact/></li>
                <li><FaShoppingCart/></li>
                <li><BsSearch/></li>
                <button className="btn-1">Order Online</button>
                </ul>
                
            {/* css for this is in app.css */}
        </div>
    )
}