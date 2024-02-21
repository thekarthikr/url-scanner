import { Card, CardBody, Divider } from '@nextui-org/react';
import { AnalysisResult } from '../../utils/types';
  

interface DetailsProps {
  data: AnalysisResult;
}

const Details: React.FC<DetailsProps> = ({ data }) => {
  const { attributes } = data;

  // Convert last_analysis_results object to an array of key-value pairs
  const headerResponse = Object.entries(attributes?.last_http_response_headers || {});
  return (
    <div className='max-w-5xl px-3 mx-auto'>
       <Card>
        <CardBody>
        <ul className="space-y-1 p-3">
        {
            headerResponse.map((item,idx)=>(
                <li key={idx} className='py-2'>
                <span className='text-gray-900'>   {item[0]} </span> : <span className='text-gray-600'>{item[1]} </span>
                   <Divider className='mt-3 opacity-30'/>
                </li>
            ))
        }
        </ul>

        </CardBody>
       </Card>
    </div>
  )
}

export default Details