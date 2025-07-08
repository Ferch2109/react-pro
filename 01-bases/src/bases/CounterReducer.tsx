import { useReducer, useState } from 'react'

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

interface CounterProps {
    initValue?: number;
}

type ActionType = 
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

    const INIT_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

const counterReducer = (state: CounterState, action: ActionType): CounterState => {
    const {counter, changes} = state;

    switch(action.type) {
        case 'reset':
            return {
                changes: 0,
                counter: 0,
                previous: 0,
            }
        case 'increaseBy':
            return {
                changes: changes+1,
                counter: counter+action.payload.value,
                previous: counter,
            }
        default:
            return state;
    }
}

const CounterReducerComponent = ({ 
    initValue = 0 
}: CounterProps) => {
    const [counterState, dispatch] = useReducer(counterReducer, INIT_STATE);

    const handleReset = () => dispatch({ type: 'reset' });

    const increaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value } });
    }

    return (
        <>
            <h1>Counter Reducer: </h1>
            <pre>{ JSON.stringify(counterState, null, 2) }</pre>
            <button onClick={() => increaseBy(1)}>
                +1
            </button>
            <button onClick={() => increaseBy(5)}>
                +5
            </button>
            <button onClick={() => increaseBy(10)}>
                +10
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    )
}

export default CounterReducerComponent;
