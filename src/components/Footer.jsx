import React from 'react';

const Footer = () => {
    return (
        <div className="text-white relative  center-flex tracking-widest flex pt-2 ">
            {/* <div className='bg-blue-500 text-center text-slate-50 text-3xl font-JoseFinSans tracking-widest'>NOTES</div> */}
            {/* <a className='' href="https://www.linkedin.com/in/kaustubh-sule-b46303229/">
                <div className='absolute hover:-mt-1 duration-300 left-0 bg-[url("https://raw.githubusercontent.com/sulekaustubh/image-vault/main/linkedinLogo.svg")] mt-0 ml-4 h-6 w-6 bg-cover bg-center'></div>
            </a> */}
            <div className="lg:text-xl  lg:-m-[2px]">
                <div>
                    <a
                        className="hover:text-blue-300 duration-200 focus:outline-none"
                        href="#"
                    >
                        © 2023 Sonal Soni
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
