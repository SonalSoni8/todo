import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="bg-slate-800 flex justify-center select-none rounded-b-3xl pt-2 text-slate-50 text-3xl font-JoseFinSans tracking-[0.2em]">
                <div>T</div>
                <div className='bg-[url("https://raw.githubusercontent.com/sulekaustubh/image-vault/main/o.png")] animate-spin animate-infinite animate-duration-[16000ms] animate-normal ml-[1px] mr-1 mt-[3px] h-6 w-6 bg-cover bg-center'></div>
                <div>DO</div>
            </div>
        </div>
    );
};

export default Nav;
