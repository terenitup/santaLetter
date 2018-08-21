import React, { Component } from 'react';
class Content extends Component {
    render() {
        const data = this.props.data;
        return (
            <p>
              My name is <b>{data.name}</b>, I am <b>{data.age}</b> years old. I am from <b>{data.city}</b>, <b>{data.state}</b>.  I have helped <b>{data.helpedPerson}</b> this year with <b>{data.helpedFirst}</b>, <b>{data.helpedSecond}</b>, and <b>{data.helpedThird}</b> . I have been a very <b>{data.howGood}</b> <b>{data.gender}</b> this year. If you could prepare the following gifts for me, I would be <b>{data.howHappy}</b>!!!! 1)<b>{data.gift1}</b>, 2) <b>{data.gift2}</b>, and 3) <b>{data.gift3}</b>. Hope you have a safe journey as you deliver gifts to other kids! Best, <b>{data.name}</b>
            </p>
        )
    }
}
export default Content;



Collapse 