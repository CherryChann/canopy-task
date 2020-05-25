import React, { Component } from 'react';
import _ from 'lodash';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux';

import { getHoldingIfNeeded, selectOrder,selectItem } from '../Actions/holdingActions';
import { ascHoldings } from '../Selectors/selectors';

import OrderBy from '../Components/OrderBy';
import Expansion from '../Components/Expansion';

class TablePage extends Component {
    handleSort = (orderStaus) =>{
        const { dispatch } = this.props;
        dispatch(selectOrder());
    }

    onSelected = (item, holdings) => {
        const { dispatch } = this.props;
        dispatch(selectItem(item));
    }
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getHoldingIfNeeded());
    }

    render() {
        const props = this.props;
        const { holdingsRef } = props;

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        } 
    
        if (this.props.hasOwnProperty('holdingsRef') && holdingsRef !== undefined) {
            var dataList = <Expansion onChange={this.onSelected} holdings={holdingsRef}></Expansion>;
        }
    return (
        <Container fluid>
            <h3 style={{display: 'flex', marginTop: '1%', marginLeft: "1%"}}>Holdings Table</h3>
            <Table responsive striped bordered >
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Ticker</th>
                        <OrderBy onChange={this.handleSort} status={this.props.status}></OrderBy>
                        <th>Avg Price</th>
                        <th>Market Price</th>
                        <th>Latest Change %</th>
                        <th>Market Value in CCY</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList}
                </tbody>
            </Table>
      </Container>
    )
  }
}

const mapStateToProps = state => {
    return {
        isLoading: state.holding.isLoading,
        status: state.holding.orderStatus,
        holdingsRef: ascHoldings(state)
    }
}


export default connect(mapStateToProps)(TablePage);
