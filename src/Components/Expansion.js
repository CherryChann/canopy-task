import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PlusSquareFill, DashSquareFill } from 'react-bootstrap-icons';

class Expansion extends Component {
    render() {
        const props = this.props;
        const onClick = (item) => {
            props.onChange(item)
        };
        var dataList = this.props.holdings.map((item, index) => (
                <tr key={index} onClick={() => onClick(item)} style = {{ display: item.isCollapsed === false ? 'table-row' : 'none'}}> 
                    <td>{item.isSelected ? <PlusSquareFill/> : <DashSquareFill/> }</td>
                    <td>{item.name}</td>
                    <td>{item.ticker}</td>
                    <td>{item.asset_class}</td>
                    <td>{item.avg_price !== undefined && item.avg_price !== null ? item.avg_price.toFixed(2) : '-'}</td>
                    <td>{item.market_price !== undefined && item.market_price !== null ? item.market_price.toFixed(2) : '-'}</td>
                    <td>{item.latest_chg_pct}</td>
                    <td>{item.market_value_ccy.toFixed(2)}</td>
                </tr>
            ))
        return (
            dataList
            
        );
    }
}
Expansion.propTypes = {
    onChange: PropTypes.func.isRequired,
    holdings: PropTypes.array.isRequired
};

export default Expansion;