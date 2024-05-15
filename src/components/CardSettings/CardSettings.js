import './CardSettings.css';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import IconSettings from '../IconSettings/IconSettings';

import Button from '../Button/Button'
import { Component } from 'react';

export class CardSettings extends Component {

    render(){
    const classes = classNames('', this.props.className);

    return (
        <li className="card-settings">
            <Button className="card__button card-settings__button" onClick={console.log('fdf')}>
                <h2 className="card-settings__title">{this.props.card}</h2>
                <Link to={{ pathname: '/'}} state={{from: this.props.card}} className="navlink-settings">
                    <IconSettings />
                </Link>
            </Button>
        </li>
     //   <button className={classes} onClick={onClick}>{children}</button>
    )
}
}

CardSettings.defaultProps = {
    className: '',
    onClick: () => {},
}

export default CardSettings;