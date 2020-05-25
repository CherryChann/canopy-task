import Moment from 'moment';

export const REQUEST_NETWORTH = 'REQUEST_NETWORTH';
export const RECEIVE_NETWORTH = 'RECEIVE_NETWORTH';


export const requestNetworth = () => {
    return {
        type: "REQUEST_NETWORTH",
        networth: {
            isLoading: true
        }
    }
}


const receiveNetworth = (data) => {
    return {
        type: "RECEIVE_NETWORTH",
        networth: {
            isLoading: false,
            data: data
        }
    }
}


const fetchNetworth = () => {
    let url = `https://canopy-frontend-task.now.sh/api/networth`;
    return dispatch => {
        dispatch(requestNetworth())
        fetch(url, {
                method: "GET",
            }).then(response => response.json())
            .then(json => {
                let dataProvider = []
                json.map((d) => {
                    let startDate = Moment().format("YYYY-MM-DD");
                    let endDate = Moment().subtract(1, 'y').format("YYYY-MM-DD");
                    let formatedDate = d.traded_on.split('-');
                    let readableDateFormat = []
                    readableDateFormat.push(formatedDate[2], formatedDate[1], formatedDate[0])
                    let formatedTradedOn = readableDateFormat.join('-')
                    if (Moment(formatedTradedOn).isBetween(endDate, startDate)) {
                        dataProvider.push({
                            date: Moment(formatedTradedOn).format("DD-MM-YYYY"),
                            value: d.net_worth
                        });
                    }
                })
                return dataProvider;
            })
            .then(payload => dispatch(receiveNetworth(payload)))
    }
}

export default receiveNetworth;

const shouldGetNetworthAgain = (state)=> {
    if(state.networth.data.length) {
        return false;
    } else {
        return true;
    }
}

export const getNetworthIfNeeded = () =>{
    return (dispatch, getState) => {
        if (shouldGetNetworthAgain(getState())) {
            return dispatch(fetchNetworth())
        } else {
            return Promise.resolve()
        }
    }
}