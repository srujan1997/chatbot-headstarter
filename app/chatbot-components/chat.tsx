export default function Chatbox() {
    return (
        <>
            <section className="w-full h-full">
              
                <div className="w-full h-max flex place-content-end p-5">
                    
                    <div className="rounded-xl px-7 place-items-start place-content-start p-3 bg-green-300 w-max h-max">
                        <p>
                            Some test user text
                        </p>
                    </div>

                </div>
              
                <div className="w-full h-max flex place-content-start p-5">
                    
                    <div className="rounded-xl px-7 place-items-start place-content-start p-3 bg-blue-300 w-max h-max">
                        <p>
                            Some test chatbot text
                        </p>
                    </div>

                </div>
              
                <div className="w-full h-max flex place-content-end p-5">
                    
                    <div className="rounded-xl px-7 place-items-start place-content-start p-3 bg-green-300 w-max h-max">
                        <p>
                            Some test user text
                        </p>
                    </div>

                </div>

            </section>
        </>
    )
}