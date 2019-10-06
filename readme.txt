
Constants.js

    export const
        AN_ACTION = 'AN_ACTION';



Component.jsx

    import { AN_ACTION } from "./Constants";
    import { StateManager } from './StateManager';

    state = {
        data: ''
    };

    constructor(props) {
        super(props);

        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        StateManager.register(AN_ACTION, this.updateData);
    }

    componentWillUnmount() {
        StateManager.unregister(AN_ACTION, this.updateData);
    }

    updateData(data) {
        this.setState({data});
    }



AnotherComponent.jsx

    import { AN_ACTION } from "./Constants";
    import { StateManager } from './StateManager';

    StateManager.proceed(AN_ACTION, newData);
