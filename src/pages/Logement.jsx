import Header from '../components/Header';
import Carousels from '../components/Carousels';
import Description from '../components/Description';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import logementJSON from "../data/logements.json";
import { useParams, useNavigate } from 'react-router-dom';

function Logement() {
    let id = useParams();

    const navigate = useNavigate();
    const [logement, setLogement] = useState();
    useEffect(() => {
        const currentLogement = logementJSON.find((logement) => logement.id === id.logementId)
        if (!currentLogement) {
            navigate('/Error404')
        }
        setLogement(currentLogement)
    }, [id, navigate])

    if (!logement) {
        return null
    }

    return (
        <div className='pageContainer'>
            <Header />
            <div className="contentWrap">
                <Carousels pictures={logement.pictures} />
                <Description logement={logement} />
            </div>
            <Footer />
        </div>
    );
}

export default Logement;
