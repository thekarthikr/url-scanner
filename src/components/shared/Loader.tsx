import { Skeleton } from "@nextui-org/react"


const Loader = () => {
  return (
    <div className=" text-gray-400 relative">
    <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    
    <div className="max-w-7xl px-3  mx-auto relative  pt-24 ">
        <Skeleton className="max-w-3xl w-full h-5 bg-neutral-950/50 mx-auto rounded-lg" />
       <div className="space-y-4 mt-10 font-normal text-base  max-w-3xl text-center mx-auto">
       <Skeleton className="max-w-3xl w-full h-2 bg-neutral-950/50 mx-auto rounded-full" />
       <Skeleton className="max-w-2xl w-full h-2 bg-neutral-950/50 mx-auto rounded-full" />
       <Skeleton className="max-w-3xl w-full h-2 bg-neutral-950/50 mx-auto rounded-full" />
       <Skeleton className="max-w-xl w-full h-2 bg-neutral-950/50 mx-auto rounded-lg" />
       </div>
       <Skeleton className="max-w-4xl   w-full h-40 mt-20 bg-neutral-950/50 mx-auto rounded-lg" />
    </div>
   
       </div>
  )
}

export default Loader