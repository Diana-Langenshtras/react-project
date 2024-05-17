import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import Card from '../components/Card/Card';

import {useLocation} from "react-router";

import { useState } from 'react';

import "../styles/global.css"
import "../styles/variables.css";
import "../styles/themes.css";
import "../styles/style.css";

import IconUpload from '../components/IconUpload/IconUpload';
import IconCopy from '../components/IconCopy/IconCopy'
import IconBack from '../components/IconBack/IconBack';
import IconAdd from '../components/IconAdd/IconAdd';
import Button from '../components/Button/Button'
import CardSettings from '../components/CardSettings/CardSettings';

import { useReducer } from 'react';


const SettingsCard = ({cards, deleteExercise, addExercise, addImage}) =>{
       // const classes = classNames('', this.props.className);
       const location = useLocation();
       const { state } = location;

       const [files, setFiles] = useState([]);
       
        let file;

       const openDialog = (() => {
            const dialog = document.querySelector('.card-settings__dialog');
            dialog.show();
        })

        const closeDialog = (() => {
            const dialog = document.querySelector('.card-settings__dialog');
            dialog.close();
        })

        const setValue = (() => {
            let inputValue = document.querySelector(".card-settings__dialog-text").value;
            if (inputValue == '') inputValue = 'Упражнение';
            return inputValue;
        })

        const realInput = document.querySelector(".form__input");

        const handleChange = (e) => {
            e.preventDefault();
            if (e.target.files && e.target.files[0]) {
                setFiles([...e.target.files]);
            }
          };

        

        return (
           // <div>{state.from.title}</div>
            <main className="main main-settings-card">
                <NavLink to="/settings" className="navlink">
                    <Button className="main__button-back">
                        <IconBack />
                        <span>Назад</span>
                    </Button>
                </NavLink>
                <Button className="section__button" onClick={openDialog}>
                    <IconAdd />
                </Button>

                <ul className="section__list">
                <div className="list__title-wrapper"><h1 className="list__title">{state.from.title}</h1></div>
                {cards[state.from.id-1].exercises.map((el, index) => (
                        <CardSettings card={el} onDelete={() => {deleteExercise(state.from.id-1,index)}}/>
                    ))}
                </ul>
                <dialog aria-label="Новая карта" className="card-settings__dialog">
                    <div className="card-settings__dialog-wrapper">
                        <Button className="main__button-back" onClick={() => {closeDialog();}}>
                            <IconBack />
                            <span>Назад</span>
                        </Button>
                        <label for="name" className='visually-hidden'>Введите название (от 1 до 8 символов):</label>
                        <input type="text" id="name" name="name" required minlength="1" maxlength="8" size="10" className="card-settings__dialog-text"/>
                        <label for="type" className='visually-hidden'>Введите тип (от 1 до 8 символов):</label>
                        <input type="text" id="type" name="type" required minlength="1" maxlength="8" size="10" className="card-settings__dialog-text"/>
                        <div className="form-wrapper">
                            <form className="form" >
                                <label className="form__label">
                                    <IconUpload/>
                                    <input type="file" id="real-input" className="form__input" accept="image/*,.pdf" onChange={handleChange}/>
                                </label>
                                {files.length > 0 && (
                                        
                                        <>
                                                
                                                <p className="filename">{files[0].name}</p>
                                        </>
                                        )}
                            </form>
                            
                        </div>
                        <Button className="card-settings__dialog-button" onClick={() => {
                            closeDialog(); 
                            addExercise(state.from.id-1, setValue()); 
                            document.querySelector(".card-settings__dialog-text").value ="";
                            document.querySelector(".filename").textContent ="";
                            addImage(files[0].name);
                        }}>Создать</Button>
                    </div>
                </dialog>
            </main>
        )
    }
    
export default SettingsCard;