export default function createReducer<TState>(
    defaultState: TState,
    handlers: Record<string, (state: TState, action: any) => TState>
) {
    return function reducer(state = defaultState, action: any): TState {
        if (handlers[action.type]) {
            return handlers[action.type](state, action);
        }
        return state;
    };
}
