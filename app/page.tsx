'use client'

import Image from "next/image";
import Chatbox from "./chatbot-components/chat";
import { FaSpinner } from "react-icons/fa";
import { useChatbot } from "./chatbotProvider";
import { motion } from "framer-motion";

export default function Home() {

const { isThinking, setIsThinking } = useChatbot();

  return (
    <main className="bg-[#222831] relative text-white overflow-hidden flex min-h-screen flex-col gap-2 p-5 md:p-10">
      
      {isThinking && (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        className="absolute top-10 right-10"> <FaSpinner size={25} className="animate-spin text-[#76ABAE]" /></motion.div>
      )}


      <div className="text-xs w-full h-max flex justify-between">
        <h1>Chatbot Headstarter</h1>
        <h1></h1>
      </div>

      <Chatbox />

    </main>
  );
}
