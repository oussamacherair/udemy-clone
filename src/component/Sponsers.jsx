import React from 'react'

function Sponsers() {
    return (
        <div className='px-5 py-20 text-center bg-gray-100 text-xl my-14'>
            <p className='text-lg line-clamp-2'>Trusted by over 15,000 companies and millions of learners around the world</p>
            <div className='grid px-10 grid-flow-row-dense gap-5  items-center justify-items-center grid-cols-4 lg:grid-cols-8 p-5 '>
                <div>
                    <img src="https://rebrand.ly/ericsson" alt="https://rebrand.ly/ericsson" className='' />
                </div>
                <div>
                    <img src="https://rebrand.ly/partner-logos" alt="https://rebrand.ly/partner-logos" />
                </div>
                <div>
                    <img src="https://rebrand.ly/samsung2" alt="https://rebrand.ly/samsung2" />
                </div>
                <div>
                    <img src="https://rebrand.ly/partner-logos2" alt="https://rebrand.ly/partner-logos2" />
                </div>
                <div><img src="https://rebrand.ly/partner-logos3" alt="https://rebrand.ly/partner-logos3" />
                </div>
                <div>
                    <img src="https://rebrand.ly/volkswagen2023" alt="https://rebrand.ly/volkswagen2023" />
                </div>
                <div>
                    <img src="https://rebrand.ly/hewlett_packard_enterprise" alt="https://rebrand.ly/hewlett_packard_enterprise" />
                </div>
                <div>
                    <img src="https://rebrand.ly/cisco2023" alt="https://rebrand.ly/cisco2023" />
                </div>
            </div>
        </div>
    )
}

export default Sponsers