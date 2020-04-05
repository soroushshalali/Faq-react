import React, { Component } from 'react';
import './style.css'
import FaqItem from './FaqItem.js';
import faq from './data';
class Faq extends Component {
    state = {
        dataState: faq,
    }
    render() {
        const mapArray = this.state.dataState.map((el, i) => {
            return <FaqItem question={el.question} answer={el.answer} answerLong={el.answerLong} key={i} />
        })
        return (
            <main>
                {mapArray}
            </main>
        );
    }
}
export default Faq;
