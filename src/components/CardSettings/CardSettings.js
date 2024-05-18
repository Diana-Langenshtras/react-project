import './CardSettings.css';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import IconSettings from '../IconSettings/IconSettings';

import Button from '../Button/Button'
import { Component } from 'react';
import IconBin from '../IconBin/IconBin';

export class CardSettings extends Component {

    render(){
    const classes = classNames('', this.props.className);

    
    const openDialog = ((dialogClass) => {
        const dialog = document.querySelector(dialogClass);
        dialog.show();
    })

    const closeChangeDialog = (() => {
        const dialog = document.querySelector('.card-settings__dialog-change');
        document.querySelector(".card__dialog-change__text").value =""
   //     if (document.querySelector(".filename")) document.querySelector(".filename").textContent ="";
    //    document.querySelector('.input-name').classList.remove('incorrect'); 
        dialog.close();
    })
    const change = ((exercise) => {
            openDialog(".card-settings__dialog-change");
            document.querySelector(".card__dialog-change__text").value = exercise;
        })

    const setValue = (() => {
        let inputValue = document.querySelector(".card__dialog-change__text").value;
        if (inputValue == '') inputValue = 'Упражнение';
        return inputValue;
    })
    

    return (
        
        <div className="card-settings-wrapper">
            <li className="card-settings">
                <h2 className="card-settings__title">{this.props.card}</h2>
                <div className="card__icons">
                <Button className="card-settings__icon-settings" onClick={() => {
                    change(this.props.card);
                    }}>  
                    <IconSettings />
                </Button>
                <Button className="card__icon-bin" onClick={this.props.onDelete}><IconBin/></Button>
                </div>
            </li>
            <dialog aria-label="Изменить название упражнения" className="card__dialog card-settings__dialog-change">
                <div className="card__dialog-wrapper">
                    <label for="name" className='visually-hidden'>Введите название (от 1 до 8 символов):</label>
                    <input type="text" id="name" name="name" required minLength="1" maxlength="8" size="10" className="card__dialog-change__text" placeholder="Введите название"/>
                    <Button className="card__dialog-button" onClick={() => {
                     //   console.log(name); 
                     //   this.props.onChange(this.props.id, name, setValue());               
                        closeChangeDialog();
                         }}>Создать</Button>
                </div>
            </dialog>
        </div>
     
    )
}
}

CardSettings.defaultProps = {
    className: '',
    onClick: () => {},
}

export default CardSettings;