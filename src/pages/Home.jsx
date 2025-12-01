import React from 'react';

import { motion } from 'framer-motion';
import VideoIntro from "../pages/VideoIntro"
import Navbar from "../pages/Navbar"
import ChatBot from '../components/home/ChatBot';
import ContactoTeatro from './Contact';
import ElencoTeatro from './Elenco';
import Hero from "./Hero";
import InstagramButton from './InstagramButton';
import SinopsisTeatro from './Sinopsis';
import Footer from './Footer';
import NewsCarousel from './Carousel';
import OnlyCollage from './OnlyCollage';
import WhatsAppButton from "./WhatsAppButton";
import VideoResponsive from './video';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: .3 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}


const Home = () => {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar />
    <VideoResponsive/>
     <SinopsisTeatro/>
     <ElencoTeatro/>
     <NewsCarousel/>
     <OnlyCollage/>
     <ContactoTeatro/>
     <Footer/>
     <ChatBot/>
     <WhatsAppButton/>
     <InstagramButton/>
    </motion.main>
  );
};

export default Home;