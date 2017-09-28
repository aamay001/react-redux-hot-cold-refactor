import React from 'react';
import {connect} from 'react-redux';
import './guess-list.css';

export function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

export default connect()(GuessList);