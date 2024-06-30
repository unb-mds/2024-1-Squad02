import React from 'react'
import Navbar from "../components/navbar/navbar_main"
import Sobre from "../components/sobre/sobre_main"
import Licitacoes from "../components/licitacoes/licitacoes_main"
import Participantes from "../components/participantes/participantes_main"
import Footer from "../components/Footer/Footer_main"


const Home = () => {
    return (
        <div>
            <Navbar />
            <Sobre />
            <Licitacoes />
            <Participantes />
            <Footer />
        </div>
    )

};

export default Home;