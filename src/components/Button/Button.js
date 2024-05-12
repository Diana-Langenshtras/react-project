import './Button.css';
import classNames from 'classnames';

const Button = ({children, onClick, className}) => {

    
    const classes = classNames('button', className);

    return (
        <button className={classes} onClick={onClick}>{children}</button>
    )
}

Button.defaultProps = {
    children: 'lol',
    className: '',
    onClick: () => {},
}

export default Button;