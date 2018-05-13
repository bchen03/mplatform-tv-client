import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage, { getPosts, getPostsAsync } from '../pages/loginpage';

Enzyme.configure({ adapter: new Adapter() });

describe('Login Tests', () => {

    // Before all tests are run, only executed once
    beforeAll(() => {
        // console.log('beforeAll');
    });

    // Before each test is run
    beforeEach(() => {
        // console.log('beforeEach');
    });

    // After each test is run
    afterEach(() => {
        // console.log('afterEach');
    })

    // After all tests are run, only executed once
    afterAll(() => {
        // console.log('afterAll');
    })

    // it() or test(), they are aliases of each other
    it('is a test to calculate \'1 + 2 = 3\' to make sure Jest is working correctly', () => {
        // console.log('is a test to calculate \'1 + 2 = 3\' to make sure Jest is working correctly');
        expect(1 + 2).toEqual(3);   // Basic test using toEqual matcher
    });

    it('should render <LoginPage/> and not throw an exception', () => {
        // console.log('should render <LoginPage/> and not throw an exception');
        const div = document.createElement('div');
        ReactDOM.render(<LoginPage/>, div);
    });

    // async
    it('async using done', done => {
        setTimeout(done, 100);
    })

    it('async using Promise', () => {
        return new Promise(resolve => setTimeout(resolve, 100))
    })

    // Must import "redux-saga" for delay()
    //it('async using async/await', async () => await delay(100))

    it('should call getPosts() in loginpage', done => {
        getPosts()
            .then(response => {
                expect(response.data.length).toEqual(100)
                done()
            })
    })

    it('should call getPostsAsync() in loginpage', () => {
        expect.assertions(1)
        return getPostsAsync().then(response => {
            expect(response.data.length).toEqual(100)
        })
    })

});



