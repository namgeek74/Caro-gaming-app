import React from 'react';

export default function Cell(props) {
    function handleClick() {
        props.valueChange(props.index);
    }

    return (
        <div className='cell' onClick={handleClick}>
            {props.value}
        </div>
    )
}