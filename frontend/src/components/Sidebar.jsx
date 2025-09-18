import React from 'react'
import { NotebookPenIcon, SearchIcon, MessageCircleIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router'
import Chat from './Chat'

const Sidebar = () => {


    const [showSidebar, setShowSidebar] = useState(false);



    return (

        <>
            <div className="flex flex-col md:flex-row justify-between max-h-screen w-full overflow-hidden relative">
                {/* Mobile menu toggle */}
                <button
                    className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-full shadow-lg"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? <XIcon size={20} /> : <MenuIcon size={20} />}
                </button>
                <div className={`${showSidebar ? 'flex opacity-100 right-0 absolute md:relative' : 'opacity-0 w-0 right-full absolute md:opacity-100 md:relative md:right-0'} transition-all ease-in-out duration-500 md:block absolute md:relative z-40 w-full md:w-auto h-full`}>
                    <div className='flex flex-col h-[100vh] justify-between w-full md:w-auto'>


                        <div className='overflow-y-hidden flex flex-col max-h-4/5 w-full md:w-80 bg-white md:m-5 p-3 md:p-5 rounded-xl shadow-xl opacity-100 backdrop-blur-sm transition-transform flex-1 min-h-0'>

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



                        <div className='w-full md:w-80 bg-white md:m-5 p-3 md:p-5 rounded-xl shadow-xl opacity-100 backdrop-blur-sm'>


                            <div className="user-container flex items-center justify-between bg-[rgba(61,61,61,1)] h-16 text-white rounded-sm p-2 ">
                                <div className="user h-full flex gap-2 items-center">
                                    <UserIcon color={"white"} size={22} />
                                    <div className="username">Soumya Mishra</div>
                                </div>
                                <div>
                                    <Link onClick={() => localStorage.setItem('auth-token', null)} to={'/'} className='text-white cursor-pointer m-2 bg-red-700 p-1.5 rounded-sm hover:bg-white hover:text-red-700 transition-all cusrsor-pointer'>Log Out</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Chat />
            </div>
        </>
    )
}

export default Sidebar