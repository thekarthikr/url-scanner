import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=" text-gray-400 relative">
     
    <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    
    <div className="px-3  max-w-4xl   mx-auto relative  pt-36 ">
         <h1 className="text-4xl pb-3 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-red-50 to-red-400 bg-opacity-50">
        Page not found
         </h1>
         <p className="mt-4 font-normal text-base text-neutral-300 max-w-3xl text-center mx-auto">
         Sorry, the page you are looking for does not exist.
     </p> 
         <div className='text-center mt-8'>
       <Link to='/'>
       <Button  variant="faded" color="danger" >
            Back to Home
          </Button>
       </Link>

         </div>
        
       
    
       </div>
   
    
     
       
       </div>
  )
}

export default NotFound