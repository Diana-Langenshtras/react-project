import { NavLink } from 'react-router-dom';

import "../styles/variables.css";
import "../styles/themes.css";
import "../styles/style.css";

import Button from '../components/Button/Button'
import Wheel from "../components/Wheel/Wheel";
import IconSettings from "../components/IconSettings/IconSettings";

const HomePage = () => {

    let timer = null;

  const buttonIsClicked = (() => {
      document.querySelector('.wheel').classList.add('is-clicked'); 
      clearTimeout(timer);
      timer = setTimeout(() => document.querySelector('.wheel').classList.remove('is-clicked'), 1000);
  })

    return (
		<main className="main main-home">
            <Wheel />
            <Button className="main__button-wheel" onClick={buttonIsClicked}>Крутить колесо</Button>
            <NavLink to="/settings" className="navlink">
                <Button className="main__button-settings">
                    <span>Настройки</span>
                    <IconSettings />
                </Button>
            </NavLink>
      </main>
	);
}

export default HomePage;