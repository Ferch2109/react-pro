import { CounterAction } from "../actions/counter.action";
import { CounterState } from "../interfaces/counter.interface";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
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