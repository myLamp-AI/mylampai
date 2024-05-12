
import React from 'react'

const Page1: React.FC = () => {
  return (
     <>
           <div className="aspect-w-16 aspect-h-9">
           <iframe
           className="absolute top-0 left-0 w-full h-full"
           src="https://www.youtube.com/embed/VIDEO_ID"
           title="YouTube video player"
           allowFullScreen
           ></iframe>
          </div>
    </>
  )
}

export default Page1;