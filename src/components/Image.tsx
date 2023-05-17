export type ImageProps = {
    src: string,
    alt: string,
    className?: string,
}

export const Image = (props: ImageProps) => {
    return (
        <img className={props.className ?? "w-full h-full object-cover"} src={props.src} alt={props.alt} />
    )
}
