type ButtonVariants = 'primary' | 'secondary';

export type ButtonProps = {
    variant?: ButtonVariants,
    children: React.ReactNode
}

export const Button = ({
    variant = "primary",
    children,
}: ButtonProps) => {
    return (
        <button className={getClassNames(variant)}>
            {children}
        </button>
    )
}

const getClassNames = (variant: ButtonVariants) => {
    const commonClassNames = "rounded-full px-5 py-2";
    if(variant === "primary") {
        return ''
    } else if(variant === "secondary") {
        return `${commonClassNames} bg-gray-200`
    }
    return '';
}
