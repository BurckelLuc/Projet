import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Ecole from '../components/knowledges/Ecole';

class Formation extends Component {
    state={
        ecole:[
            {id:1, lien:"https://iutrs.unistra.fr/", annee:"2019 -", ecole:"DUT Informatique", image:"./media/robertSchuman.jpeg",alt:"Robert Schuman"},
            {id:2, lien:"https://www.hautbarr.net/", annee:"2017 – 2019", ecole:"Bac S - Sciences de l’Ingénieur", image:"./media/hautBarr.jpg",alt:"Haut Barr"},
            {id:3, lien:"https://lycee-zeller-bouxwiller.fr/", annee:"2016 – 2017", ecole:"2nd Général", image:"./media/Lycée_de_Bouxwiller.jpg",alt:"Adrien Zeller"},
            {id:4, lien:"http://www.col-bouxwiller.ac-strasbourg.fr/", annee:"2015 – 2016", ecole:"Brevet des collèges", image:"./media/CollegeBasberg.JPG",alt:"College Basberg"},
        ],
    }
    render() {
        let {ecole} = this.state;
        return (
            <div className="formation">
                <Navigation/>
                <Ecole
                    ecole={ecole}
                />
            </div>
        );
    }
}

export default Formation;