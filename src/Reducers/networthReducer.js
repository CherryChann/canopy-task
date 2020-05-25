import intialState from '../State/networthState';

export default function networth(state = intialState, action) {
    switch (action.type) {
        case 'REQUEST_NETWORTH':
            return Object.assign({}, state, {
                isLoading: action.networth.isLoading
            })
        case 'RECEIVE_NETWORTH':
            console.log(action.networth, 'networth from reducer')
            return Object.assign({}, state, {
                isLoading: action.networth.isLoading,
                data: action.networth.data
            })
        default:
            return state
    }
}