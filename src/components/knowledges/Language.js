import React, { Component } from 'react';
import ProgressBar from'./ProgressBar';

class Language extends Component {
    state={
        language:[
            {id:1, value:"Css", xp:1.2},
            {id:2, value:"JavaScript", xp:1},
            {id:3, value:"C#", xp:0.5},
            {id:4, value:"C", xp:0.7},
            {id:5, value:"Java", xp:0.7},
            {id:6, value:"Python", xp:0.15}
        ],
        frameworks:[
            {id:1, value:"Laravel", xp:1},
            {id:2, value:"React", xp:0.5}
        ],
    }
    render() {
        let {language,frameworks} = this.state;
        return (
            <div className="language_framework">
                <ProgressBar
                    language={language}
                    className="languagesDisplay"
                    title="languages"
                    millieu="6 mois"
                    max="1 ans"
                />
                <ProgressBar
                    language={frameworks}
                    className="frameworksDisplay"
                    title="frameworks"
                    millieu="2 semaine"
                    max="1 mois"
                />
                
            </div>
        );
    }
}

export default Language;