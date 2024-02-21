export interface AnalysisResult {
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