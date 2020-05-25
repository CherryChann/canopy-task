import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';

class OrderBy extends Component {
    render() {
        const props = this.props;
        const onClick = () => {
            props.onChange();
        };
        return (
            <th onClick={onClick} > 
                Asset Class
               { props.status === 'asc' ?<CaretDownFill/> : <CaretUpFill/>}
            </th>
        );
    }
}
OrderBy.propTypes = {
    onChange: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired
};


export default OrderBy;