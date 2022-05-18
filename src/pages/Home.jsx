import Header from '../components/Header';
import Banner from '../components/BannerHome';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

function Home() {

  return (
    <div className='pageContainer'>
      <Header />
      <div className="contentWrap">
        <Banner />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
