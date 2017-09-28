import React from 'react';
import {connect} from 'react-redux';
import GuessForm from './guess-form';

import './guess-section.css';

export function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onGuess={props.onGuess} />
        </section>
    );
}

const mapStateToProps = (state) =>({
    feedback: state.feedback
});

export default connect(mapStateToProps)(GuessSection);



