import { Model, attr, ORM } from 'redux-orm'

export class Holding extends Model {

    static get fields() {
        return {
            name: attr(),
            ticker: attr(),
            asset_class: attr(),
            avg_price: attr(),
            market_price: attr(),
            latest_chg_pct: attr(),
            market_value_ccy: attr(),
            isCollapsed: attr()
        }
    }

    static reducer(action, Holding, session) {
        switch (action.type) {
            case 'CREATE_HOLDING': {
                for(var i =0; i < action.payload.length; i++) {
                    Holding.create({
                        name: action.payload[i].name,
                        ticker: action.payload[i].ticker,
                        asset_class: action.payload[i].asset_class,
                        avg_price: action.payload[i].avg_price,
                        market_price: action.payload[i].market_price,
                        latest_chg_pct: action.payload[i].latest_chg_pct,
                        market_value_ccy: action.payload[i].market_value_ccy,
                        isCollapsed: false,
                        isSelected: false
                    })
                }
                break
            }
            default: break
        }
  }
}
Holding.modelName = 'Holding'
 
export const orm = new ORM({
    stateSelector: state => state.orm
});
orm.register(Holding)

export default orm;