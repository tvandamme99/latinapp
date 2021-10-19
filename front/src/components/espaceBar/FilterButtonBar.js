import React from 'react';
import './FilterButtonBar.css';

function FilterButtonBar({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((cat, i)=>{
                    return <button className='filter__boutton' type="button" onClick={()=> filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default FilterButtonBar;
