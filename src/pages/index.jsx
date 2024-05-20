import Layout from '../components/Layout';
import About from '../sections/Home/About';
import Factions from '../sections/Home/Factions';
import Faq from '../sections/Home/Faq';
import Splash from '../sections/Home/Splash';
import Sponsors from '../sections/Home/Sponsors';
import EventPhotos from '../sections/Home/EventPhotos';

export default function HomePage() {
  return (
    <Layout title='Home'>
      <Splash />
      <About />
      <Faq />
      <Factions />
      <EventPhotos />
      <Sponsors />
    </Layout>
  );
}
