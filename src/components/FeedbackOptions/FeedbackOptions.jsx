import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BtnFeedBack } from './FeedBack.styled';

export class FeedbackOptions extends Component {

    buttonsMarkup = (options, changeState) => {

        return Object.keys(options).map(name => (

            <BtnFeedBack
                key={uuidv4()}
                onClick={() => { changeState(name) }}>
                {name.charAt(0).toUpperCase()
                    + name.slice(1)}
            </BtnFeedBack>
        ))
    };

    render() {
        const { options, changeState } = this.props;
        return (
            <>
                <div>I'm feedback</div>
                <div>{this.buttonsMarkup(options, changeState)}</div>
            </>
        );
    }
}
