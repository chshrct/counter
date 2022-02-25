import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    name: string
    className?: string
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    isDisabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({name, className, onClick, isDisabled, ...restProps}) => {

    return <button className={className ? className : ''} onClick={onClick} disabled={isDisabled}>{name}</button>
}