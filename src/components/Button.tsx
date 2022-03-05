import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    onClick?: () => void
}

export const Button: React.FC<ButtonPropsType> = ({
                                                      onClick,
                                                      children,
                                                      ...restProps
                                                  }) => {

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        onClick && onClick()
    }

    return <button onClick={onClickHandler}
                   {...restProps}
    >{children}</button>
}