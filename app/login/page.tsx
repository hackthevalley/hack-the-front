"use client";

import Navbar from "@/components/Navbar";

export default function LoginPage() {
    return(
        <div className="bg-black h-[100vh]">
            <Navbar hide={true} />
            {/* Back button */}

            <div>
                <p className="text-white">$ npm start challenge</p>

                <p className="text-white text-xl">{">"} Welcome Back Hacker,</p>
                
                <div className="w-full">
                    <div className="flex justify-between align-items">
                        <hr />
                        <p className="text-white">Sign in to view dashboard</p>
                        <hr />
                    </div>

                    {/* Custom field component for Email */}

                    {/* Custom field component for Password */}
                    

                </div>

            </div>
        </div>
    )
}
