import React, {ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent} from "react";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    onClick?: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {

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

// export class Button extends React.Component<ButtonPropsType>{
//     constructor(props:ButtonPropsType) {
//         super(props);
//         this.onClickHandler = this.onClickHandler.bind(this)
//     }
//     onClickHandler(e:MouseEvent<HTMLButtonElement>){
//         if(!this.props.onClick) return
//         this.props.onClick(e)
//     }
//
//     render() {
//         const {onClick,children,...restProps}=this.props
//         return <button onClick={this.onClickHandler}
//                    {...restProps}
//     >{children}</button>
//     }
// }


