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


const SettingsCard = ({cards, deleteExercise, addExercise, changeExercise, addImage}) =>{
       // const classes = classNames('', this.props.className);
       const location = useLocation();
       const { state } = location;

       const [files, setFiles] = useState([]);
       
        let file;

       const openDialog = ((dialogClass) => {
            const dialog = document.querySelector(dialogClass);
            dialog.show();
        })

        const closeDialog = (() => {
            const dialog = document.querySelector('.card-settings__dialog');
            document.querySelector(".input-name").value ="";
            if (document.querySelector(".filename")) document.querySelector(".filename").textContent ="";
            document.querySelector('.input-name').classList.remove('incorrect'); 
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

        const checkValue = (() => {
            const inputValue = document.querySelector(".input-name").value;
            if (inputValue.length < 1) {
                document.querySelector('.input-name').classList.add('incorrect'); 
                return false; 
            } 
            else return true;
        })



        

        return (
           // <div>{state.from.title}</div>
            <main className="main main-settings-card">
                <NavLink to="/settings" className="navlink">
                    <Button className="main__button-back" onClick={() => {closeDialog();}}>
                        <IconBack />
                        <span>Назад</span>
                    </Button>
                </NavLink>
                <Button className="section__button" onClick={() => {openDialog('.card-settings__dialog')}}>
                    <IconAdd />
                </Button>

                <ul className="section__list">
                <div className="list__title-wrapper"><h1 className="list__title">{state.from.title}</h1></div>
                {cards[state.from.id-1].exercises.map((el, index) => (
                        <CardSettings key={index} card={el} onDelete={() => {deleteExercise(state.from.id-1,index)}} 
                        id={state.from.id-1} cardIndex={index}
                        onChange={changeExercise}/>
                    ))}
                </ul>
                <dialog aria-label="Новое упражнение" className="card-settings__dialog">
                    <div className="card-settings__dialog-wrapper">
                        <Button className="main__button-back card-settings__button-back" onClick={() => {closeDialog();}}>
                            <IconBack />
                            <span>Назад</span>
                        </Button>
                        <label for="name" className='visually-hidden'>Введите название (от 1 до 8 символов):</label>
                        <input type="text" id="name" name="name" require="required"  minlength="2" maxlength="8" size="10" className="card-settings__dialog-text input-name" placeholder="Введите название"/>
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
                         //   closeDialog(); 
                            if (checkValue()){
                                addExercise(state.from.id-1, setValue()); 
                                
                                if (files.length > 0) addImage(files[0].name, setValue());
                                closeDialog(); 
                                
                            }

                        }}>Создать</Button>
                    </div>
                </dialog>
            </main>
        )
    }
    
export default SettingsCard;