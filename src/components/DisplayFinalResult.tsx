interface DisplayProps {
    card: string
}

function cardSelect(card: string) {
    // ILBT
    // ILBF
    // ILCT
    // ILCF
    // IPBT
    // IPCT
    // IPBF
    // IPCF
    // ELBT
    // ELBF
    // ELCT
    // ELCF
    // EPBT
    // EPCT
    // EPBF
    // EPCF


    if (card === "ILBT") {

    }
    else if (card === "ILBF") {

    }
    else if (card === "ILCT") {

    }
    else if (card === "ILCF") {

    }
    else if (card === "IPBT") {

    }
    else if (card === "IPCT") {

    }
    else if (card === "IPBF") {

    }
    else if (card === "IPCF") {

    }
    else if (card === "ELBT") {

    }
    else if (card === "ELBF") {

    }
    else if (card === "ELCT") {

    }
    else if (card === "ELCF") {

    }
    else if (card === "EPBT") {

    }
    else if (card === "EPCT") {

    }
    else if (card === "EPBF") {

    }
    else if (card === "EPCF") {

    }
    else {
        return "problem";
    }

    return ''
}

export default function DisplayFinalResult({card}:DisplayProps) {
    let finalCard = cardSelect(card);
    if (finalCard === "problem") {

    }
    else {
        return (
            <>
                <h2>Final result:</h2>
                <h3>{card}</h3>
            </>
        );
    }
}