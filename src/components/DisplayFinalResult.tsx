interface DisplayProps {
    card: string
}

export default function DisplayFinalResult({card}:DisplayProps) {
    return (
        <>
            <h2>Final result:</h2>
            <h3>{card}</h3>
        </>
    );
}