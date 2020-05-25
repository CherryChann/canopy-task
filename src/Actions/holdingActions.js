export const REQUEST_HOLDING = 'REQUEST_HOLDING';
export const RECEIVE_HOLDING = 'RECEIVE_HOLDING';
export const SELECT_ORDER = 'SELECT_ORDER';
export const SELECT_ITEM = 'SELECT_ITEM';

export const requestHolding = () => {
    return {
        type: "REQUEST_HOLDING",
        holding: {
            isLoading: true
        }
    }
}

export const selectOrder = () => {
    return {
        type: SELECT_ORDER
    };
};

export const selectItem = (item) => {
    return {
        type: SELECT_ITEM,
        selectedItem: item
    };
};

const receiveHolding = (data) => {
    return {
        type: "RECEIVE_HOLDING",
        holding: {
            isLoading: false,
            data: data.payload
        }
    }
}

export const touchORM = (data) => {
    return {
        type: 'CREATE_HOLDING',
        payload: data.holding.data
    }
}
const fetchHolding = () => {
    let url = `https://canopy-frontend-task.now.sh/api/holdings`;
    return dispatch => {
        dispatch(requestHolding())
        fetch(url, {
                method: "GET",
            }).then(response => response.json())
            .then(json => dispatch(receiveHolding(json)))
            .then(payload => dispatch(touchORM(payload)))
    }
}

export default receiveHolding;

const shouldGetHoldingsAgain = (state)=> {
    if(state.holding.data.length) {
        return false;
    } else {
        return true;
    }
}

export const getHoldingIfNeeded = () =>{
    return (dispatch, getState) => {
        if (shouldGetHoldingsAgain(getState())) {
            return dispatch(fetchHolding())
        } else {
            return Promise.resolve()
        }
    }
}