import React from "react"
import Icon from "./icon"
import {cva, type VariantProps} from "class-variance-authority"


export const buttonVariants = cva()

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"]
}

export default function Button({
    variant,
    size,
    disabled,
    className,
    children,
    icon: IconComponent,
    ...props
}: ButtonProps) {
    return <button{...props}>{children}</button>
}