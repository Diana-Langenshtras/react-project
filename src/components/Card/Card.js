import './Card.css';
import classNames from 'classnames';
import IconSettings from '../IconSettings/IconSettings';

import Button from '../Button/Button'

const Card = ({children, onClick, className}) => {

    
    const classes = classNames('', className);

    return (
        <li className="card">
            <Button className="card__button" onClick={console.log('fdf')}>
                <span>Набор</span>
                <IconSettings />
            </Button>
        </li>
     //   <button className={classes} onClick={onClick}>{children}</button>
    )
}

Card.defaultProps = {
    children: 'lol',
    className: '',
    onClick: () => {},
}

export default Card;