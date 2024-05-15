import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import Card from '../components/Card/Card';

import {useLocation} from "react-router";

import "../styles/global.css"
import "../styles/variables.css";
import "../styles/themes.css";
import "../styles/style.css";

import IconCopy from '../components/IconCopy/IconCopy'
import IconBack from '../components/IconBack/IconBack';
import IconAdd from '../components/IconAdd/IconAdd';
import Button from '../components/Button/Button'
import CardSettings from '../components/CardSettings/CardSettings';


const SettingsCard = props =>{
       // const classes = classNames('', this.props.className);
       const location = useLocation();
       const { state } = location;

        return (
           // <div>{state.from.title}</div>
            <main className="main main-settings-card">
            <NavLink to="/settings" className="navlink">
                <Button className="main__button-back">
                    <IconBack />
                    <span>Назад</span>
                </Button>
            </NavLink>
                <Button className="section__button">
                    <IconAdd />
                </Button>

                <ul className="section__list">
                <div className="list__title-wrapper"><h1 className="list__title">{state.from.title}</h1></div>
                  {state.from.exercises.map(el => (
                        <CardSettings card={el}/>
                    ))}
                </ul>
            </main>
        )
    }
    
    Card.defaultProps = {
        className: '',
        onClick: () => {},
    }
    
export default SettingsCard;