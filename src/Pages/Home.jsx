import Baner from "../Components/Atomos/Baner/Baner";
import Card from "../Components/Moleculas/Card/Card";
import Informacion from "../Components/Moleculas/Informacion/Informacion";
import Header from "../Components/Organismos/Header/Header";
import Navar from "../Components/Organismos/Navar/Navar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navar></Navar>
            <Card></Card>
            <Baner></Baner>
            <Informacion></Informacion>
        </div>
    );
};

export default Home;
