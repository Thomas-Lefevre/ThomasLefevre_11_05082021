import Header from '../components/Header';
import Error from '../components/Error404';
import Footer from '../components/Footer';

function Error404() {
    return (
        <div className='pageContainer'>
            <Header />
            <div className="contentWrap">
                <Error />
            </div>
            <Footer />
        </div>
    );
}

export default Error404;
