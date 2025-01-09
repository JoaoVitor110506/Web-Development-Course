type Props = {
    title: string;
    color?: string;
}

export function Button({title, color}: Props ) {
    return (
        <>
        <button style ={{ backgroundColor: `${color}`}}> {title} </button>
        </>
    );
}
