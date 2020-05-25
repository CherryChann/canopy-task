import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import { Container,Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getNetworthIfNeeded } from '../Actions/networthActions';

class Chart extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getNetworthIfNeeded());
    }
    
    render() {
        const props = this.props;
        const { dataProvider } = props;
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        } 
    
        if (this.props.hasOwnProperty('dataProvider') && dataProvider !== undefined) {
            const config = {
                "type": "serial",
                "theme": "light",
                "marginRight": 40,
                "marginLeft": 40,
                "autoMarginOffset": 20,
                "responsive": {
                    "enabled": true
                },
                "mouseWheelZoomEnabled": true,
                "valueAxes": [{
                    "id": "v1",
                    "axisAlpha": 0,
                    "position": "left",
                    "title": 'Networth Value',
                    "ignoreAxisWidth": true
                }],
                
                "graphs": [{
                    "id": "g1",
                    "balloon": {
                        "drop": true,
                        "adjustBorderColor": true,
                        "color": "#ffffff",
                        "fillColor": "rgba(26, 188, 156, 0.8)",
                        "borderThickness": 2
                    },
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "bulletSize": 5,
                    "hideBulletsCount": 50,
                    "lineThickness": 2,
                    "lineColor": "rgba(26, 188, 156, 0.8)",
                    "title": "Traded on Date",
                    "useLineColorForBulletBorder": true,
                    "valueField": "value",
                    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
                }],
                "chartScrollbar": {
                    "graph": "g1",
                    "oppositeAxis": false,
                    "offset": 30,
                    "scrollbarHeight": 80,
                    "backgroundAlpha": 0,
                    "selectedBackgroundAlpha": 0.1,
                    "selectedBackgroundColor": "#888888",
                    "graphFillAlpha": 0,
                    "graphLineAlpha": 0.5,
                    "selectedGraphFillAlpha": 0,
                    "selectedGraphLineAlpha": 1,
                    "autoGridCount": true,
                    "color": "#AAAAAA"
                },
                "chartCursor": {
                    "pan": true,
                    "valueLineEnabled": true,
                    "valueLineBalloonEnabled": true,
                    "cursorAlpha": 1,
                    "cursorColor": "rgba(26, 188, 156, 0.8)",
                    "limitToGraph": "g1",
                    "valueLineAlpha": 0.2,
                    "valueZoomable": true
                },
                "lineColor": "black",
                "valueScrollbar": {
                    "oppositeAxis": false,
                    "offset": 50,
                    "scrollbarHeight": 10
                },
                "categoryField": "date",
                "dataProvider": this.props.dataProvider
            };
            var chart = <AmCharts.React style={{ width: "100%", height: "500px" }} options={config} />
        }

        return (
            <Container fluid>
                <h3 style={{display: 'flex', marginTop: '1%', marginLeft: "1%"}}>Networth Chart</h3>
                <Row>
                    <Col sm={12} md={12}>
                        {chart}
                    </Col>
                </Row>
                
            </Container>
        );
  }
}

const  mapStateToProps = (state) => {
    return {
        isLoading: state.networth.isLoading,
        dataProvider: state.networth.data
    }
}
export default connect(mapStateToProps)(Chart);


        