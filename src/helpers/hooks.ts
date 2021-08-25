import React, {useEffect, useState} from "react";

const useValidation = (value: string, validations: any) => {
    const [isEmpty, setEmpty] = useState(true)
    const [isNumber, setIsNumber] = useState(true)
    const [isLetter, setIsLetter] = useState(true)
    const [minLengthError, setMinLengthError] = useState(true)
    const [lengthValue, setLengthValue] = useState(0)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "isEmpty":
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case "isNumber":
                    if (/^[0-9]+$/.test(value)) {
                        setIsNumber(false)
                    } else setIsNumber(true)
                    break;
                case "isLetter":
                    if (/^[а-яА-Я]+$/.test(value)) {
                        setIsLetter(false)
                    } else setIsLetter(true)
                    break;
                case "minLength":
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    setLengthValue(value.length)

                    break;
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
