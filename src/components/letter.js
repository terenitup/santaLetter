import React, { Component } from 'react';

import Input from './input';

const LETTER_INPUTS = {
    name: '',
    age: '',
    city: '',
    state: '',
    helpedFirst: '',
    helpedSecond: '',
    helpedThird: '',
    howGood: '',
    howHappy: '',
    gift1: '',
    gift2: '',
    gift3: ''
}
class Letter extends Component {
    
    constructor() {
        super()
        this.state = LETTER_INPUTS;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }


    // handleInputChange(event) {
    //     this.setState({ [event.target.name]: event.target.value })
    // }
    // handleFormSubmit(event) {
    //     event.preventDefault()
    //     if(this.state.contentVisible) {
    //         this.setState(INITIAL_STATE)
    //     } else {
    //         this.setState({ contentVisible: true })
    //     }
    // }
    render() {
        const inputData = [
            {title: 'Name', state: this.state.name, name: 'name'}
        ]
        return (
            <div className="letter">
                <div className="card__inputs">
                {
                    inputData.map(data => Input( (data), this.handleInputChange ))
                }
                </div>
                {/* <button type="submit">{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clear Form'}</button> */}
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </div>
        )
    }
}

export default Letter;