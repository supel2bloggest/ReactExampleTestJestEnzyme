import React from 'react';
import './Counter.css';

export default function Counter(props) {
    const [state, setState] = React.useState(0);
    return <div className="Counter">
        <div id="value">{state}</div>
        <div className="Counter-Button">
        <button id="btn-increment" onClick={() => setState(state + 1)}>
          Counter Up
        </button>
        <button id="btn-decrement" onClick={() => state > 0 && setState(state - 1)}>
          Counter Down
        </button>
        </div>
        <div className="Counter-Button">
        <button id="btn-reset" onClick={() => setState(0)}>
          Reset
        </button>
        </div>
    </div>
}