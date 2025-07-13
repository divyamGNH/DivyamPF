import React from "react";

function Footer(){
    return(
        <div className="text-[#C7B99B] px-50 mb-10">
            <p className="text-[#C7B99B] mb-10">CONNECT</p>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-center text-center">
                    <a href="">Instagram</a>
                    <a href="">Instagram</a>
                    <a href="">Instagram</a>
                </div>

                <div className="flex flex-col">
                    <a href="">Instagram</a>
                    <a href="">Instagram</a>
                    <a href="">Instagram</a>
                </div>

                <div className="flex flex-col">
                    <p>Email</p>
                    <p>Phone</p>
                </div>

            </div>
        </div>
    );
}

export default Footer;