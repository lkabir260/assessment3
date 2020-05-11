import React from 'react';
import './CircleSelector.css';


const CircleSelector = (props) => (

    <div className='CircleSelector' >
        <button className={props.selCircleIdx === 'circleOne' ? 'selCircleIdx' : ''} value='circleOne' onClick={() => props.handleCircleSelection()}>
            {props.selCircleIdx === 'circleOne' ? 'circle 1 selected' : 'select circle 1' }
        </button>
        <button className={props.selCircleIdx === 'circleTwo' ? 'selCircleIdx' : ''} value='circleTwo' onClick={() => props.handleCircleSelection()}>
            {props.selected === 'circleTwo' ? 'circle 2 selected' : 'select circle 2' }
        </button>
        <button className={props.selCircleIdx === 'circleThree' ? 'selCircleIdx' : ''} value='circleThree' onClick={() => props.handleCircleSelection()}>
            {props.selected === 'circleThree' ? 'circle 3 selected' : 'select circle 3' }
        </button>
        <button className={props.selCircleIdx === 'fourthCircle' ? 'selCircleIdx' : ''} value='fourthCircle' onClick={() => props.handleCircleSelection()}>
            {props.selCircleIdx === 'fourthCircle' ? 'circle 4 selected' : 'select circle 4' }
        </button>
    </div>
    )




export default CircleSelector

