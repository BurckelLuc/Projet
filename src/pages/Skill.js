import React from 'react';
import Navigation from '../components/Navigation';
import Language from '../components/knowledges/Language';
import OtherSkills from '../components/knowledges/OtherSkills';
import Hobbies from '../components/knowledges/Hobbies';

const Skill = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                <Language/>
                <Hobbies/>
                <OtherSkills/>
            </div>
        </div>
    );
};

export default Skill;