import { AnalysisResult } from "../../utils/types";

interface StatsProps {
    data: AnalysisResult;
  }
  
  const Stats: React.FC<StatsProps> = ({ data }) => {
    const { attributes } = data;
  
    // Convert last_analysis_results object to an array of key-value pairs
    const stats = Object.entries(attributes?.last_analysis_stats || {});
    return (
        <section className="py-24 z-50">
            <div className="max-w-6xl mx-auto px-5 sm:px-10 md:px-6 lg:px-4">
                <div className="p-6 rounded-lg border border-gray-900 backdrop-blur-md bg-neutral-950/30 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                  {
                    stats.map((stat,idx)=>(
                        <div className="space-y-2" key={idx}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-200 ">
                          {stat?.[1]}
                        </h2>
                        <p className="text-gray-300 ">
                           {stat?.[0]}
                        </p>
                    </div>
                
                    ))
                  } 
                </div>
            </div>
        </section>
    )
    }
     
    export default Stats