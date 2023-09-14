import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const GetStartedInterface = () => {

    const navigateTo = useNavigate()

    const [loading, isLoading] = useState(false)

    const navigateToRegistrationView = () => {
        isLoading(true);
        navigateTo('/registration');
    }

    return (
        <>
            {
                loading ? (
                    <p className="text-3xl">Loading...</p>
                ) : (
                    <div className="relative h-full bg-white bg-opacity-50 backdrop-blur-md">
                    {/* navigation bar */}
                    <Navbar bg="light" data-bs-theme="light" className="py-4 px-20 justify-content-between bg-white shadow-sm">
                        <Container>
                            <Navbar.Brand href="/" className="text-3xl font-bold">TaskifyZen</Navbar.Brand>
                            <Nav className=" gap-12">
                                <Nav.Link href="/" className="text-lg font-medium">Home</Nav.Link>
                                <Nav.Link href="#features" className="text-lg font-medium">Features</Nav.Link>
                                <Nav.Link href="#pricing" className="text-lg font-medium">Resources</Nav.Link>
                            </Nav>
                            <div>
                                <button className="text-lg text-gray-500 font-medium px-4 py-2 active:text-[#FFC700] hover:text-gray-800 outline-none ease-in-out duration-150" variant="">Sign in</button>
                                <button onClick={navigateToRegistrationView} className="text-lg text-gray-500 font-medium px-4 py-2 active:text-[#FFC700] hover:text-gray-800 outline-none ease-in-out duration-150" variant="">Sign up</button>
                            </div>
                        </Container>
                    </Navbar>
                    {/* hero */}
                    <div className="absolute flex justify-between items-center p-12 top-40">
                        <div className="flex-row items-center justify-center p-4 basis-8/12">
                            <p
                                className="mb-4 text-lg text-gray-400 flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                </svg>
                                Open Task Management Tool
                            </p>
                            <p className="text-7xl font-extrabold mb-4 leading-[5rem]">
                                Crafting Effortless Productivity
                            </p>
                            <div className=" w-3/4">
                                <p className="text-xl leading-8 text-gray-700">
                                    Experience Seamless Task Execution, Team Synergy, and Project Mastery with TaskifyZen. Where Simplicity Meets Precision in Task Management and Beyond.
                                </p>
                            </div>
                            <div className="flex justify-start items-center gap-4 mt-10">
                                <button 
                                    className="flex items-center justify-between gap-2 px-4 py-3 text-xl font-medium text-white bg-black hover:bg-gray-800 rounded-xl"
                                    onClick={navigateToRegistrationView}
                                >
                                    Get started
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </button>
                                <button 
                                    className="flex items-center justify-between gap-2 px-4 py-3 text-xl font-medium text-black bg-gray-50 border hover:bg-white rounded-xl"
                                >
                                    Explore
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src=""
                                 alt="screen-place-holder"
                                 className="h-96 w-96 object-contain absolute top-24 right-40"
                            />
                        </div>
                    </div>
                </div>
                )
            }
        </>
    )
        
}

export default GetStartedInterface;