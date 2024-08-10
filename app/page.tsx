'use client'

'use client'

import Image from "next/image";
import Chatbox from "./chatbot-components/chat";
import { useChatbot } from "./chatbotProvider";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

export default function Home() {

  const { isThinking, setIsThinking } = useChatbot();

  return (
    <main className="bg-[#222831] relative text-white overflow-hidden flex min-h-screen flex-col gap-2 p-5 md:p-10">
      
      {isThinking &&
                <motion.div
                initial="hidden"
                animate={{y: -10}}
                className="absolute text-[#76ABAE] top-10 right-10 z-50"
                >
                  <FaSpinner className="w-8 h-8 animate-spin " />
                </motion.div>
      }

      <div className="text-xs w-full h-max flex justify-between">
        <h1 className="select-none">Chatbot Headstarter</h1>
        <h1></h1>
      </div>

      <Chatbox />

    </main>
  );
}
