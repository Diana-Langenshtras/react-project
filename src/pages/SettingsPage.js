import { NavLink } from 'react-router-dom';

import "../styles/variables.css";
import "../styles/themes.css";
import "../styles/style.css";

import IconCopy from '../components/IconCopy/IconCopy'
import IconBack from '../components/IconBack/IconBack';
import IconAdd from '../components/IconAdd/IconAdd';
import Button from '../components/Button/Button'
import Card from '../components/Card/Card';
import { Component } from 'react';

export class SettingsPage extends Component {
    render(){

    const copyTextToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          console.log('Текст успешно скопирован в буфер обмена!');
        } catch (err) {
          console.error('Ошибка:', err);
        }
      };

    return (
		<main className="main main-settings">
            <NavLink to="/" className="navlink">
                <Button className="main__button-back">
                    <IconBack />
                    <span>Назад</span>
                </Button>
            </NavLink>
            <div className="invite">
                <p className="invite__text">Пригласить участников:</p>
                <Button className="invite__button" onClick={() => copyTextToClipboard(document.querySelector('.invite__button-text').textContent)}>
                    <span className="invite__button-text">https://doka.guide/css/</span>
                    <IconCopy />
                </Button>
            </div>
            <section className="section section-settings">
                <p className="section__title">ваши наборы</p>
                <Button className="section__button">
                    <IconAdd />
                </Button>
                <ul className="section__list">
                    {this.props.cards.map(el => (
                        <Card card={el}/>
                    ))}
                </ul>

            </section>
		</main>
	);
}
}

export default SettingsPage;