import './Card.css';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import IconSettings from '../IconSettings/IconSettings';
import IconBin from '../IconBin/IconBin';

import Button from '../Button/Button'
import { Component } from 'react';

export class Card extends Component {

    render(){
    const classes = classNames('card', this.props.className);

    return (
        <li className={classes}>
            <Button className="card__button" onClick={this.props.onClick}>
                <h2 className="card__title">{this.props.card.title}</h2>
                <div className="card__icons">
                    <Link to={{ pathname: '/settings-card'}} state={{from: this.props.card}} className="navlink-card">
                        <IconSettings />
                    </Link>
                    <Button className="card__icon-bin" onClick={this.props.deleteSet}><IconBin/></Button>
                </div>
            </Button>
        </li>
     //   <button className={classes} onClick={onClick}>{children}</button>
    )
}
}

Card.defaultProps = {
    className: '',
    onClick: () => {},
}

export default Card;