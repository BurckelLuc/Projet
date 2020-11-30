import React from 'react';

const Ecole = (props) => {
    return (
           <div className="formationContent">
               <ul>
                {
                    props.ecole.map((item) => {
                        return(
                            <div key={item.id} className="ecole">
                                <a href={item.lien} target="_blank" rel="noreferrer">
                                    <li>
                                        <h1>{item.ecole}</h1>
                                        <span>{item.annee}</span>
                                        <img src={item.image} alt={item.alt}></img>
                                    </li>
                                </a>
                            </div>
                        )
                    })
                }
                </ul>
            </div> 
    );
};

export default Ecole;