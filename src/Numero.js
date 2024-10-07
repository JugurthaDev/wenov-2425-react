const Numero = () => {
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
            {num.map((n) => (
                <li>{n}</li>
            ))}
        </ul>
    );
};

export default Numero;