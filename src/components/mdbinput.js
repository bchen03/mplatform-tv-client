import React from 'react';
import PropTypes from 'prop-types';

// import bootstyles from 'mdbootstrap/css/bootstrap.min.css';
// console.log("mdbinput bootstyles: ", bootstyles);
// import mdbstyles from 'mdbootstrap/css/mdb.min.css';
// console.log("mdbinput mdbstyles: ", mdbstyles);


// Component work-around for a bug in MDB inputs where 
// label doesn't move up when input gets focus or stay
// up when there's a value in the input field 
class MdbInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            className: ""
        }

        this.init = this.init.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
        this.activeFocus = this.activeFocus.bind(this);
        this.blurFocus = this.blurFocus.bind(this);
    }

    componentDidMount() {
        this.init();
    }

    init() {
        if (this.state.value) {
            this.activeFocus();
        }
    }

    inputChanged(e) {
        console.log("MdbInput.inputChanged:", e.target.value);
        this.setState({value: e.target.value});     // Needed to set proper label position 
        this.props.inputChanged(e);                 // Set input value in parent
    }

    activeFocus() {
        //this.setState({className: mdbstyles.active});
        this.setState({className: "active"});
    }

    blurFocus() {
        //this.setState({className: this.state.value ? mdbstyles.active : ""});
        this.setState({className: this.state.value ? "active" : ""});
    }

    render() {
        return (
            // Without CSS Modules
            <div className="md-form form-sm" sstyle={{border: "3px dashed red"}}>
                <i className="grey-text"></i>
                <input 
                    type={this.props.type} 
                    id={this.props.id} 
                    value={this.props.value} 
                    onFocus={this.activeFocus} 
                    onBlur={this.blurFocus} 
                    onChange={this.inputChanged} 
                    className="form-control" 
                    sstyle={{border: "3px dashed blue", width: "100%"}} />
                <label htmlFor={this.props.id} className={this.state.className}>{this.props.name}</label>
            </div>

            // With CSS Modules
            // <div className={`${mdbstyles["md-form"]} ${mdbstyles["form-sm"]}`} sstyle={{border: "3px dashed red"}}>
            //     <i className={`${mdbstyles["grey-text"]}`}></i>
            //     <input 
            //         type={this.props.type} 
            //         id={this.props.id} 
            //         value={this.props.value} 
            //         onFocus={this.activeFocus} 
            //         onBlur={this.blurFocus} 
            //         onChange={this.inputChanged} 
            //         className={`${bootstyles["form-control"]}`} 
            //         sstyle={{border: "3px dashed blue", width: "100%"}} />
            //     <label htmlFor={this.props.id} className={this.state.className}>{this.props.name}</label>
            // </div>
        );
    }
}

MdbInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputChanged: PropTypes.func.isRequired
}

export default MdbInput;