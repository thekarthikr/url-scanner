import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import base64 from 'base-64';
import { Spotlight } from '../ui/Spotlight';
import { Button, Input } from '@nextui-org/react';

const Home: React.FC = () => {
  const [url, setUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const history = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (url.trim() === "") {
      setErrorMessage("Please enter a URL");
      return;
    }
    if (!validateURL(url)) {
      setErrorMessage("Please enter a valid URL");
      return;
    }
    const url_id = base64.encode(url).replace(/=/g, '');
    history(`/results/${url_id}`);
  };

  const validateURL = (url: string) => {
    const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
    return urlRegex.test(url);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    if (errorMessage !== null) {
      setErrorMessage(null); 
    }
  };


  return (
    <div className="h-screen px-3 w-full rounded-md flex md:items-center md:justify-center bg-neutral-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl pb-3 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Safeguard <br /> your digital experience.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-400 max-w-3xl text-center mx-auto">
          In today's digital landscape, rife with cybersecurity threats, URL Scanner stands out as a crucial safeguard for your online security. This innovative website enhances your protection by analyzing and verifying URL safety, effectively defending against phishing, malware, and scams before you click.
        </p>
        <form className="flex flex-col md:flex-row mt-10 items-center mx-auto justify-center gap-3" onSubmit={handleSubmit}>
          <Input
            value={url}
            onChange={handleChange}
            type="text"
            placeholder='https://google.com'
            variant="bordered"
            color={errorMessage ? "danger" : "success"}
            errorMessage={errorMessage && "Please enter a valid URL"}
            className="max-w-xl text-white"
          />
          <Button type='submit' className='py-7 px-7' variant='shadow' color="success" startContent={<SearchIcon/>}>
            Scan
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;


const SearchIcon = (props:any) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
