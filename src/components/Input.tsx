import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

type defaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = defaultInputPropsType & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    className?:string
    errorClassName?:string
}

export const Input: React.FC<InputPropsType> = ({onChange,className,errorClassName, ...restProps}) => {

    const inputClassName = `${className?className:''} ${errorClassName?errorClassName:''}`;

    return <input type={restProps.type}
                  className={inputClassName}
                  value={restProps.value}
                  onChange={onChange ? onChange : () => {}}
    />
}