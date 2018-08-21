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
            {title: 'Name', state: this.state.name, name: 'name'},
            {title: 'Age', state: this.state.age, name: 'age'},
            {title: 'City', state: this.state.city, name: 'city'},
            {title: 'State', state: this.state.state, name: 'state'},
            {title: 'HelpedPerson', state: this.state.helpedPerson, name: 'helpedPerson'},
            {title: 'HelpedFirst', state: this.state.helpedFirst, name: 'helpedFirst'},
            {title: 'HelpedSecond', state: this.state.helpedSecond, name: 'helpedSecond'},
            {title: 'HelpedThird', state: this.state.helpedThird, name: 'helpedThird'},
            {title: 'HowGood', state: this.state.howGood, name: 'howGood'},
            {title: 'Gender', state: this.state.gender, name: 'gender'},
            {title: 'HowHappy', state: this.state.howHappy, name: 'howHappy'},
            {title: 'Gift1', state: this.state.gift1, name: 'gift1'},
            {title: 'Gift2', state: this.state.gift2, name: 'gift2'},
            {title: 'Gift3', state: this.state.gift3, name: 'gift3'},
        ]
        return (
            <div className="letter">
                <div className="letter__inputs">
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