import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'exprérience</span>
                <span>{props.millieu}</span>
                <span>{props.max}</span>
            </div>

            <div>
                {
                    props.language.map((item) => {
                        let xpYears=1;
                        let progressBar=(item.xp*12/10)/xpYears * 100 + '%';

                        return(
                            <div key={item.id} className="languagesList">
                                <li>{item.value}</li>
                                <div className="progressBar" style={{
                                    width:progressBar
                                }}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;