import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Snapshot, AppBar } from '../pages/homepage';


describe('HomePage Tests', () => {

    it('should test Snapshot component', () => {
        const tree = renderer.create(
            <Snapshot />
        )

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should test AppBar component', () => {
        const apps = [
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

        const tree = renderer
            .create(<AppBar apps={apps} />)
            .toJSON()

        console.log(tree)

        expect(tree).toMatchSnapshot();
    });


});



