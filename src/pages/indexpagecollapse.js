import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import $ from 'jquery';
import bootstrap from 'bootstrap';

// React Bootstrap table
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import bootstyles from 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
//import 'react-bootstrap-table/css/react-bootstrap-table.css';
//import '../css/global.scss';

import { triggerResize } from '../utils/window';
import { setChart, setData, setTop6Chart } from '../utils/chart';


//import logo from './logo.svg';

// With CSS modules support
//import indexstyles from '../css/indexpage.scss';
import indexstyles from '../css/indexpage.css';
console.log("indexstyles: ", indexstyles);

import metrictemplate from '../json/metrictemplate.json'; 
import charttemplate from '../json/charttemplate.json';

// The below imports work on the test app but not here, I get this error:
// 'Warning: React.createElement: type is invalid -- expected a string (for built-in components) 
// or a class/function (for composite components) but got: object.'
//import * as HighChart from 'react-highcharts';

// So I have to use 'require' instead of import
const HighChart = require('react-highcharts'); 
require('highcharts/js/highcharts-more')(HighChart.Highcharts);

class IndexPageCollapse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // useDemo: true,
            // demoType: "Individual",

            // // Individual
            // category: "Adults",
            // range: "18-49",
            // useAdvancedTargetAudience: false,

            // account: "XAXIS US",
            // advertiser: "Alfa",
            // advancedTargetAudience: "CO_Alefa_Mar17",

            // startDate: "",
            // endDate: "",
            // dayparts: [],

            // markets: ["Albany, GA"],
            // incomeBands: ["$0-$29K"],
            // noOfAdults: [1],
            // noOfChildren: [0],
            // childZeroToSix: false,

            metric1: "reach",
            metric2: "affinity",
            metrictemplate: metrictemplate, 
            charttemplate: charttemplate,
            isloading: false,
            data: null
        }

        this.updateMetric1 = this.updateMetric1.bind(this);
        this.updateMetric2 = this.updateMetric2.bind(this);
        this.runClicked = this.runClicked.bind(this);
    }

    componentDidMount() {
        // Force resize due to Top6 charts rendering outside of flex box
        triggerResize();
    }

    updateMetric1(val) {
        this.setState({
            metric1: val
        });
    }

    updateMetric2(val) {
        this.setState({
            metric2: val
        });
    }

    runClicked(e) {
        e.preventDefault();

        // TODO: Get data from API
        const data = [
            {
                "id": 1,
                "network": "Azteca",
                "concentration": 76.99,
                "affinity": 124.4,
                "reach": 1.48,
                "grp": 1.49,
                "wastage": 23.01
            },
            {
                "id": 2,
                "network": "TeenNick",
                "concentration": 76.71,
                "affinity": 123.9,
                "reach": 2.47,
                "grp": 2.50,
                "wastage": 23.29
            },
            {
                "id": 3,
                "network": "Sprout",
                "concentration": 75.71,
                "affinity": 122.3,
                "reach": 1.18,
                "grp": 1.18,
                "wastage": 24.29
            },
            {
                "id": 4,
                "network": "Nicktoons",
                "concentration": 75.12,
                "affinity": 121.3,
                "reach": 2.73,
                "grp": 2.77,
                "wastage": 24.88
            },
            {
                "id": 5,
                "network": "FOX Deportes",
                "concentration": 74.94,
                "affinity": 121.1,
                "reach": 2.02,
                "grp": 2.04,
                "wastage": 25.06
            },
            {
                "id": 6,
                "network": "Disney XD",
                "concentration": 74.21,
                "affinity": 119.9,
                "reach": 2.70,
                "grp": 2.74,
                "wastage": 25.79
            },
            {
                "id": 7,
                "network": "Smoke",
                "concentration": 76.99,
                "affinity": 134.4,
                "reach": 1.48,
                "grp": 1.49,
                "wastage": 23.01
            },
            {
                "id": 8,
                "network": "PartyPoker",
                "concentration": 76.71,
                "affinity": 125.9,
                "reach": 2.47,
                "grp": 2.50,
                "wastage": 23.29
            },
            {
                "id": 9,
                "network": "Teabag",
                "concentration": 75.71,
                "affinity": 126.3,
                "reach": 1.18,
                "grp": 1.18,
                "wastage": 24.29
            },
            {
                "id": 10,
                "network": "Whatsup",
                "concentration": 75.12,
                "affinity": 121.3,
                "reach": 12.73,
                "grp": 2.77,
                "wastage": 24.88
            },
            {
                "id": 11,
                "network": "Breibart",
                "concentration": 74.94,
                "affinity": 116.1,
                "reach": 48.02,
                "grp": 22.04,
                "wastage": 5.06
            },
            {
                "id": 12,
                "network": "HolySmokes",
                "concentration": 74.21,
                "affinity": 114.9,
                "reach": 32.70,
                "grp": 2.74,
                "wastage": 25.79
            }
        ];

        this.setState({ data: null, isloading: true });

        setTimeout(() => {
            this.setState({ data: data, isloading: false });
        }, 2000);
    }

    render() {
        // Throws runtime error to test <ErrorBoundary>
        // const obj = null;
        // const a = obj.a;

        return (
            <div className={indexstyles.app}>
                <Header />
                <div className={indexstyles.main}>
                    <SelectionPanel onRunClicked={this.runClicked} />
                        { 
                            this.state.isloading ?
                            <Content>
                                <div style={{ textAlign: "center", height: "50vh", lineHeight: "50vh" }}>
                                    {/* Processing request, please wait... */}
                                    <img src="../img/wip.png" alt="In Progress" width="400" height="122" />
                                    <div className="progress">
                                        <div 
                                            className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            aria-valuenow="100" 
                                            aria-valuemin="0" 
                                            aria-valuemax="100" 
                                            style={{width: "100%"}}>
                                        </div>
                                    </div>
                                </div>
                            </Content> :
                            this.state.data ?
                            <Content>
                                <Top6 
                                    metric1={this.state.metric1} 
                                    metric2={this.state.metric2} 
                                    metrictemplate={this.state.metrictemplate} 
                                    onUpdate1={this.updateMetric1} 
                                    onUpdate2={this.updateMetric2}
                                    data={this.state.data} />
                                <hr />
                                <ChartHOC 
                                    metric1={this.state.metric1} 
                                    metric2={this.state.metric2} 
                                    charttemplate={this.state.charttemplate} 
                                    data={this.state.data} />
                                <Grid 
                                    metric1={this.state.metric1} 
                                    metric2={this.state.metric2} 
                                    data={this.state.data} /> 
                            </Content> : 
                            <Content>
                                <div style={{ textAlign: "left", height: "50vh", lineHeight: "50vh" }}>
                                    {/* Select parameters and then click Run */}
                                    <img src="../img/starthere.png" alt="In Progress" width="344" height="138" />
                                </div>
                            </Content>
                        } 
                </div>          
            </div>
        );
    }
}

function HeaderImpl({ history }) {
    return (
        <header className={indexstyles.header}>
        <ul>
          <li id={indexstyles.insights}><a onClick={() => history.push('/index')}>Cross-media Insights</a></li>
          <li id={indexstyles.planning}><a onClick={() => history.push('/home')}>Cross-media Planning</a></li>
        </ul>
      </header>
    );
}

const Header = withRouter(HeaderImpl);


class SelectionPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAtaExpanded: false
        }

        this.ataChanged = this.ataChanged.bind(this);
    }

    ataChanged() {
        $("#collapseExample").collapse(!this.state.isAtaExpanded ? "show" : "hide")

        this.setState((prevState, props) => {
            return {
                isAtaExpanded: !prevState.isAtaExpanded
            }
        })
    }

    render () {
        const {isAtaExpanded} = this.state;

        return (
            <aside className={indexstyles.panel}>
                <form>
                    <div className="form-group">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id={indexstyles.udemo} name="usedemo" value="1" />
                            <label htmlFor={indexstyles.udemo} className="form-check-label">Use Demographic</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input type='radio' className="form-check-input" id={indexstyles.idemo} name='demo' value="individual" />
                            <label htmlFor={indexstyles.idemo} className="form-check-label">Individual Demographics</label>          
                        </div>
                        <div className="form-check">
                            <input type='radio' className="form-check-input" id={indexstyles.hdemo} name='demo' value="household" />
                            <label htmlFor={indexstyles.hdemo} className="form-check-label">Household Demographics</label>          
                        </div>
                    </div>
                    <div className="form-group">
                        <h4><strong>Cross-media Demographics</strong></h4>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor={indexstyles.category}>Category</label>          
                                <select id={indexstyles.category} className="form-control"> 
                                    <option value='adults'>Adults</option> 
                                    <option value='men'>Men</option> 
                                    <option value='women'>Women</option> 
                                    <option value='education'>Education</option> 
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor={indexstyles.range}>Range</label>          
                                <select id={indexstyles.range} className="form-control"> 
                                    <option value='1849'>18-49</option> 
                                    <option value='2554'>25-54</option> 
                                    <option value='65+'>65+</option> 
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input type='checkbox' className="form-check-input" id={indexstyles.ata} name='ata' value={isAtaExpanded} onChange={this.ataChanged} />
                            <label htmlFor={indexstyles.ata} className="form-check-label">Use Advanced Target Audience</label>          
                        </div>
                    </div>

                    {/* ATA toggle transition using bootstrap */}
                    <div className="collapse" id="collapseExample">
                        <div className="form-group">
                            <h4><strong>Advanced Target Audience</strong></h4>
                        </div>
                        <div className="form-group">
                            <label htmlFor={indexstyles.account}>Account</label>          
                            <select id={indexstyles.account} className="form-control"> 
                                <option value=''>XAXIS US</option> 
                                <option value=''>Wavemaker US</option> 
                                <option value=''>Grey US</option> 
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor={indexstyles.advertiser}>Advertiser</label>          
                            <select id={indexstyles.account} className="form-control"> 
                                <option value=''>AARP</option> 
                                <option value=''>ABI</option> 
                                <option value=''>ADT</option> 
                                <option value=''>Abbott</option> 
                                <option value=''>Abbot PediaSure Hispanic</option> 
                                <option value=''>Aetna</option> 
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor={indexstyles.advancedtargetaudience}>Advanced Target Audience</label>          
                            <select id={indexstyles.account} className="form-control"> 
                                <option value=''>Join AARP 2017</option> 
                                <option value=''>Join AARP 2017 New Member Confirmation</option> 
                                <option value=''>Join AARP 2017 Renew Confirmation</option> 
                            </select>
                        </div>
                    </div>

        
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                    <label htmlFor={indexstyles.startrange}>Date Range</label>          
                            </div>
                            <div className="w-100"></div>
                            <div className="col d-flex flex-nowrap content-justify-center">
                                <select id={indexstyles.startrange} className="form-control"> 
                                    <option value=''>2017-04-18</option> 
                                </select>
                                <span className="pt-1 px-1 border-top border-bottom bg-white" style={{borderColor: "#ced4da", bborderRadius: ".25rem"}}>
                                to
                                </span>
                                <select id={indexstyles.endrange} className="form-control"> 
                                    <option value=''>2017-04-24</option> 
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor={indexstyles.daypartfilter}>Daypart Filter (Optional)</label>          
                        <select id={indexstyles.daypartfilter} className="form-control"> 
                            <option value=''>Daytime 9AM-4PM</option> 
                            <option value=''>Early Fringe 4-7PM</option> 
                            <option value=''>Prime Access 7-8PM</option> 
                            <option value=''>Prime 8-11PM</option> 
                        </select>
                    </div>
                    <div className="form-group py-2">
                        <button type="button" className="btn btn-sm btn-light" value="run" onClick={this.props.onRunClicked}>Run</button>
                    </div>
                    <hr />
                    <div className={'${indexstyles.helptext} form-group'}>
                        <strong>GRP:</strong>&nbsp;
                        gross rating points, number of impressions as percentage of target audience
                    </div>
                    <div className={'${indexstyles.helptext} form-group'}>
                        <strong>Wastage:</strong>&nbsp;
                        percentage of TV network audience that is not in target audience
                    </div>
                    <div className={'${indexstyles.helptext} form-group'}>
                        <strong>Concentration:</strong>&nbsp;
                        percentage of TV network audience that is in target audience
                    </div>
                    <div className={'${indexstyles.helptext} form-group'}>
                        <strong>Affinity Index:</strong>&nbsp;
                        reach into target audience by TV network relative to national audience
                    </div>
                    <div className={'${indexstyles.helptext} form-group'}>
                        <strong>Net Reach:</strong>&nbsp;
                        deduplicated reach into target audience by TV network
                    </div>
                </form>
            </aside>
        )
    };
}


function Content(props) {
    return <div className={indexstyles.content}>{props.children}</div>
}

class Top6 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let names = this.props.data
            .filter((item, index) => index < 6)
            .map(item => {
            // TODO: For now just return first 6
            return item.network;
        });               

        let data1 = this.props.data
            .filter((item, index) => index < 6)
            .map(item => {
            // TODO: For now just return first 6
            return item[this.props.metric1];
        });               

        const chart1 = setTop6Chart(this.props.metric1, this.props.metrictemplate, names, data1);
        console.log("Top6 chart1: ", chart1);

        let data2 = this.props.data
            .filter((item, index) => index < 6)
            .map(item => {
            // TODO: For now just return first 6
            return item[this.props.metric2];
        });               

        const chart2 = setTop6Chart(this.props.metric2, this.props.metrictemplate, names, data2);
        console.log("Top6 chart2: ", chart2);

        return (
            <div className={indexstyles.top6}>
                <div className={indexstyles.top6Metrics}>
                <div>
                    <label htmlFor={indexstyles.metric1}><strong>Select first metric:</strong></label>
                </div>
                <div>
                    <select 
                        id={indexstyles.metric1} 
                        className={indexstyles.metric} 
                        value={this.props.metric1} 
                        onChange={evt => this.props.onUpdate1(evt.target.value)}> 
                    <option value='reach'>Net Reach</option> 
                    <option value='grp'>GRP</option> 
                    </select>
                </div>
                <div>
                    <label htmlFor={indexstyles.metric2}><strong>Select second metric:</strong></label>
                </div>
                <div>
                    <select 
                        id={indexstyles.metric2} 
                        className={indexstyles.metric} 
                        value={this.props.metric2}
                        onChange={evt => this.props.onUpdate2(evt.target.value)}> 
                    <option value='wastage'>Wastage</option> 
                    <option value='concentration'>Concentration</option> 
                    <option value='affinity'>Affinity Index</option> 
                    </select>
                </div>
                <div>
                    <label htmlFor={indexstyles.metric3}><strong>Network filter:</strong></label>
                </div>
                <div>
                    <select id={indexstyles.metric3} className={indexstyles.metric}>
                    <option value=""></option> 
                    <option value='A&E'>A&E</option> 
                    <option value='ABC'>ABC</option> 
                    <option value='AMC'>AMC</option> 
                    <option value='American Heroes Channel'>American Heroes Channel</option> 
                    </select>
                </div>
                </div>
                <div className={indexstyles.top6Metricby1}>
                    <div className={indexstyles.top6Metricchart}>
                        <div className={indexstyles.top6Metricchartwrapper}>
                            <HighChart config={chart1} />
                            {/* top 6 metrics 1 */}
                        </div>
                    </div>
                </div>
                <div className={indexstyles.top6Metricby2}>
                    <div className={indexstyles.top6Metricchart}>
                        <div className={indexstyles.top6Metricchartwrapper}>
                            <HighChart config={chart2} />
                            {/* top 6 metrics 2 */}
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const chartOptions = 
            setChart(
                "All Networks",
                this.props.metric1, 
                this.props.metric2, 
                this.props.charttemplate,
                setData(
                    this.props.metric1, 
                    this.props.metric2, 
                    this.props.data));

        console.log("Chart updated chart options: ", chartOptions);

        return (
            <div className={indexstyles.chart}>
                <div className={indexstyles.chartwrapper}>
                    <HighChart config={chartOptions} />
                    {/* <span>Chart</span> */}
                </div>
            </div>
        );
    }
}

function withChart(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: []
            }
        }

        componentDidMount() {
            this.setState({
                data : [
                    {
                        "id": 1,
                        "network": "Azteca",
                        "concentration": 76.99,
                        "affinity": 124.4,
                        "reach": 1.48,
                        "grp": 1.49,
                        "wastage": 23.01
                    },
                    {
                        "id": 2,
                        "network": "TeenNick",
                        "concentration": 76.71,
                        "affinity": 123.9,
                        "reach": 2.47,
                        "grp": 2.50,
                        "wastage": 23.29
                    },
                    {
                        "id": 3,
                        "network": "Sprout",
                        "concentration": 75.71,
                        "affinity": 122.3,
                        "reach": 1.18,
                        "grp": 1.18,
                        "wastage": 24.29
                    },
                    {
                        "id": 4,
                        "network": "Nicktoons",
                        "concentration": 75.12,
                        "affinity": 121.3,
                        "reach": 2.73,
                        "grp": 2.77,
                        "wastage": 24.88
                    },
                    {
                        "id": 5,
                        "network": "FOX Deportes",
                        "concentration": 74.94,
                        "affinity": 121.1,
                        "reach": 2.02,
                        "grp": 2.04,
                        "wastage": 25.06
                    },
                    {
                        "id": 6,
                        "network": "Disney XD",
                        "concentration": 74.21,
                        "affinity": 119.9,
                        "reach": 2.70,
                        "grp": 2.74,
                        "wastage": 25.79
                    },
                    {
                        "id": 7,
                        "network": "Smoke",
                        "concentration": 76.99,
                        "affinity": 134.4,
                        "reach": 1.48,
                        "grp": 1.49,
                        "wastage": 23.01
                    },
                    {
                        "id": 8,
                        "network": "PartyPoker",
                        "concentration": 76.71,
                        "affinity": 125.9,
                        "reach": 2.47,
                        "grp": 2.50,
                        "wastage": 23.29
                    },
                    {
                        "id": 9,
                        "network": "Teabag",
                        "concentration": 75.71,
                        "affinity": 126.3,
                        "reach": 1.18,
                        "grp": 1.18,
                        "wastage": 24.29
                    },
                    {
                        "id": 10,
                        "network": "Whatsup",
                        "concentration": 75.12,
                        "affinity": 121.3,
                        "reach": 12.73,
                        "grp": 2.77,
                        "wastage": 24.88
                    },
                    {
                        "id": 11,
                        "network": "Breibart",
                        "concentration": 74.94,
                        "affinity": 116.1,
                        "reach": 48.02,
                        "grp": 22.04,
                        "wastage": 5.06
                    },
                    {
                        "id": 12,
                        "network": "HolySmokes",
                        "concentration": 74.21,
                        "affinity": 114.9,
                        "reach": 32.70,
                        "grp": 2.74,
                        "wastage": 25.79
                    }
                ]
            })
        }

        render() {
            return <WrappedComponent {...this.props} data={this.state.data} />
        }
    }
}

const ChartHOC = withChart(Chart);


class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.showsTotal = this.showsTotal.bind(this);
    }

    showsTotal(start, to, total) {
        return (
            <p style={ { color: 'blue' } }>
                Showing { start } to { to } of { total } entries
            </p>
        );
    }

    render() {
        const options = {
            sizePerPageList: [ 
                { text: '5', value: 5 }, 
                { text: '10', value: 10 },  
                { text: '25', value: 25 },  
                //{ text: 'All', value: this.props.data.length } 
            ],
            sizePerPage: 5,
            pageStartIndex: 1,

            paginationPosition: "bottom" //,
            //paginationShowsTotal: this.showsTotal
        }

        return (
            <div className={indexstyles.grid}>
                <div className={indexstyles.gridwrapper}>
                    <BootstrapTable data={this.props.data} options={options} striped={true} hover={true} pagination version="4">
                        <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField="network" dataAlign="center" dataSort={true}>Network</TableHeaderColumn>
                        <TableHeaderColumn dataField="concentration" dataAlign="center" dataSort={true}>Concentration</TableHeaderColumn>
                        <TableHeaderColumn dataField="affinity" dataAlign="center" dataSort={true}>Affinity</TableHeaderColumn>
                        <TableHeaderColumn dataField="reach" dataAlign="center" dataSort={true}>Reach</TableHeaderColumn>
                        <TableHeaderColumn dataField="grp" dataAlign="center" dataSort={true}>GRP</TableHeaderColumn>
                        <TableHeaderColumn dataField="wastage" dataAlign="center" dataSort={true}>Wastage</TableHeaderColumn>
                    </BootstrapTable>
                    {/* Grid of metric1 and metric2 */}
                </div>
            </div>
        );
    }
}


// ErrorBoundary
// Catches runtime errors in child components (this.props.children) in ctr, lifecycle, and render methods 
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        hasError: false,  
        error: null,
        info: null
        };
    }

    componentDidCatch(error, info) {
        console.log("==> componentDidCatch called, error: ", error, ", info: ", info)

        // Display fallback UI
        this.setState({ hasError: true, error: error, info: info });
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                <h1>Something went wrong.</h1>
                <h3>{this.state.error.toString()}</h3>
                </div>
            );
        }
        else {
            return this.props.children;
        }
    }
}


export default IndexPageCollapse;
export { ErrorBoundary };
