export class StateManager {
    static reducersList = [];

    static register(event, callableAction) {
        let reducers = this.reducersList[event];
        if (!reducers) reducers = [];
        reducers.push(callableAction);
        this.reducersList[event] = reducers;
    }

    static proceed(event, payload) {
        let reducers = this.reducersList[event];
        if (!reducers) return;
        reducers.forEach(action => action(payload));
    }
}
