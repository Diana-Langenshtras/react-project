import { NavLink } from 'react-router-dom';

import "../fonts/fonts.css";
import "../styles/global.css"
import "../styles/variables.css";
import "../styles/themes.css";
import "../styles/style.css";

import Button from '../components/Button/Button'
import Wheel from "../components/Wheel/Wheel";
import IconSettings from "../components/IconSettings/IconSettings";
import IconBack from '../components/IconBack/IconBack';

import { Component } from 'react';

export class HomePage extends Component {
    render(){

    let timer = null;

    

    const openDialog = (() => {
        const dialog = document.querySelector('.dialog');
      //  dialog.querySelector('.dialog__image').src = cardData.link;
     //   dialog.querySelector('.dialog__image').alt = cardData.name;
        dialog.querySelector('.dialog__title').textContent = 'cardData.title';
        document.querySelector('.main__button-wheel').classList.add('hidden');
        document.querySelector('.main__button-settings').classList.add('hidden');
        document.querySelector('.main__button-back').classList.remove('hidden');
        dialog.show();
    })

    const closeDialog = (() => {
        const dialog = document.querySelector('.dialog');
        document.querySelector('.main__button-wheel').classList.remove('hidden');
        document.querySelector('.main__button-settings').classList.remove('hidden');
        document.querySelector('.main__button-back').classList.add('hidden');
        dialog.close();
    })

    const buttonIsClicked = (() => {
        document.querySelector('.wheel').classList.add('is-clicked'); 
        clearTimeout(timer);
        timer = setTimeout(() => {document.querySelector('.wheel').classList.remove('is-clicked'); openDialog();}, 1000);
        
    })

    return (
		<main className="main main-home">
            <Wheel />
            <Button className="main__button-back hidden" onClick={closeDialog}>
                <span>Назад</span>
                <IconBack />
            </Button> 
            <Button className="main__button-wheel" onClick={buttonIsClicked}>Крутить колесо</Button>
            <NavLink to="/settings" className="navlink">
                <Button className="main__button-settings">
                    <span>Настройки</span>
                    <IconSettings />
                </Button>
            </NavLink>
            <dialog aria-label="Упражение" className="dialog">
                <p className="dialog__title"></p>
                <img className="dialog__image" src="img.png" alt="Упражнение" />
            </dialog>
            <template id="button-template">
            </template>
      </main>
	);
}
}

export default HomePage;