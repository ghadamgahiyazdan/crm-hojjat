import dynamic from 'next/dynamic';
import Loading from '../loading';

const HomePc = dynamic(
  () => import('@/components/custom/home/pc/HomePc'),
  { 
    loading: () => <Loading/>,
    ssr: true
  }
);

const HomeMobile = dynamic(
  () => import('@/components/custom/home/mobile/HomeMobile'),
  { 
    loading: () => <Loading/>,
    ssr: true
  }
);

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="hidden lg:block">
        <HomePc/>
      </section>
      <section className="lg:hidden">
        <HomeMobile/>
      </section>
    </main>
  );
};

export default Home;