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
     <Hero/>
     <SinopsisTeatro/>
     <ElencoTeatro/>
     <NewsCarousel/>
     <ContactoTeatro/>
     <Footer/>
     <ChatBot/>
     <InstagramButton/>
    </motion.main>
  );
};

export default Home;