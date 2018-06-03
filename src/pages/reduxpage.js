import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import indexstyles from '../css/indexpage.scss';

class ReduxPage extends Component {
    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)
        this.asleep = this.asleep.bind(this)
        this.showResults = this.showResults.bind(this)
    }

    asleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async showResults(value) {
        await this.asleep(1500)
        window.alert("==> Submitted:\n\n" + JSON.stringify(value))
    }

    submit(values) {
        console.log("==> Values:", values)
    }

    render() {
        return <SelectionForm onSubmit={this.showResults} />
        // return <SelectionForm onSubmit={this.submit} />
    }
}

const validate = values => {
    const errors = {}

    // if (!values.usedemo) {
    //     errors.usedemo = 'Required'
    // }
    // if (!values.demo) {
    //     errors.demo = 'Required'
    // }

    return errors
}

let SelectionForm = props => {
    const { handleSubmit, submitting } = props
    return (
        <aside className={indexstyles.panel}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-check">
                        <Field name="usedemo" component="input" type="checkbox" className="form-check-input" id={indexstyles.udemo} value="1" />
                        <label htmlFor={indexstyles.udemo} className="form-check-label">Use Demographic</label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <Field name='demo' component="input" type='radio' label="Individual demo" className="form-check-input" id={indexstyles.idemo} value="individual" />
                        <label htmlFor={indexstyles.idemo} className="form-check-label">Individual Demographics</label>          
                    </div>
                    <div className="form-check">
                        <Field name='demo' component="input" type='radio' label="Household demo" className="form-check-input" id={indexstyles.hdemo} value="household" />
                        <label htmlFor={indexstyles.hdemo} className="form-check-label">Household Demographics</label>          
                    </div>
                </div>
                <div className="form-group py-2">
                    <button type="submit" className="btn btn-sm btn-light" disabled={submitting} value="run">Run</button>
                </div>
            </form>
        </aside>
    )
}

SelectionForm = reduxForm({
    form: 'selection',
    destroyOnUnmount: false,
    validate
})(SelectionForm)

export default ReduxPage
