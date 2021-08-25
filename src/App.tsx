import React from 'react';
import './App.scss';
import {useInput} from "./helpers/hooks";

const App = () => {
    //validations принимает необходимые для валидации данные
    const firstName = useInput('', {isEmpty: true, isLetter: true})
    const lastName = useInput('', {isEmpty: true, isLetter: true})
    const ID = useInput('', {isEmpty: true, isNumber: true})
    const textarea = useInput('', {isEmpty: true, minLength: 100})

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        firstName.isEmpty && firstName.setDirty(true)
        lastName.isEmpty && lastName.setDirty(true)
        ID.isEmpty && ID.setDirty(true)
        textarea.isEmpty && textarea.setDirty(true)
    }

    return (
        <div className="App">
            <div className="container">
                <form className="formContainer">
                    <h1>Оставьте отзыв</h1>
                    <div className="inputBlock">
                        <div className="inputContainer">
                            <input className="input"
                                   type="text"
                                   onChange={firstName.onChange}
                                   onBlur={firstName.onBlur}
                                   value={firstName.value}
                                   name="firstName"
                                   placeholder="Имя"/>
                            {(firstName.isDirty && firstName.isEmpty) &&
                            <div className="errorInput">Заполните поле</div>}
                            {(!firstName.isEmpty && firstName.isLetter) &&
                            <div className="messageInput">Имя не должно содержать цифры и символы</div>}
                        </div>
                        <div className="inputContainer">
                            <input className="input"
                                   type="text"
                                   onChange={lastName.onChange}
                                   onBlur={lastName.onBlur}
                                   value={lastName.value}
                                   name="lastName"
                                   placeholder="Фамилия"/>
                            {(lastName.isDirty && lastName.isEmpty) && <div className="errorInput">Заполните поле</div>}
                            {(!lastName.isEmpty && lastName.isLetter) &&
                            <div className="messageInput">Фамилия не должна содержать цифры и символы</div>}
                        </div>
                        <div className="inputContainer">
                            <input className="input"
                                   type="text"
                                   onChange={ID.onChange}
                                   onBlur={ID.onBlur}
                                   value={ID.value}
                                   name="ID"
                                   placeholder="ID Профиля в БК"/>
                            {(ID.isDirty && ID.isEmpty) && <div className="errorInput">Заполните поле</div>}
                            {(!ID.isEmpty && ID.isNumber) &&
                            <div className="messageInput">Поле должно содержать цифры</div>}
                        </div>
                    </div>
                    <div className="textareaBlock">
                        <span className="textareaSign">Ваш отзыв (
                            {
                                textarea.lengthValue === 0
                                    ? <span>Минимум 100 знаков</span>
                                    : <span
                                        className={textarea.lengthValue < 100 ? "textareaSignRed" : "textareaSignGreen"}>
                                {textarea.lengthValue} знак
                            </span>
                            })
                        </span>
                        <textarea className="textarea"
                                  onChange={textarea.onChange}
                                  onBlur={textarea.onBlur}
                                  value={textarea.value}
                                  placeholder="Напишите, что вам нравиться, а что мы можем исправить?"/>
                        {(textarea.isDirty && textarea.isEmpty) && <div className="errorInput">Заполните поле</div>}
                        {(!textarea.isEmpty && textarea.minLengthError) &&
                        <div className="messageInput">Минимальное количество символов 100</div>}
                    </div>
                    <button className="button" onClick={handleClick}>Опубликовать</button>
                </form>
            </div>
        </div>
    );
}

export default App;
