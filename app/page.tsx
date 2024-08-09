import Image from "next/image";
import Chatbox from "./chatbot-components/chat";

export default function Home() {
  return (
    <main className="bg-[#222831] text-white overflow-hidden flex min-h-screen flex-col gap-2 p-5 md:p-10">
      
      <div className="text-xs w-full h-max flex justify-between">
        <h1>Chatbot Headstarter</h1>
        <h1></h1>
      </div>

      <Chatbox />

    </main>
  );
}
