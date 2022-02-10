import React from 'react';
import s from "./Screen.module.css";

type ScreenPropsType = {
    countNumber: number
    stopCounting: boolean
}

const Screen: React.FC<ScreenPropsType> = ({countNumber, stopCounting}) => {
    return (
        <div className={s.screen}>
            <input type="text" value={countNumber} className={stopCounting ? s.stopCounting : ''}/>
        </div>
    );
};

export default Screen;