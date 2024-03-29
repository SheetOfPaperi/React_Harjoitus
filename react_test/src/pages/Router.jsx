import {Outlet, Link} from "react-router-dom";
import React from "react";

export const Router = ()=>{
    return(
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/BUTTons">Buttons</Link>
                    </li>
                    <li>
                        <Link to="/Counters">Counters</Link>
                    </li>
                    <li>
                        <Link to="/Items">Items</Link>
                    </li>
                    <li>
                        <Link to="/List">List</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    );
}