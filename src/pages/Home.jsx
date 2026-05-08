import Navbar from '../components/layout/Navbar.jsx';
import Foco from '../components/home/Foco.jsx';
import Conheça from '../components/home/Conheca.jsx';
import Peças from '../components/home/Pecas.jsx';
import Membro from '../components/home/Membro.jsx';
import Final from '../components/home/Final.jsx';

function Home() {
    return (
        <>
            <Navbar />
            <Foco />
            <Conheça />
            <Peças />
            <Membro />
            <Final />
        </>
    )
}

export default Home