import { useState } from "react";
import ecohive from "../../public/assets/faq.jpg";

const Faq = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <section id="faq" className="h-full pt-16 pb-0">
            <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-20 px-4">
                <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 text-center">
                    Frequently Asked Questions
                </h2>
                <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                    <div className="md:w-5/12 lg:w-4/12 w-full">
                        <img src={ecohive} alt="EcoHive" className="w-full h-[auto] rounded-lg" style={{ maxHeight: '450px' }} />
                    </div>
                    <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10 content-center">
                        <div>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow(!show)}>
                                <h3 className="font-medium text-lg leading-5 text-gray-800 pr-6">
                                    What is Green Credit?
                                </h3>
                                <button aria-label="toggle" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={show ? "M4.16602 10H15.8327" : "M10 4.1665V15.8332"} stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show ? "block" : "hidden")}>
                            Green Credit is a credit-based system that rewards individuals and organizations for engaging in environmentally beneficial activities. It incentivizes sustainable practices by providing credits that can be used for various benefits. This system aims to promote ecological conservation and reduce carbon emissions.
                            </p>
                        </div>

                        <hr className="my-7 bg-gray-200" />

                        <div>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow2(!show2)}>
                                <h3 className="font-medium text-lg leading-5 text-gray-800 pr-6">
                                    How can individuals benefit from Green Credit?
                                </h3>
                                <button aria-label="toggle" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={show2 ? "M4.16602 10H15.8327" : "M10 4.1665V15.8332"} stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show2 ? "block" : "hidden")}>
                            Individuals can earn credits by participating in eco-friendly activities, which can be redeemed for rewards and monetary incentives. It encourages sustainable lifestyle choices and provides recognition and encouragement for environmental contributions.
                            </p>
                        </div>

                        <hr className="my-7 bg-gray-200" />

                        <div>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => setShow3(!show3)}>
                                <h3 className="font-medium text-lg leading-5 text-gray-800 pr-6">
                                    What advantages do companies gain from participating in Green Credit programs?
                                </h3>
                                <button aria-label="toggle" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d={show3 ? "M4.16602 10H15.8327" : "M10 4.1665V15.8332"} stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show3 ? "block" : "hidden")}>
                            Companies can complete their corporate social responsibility (CSR) and get priority for government approval in starting projects, getting land allocations for offices and factories, attracting environmentally conscious customers, and accessing financial incentives and tax benefits. Companies can also offset their carbon footprint and streamline the process using EcoHive for management.
                            </p>
                        </div>

                        <hr className="my-7 bg-gray-200" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
