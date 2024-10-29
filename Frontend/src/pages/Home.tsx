// src/pages/Home.js
import { useEffect } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { checkAuthSelector, fetchUserDetailsSelector} from '../recoil/authState';
import Hero from '../components/Hero';
import {FeaturesSectionDemo} from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import {FloatingDock} from '../components/floatingNavbar';
import { useNavigate } from 'react-router-dom';
import { links } from '../navbarItems';

function Home() {
  const navigate = useNavigate();
  const authStatus = useRecoilValueLoadable(checkAuthSelector);
  const userDetailsLoadable = useRecoilValueLoadable(fetchUserDetailsSelector);

  // Redirect if unauthorized
  useEffect(() => {
    if (authStatus.state === 'hasValue' && !authStatus.contents.authorized) {
      navigate('/signin');
    }
  }, [authStatus, navigate]);

  if (authStatus.state === 'loading' || userDetailsLoadable.state === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (authStatus.state === 'hasError' || !userDetailsLoadable.contents) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">Error fetching user details.</div>
      </div>
    );
  }

  const user = userDetailsLoadable.contents;

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div>
          <Hero name={user} />
          <FeaturesSectionDemo />
          <Testimonials />
          <Footer />
        </div>
      </div>
      <div className="fixed bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 left-4 mb-4">
        <FloatingDock items={links} />
      </div>
    </>
  );
}

export default Home;
