import React from 'react';
import './Circles.css';

const Circles = (props) => (
  
  <div className="Circles">
  <div className={props.selCircleIdx === [1] ? 'selCircleIdx' : null}>
      1
  </div>
  <div className={props.selCircleIdx === [2] ? 'selCircleIdx' : null}>
      2
  </div>
  <div className={props.selCircleIdx === [3] ? 'selCircleIdx' : null}>
      3
  </div>
  <div className={props.selCircleIdx === [4] ? 'selCircleIdx' : null}>
      4
  </div>
</div>
);

export default Circles;