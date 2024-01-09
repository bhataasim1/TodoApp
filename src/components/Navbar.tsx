import React from 'react'

const Navbar: React.FC = () => {
    return (
        <>
            <div className="flex justify-center mb-4">
                <a href="https://github.com/bhataasim1" className="text-white mr-4 hover:text-red-500 font-bold" target="_blank">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/aasim-bhat-b4726b115/" className="text-white mr-4 hover:text-red-500 font-bold" target="_blank">
                    LinkedIn
                </a>
                <a href="https://instagram.com/bhataasim9" className="text-white hover:text-red-500 font-bold" target="_blank">
                    Instagram
                </a>
            </div>
        </>
    )
}

export default Navbar