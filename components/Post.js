import Image from 'next/image'
import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
import {FaRegCommentAlt} from 'react-icons/fa'
import {RiShareForwardLine} from 'react-icons/ri'


const Post = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-white mt-6 rounded-md p-4'>
            <div className='flex items-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png"
                className='rounded-full w-10 h-10' />
                <div>
                    <p className='font-medium'>Anson Antony</p>
                    <p className='text-xs text-gray-500'>{new Date(2012, 1, 20).toString()}</p>
                </div>
            </div>
            <p className='py-4'>Lorem Ipsum</p>            
        </div> 
        {/* if any image */}
        <div className='relative h-60 md:h-96 bg-white'>
            <Image src="https://images.pexels.com/photos/8668602/pexels-photo-8668602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  layout='fill' objectFit='cover'/>
        </div>
        {/* footer post */}
        <div className='flex items-center justify-center bg-white p-2'>
            <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                <FiThumbsUp className='h-4' />
                <p className='text-xs sm:text-base'>Like</p>
            </div>
            <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                <FaRegCommentAlt className='h-4' />
                <p className='text-xs sm:text-base'>Comment</p>
            </div>
            <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                <RiShareForwardLine className='h-4' />
                <p className='text-xs sm:text-base'>Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post