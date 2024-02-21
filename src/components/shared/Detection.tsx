import React from 'react';

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Chip} from "@nextui-org/react";
import { GrStatusGood } from "react-icons/gr";
import { PiWarningCircleBold } from "react-icons/pi";
import { MdOutlineQuestionMark } from "react-icons/md";

interface AnalysisResult {
    id: string;
    type: string;
    links: {
      self: string;
    };
    attributes: {
      last_http_response_content_length: number;
      title: string;
      last_analysis_stats: {
        malicious: number;
        suspicious: number;
        undetected: number;
        harmless: number;
        timeout: number;
      };
      last_analysis_date: number;
      last_modification_date: number;
      last_analysis_results: {
        [engine: string]: {
          method: string;
          engine_name: string;
          category: string;
          result: string;
        };
      };
      redirection_chain: string[];
      total_votes: {
        harmless: number;
        malicious: number;
      };
      times_submitted: number;
      last_submission_date: number;
      last_http_response_headers: {
        [header: string]: string;
      };
      last_final_url: string;
      last_http_response_content_sha256: string;
      tld: string;
      last_http_response_code: number;
      first_submission_date: number;
      tags: string[];
      crowdsourced_context: {
        source: string;
        details: string;
        severity: string;
        timestamp: number;
        title: string;
      }[];
      threat_names: string[];
      categories: {
        [engine: string]: string;
      };
      reputation: number;
      url: string;
    };
  }
  

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
    <div>
    
      
<Table aria-label="Example static collection table"


bottomContent={
    <div className="flex w-full justify-center">
      <Pagination
        isCompact
        showControls
        showShadow
        color="secondary"
        page={page}
        total={pages}
        onChange={(page) => setPage(page)}
      />
    </div>
  }
  classNames={{
    wrapper: "min-h-[222px]",
  }}>
      <TableHeader>
        <TableColumn> ENGINE NAME </TableColumn>
        <TableColumn> RESULT </TableColumn>
    
      </TableHeader>
      <TableBody>
      {items.map(([engineName, result]) => (
           <TableRow key={engineName}>
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
