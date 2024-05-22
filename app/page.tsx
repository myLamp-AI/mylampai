import React from 'react'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'



const page = () => {
    <>
      
     <div>
      I am home Page
       <Link href="/Explore">Explore</Link> 
     </div>
    </>
  )
}

export default page;