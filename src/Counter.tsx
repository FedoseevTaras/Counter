import React from 'react';
import s from './Counter.module.css'
import Button from "./Button";
import Screen from "./Screen";

type CounterPropsType = {
    countNumber: number
    addNumber: (number: number) => void
    resetCounting: () => void
    stopCounting: boolean
}

const Counter: React.FC<CounterPropsType> = ({
                                                 countNumber,
                                                 addNumber,
                                                 resetCounting, stopCounting
                                             }) => {

    const onClickAddNumber = () => {
        addNumber(countNumber)
    }
    const onClickResetCounting = () => {
        resetCounting()
    }
    let disabledInc = stopCounting
    let disabledReset = countNumber == 0

    return (
        <div className={s.wrapper}>
            <Screen countNumber={countNumber} stopCounting={stopCounting}/>
            <div className={s.buttonWrapper}>
                <Button title={'Inc'} onClick={onClickAddNumber} disabled={disabledInc}/>
                <Button title={'Reset'} onClick={onClickResetCounting} disabled={disabledReset}/>
            </div>
        </div>
    );
};

export default Counter;