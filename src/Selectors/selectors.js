import { createSelector } from 'redux-orm';
import { orm } from "../Model/orm";

const getOrderStatus = state => state.holding.orderStatus;
const getSelectedItem = state => state.holding.selectedItem;

export const ascHoldings = createSelector(
    [orm, getOrderStatus, getSelectedItem],
    (session, orderStatus, item) => {
        if(item === undefined) {
            return session.Holding.orderBy(['asset_class'], [orderStatus]).toRefArray();
        } // for initial loading 
        else {
            let holdings = session.Holding.orderBy(['asset_class'], [orderStatus]).toRefArray();
            holdings.map((h) => {
                if (h.id === item.id) {
                    h.isSelected = item.isSelected
                }
                if ((h.asset_class === item.asset_class && h.id !== item.id)) {
                    h.isCollapsed = !h.isCollapsed;
                }
            });
            return holdings;

        }
    }
);
