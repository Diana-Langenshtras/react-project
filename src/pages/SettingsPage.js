import { NavLink } from 'react-router-dom';

import "../fonts/fonts.css";
import "../styles/global.css"
import "../styles/variables.css";
import "../styles/themes.css";
import "../styles/style.css";

import IconCopy from '../components/IconCopy/IconCopy'
import IconBack from '../components/IconBack/IconBack';
import IconAdd from '../components/IconAdd/IconAdd';
import Button from '../components/Button/Button'
import Card from '../components/Card/Card';
import IconBin from '../components/IconBin/IconBin';
import { Component } from 'react';

export class SettingsPage extends Component {
    constructor(props) {
      super(props);
      
  }
    render(){

        let timer = null;

        let className = '';

    const copyTextToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text)
          .then(() => {
            document.querySelector(".invite__button-text").textContent = "Скопировано!";
          })
          .catch(err => {
            console.error('ОшибкО: ', err);
          });
          console.log('Текст успешно скопирован в буфер обмена!');
        } catch (err) {
          console.error('Ошибка:', err);
        }
      };

    function update(id){
        const list = document.querySelector('.section__list');
        const children = list.querySelectorAll('.is-clicked');
        children.forEach(el => {
            el.classList.remove('is-clicked');
        });
        const child = list.children[id];
       child.classList.add('is-clicked'); 
    }

    const openDialog = (() => {
        const dialog = document.querySelector('.card__dialog');
        dialog.show();
    })

    const closeDialog = (() => {
        const dialog = document.querySelector('.card__dialog');
        dialog.close();
    })

    const setValue = (() => {
        let inputValue = document.querySelector(".card__dialog-text").value;
        if (inputValue == '') inputValue = 'Набор';
        return inputValue;
    })
    

    return (
		<main className="main main-settings">
            <NavLink to="/" className="navlink">
                <Button className="main__button-back button-primary">
                    <IconBack />
                    <span>Назад</span>
                </Button>
            </NavLink>
            <div className="invite">
                <p className="invite__text">Пригласить участников:</p>
                <Button className="invite__button" onClick={() => copyTextToClipboard(document.querySelector('.invite__button-text').textContent)}>
                    <span className="invite__button-text">{this.props.gameURL}</span>
                    <IconCopy />
                </Button>
            </div>
            <section className="section section-settings">
                <p className="section__title">ваши наборы</p>
                <Button className="section__button" onClick={openDialog}>
                    {console.log(this.props.cards)}
                    <IconAdd />
                </Button>
                <ul className="section__list">
                    {this.props.cards.map((el, index) => {
                        if(el.id === this.props.activeCard) className = "is-clicked"; else className = "";
                        return <Card key={index} className={className} card={el} onClick={() => {this.props.updateActiveCard(el.id); update(el.id-1); console.log(this.props.activeCard)}} deleteSet={() => {this.props.deleteSet(el.id);}}/>
    })}
                </ul>

            </section>
            <dialog aria-label="Новая карта" className="card__dialog">
            <div className='overlay'>
                <div className="card__dialog-wrapper card__dialog-new-wrapper">
                    <label for="name" className='visually-hidden'>Введите название (от 1 до 8 символов):</label>
                    <input type="text" id="name" name="name" required minlength="1" maxlength="8" size="10" className="card__dialog-text" placeholder="Введите название"/>
                    <Button className="card__dialog-button button-primary" onClick={() => {closeDialog(); this.props.addCard(setValue()); document.querySelector(".card__dialog-text").value =""}}>Создать</Button>
                </div>
            </div>
            </dialog>
		</main>
	);
}
}

export default SettingsPage;