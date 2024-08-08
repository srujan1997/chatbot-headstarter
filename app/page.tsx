import Image from "next/image";
import Chatbox from "./chatbot-components/chat";

export default function Home() {
  return (
    <main className="bg-[#222831] text-white flex min-h-screen flex-col gap-2 p-10">
      <div className="text-xs w-full h-max flex justify-evenly">
        <h1>Chatbot Headstarter</h1>
        <h1>stuff</h1>
      </div>

      <Chatbox />

    </main>
  );
}
