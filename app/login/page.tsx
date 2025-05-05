"use client";

import Navbar from "@/components/Navbar";

export default function LoginPage() {
    return(
        <div className="bg-black h-[100vh] font-[family-name:var(--font-euclid-circular-b)] relative">
            <img className="absolute opacity-10 top-6/10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]" src="/backgrounds/smaller-gradient.svg" />
            <Navbar hide={true} />

            <div className="flex flex-col justify-start">
                <button className="text-white font-semibold text-2xl">{"<"} Back</button>

                <div className="flex justify-center">
                    <div className="w-1/2">
                        <p className="text-grey text-xl">$ npm start challenge</p>

                        <p className="text-white font-bold text-6xl mt-[1rem] mb-[3rem]">{">"} Welcome Back Hacker,</p>
                        
                        <div className="w-full my-[3rem]">
                            <div className="flex justify-between items-center">
                                <hr className="bg-indigo mr-4 w-full h-[2px]" />
                                <p className="text-white w-fit whitespace-nowrap font-semibold font-2xl">Sign in to view dashboard</p>
                                <hr className="bg-indigo ml-4 w-full h-[2px]" />
                            </div>
                            

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
