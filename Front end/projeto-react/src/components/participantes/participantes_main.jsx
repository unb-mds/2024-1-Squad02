import { Container } from "../participantes/participantes"
import participantes from "../participantes/participantes.png"

const Participantes = () => {
    return (
        <div>
            <Container className="inicio">
                <img src={participantes} alt="logo" />
            </Container>
        </div>
    )
}

export default Participantes;
