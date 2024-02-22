import moment from 'moment'
import React from 'react'

const VideoLength = ({time}) => {
    const videoTimeLength = moment().startOf("day").seconds(time).format("H:mm:ss")
  return (
    <div className='absolute bottom-2 right-2 py-1 px-2 bg-black text-white text-xs rounded-md'>
        {videoTimeLength}
    </div>
  )
}

export default VideoLength