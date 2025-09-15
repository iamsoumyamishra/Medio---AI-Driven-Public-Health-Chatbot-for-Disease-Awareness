import React from 'react'
import { UserIcon, BotIcon } from 'lucide-react'


const Chat = () => {
    return (
        <div className='flex flex-col justify-between w-full max-w-full h-screen pb-10 p-5 mx-40'>
            

            <div className="flex flex-col ">
                <div className="chat-session flex flex-col h-full items-center overflow-x-hidden overflow-y-auto">

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

            <div className="input w-full rounded-full bg-white">
                <input placeholder={'Type something about health...'} className='bg-white outline-0 h-10 w-full rounded-full p-7' type="text" />
            </div>

        </div>
    )
}

export default Chat