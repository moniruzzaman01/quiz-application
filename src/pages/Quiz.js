import React from 'react'
import Answer from '../components/Answers'
import MiniPlayer from '../components/MiniPlayer'
import ProgressBar from '../components/ProgressBar'

export default function quiz() {
    return (
        <React.Fragment>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <Answer/>
            <ProgressBar/>
            <MiniPlayer/>
        </React.Fragment>
    )
}
