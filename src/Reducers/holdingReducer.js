import intialState from '../State/holdingState';

export default function holding(state = intialState, action) {
    switch (action.type) {
        case 'REQUEST_HOLDING':
            return Object.assign({}, state, {
                isLoading: action.holding.isLoading
            })
        case 'RECEIVE_HOLDING':
            return Object.assign({}, state, {
                isLoading: action.holding.isLoading,
                data: action.holding.data
            })
        case 'SELECT_ORDER': 
            return Object.assign({}, state, {
                orderStatus: state.orderStatus === 'asc' ? 'desc' : 'asc',
                selectedItem: {}
            })
        case 'SELECT_ITEM': 
            return Object.assign({}, state, {
                selectedItem: {
                    isCollapsed: !action.selectedItem.isCollapsed,
                    isSelected: !action.selectedItem.isCollapsed && !action.selectedItem.isSelected ? true: false,
                    name: action.selectedItem.name,
                    id: action.selectedItem.id,
                    asset_class: action.selectedItem.asset_class,
                    ticker: action.selectedItem.ticker,
                    avg_price: action.selectedItem.avg_price,
                    market_price: action.selectedItem.market_price,
                    market_value_ccy: action.selectedItem.market_value_ccy
                }
            })
        default:
            return state
    }
}