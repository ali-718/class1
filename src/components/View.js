import React from 'react';
import {Link} from 'react-router-dom'

export const Make = () => (
<div style={{width:"100%",height:100,backgroundColor: "green",}}>
    
    <Link to="/view">
        <p>Switch to View</p>
    </Link>
</div>
);

export const New = () => (
    <div style={{width:"100%",height:100,backgroundColor: "blue",}}>
    
    </div>
);

