import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs"
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import VideoLength from '../Shared/VideoLength'

const VideoCard = ({video, key}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className='flex flex-col mb-8'>
        <div className='relative h-48 md:h-40 rounded-md md:rounded-xl overflow-hidden'>
          <img src={video?.thumbnails?.[0]?.url} className='h-full w-full object-cover' alt=''/>
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds}/>
          )}
        </div>
        <div className='flex text-white mt-3'>
          <div className='flex items-start'>
            <div className='flex h-9 w-9 rounded-full overflow-hidden'>
              <img src={video?.author?.avatar[0]?.url} className='w-full h-full object-cover' alt=''/>
            </div>
          </div>
          <div className='flex flex-col ml-3 overflow-hidden'>
            <span className='text-sm text-bold line-clamp-2'>
              {video?.title}
            </span>
            <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className='ml-1 text-white/[0.5] text-[12px]'/>
              )}
            </span>
            <div className='flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden'>
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className='flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1'>.</span>
              <span className='truncate'>{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>    
    </Link>
  )
}

export default VideoCard