import React, { Component } from 'react';
import './style.css';
class FaqItem extends Component {
    state = {
        flag: true,
        flag2: true,
        displ: "none",
        displ2: "none",
    }
    funcAnswerShow = () => {
        this.setState({ flag: !this.state.flag });
        (this.state.flag) ? this.setState({ displ: "block" }) : this.setState({ displ: "none" });
    }
    funcAnswerShow2 = () => {
        this.setState({ flag2: !this.state.flag2 });
        (this.state.flag2) ? this.setState({ displ2: "flex" }) : this.setState({ displ2: "none" });
    }
    render() {
        return (
            <section className="faq-sec" >
                <section className="faqitem-sec" >
                    <div>
                        <h4>{this.props.question}</h4>
                        <button onClick={this.funcAnswerShow} >+</button>
                    </div>
                    <article style={{ display: this.state.displ }} >
                        <div>
                            <p>{this.props.answer}</p>
                            <button onClick={this.funcAnswerShow2} >+</button>
                        </div>
                        <div style={{ display: this.state.displ2 }} >
                            <p>{this.props.answerLong}</p>
                        </div>
                    </article>
                </section>
            </section>
        );
    }
}
export default FaqItem;