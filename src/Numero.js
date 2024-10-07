const Numero = () => {
    const pair = ["2", "4", "6", "8", "0"]
    const num = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
    ];

    return(
        <ul>
            {num
            .filter((paire) => pair.includes(paire))
            .map((n) => (
                <li>{n}</li>
            ))}
        </ul>
    );
};

export default Numero;