import React from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import axios from 'axios';

import MdbInput from '../components/mdbinput';

// import 'mdbootstrap/css/bootstrap.min.css';
// import 'mdbootstrap/css/mdb.min.css';

// import bootstyles from 'mdbootstrap/css/bootstrap.min.css';
// console.log("loginpage bootstyles: ", bootstyles);
// import mdbstyles from 'mdbootstrap/css/mdb.min.css';
// console.log("loginpage mdbstyles: ", mdbstyles);


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: []
        }

        this.inputChanged = this.inputChanged.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    inputChanged(index, e) {
        console.log("LoginPage.inputChanged index:", index, ", value: ", e.target.value); 
        let newInputs = [...this.state.inputs];
        newInputs[index] = e.target.value;
        this.setState({ inputs: newInputs }); 
    }

    loginClicked(e) {
        e.preventDefault();
        console.log("LoginPage.loginClicked...");

        if (this.state.inputs[0]) {
            sessionStorage.setItem('email', this.state.inputs[0]);
        }

        this.props.history.push("/index");
    }

    render() {
        return (
            <div className="container-fluid">
                <header className="mx-3">
                    <img src="../img/mplatform2.jpg" height="90px" width="90px" alt="mPlatform" />
                </header>
                <div className="container my-4">
                    <form style={{ width: "600px", margin: "0 auto"}} sstyle={{ border: "3px dashed green"}}>
                        <p className="h5 text-center mb-4">Sign in</p>

                        <MdbInput type="text" id="email" name="Your Email" value={this.state.inputs[0] || ""} inputChanged={(e) => this.inputChanged(0, e)} />
                        <MdbInput type="password" id="password" name="Your Password" value={this.state.inputs[1] || ""} inputChanged={(e) => this.inputChanged(1, e)} />

                        <div className="mt-5 text-center">                        
                            <a className="btn btn-primary btn-sm" onClick={this.loginClicked}>Sign in</a>
                        </div>
                    </form>
                </div>
            </div>
            
            // <div className={bootstyles["container-fluid"]}>
            //     <header className={bootstyles["mx-3"]}>
            //         <img src="../img/mplatform2.jpg" height="90px" width="90px" alt="mPlatform" />
            //     </header>
            //     <div className={`${bootstyles.container} ${mdbstyles["my-4"]}`}>
            //         <form style={{ width: "600px", margin: "0 auto"}} sstyle={{ border: "3px dashed green"}}>
            //             <p className={`${bootstyles.h5} ${bootstyles["text-center"]} ${bootstyles["mb-4"]}`}>Sign in</p>

            //             <MdbInput type="text" id="email" name="Your Email" value={this.state.inputs[0] || ""} inputChanged={(e) => this.inputChanged(0, e)} />
            //             <MdbInput type="password" id="password" name="Your Password" value={this.state.inputs[1] || ""} inputChanged={(e) => this.inputChanged(1, e)} />

            //             <div className={`${bootstyles["mt-5"]} ${bootstyles["text-center"]}`}>                        
            //                 <a className={`${mdbstyles["btn"]} ${mdbstyles["btn-primary"]} ${mdbstyles["btn-sm"]}`} onClick={this.loginClicked}>Sign in</a>
            //             </div>
            //         </form>
            //     </div>
            // </div>
        );
    }
}

function getPosts() {
    return axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response;
            });
}

function getPostsAsync() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}

export default LoginPage;
export { getPosts, getPostsAsync };

