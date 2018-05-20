import React from 'react';
import PropTypes from 'prop-types';
import Form from "react-jsonschema-form";

class JsonSchemaPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apps: [
                { 
                    id: 1,
                    name: 'Media Index'
                },
                { 
                    id: 2,
                    name: 'ACP'
                },
                { 
                    id: 3,
                    name: 'OLS'
                },
            ]
        }

        this.change = this.change.bind(this);
        this.error = this.error.bind(this);
        this.submit = this.submit.bind(this);
    }

    change({ formData }) {
        console.log("change: ", formData);
    }

    error(errors) {
        console.log("errors: ", errors);
    }

    submit({ formData }) {
        console.log("submit: ", formData);
    }

    render() {
        const schema = {
            title: "Todo",
            type: "object",
            required: ["title"],
            properties: {
              title: {type: "string", title: "Title", default: "A new task"},
              done: {type: "boolean", title: "Done?", default: false}
            }
        };

        return (
            <React.Fragment>
                <div className='container-fluid m-3'>
                    <div className='row'>
                        <div className='col-6 border rounded' style={{ backgroundColor: '#fafafa'}}>
                            <Form schema={schema}
                                onChange={this.change}
                                onSubmit={this.submit}
                                onError={this.error}>
                                <button type='submit' style={{marginBottom: '20px'}}>Run</button>
                            </Form>
                        </div>
                    </div>
                </div>

                <div style={{ margin: "5px"}}>
                    <AppBar apps={this.state.apps} />
                </div>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='cbg col'>
                            One of three columns
                        </div>
                        <div className='col c2'>
                            One of three columns
                        </div>
                        <div className='col c3'>
                            One of three columns
                        </div>    
                    </div>            
                </div>
            </React.Fragment>
        );
    }
}

const AppBar = props => {
    const style = {
        border: '1px solid #6afa6ba',
        width: '10%'
    }

    return (
        props.apps.map(app => {
            return <div className='d-flex flex-column flex-nowrap' key={app.id} style={style}>{app.name}</div>
        })
    );
}

AppBar.propTypes = {
    apps: PropTypes.array.isRequired
}


const Snapshot = props => <div>snaphost!</div>


export default HomePage;
export { Snapshot, AppBar };
