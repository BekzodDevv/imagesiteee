import React from 'react';



function Search({  searchImages }) {

    return <div>
        <div>

            <div className='flex items-center justify-center h-64 from-cyan-100 via-pink-200 to-yellow-200 bg-gradient-to-br mb-5'>
                <div className="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
                    <div className="w-full">
             
                        <input
                            type="text"
                            onKeyDown={(e) => searchImages(e)}
                            placeholder="Search For Images"
                            className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                        />
                    </div>
                    <div>
                        <button type="submit" className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>;
}

export default Search;


