import React from 'react';
import Navigation from '../components/Navigation';

const ExperiencePro = () => {
    return (
        <div className="experience">
            <Navigation/>
            <div className="experienceContent">
                <ul>
                    <li>
                        <h1>Didiland</h1>
                        <span>Été 2020</span>
                        <img src="./media/didiland.jpg" alt="Didiland"></img>
                    </li>
                    <li>
                        <h1>Récolte de courgettes</h1>
                        <span>Été 2017-2018</span>
                        <img src="./media/courgette.jpg" alt="Courgette"></img>
                    </li>
                    <li>
                        <h1>Brasserie Licorne : stage 3ème </h1>
                        <span>Février 2016</span>
                        <img src="./media/Brasserie_Licorne.jpeg" alt="Brasserie Licorne"></img>
                    </li>
                </ul>   
            </div>
        </div>
    );
};

export default ExperiencePro;