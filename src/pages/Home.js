import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Burckel Luc</h1>
                    <h2>DUT Informatique 2ème année</h2>

                    <div className="pdf">
                        <a href="./media/CV_Luc_Burckel.pdf" target="_blank">Mon CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;