export class StateManager {
    static reducersList = [];

    static register(event, callableAction) {
        let reducers = this.reducersList[event];
        if (!reducers) reducers = [];
        reducers.push(callableAction);
        this.reducersList[event] = reducers;
    }

    static unregister(event, callableAction) {
        const reducers = this.reducersList[event];
        if (!reducers) return;
        this.reducersList[event] = reducers.filter(item => item != callableAction);
    }

    static proceed(event, payload) {
        const reducers = this.reducersList[event];
        if (!reducers) return;
        reducers.forEach(action => action(payload));
    }
}
