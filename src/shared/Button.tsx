import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    onClick?: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    console.log(props);
    
    const {
        onClick,
        children,
        ...restProps
    } = props

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        onClick?.()
    }


    return <button onClick={onClickHandler} 
                   {...restProps}>
        {children}</button>
}


