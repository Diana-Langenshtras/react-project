import './CardSettings.css';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import IconSettings from '../IconSettings/IconSettings';

import Button from '../Button/Button'
import { useState } from 'react';
import IconBin from '../IconBin/IconBin';
import Dialog from '../Dialog/Dialog'

export const CardSettings = ({id, cardIndex, card, onDelete, onChange}) => {
    const [modalIsOpen, setModalOpen] = useState(false);

 //   const classes = classNames('', this.props.className);

    
 const checkValue = (() => {
    const inputValue = document.querySelector(".card__dialog-change__text").value;
    if (inputValue.length < 1) {
        return false; 
    } 
    else return true;
})

    const setValue = (() => {
        let inputValue = document.querySelector(".card__dialog-change__text").value;
        if (inputValue == '') inputValue = 'Упражнение';
        return inputValue;
    })
    

    return (     
        <div className="card-settings-wrapper">
            <li className="card-settings">
                <h2 className="card-settings__title">{card}</h2>
                <div className="card__icons">
                <Button className="card-settings__icon-settings" onClick={() => {
                    
                    setModalOpen(true);
                    }}>  
                    <IconSettings />
                </Button>
                <Button className="card__icon-bin" onClick={onDelete}><IconBin/></Button>
                </div>
            </li>
            <Dialog
                isOpen={modalIsOpen}
                onClose={() => {
                    if (checkValue()) onChange(id, cardIndex, document.querySelector(".card__dialog-change__text").value);
                    setModalOpen(false); 
                }}
                >
                <label for="name" className='visually-hidden'>Введите название (от 1 до 8 символов):</label>
                <input type="text" id="name" name="name" maxlength="8" size="10" className="card__dialog-change__text" placeholder="Введите название"/>
            </Dialog>
        </div>
    )
}


CardSettings.defaultProps = {
    className: '',
    onClick: () => {},
}

export default CardSettings;