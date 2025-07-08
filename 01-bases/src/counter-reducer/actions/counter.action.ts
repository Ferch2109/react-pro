enum ActionType {
    REST = 'reset',
    INCREASE_BY = 'increaseBy'
}

export type CounterAction = 
    | { type: ActionType.INCREASE_BY, payload: { value: number } }
    | { type: ActionType.REST }

export const doReset = (): CounterAction => ({ 
    type: ActionType.REST 
});

export const doIncreaseBy = (value: number): CounterAction => ({
    type: ActionType.INCREASE_BY,
    payload: { value }
})