import React from 'react'
import { NotebookPenIcon, SearchIcon, MessageCircleIcon, UserIcon } from 'lucide-react'

const Sidebar = () => {
    return (


        <div className='md:flex flex-col justify-between hidden'>


            <div className='overflow-y-hidden flex flex-col max-h-4/5 w-80 bg-white m-5 p-5 rounded-xl shadow-xl opacity-100 backdrop-blur-sm transition-transform flex-1 min-h-0'>

                <div className="heading ml-2.5 mb-8">
                    <span className='text-3xl'>Medio</span>
                </div>
                <div className="new-chat text-center h-auto mb-8">

                    <div className='flex items-center gap-2 cursor-pointer bg-black text-white h-10 w-full shadow-2xl rounded-sm hover:scale-105 transition-transform mb-3 text-left px-2.5 opacity-75'>
                        <NotebookPenIcon color={"white"} size={25} />
                        <button className='cursor-pointer'>New Chat</button>
                    </div>


                    <div className='flex items-center gap-2 cursor-pointer bg-black text-white h-10 w-full shadow-2xl rounded-sm hover:scale-105 transition-transform mb-3 text-left px-2.5 opacity-75'>
                        <SearchIcon color={"white"} size={25} />
                        <button className='cursor-pointer'>Search Chats</button>
                    </div>
                </div>

                <div className="chats-container flex flex-col min-h-0">
                    <div className="chatHeading mb-5">

                        <div className='flex items-center gap-2 text-xl'>
                            <MessageCircleIcon color={"black"} size={22} />
                            Chats
                        </div>
                    </div>
                    <div className="chats flex-1 overflow-y-auto mb-4 h-auto">
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>
                        <div className="chat flex items-center rounded-sm overflow-x-hidden hover:bg-black h-10 hover:text-white transition-all px-2.5 cursor-pointer opacity-75">Chat</div>

                    </div>
                </div>



            </div>



            <div className='w-80 bg-white m-5 p-5  rounded-xl shadow-xl opacity-100 backdrop-blur-sm '>


                <div className="user-container flex items-center justify-between bg-[rgba(61,61,61,1)] h-16 text-white rounded-sm p-2 ">
                    <div className="user h-full flex gap-2 items-center">
                        <UserIcon color={"white"} size={22} />
                        <div className="username">Soumya Mishra</div>
                    </div>
                    <div>
                        <button className='text-white cursor-pointer m-2 bg-red-700 p-1.5 rounded-sm hover:bg-white hover:text-red-700 transition-all '>Log out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar