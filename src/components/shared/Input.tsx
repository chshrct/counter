import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

type defaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = defaultInputPropsType & {
    onChangeNumber?: (e: number) => void
    errorClassName?: string
}

export const Input: React.FC<InputPropsType> = (props) => {

    const {
        type,
        onChangeNumber,
        className,
        errorClassName,
        ...restProps
    } = props

    const inputClassName = `${className ? className : ''} ${errorClassName ? errorClassName : ''}`;

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeNumber?.(Number(e.currentTarget.value))
    }

    return <input type={'number'}
                  className={inputClassName}
                  onChange={onChangeInputHandler}
                  {...restProps}
    />
}