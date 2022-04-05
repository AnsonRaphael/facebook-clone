import Image from 'next/image'
import React from 'react'
import {ImUsers} from 'react-icons/im'
import {MdGroups,MdOutlineOndemandVideo,MdOutlineExpandMore} from 'react-icons/md'
import {AiOutlineShop} from 'react-icons/ai' 
import {BsStopwatch} from 'react-icons/bs' 
import SideBarItem from './SideBarItem'
import { useSession } from 'next-auth/react'
const Sidebar = () => {
    const {data:session} = useSession();
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2'>
        <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
            <Image src={session?.user.image}
                height={40}
                width={40}
                className="rounded-full cursor-pointer"
            />
            <p className='hidden sm:inline-flex font-medium'> {session?.user.name} </p>
        </div>
        <SideBarItem Icon={ImUsers} value="Friends"/>
        <SideBarItem Icon={MdGroups} value="Groups"/>
        <SideBarItem Icon={AiOutlineShop} value="Marketplace"/>
        <SideBarItem Icon={MdOutlineOndemandVideo} value="Watch"/>
        <SideBarItem Icon={BsStopwatch} value="Memories"/>
        <SideBarItem Icon={MdOutlineExpandMore} value="See More"/>    
    </div>
  )
}

export default Sidebar