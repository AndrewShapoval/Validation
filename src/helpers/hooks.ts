import React, {useEffect, useState} from "react";

const useValidation = (value: string, validations: ValidationsType) => {
    const [isEmpty, setEmpty] = useState(true)
    const [isNumber, setIsNumber] = useState(true)
    const [isLetter, setIsLetter] = useState(true)
    const [minLengthError, setMinLengthError] = useState(true)
    const [lengthValue, setLengthValue] = useState(0)

    useEffect(() => {
        for (const validation in validations) {
            if (validations.hasOwnProperty(validation)) {
                switch (validation) {
                    case "isEmpty":
                        value ? setEmpty(false) : setEmpty(true)
                        break;
                    case "isNumber":
                        /^[0-9]+$/.test(value) ? setIsNumber(false) : setIsNumber(true)
                        break;
                    case "isLetter":
                        /^[а-яА-Я]+$/.test(value) ? setIsLetter(false) : setIsLetter(true)
                        break;
                    case "minLength":
                        const minLength = validations[validation] || 0
                        value.length < minLength ? setMinLengthError(true) : setMinLengthError(false)
                        setLengthValue(value.length)
                        break;
                }
            }
        }
    }, [value])

    return {isEmpty, isNumber, isLetter, minLengthError, lengthValue}

}

export const useInput = (initialValue: string, validations: ValidationsType) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {value, onChange, onBlur, isDirty, setDirty, ...valid}
}

type ValidationsType = {
    isEmpty?: boolean
    minLength?: number
    isNumber?: boolean
    isLetter?: boolean
}
