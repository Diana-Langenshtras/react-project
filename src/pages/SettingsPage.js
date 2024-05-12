import { NavLink } from 'react-router-dom';

import "../styles/variables.css";
import "../styles/themes.css";
import "../styles/style.css";

import IconBack from '../components/IconBack/IconBack';
import IconAdd from '../components/IconAdd/IconAdd';
import Button from '../components/Button/Button'
import Card from '../components/Card/Card';

const SettingsPage = () => {
    return (
		<main className="main main-settings">
            <NavLink to="/" className="navlink">
                <Button className="main__button-back">
                    <IconBack />
                    <span>Назад</span>
                </Button>
            </NavLink>
            <div className="invite">
                <p>Пригласить участников:</p>
            </div>
            <section className="section section-settings">
                <p className="section__title">ваши наборы</p>
                <Button className="section__button">
                    <IconAdd />
                </Button>
                <ul className="section__list">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ul>

            </section>
		</main>
	);
}

export default SettingsPage;