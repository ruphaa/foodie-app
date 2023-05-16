export type TitleProps = {
    className?: string,
    children: React.ReactNode
}

export const Title = ({className, children}: TitleProps) => {
    return (
        <h1 className={`text-3xl font-bold font-mono ${className}`}>{children}</h1>
    )
}
