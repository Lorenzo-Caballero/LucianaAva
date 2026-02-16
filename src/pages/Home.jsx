import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "../pages/Navbar"
import ChatBot from '../components/home/ChatBot';
import Hero from "./Hero";
import InstagramButton from './InstagramButton';
import Footer from './Footer';
import WhatsAppButton from "./WhatsAppButton";
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
      <Hero />
      <ChatBot />
      <WhatsAppButton />
      <InstagramButton />
    </motion.main>
  );
};

export default Home;