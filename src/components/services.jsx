import React, { useEffect, useState } from "react";
const Services = () => {
    const [scrollY,setScrollY]=useState(0);

    useEffect(()=>{
        const handleScrollY=()=>{
            setScrollY(window.scrollY)
        }
        document.addEventListener("scroll",handleScrollY);
        return(()=>{
            document.removeEventListener("scroll",handleScrollY)
        })
    },[])
    console.log(scrollY);
    return (
        <>
            <div className="bg-[#F6F9FC] h-[500vh] w-[100vw] flex items-center justify-center">
                <div className="w-[86vw]">
                    <div className="flex">
                        <div className="w-[40%] h-[86.154vh] flex flex-col justify-evenly">
                            <div className="text-[#65C227] text-[1.064rem] font-semibold">Modular solutions</div>
                            <div className="text-[#4c792e] text-[3.288rem] font-bold leading-tight">
                                A fully integrated suite of financial and payments products
                            </div>
                            <div className="text-[#374D2C] text-[1.1rem]">
                                Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.
                            </div>
                        </div>
                        <div className="w-[60%]  flex items-center justify-center ">
                            <img src="./logo.svg" alt="" className={`${ (scrollY>=1032)?"fixed":""} ${(scrollY>=1260)?"hidden":""} bg-[#F6F9FC] top-0 w-[50vw] h-[100vh]`} />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[40%] h-[86.154vh] flex flex-col justify-evenly">
                            <div className="flex">
                                <img src="./logo.svg" alt="" className="h-[5vh]" />
                                <div className="text-[#65C227] text-[1.064rem] font-semibold">Payments</div>
                            </div>
                            <div className="text-[#4c792e] text-[2.236rem] font-bold leading-snug">
                                Accept and optimize payments, globally
                            </div>
                            <div className="text-[#374D2C] text-[1.1rem]">
                                Increase authorization rates, optimize your checkout
                                conversion, and offer local payment methods in every
                                market.
                            </div>
                            <div className="w-[100%]">
                                <button className="h-[6vh] w-[14vw] flex items-center justify-evenly group  bg-[#65C227] hover:bg-[#4C792E] text-[white] rounded-[1rem]">
                                    Start with payments
                                    <div className="group-hover:hidden">&gt;</div>
                                    <img src="./arrow.png" alt="" className='h-[2.2vh] group-hover:block hidden pt-1 ' />
                                </button>
                            </div>
                            <div>
                                <div className="font-semibold text-[#374D2C]">
                                    See also
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-7 cursor-pointer"> Tax </div> for automation sales tax and VAT
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-12 cursor-pointer"> Rader </div> for fraud prevention and management 
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-[4.1rem] cursor-pointer"> Terminal </div> for custom in-person payments
                                </div>
                            </div>
                        </div>
                        <div className="w-[60%]  flex items-center justify-center h-[100vh] bg-white">
                            <img src="./svg1.svg" alt="" className={` ${ (scrollY>=1260)?"fixed":""} ${(scrollY>=2027)?"hidden":""} bg-[#F6F9FC] h-[100vh]  top-0 w-[51.5vw]`} />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[41%] h-[86.154vh] flex flex-col justify-evenly">
                            <div className="flex justify-between w-[18%]">
                                <img src="./logo2.svg" alt="" className="h-[4vh]" />
                                <div className="text-[#65C227] text-[1.064rem] font-semibold">Billing</div>
                            </div>
                            <div className="text-[#4c792e] text-[2.236rem] font-bold leading-snug">
                                Capture recurring revenue
                            </div>
                            <div className="text-[#374D2C] text-[1.1rem]">
                                Support recurring business models, minimize churn,
                                and automate finance operations.
                            </div>
                            <div className="w-[100%]">
                                <button className="h-[6vh] w-[14vw] flex items-center justify-evenly group  bg-[#65C227] hover:bg-[#4C792E] text-[white] rounded-[1rem]">
                                    Start with Billing
                                    <div className="group-hover:hidden">&gt;</div>
                                    <img src="./arrow.png" alt="" className='h-[2.2vh] group-hover:block hidden pt-1 ' />
                                </button>
                            </div>
                            <div>
                                <div className="font-semibold text-[#374D2C]">
                                    See also
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-[4.5rem] cursor-pointer"> Invoicing </div> for automation sales tax and VAT
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-40 cursor-pointer"> Revenue Recognition </div> for fraud prevention and management 
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-12 cursor-pointer"> Sigma </div> for custom in-person payments
                                </div>
                            </div>
                        </div>
                        <div className="w-[60%]  flex items-center justify-center ">
                            <img src="./logo2.svg" alt="" className={` ${ (scrollY>=2027)?"fixed":""} ${(scrollY>=2607)?"hidden":""} bg-[#F6F9FC] h-[100vh] top-0 w-[40vw]`} />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[41%] h-[86.154vh] flex flex-col justify-evenly">
                            <div className="flex justify-between w-[18%]">
                                <img src="./logo3.svg" alt="" className="h-[4vh]" />
                                <div className="text-[#65C227] text-[1.064rem] font-semibold">Connet</div>
                            </div>
                            <div className="text-[#4c792e] text-[2.236rem] font-bold leading-snug">
                                Set up multiparty
                                payments and payouts
                            </div>
                            <div className="text-[#374D2C] text-[1.1rem]">
                                Integrate payments into your platform or marketplace
                                for end-to-end payments experiences.
                            </div>
                            <div className="w-[100%]">
                                <button className="h-[6vh] w-[14vw] flex items-center justify-evenly group  bg-[#65C227] hover:bg-[#4C792E] text-[white] rounded-[1rem]">
                                    Start with Connect
                                    <div className="group-hover:hidden">&gt;</div>
                                    <img src="./arrow.png" alt="" className='h-[2.2vh] group-hover:block  hidden pt-1 ' />
                                </button>
                            </div>
                            <div>
                                <div className="font-semibold text-[#374D2C]">
                                    See also
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-[4.5rem] cursor-pointer"> Terminal </div> for custom in-person payments
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-[7.3rem] cursor-pointer"> Instant Payouts </div> for fast payments to users 
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-36 cursor-pointer"> Payment Elements </div> for customizable UIs
                                </div>
                            </div>
                        </div>
                        <div className="w-[60%]  flex items-center justify-center ">
                            <img src="./logo3.svg" alt="" className={` ${ (scrollY>=2607)?"fixed":""} ${scrollY>=3143?"hidden":""} bg-[#F6F9FC] h-[100vh] top-0 w-[40vw]`} />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[41%] h-[86.154vh] flex flex-col justify-evenly">
                            <div className="flex justify-between w-[18%]">
                                <img src="./logo4.svg" alt="" className="h-[4vh]" />
                                <div className="text-[#65C227] text-[1.064rem] font-semibold">Issuing</div>
                            </div>
                            <div className="text-[#4c792e] text-[2.236rem] font-bold leading-snug">
                                Build a fintech offering with banking-as-a-service
                            </div>
                            <div className="text-[#374D2C] text-[1.1rem]">
                                Launch, manage, and scale a commercial card program without any setup fees.
                            </div>
                            <div className="w-[100%]">
                                <button className="h-[6vh] w-[14vw] flex items-center justify-evenly group  bg-[#65C227] hover:bg-[#4C792E] text-[white] rounded-[1rem]">
                                    Start with Issuing
                                    <div className="group-hover:hidden">&gt;</div>
                                    <img src="./arrow.png" alt="" className='h-[2.2vh] group-hover:block hidden pt-1 ' />
                                </button>
                            </div>
                            <div>
                                <div className="font-semibold text-[#374D2C]">
                                    See also
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-[4.2rem] cursor-pointer"> Treasury </div> for financial accounts
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-[3.8rem] cursor-pointer"> Capital </div> for offering fast, flexible financing 
                                </div>
                                <div className="flex">
                                    <div className="text-[#65C227] hover:text-[#374D2C] font-semibold w-[4.2rem] cursor-pointer"> Connect </div> for powering platform payments
                                </div>
                            </div>
                        </div>
                        <div className="w-[60%]  flex items-center justify-center ">
                            <img src="./logo4.svg" alt="" className={` ${scrollY>=3143?"fixed":""} ${scrollY>=3284?"relative":""} bg-[#F6F9FC] h-[100vh] top-0 w-[40vw]`} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Services