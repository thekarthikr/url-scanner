
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Detection from "./Detection";

const Results: React.FC = () => {
  const { urlId } = useParams<{ urlId: string }>();
  const [loading, setLoading] = useState(true);
  const [urlInfo, setUrlInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUrlInfo = async () => {
      try {
        const apiUrl = `https://www.virustotal.com/api/v3/urls/${urlId}`;
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-apikey': 'b247c64abaf9ad0391764ae8aae14a483dc94338e743b3940b61f9fdc1fcf4c8'
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

    return () => {
      // Cleanup if needed
    };
  }, [urlId]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-lg font-semibold mb-2">URL Information:</h2>
      
      <div className="flex w-full flex-col">
      <Tabs radius="full" variant="bordered" aria-label="Options">
        <Tab key="detection" title="
        Detection">
        {urlInfo && <Detection data={urlInfo}  /> }
        </Tab>
        <Tab key="summary" title="Summary">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
      
      </Tabs>
    </div>  
      <pre>{JSON.stringify(urlInfo, null, 2)}</pre>
    </div>
  );
};

export default Results;
