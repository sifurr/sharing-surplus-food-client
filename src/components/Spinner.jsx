import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";


const Spinner = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const override = `
     display: block;
     margin: 0 auto;
     border-color: red;
   `;
   
    return (
        <div className="min-h-screen flex items-center">
            <div className="sweet-loading mx-auto">
                {
                    isLoading && <PacmanLoader
                        color={'#0000FF'}
                        isLoading={isLoading}
                        css={override} size={75} />
                }

            </div>

            {/* <span className="loading loading-dots mx-auto loading-lg text-info"></span> */}
        </div>

    );
};

export default Spinner;