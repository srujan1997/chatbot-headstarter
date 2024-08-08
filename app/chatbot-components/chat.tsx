'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";
import { Message, streamConversation } from "../actions";
import { readStreamableValue } from "ai/rsc";
import { Input } from "@/components/ui/input"
import { FaLongArrowAltUp } from "react-icons/fa";
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown'



export default function Chatbox() {

    const [input, setInput] = useState<string>("");
    const [conversation, setConversation] = useState<Message[]>([]);

    // gemini function 
    const startChat = async () => {
        const { messages, newMessage } = await streamConversation([
            ...conversation,
            { role: "user", content: input },
        ]);

        let textContent = "";

        for await (const delta of readStreamableValue(newMessage)) {
            textContent = `${textContent}${delta}`;

            setConversation([
                ...messages,
                { role: "assistant", content: textContent },
            ]);
        }

        console.log(textContent)
        setInput(""); // Clear the input field after submitting
    }

    return (
        <>
            <section className="w-full h-full flex place-content-center" >
                
                <AnimatePresence>

                <motion.div id="chat-container" className={`w-[calc(70vw-100px)] no-scrollbar h-[calc(100vh-150px)] flex flex-col overflow-y-scroll`}>
                    
                    <motion.div className="w-full h-max flex place-content-start p-5">
                    
                        <motion.div 
                        whileHover={{ 
                            scale: 1.005 
                        }} 
                        className="cursor-pointer rounded-xl px-7 place-items-start place-content-start p-3 bg-blue-300 max-w-[300px] h-max">
                            <p>
                                Welcome to our chatbot. Ask us some questions. Our responses will be in blue.
                            </p>
                        </motion.div>

                    </motion.div>

                    <motion.div className="w-full h-max flex place-content-end p-5">
                    
                        <motion.div 
                        whileHover={{ 
                            scale: 1.005 
                        }}
                        className="cursor-pointer rounded-xl px-7 place-items-start place-content-start p-3 bg-green-300 max-w-[300px] h-max">
                            <p>
                                Your questions and prompts will be in green here.
                            </p>
                        </motion.div>

                    </motion.div>

                        <motion.div
                        className="w-full h-[1px] flex bg-gray-300 my-8"
                        />
                    
                    {conversation.map((message) => (
                        <motion.div key={message.content} className={`w-full h-max flex p-5 ${message.role === 'user' ? 'place-content-end' : 'place-content-start'}`} >
                            <motion.div 
                            whileHover={{ 
                                scale: 1.005 
                            }}
                            className={`cursor-pointer rounded-xl px-7 place-items-start place-content-start p-3 sm:max-w-[500px] h-max  ${message.role === 'user' ? 'bg-green-300' : 'bg-blue-300'}`} key={message.content}>
                                <ReactMarkdown rehypePlugins={[rehypeRaw]} className="prose-lg">{message.content}</ReactMarkdown>
                            </motion.div>
                        </motion.div>
                    ))}


                </motion.div>
                            
                </AnimatePresence>

                {/* input */}
                <div className="absolute  bottom-0 place-self-center p-4 flex place-self-end justify-between  gap-8 place-items-center w-[90%] h-max">
               
                    <div className="w-full">
                        <Input 
                            value={input}
                            onChange={(event) => {
                                setInput(event.target.value);
                            }} 
                            className="outline outline-primary/20" autoFocus />
                    </div>

                    <button className="bg-primary/20 p-2 rounded-full"
                        onClick={() => startChat()}
                    >
                        <FaLongArrowAltUp size={20} />
                    </button>

                </div>

            </section> 
        </>
    )
}