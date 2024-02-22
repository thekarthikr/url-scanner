
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import {Tabs, Tab, Button} from "@nextui-org/react";
import Detection from "./Detection";
import Stats from './Stats';
import Details from './Details';
import Loader from './Loader';


const Results: React.FC = () => {
  const { urlId } = useParams<{ urlId: string }>();
  const [loading, setLoading] = useState(true);
  const [urlInfo, setUrlInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const fetchUrlInfo = async () => {
      try {
        const apiUrl = `https://www.virustotal.com/api/v3/urls/${urlId}`;
        const options = {
            method: 'GET',
            
            headers: {
              accept: 'application/json',
              'x-apikey': API_KEY
            }
          };
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const {data} = await response.json();
        setUrlInfo(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch URL information');
        setLoading(false);
      }
    };

    fetchUrlInfo();

   
  }, [urlId]);
  if (loading) {
    return <Loader />
  }

  if (error) {
    return  <div className=" text-gray-400 relative">
     
    <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    
    <div className="px-3  max-w-4xl   mx-auto relative  pt-36 ">
         <h1 className="text-4xl pb-3 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-red-50 to-red-400 bg-opacity-50">
        Something went wrong, Please try again later..
         </h1>
         <p className="mt-4 font-normal text-base text-neutral-300 max-w-3xl text-center mx-auto">
         Please check the url and try again..
     </p>
          
         <div className='text-center mt-8'>
       <Link to='/'>
       <Button  variant="faded" >
            Back to Home
          </Button>
       </Link>

         </div>
        
       
    
       </div>
   
    
     
       
       </div>
  }

  const { attributes:{times_submitted,url,tld,title,first_submission_date,reputation,total_votes} } = urlInfo;

  return (
    <div className=" text-gray-400 relative">
     
 <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
 
 <div className="px-3  max-w-7xl   mx-auto relative  pt-20 ">
      <h1 className="text-4xl pb-3 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
      URL Information
      </h1>
      <p className="mt-4 font-normal text-base text-neutral-300 max-w-3xl text-center mx-auto">
      The URL <strong>{url}</strong> titled <strong>{title}</strong> has been submitted <strong>{times_submitted}</strong> times. It belongs to the domain <strong>{tld}</strong> and was first submitted on <strong>{first_submission_date}</strong>. It has a reputation score of <strong>{reputation}</strong> based on <strong>{total_votes.harmless} harmless votes</strong>.
  
  The crowdsourced context for this URL includes insights on severity, source, and timestamp. The last analysis results are provided below. This offers a comprehensive overview of the URL data, aiding in understanding its significance and potential risks.
      </p>
    
 
    </div>

 
    
      {urlInfo && <Stats data={urlInfo}  /> }
      <div className="flex w-full flex-col">
      <Tabs className='px-2 max-w-5xl mx-auto' radius="full" variant="bordered" aria-label="Options">
        <Tab key="detection" title="
        Detection">
        {urlInfo && <Detection data={urlInfo}  /> }
        </Tab>
        <Tab key="summary" title="Summary">
        {urlInfo && <Details data={urlInfo}  /> }
        </Tab>
      
      </Tabs>
    </div>  
    
    </div>
  );
};

export default Results;
