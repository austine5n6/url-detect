import React, {useState} from 'react';

const Url = () => {
        const [url, setUrl] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();
        
            console.log('URL:', url); 

            try {
              // Make an HTTP request to your Express.js server
              const response = await fetch('https://url-detect-server.onrender.com/process-url', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
              });
        
              if (response.ok) {
                console.log('URL sent successfully');
                // Handle success, e.g., show a success message or redirect
              } else {
                console.error('Failed to send URL');
                // Handle error
              }

              const result = await response.json()
              console.log(result.message)
              console.log(result.label)
              alert(result.label)

            } catch (error) {
              console.error('Error sending URL:', error);
              // Handle error
            }
          };


    return(
    <div className="h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col items-center justify-center">
        <h4 className="text-white p-12 text-4xl">Url Scan</h4>
            <div className="relative">
                <form onSubmit={handleSubmit}>
                     <div className="flex">
                         <input 
                             type="text" 
                            className="w-40 md:w-48 lg:w-64 px-10 py-2 rounded-l-full transition-all duration-300 focus:outline-none focus:w-64"
                             placeholder="Search Url..." 
                             name="search"
                              value={url}
                              onChange={(e) => setUrl(e.target.value)}
                             />

                           <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600">Search</button>
                    </div>
             </form>
                  </div>
                      </div>
        );
    }   

export default Url;

   //     <div className="h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col items-center justify-center">
    //     <h4 className="text-5xl sm:text-7xl font-bold text-white">Url check</h4>
   

    
    // </div>