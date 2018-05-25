import React from "react";
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import LoginPage from "../pages/loginpage";
import HomePage from "../pages/homepage";
import IndexPage from "../pages/indexpage";

//import {MessageHoc, ColorHoc, PaymentView} from './recompose';

const App = (props) => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={LoginPage}/>
                    <Route path="/home" component={HomePage}/>
                    <Route path="/index" component={IndexPage}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
}

// export class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 Hello from mPlatform TV app!
//             </div>
//         );
//     }
// }

// Maps Redux state store to this.props
// For posts: allPostsSelector(state):
//  posts: component can access slice of store data through props, i.e., this.props.posts
//  allPostsSelector(): selector function that returns a slice of store data for use in component
// function mapStateToProps(state, props) {
//     console.log("mapStateToProps state: ", state, ", props: ", props);
//     return {
//         posts: postsSelector(state),      
//         top25Posts: top25PostsSelector(state),
//         title: titleSelector(state),
//         paymentType: paymentTypeSelector(state)
//     };
// }

// Function to dispatch actions from this component 
// You can now post an action through this.props.getPosts(), or through store.dispatch() (Look at index.js for an example)
// fetchPosts is an action in action-posts.js
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         //getPosts: fetchPosts,
//         getPosts, 
//         changeTitleColor,
//         changePaymentType
//     }, 
//     dispatch);
// }

// Connect both functions above to Redux
// It's important to "export default" the result of connect() so the component is properly hooked up
// In the top level index.js, here's what the import should look like: import App from './components/app.js'
//export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;