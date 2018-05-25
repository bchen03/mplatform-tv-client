import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// React Bootstrap table
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import bootstyles from 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import { triggerResize } from '../utils/window';

//import logo from './logo.svg';

// Without CSS modules support
//import '../css/indexpage.scss';

// With CSS modules support
import indexstyles from '../css/indexpage.scss';
console.log("indexstyles: ", indexstyles);

import metric1chart from '../json/metric1chart.json';
import metric2chart from '../json/metric2chart.json';
import chartoptions from '../json/chartoptions.json';
import tabledata from '../json/tabledata.json';

console.log("chartoptions: ", chartoptions);


// The below imports work on the test app but not here, I get this error:
// 'Warning: React.createElement: type is invalid -- expected a string (for built-in components) 
// or a class/function (for composite components) but got: object.'
//import * as HighChart from 'react-highcharts';

// So I have to use 'require' instead of import
const HighChart = require('react-highcharts'); 
require('highcharts/js/highcharts-more')(HighChart.Highcharts);

class IndexPage extends Component {
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

            metric1chart: metric1chart,
            metric2chart: metric2chart, 
            chartoptions: chartoptions,
            tabledata: tabledata
        }

        // this.columns = [
        //   {
        //     Header: "Network",
        //     id: "network",
        //     accessor: d => d.network
        //   },
        //   {
        //     Header: "Concentration",
        //     id: "concentration",
        //     accessor: d => d.concentration
        //   },
        //   {
        //     Header: "Affinity Index",
        //     id: "affinity",
        //     accessor: d => d.affinity
        //   },
        //   {
        //     Header: "Reach",
        //     id: "reach",
        //     accessor: d => d.reach
        //   },
        //   {
        //     Header: "GRP",
        //     id: "grp",
        //     accessor: d => d.grp
        //   },
        //   {
        //     Header: "Wastage",
        //     id: "wastage",
        //     accessor: d => d.wastage
        //   },
        // ]
    }

    componentDidMount() {
        // Force resize due to Top6 charts rendering outside of flex box
        triggerResize();
    }

    render() {
        // Throws runtime error to test <ErrorBoundary>
        // const obj = null;
        // const a = obj.a;

        return (
        <div className={indexstyles.app}>
            <Header />
            <div className={indexstyles.main}>
                <SelectionPanel />
                <Content>
                    <Top6 
                        metric1={this.state.metric1} 
                        metric2={this.state.metric2} 
                        metric1chart={this.state.metric1chart} 
                        metric2chart={this.state.metric2chart} />
                    <hr />
                    <Chart 
                        metric1={this.state.metric1} 
                        metric2={this.state.metric2} 
                        chartoptions={this.state.chartoptions} />
                    <Grid 
                        metric1={this.state.metric1} 
                        metric2={this.state.metric2} 
                        data={this.state.tabledata} 
                        columns={this.columns} />
                </Content>
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


function SelectionPanel() {
    return (
        <aside className={indexstyles.panel}>
            <div>
                <input type="checkbox" id={indexstyles.udemo} name="usedemo" value="1" />
                <label htmlFor={indexstyles.udemo}>Use Demographic</label>
            </div>
            <div>
                <input type='radio' id={indexstyles.idemo} name='demo' value="individual" />
                <label htmlFor={indexstyles.idemo}>Individual Demographics</label>          
            </div>
            <div>
                <input type='radio' id={indexstyles.hdemo} name='demo' value="household" />
                <label htmlFor={indexstyles.hdemo}>Household Demographics</label>          
            </div>
            <div>
                <h4><strong>Cross-media Demographics</strong></h4>
            </div>
            <div>
                <span>
                    <label htmlFor={indexstyles.category}>Category</label>          
                    <select id={indexstyles.category}> 
                    <option value='adults'>Adults</option> 
                    <option value='men'>Men</option> 
                    <option value='women'>Women</option> 
                    <option value='education'>Education</option> 
                    </select>
                </span>
                <span>
                <label htmlFor={indexstyles.range}>Range</label>          
                    <select id={indexstyles.range}> 
                    <option value='1849'>18-49</option> 
                    <option value='2554'>25-54</option> 
                    <option value='65+'>65+</option> 
                    </select>
                </span>
            </div>
            <div>
                <input type='checkbox' id={indexstyles.ata} name='ata' value='true' />
                <label htmlFor={indexstyles.ata}>Use Advanced Target Audience</label>          
            </div>
            <div>
                <span>
                    <label htmlFor={indexstyles.startrange}>Date Range</label>          
                    <select id={indexstyles.startrange}> 
                    <option value=''>2017-04-18</option> 
                    </select>
                </span>
                <span>to</span>
                <span>
                    <select id={indexstyles.endrange}> 
                    <option value=''>2017-04-24</option> 
                    </select>
                </span>
            </div>
            <div>
                <label htmlFor={indexstyles.daypartfilter}>Daypart Filter (Optional)</label>          
                <select id={indexstyles.daypartfilter}> 
                    <option value=''>Daytime 9AM-4PM</option> 
                    <option value=''>Early Fringe 4-7PM</option> 
                    <option value=''>Prime Access 7-8PM</option> 
                    <option value=''>Prime 8-11PM</option> 
                </select>
            </div>
            <div>
                <button value="run">Run</button>
            </div>
            <hr />
            <div className={indexstyles.helptext}>
                <strong>GRP:</strong>&nbsp;
                gross rating points, number of impressions as percentage of target audience
            </div>
            <div className={indexstyles.helptext}>
                <strong>Wastage:</strong>&nbsp;
                percentage of TV network audience that is not in target audience
            </div>
            <div className={indexstyles.helptext}>
                <strong>Concentration:</strong>&nbsp;
                percentage of TV network audience that is in target audience
            </div>
            <div className={indexstyles.helptext}>
                <strong>Affinity Index:</strong>&nbsp;
                reach into target audience by TV network relative to national audience
            </div>
            <div className={indexstyles.helptext}>
                <strong>Net Reach:</strong>&nbsp;
                deduplicated reach into target audience by TV network
            </div>
        </aside>
    )
}

function Content(props) {
    return <div className={indexstyles.content}>{props.children}</div>
}

class Top6 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={indexstyles.top6}>
                <div className={indexstyles.top6Metrics}>
                <div>
                    <label htmlFor={indexstyles.metric1}><strong>Select first metric:</strong></label>
                </div>
                <div>
                    <select id={indexstyles.metric1} className={indexstyles.metric} defaultValue={this.props.metric1}> 
                    <option value='reach'>Net Reach</option> 
                    <option value='grp'>GRP</option> 
                    </select>
                </div>
                <div>
                    <label htmlFor={indexstyles.metric2}><strong>Select second metric:</strong></label>
                </div>
                <div>
                    <select id={indexstyles.metric2} className={indexstyles.metric} defaultValue={this.props.metric2}> 
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
                            <HighChart config={this.props.metric1chart} />
                            {/* top 6 metrics 1 */}
                        </div>
                    </div>
                </div>
                <div className={indexstyles.top6Metricby2}>
                    <div className={indexstyles.top6Metricchart}>
                        <div className={indexstyles.top6Metricchartwrapper}>
                            <HighChart config={this.props.metric2chart} />
                            {/* top 6 metrics 2 */}
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

class Chart extends React.Component {
    render() {
        return (
            <div className={indexstyles.chart}>
                <div className={indexstyles.chartwrapper}>
                    <HighChart config={this.props.chartoptions} />
                    {/* <span>Chart</span> */}
                </div>
            </div>
        );
    }
}

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
                <BootstrapTable data={this.props.data} options={options} striped={true} hover={true} pagination>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="network" dataAlign="center" dataSort={true}>Network</TableHeaderColumn>
                    <TableHeaderColumn dataField="concentration" dataAlign="center" dataSort={true}>Concentration</TableHeaderColumn>
                    <TableHeaderColumn dataField="affinity" dataAlign="center" dataSort={true}>Affinity</TableHeaderColumn>
                    <TableHeaderColumn dataField="reach" dataAlign="center" dataSort={true}>Reach</TableHeaderColumn>
                    <TableHeaderColumn dataField="grp" dataAlign="center" dataSort={true}>GRP</TableHeaderColumn>
                    <TableHeaderColumn dataField="wastage" dataAlign="center" dataSort={true}>Wastage</TableHeaderColumn>
                </BootstrapTable>
                {/* <ReactTable defaultPageSize={5} data={this.props.data} columns={this.props.columns} /> */}
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


export default IndexPage;
export { ErrorBoundary };
