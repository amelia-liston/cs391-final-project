import DisplayAll from "../DisplayAll.tsx";
import DisplayAvatar from "../DisplayAvatar.tsx";


export default function About() {
    return(
        <>
            <main>
                <h1>About This Game</h1>
                <h2>We're just some CS girlies curious about which mob we might be. We made these mob cards for the final results of the quiz. Take our quiz to find out which mob you are!</h2>
                <DisplayAll/>
                <h2>About the Creators</h2>
                <DisplayAvatar img="/amelia-avatar.png" name="Amelia" bio="CS girly pop"/>
                <DisplayAvatar img="/mia-avatar.png" name="Mia" bio="CS girly pop"/>
                <DisplayAvatar img="/kris-avatar.png" name="Kris" bio="CS girly pop"/>
                <DisplayAvatar img="/sophia-avatar.png" name="Sophia" bio="CS girly pop"/>
            </main>
        </>
    )
}