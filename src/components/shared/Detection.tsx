import React from 'react';

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Chip} from "@nextui-org/react";
import { GrStatusGood } from "react-icons/gr";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdOutlineQuestionMark } from "react-icons/md";
import { AnalysisResult } from '../../utils/types';
  

interface DetectionProps {
  data: AnalysisResult;
}

const Detection: React.FC<DetectionProps> = ({ data }) => {
  const { attributes } = data;

  // Convert last_analysis_results object to an array of key-value pairs
  const analysisResultsArray = Object.entries(attributes?.last_analysis_results || {});
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(analysisResultsArray.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return analysisResultsArray.slice(start, end);
  }, [page, analysisResultsArray]);


  const statusColorMap: { [key: string]: "success" | "warning" | "secondary" | "default" | "primary" | "danger" | undefined } = {
    clean: "success",
    suspicious: "danger", 
    unrated: "warning",
  };

  const statusIconMap: { [key: string]: React.ReactNode } = {
    clean: <GrStatusGood />,
    suspicious: <PiWarningCircleBold />,
    unrated: <MdOutlineQuestionMark />,
  };
  return (
    <div className='max-w-5xl px-3 mx-auto'>
    
      
<Table removeWrapper className='b   text-gray-200' aria-label="Example static collection table"


bottomContent={
    <div className="flex w-full  justify-center ">
      <Pagination
          classNames={{
            wrapper: "bg-neutral-900   text-gray-200",
            item: "bg-transparent   text-gray-200",
            next:'bg-neutral-900 text-gray-200',
            prev:'bg-neutral-900 text-gray-200',
          
           
          }}
        variant='flat'
        showControls
        color="success"
        page={page}
        total={pages}
        onChange={(page) => setPage(page)}
      />
    </div>
  }
 >
      <TableHeader  >
        <TableColumn className='bg-neutral-900 text-gray-100 font-bold'> ENGINE NAME </TableColumn>
        <TableColumn className='bg-neutral-900 text-gray-100 font-bold'>   RESULT </TableColumn>
    
      </TableHeader>
      <TableBody className='bg-red-400' >
      {items.map(([engineName, result]) => (
           <TableRow className=' backdrop-blur-sm  bg-neutral-900/40 rounded-md border border-neutral-800/50' key={engineName}>
           <TableCell> {result.engine_name} </TableCell>
           <TableCell>    <Chip    color={statusColorMap[result.result]} size="sm" variant="flat">
              <div className='flex items-center gap-1'>
              <span>
         {statusIconMap[result.result]}</span> <span>
           {result.result}
           </span>
              </div>
          </Chip> </TableCell>        
         </TableRow>
          ))}
      </TableBody>
    </Table>
    </div>
  );
};

export default Detection;
