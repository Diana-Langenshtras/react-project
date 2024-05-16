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

    return (
        <li className="card-settings">
                <h2 className="card-settings__title">{this.props.card}</h2>
                <div className="card__icons">
                    <Link to={{ pathname: '/'}} state={{from: this.props.card}} className="navlink-settings">
                        <IconSettings />
                    </Link>
                    <Button className="card__icon-bin" onClick={this.props.onClick}><IconBin/></Button>
                </div>
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