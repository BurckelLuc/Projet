import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/Luc_Burckel.jpg" alt="profil-pic" height="147" width="150"/>
                    <h3>Luc Burckel</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Formation" activeClassName="navActive">
                            <i className="fas fa-book-open"></i>
                            <span>Formation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/ExperiencePro" activeClassName="navActive">
                            <i className="fas fa-suitcase"></i>
                            <span>Expérience</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Skill" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Conaissance</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="social">
                <ul>
                    <li>
                        <a href="https://github.com/BurckelLuc?tab=repositories" target="_blank" rel="nooperner noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                </ul>
            </div>
            <div className="theme">
                <button type="button">Mode Clair</button>
            </div>
        </div> 
    );
};

export default Navigation;