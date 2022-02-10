import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled?: boolean
}

const Button: React.FC<ButtonPropsType> = ({title, onClick, disabled}) => {
    return (
        <div>
            <button onClick={onClick} disabled={disabled} className={s.buttonStyle}>
                {title}
            </button>
        </div>
    );
};

export default Button;