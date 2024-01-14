import { Button, Input } from "../components";
import logo from '../assets/images/logo.png';

export default function Footer() {
    return (
        <div className="bg-[#18303a] p-10" >
            <div className="lg:flex lg:gap-x-10" >
                <div>
                    <p className="uppercase text-lg text-white font-semibold" >get in touch</p>
                    <h2 className="text-5xl text-[#5ba1bd] font-semibold my-6" >Let's chat</h2>
                    <form>
                        <div className=" md:flex " >
                            <Input placeholder="full name*" />
                            <span className="md:mx-3" ></span>
                            <Input placeholder="email address*" />
                        </div>
                        <textarea placeholder="enquiry*" className="p-6 h-[192px] w-full rounded-[25px] bg-inherit border" />
                        <div className="flex justify-end w-full my-16" >
                            <Button hoverColor="#5ba1bd" color="" hoverTextColor="white" width="260px" height="54px" textColor="#5ba1bd" border="#5ba1bd" >send +</Button>
                        </div>
                    </form>
                </div>

                <div className="lg:min-w-[200px]" >
                    <img className="w-[90px] h-[87px] mb-12" src={logo} />

                    <a type="tel:" className="text-white font-light block" ><span className="text-[#99c6d6] font-medium" >T:</span> 08009757514</a>
                    <a type="mailto:" className="text-white font-light block" ><span className="text-[#99c6d6] font-medium" >E:</span> sales@tig.uk.net</a>
                    <address className="font-light my-6 text-white" >
                        The Inter Group, <br />
                        Lingerfield Business Park, <br />
                        Market Flat Ln, Knaresborough <br />
                        North Yorkshire, HG59JA
                    </address>

                    <div>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                    </div>
                </div>

                <div className="flex justify-center flex-col items-center my-10 lg:justify-end lg:mb-16" >
                    <p className="text-center text-white mb-4" >Want to work at TIG?</p>
                    <Button animateText={false} width="290px" hoverColor="#5ba1bd" color="" hoverTextColor="white" height="48px" textColor="#5ba1bd" border="#5ba1bd" >view our careers +</Button>
                </div>
            </div>

            <hr className="text-slate-300" />

            <div className="lg:flex items-center justify-between" >
                <p className="text-white text-sm font-light my-4" >
                    &#169;2023 The Inter group (tig). All rights reserved. Registered Company: 1020073 | VAT No. GB 169 886293
                </p>

                <p className="text-white text-sm  font-light" >T&Cs | Policy | Cookie Policy</p>
            </div>

        </div>
    );
}