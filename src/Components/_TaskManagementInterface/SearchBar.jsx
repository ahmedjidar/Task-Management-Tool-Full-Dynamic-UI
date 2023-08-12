import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';

const SearchBar = () => {
    return (
        <div className="w-8/12 flex items-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-7 h-7 bg-gray-100 py-[.85rem] pl-4 box-content
                      rounded-s-xl text-gray-500 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5
                          0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <input type="text" placeholder="Search by Task name..." className="w-full outline-none
            rounded-e-xl py-[.85rem] px-4 bg-gray-100 text-lg"/>
        </div>
    );
}

export default SearchBar;