import React from 'react'
import { UserIcon, BotIcon, SendIcon, PaperclipIcon } from 'lucide-react'


const Chat = () => {
    return (

        <div className='flex flex-col justify-between w-full md:w-[70%] max-w-full h-screen
        max-h-screen pb-5 md:pb-10 p-3 md:p-5 pr-0'>


            <div className='flex px-3 md:px-5 py-2 md:py-4 relative left-2 md:left-10 w-max bg-white shadow-sm rounded-2xl mt-10 md:mt-0'>
                <span className='text-3xl'>
                    Chat Title
                </span>
            </div>


            <div className="flex flex-col " >
                <div className="chat-session flex flex-col h-[60vh] md:h-[70vh] items-center overflow-x-hidden overflow-y-auto pl-2 md:pl-10 pr-0 md:pr-35" >

                    {/* USER */}
                    <div className='flex self-end'>

                        <div className="user shadow-xl wrap-anywhere rounded-sm bg-white p-2 m-2.5">
                            Hey!
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 bg-white shadow-xl p-2 rounded-full">
                            <UserIcon color={'black'} size={22} />
                        </div>

                    </div>


                    {/* AI */}
                    <div className='flex  flex-row-reverse self-start'>

                        <div className="medio p-2 m-2.5 wrap-anywhere">
                            Hey! How are you doing?
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 shadow-xl bg-white  p-2 rounded-full">
                            <BotIcon color={'black'} size={22} />
                        </div>
                    </div>
                    {/* USER */}
                    <div className='flex self-end'>

                        <div className="user shadow-xl wrap-anywhere rounded-sm bg-white p-2 m-2.5">
                            Hey!
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 bg-white shadow-xl p-2 rounded-full">
                            <UserIcon color={'black'} size={22} />
                        </div>

                    </div>


                    {/* AI */}
                    <div className='flex  flex-row-reverse self-start'>

                        <div className="medio p-2 m-2.5 wrap-anywhere">
                            Hey! How are you doing?
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 shadow-xl bg-white  p-2 rounded-full">
                            <BotIcon color={'black'} size={22} />
                        </div>
                    </div>
                    {/* USER */}
                    <div className='flex self-end'>

                        <div className="user shadow-xl wrap-anywhere rounded-sm bg-white p-2 m-2.5">
                            Hey!
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 bg-white shadow-xl p-2 rounded-full">
                            <UserIcon color={'black'} size={22} />
                        </div>

                    </div>


                    {/* AI */}
                    <div className='flex  flex-row-reverse self-start'>

                        <div className="medio p-2 m-2.5 wrap-anywhere">
                            Hey! How are you doing?
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 shadow-xl bg-white  p-2 rounded-full">
                            <BotIcon color={'black'} size={22} />
                        </div>
                    </div>
                    {/* USER */}
                    <div className='flex self-end'>

                        <div className="user shadow-xl wrap-anywhere rounded-sm bg-white p-2 m-2.5">
                            Hey!
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 bg-white shadow-xl p-2 rounded-full">
                            <UserIcon color={'black'} size={22} />
                        </div>

                    </div>


                    {/* AI */}
                    <div className='flex  flex-row-reverse self-start'>

                        <div className="medio p-2 m-2.5 wrap-anywhere">
                            Hey! How are you doing?
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 shadow-xl bg-white  p-2 rounded-full">
                            <BotIcon color={'black'} size={22} />
                        </div>
                    </div>
                    {/* USER */}
                    <div className='flex self-end'>

                        <div className="user shadow-xl wrap-anywhere rounded-sm bg-white p-2 m-2.5">
                            Hey!
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 bg-white shadow-xl p-2 rounded-full">
                            <UserIcon color={'black'} size={22} />
                        </div>

                    </div>


                    {/* AI */}
                    <div className='flex  flex-row-reverse self-start'>

                        <div className="medio p-2 m-2.5 wrap-anywhere">
                            Hey! How are you doing?
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 shadow-xl bg-white  p-2 rounded-full">
                            <BotIcon color={'black'} size={22} />
                        </div>
                    </div>
                    {/* USER */}
                    <div className='flex self-end'>

                        <div className="user shadow-xl wrap-anywhere rounded-sm bg-white p-2 m-2.5">
                            Hey!
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 bg-white shadow-xl p-2 rounded-full">
                            <UserIcon color={'black'} size={22} />
                        </div>

                    </div>


                    {/* AI */}
                    <div className='flex  flex-row-reverse self-start'>

                        <div className="medio p-2 m-2.5 wrap-anywhere">
                            Hey! How are you doing?
                        </div>

                        <div className="profil-photo h-max w-max m-2.5 shadow-xl bg-white  p-2 rounded-full">
                            <BotIcon color={'black'} size={22} />
                        </div>
                    </div>


                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-10 pr-2 md:pr-35 mt-2 md:mt-0">
                <div className="flex items-center w-full bg-white shadow-md rounded-full px-4 py-2">
                    <button className="flex relative right-2 items-center justify-center bg-[rgba(61,61,61,1)] hover:bg-gray-800 transition rounded-full p-2">
                        <PaperclipIcon className="text-white" size={22} />
                    </button>
                    <input
                        placeholder="Type something about health..."
                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                        type="text"
                    />
                    <button className="flex items-center justify-center bg-[rgba(61,61,61,1)] hover:bg-gray-800 transition rounded-full p-2">
                        <SendIcon className="text-white" size={22} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Chat