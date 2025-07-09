import React from 'react';
import Img from '../LazyLoadImg';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-primary">
            <div className='h-5'></div>
            <div className='container mx-auto px-4 lg:px-0'>
                <div className='lg:grid grid-cols-2'>
                    {/* Mobile & Tablet: Single column layout */}
                    <div className='lg:hidden flex flex-col items-center mb-8'>
                        <h1 className='text-2xl md:text-3xl font-bold border-b-1 py-1 mb-4'>همراه کارفرما</h1>
                        
                        <div className='flex gap-2 mb-6'>
                            <Img
                                src="footer/enamad_icon_text_color_blue_1024 1.svg"
                                alt="enamad"
                                width={96}
                                height={96}
                                className="w-24 h-24 md:w-36 md:h-36"
                            />
                            <Img
                                src="footer/samandehi 1.svg"
                                alt="enamad"
                                width={96}
                                height={96}
                                className="w-24 h-24 md:w-36 md:h-36"
                            />
                        </div>
                        
                        <div className='flex flex-col items-center gap-4 text-lg md:text-xl mb-6'>
                            <p>ارتباط با ما</p>
                            <p>حریم خصوصی و خط مشی</p>
                            <p>سوالات متداول</p>
                            <p>پشتیبانی</p>
                        </div>
                        
                        <div className='flex gap-2'>
                            <Img
                                src="footer/media/gmail-svgrepo-com 1.svg"
                                alt="gmail"
                                width={40}
                                height={40}
                                className="w-10 h-10 md:w-12 md:h-12"
                            />
                            <Img
                                src="footer/media/social-whats-app-svgrepo-com 1.svg"
                                alt="whatsapp"
                                width={40}
                                height={40}
                                className="w-10 h-10 md:w-12 md:h-12"
                            />
                            <Img
                                src="footer/media/telephone-svgrepo-com 1.svg"
                                alt="telephone"
                                width={40}
                                height={40}
                                className="w-10 h-10 md:w-12 md:h-12"
                            />
                            <Img
                                src="footer/media/telegram-svgrepo-com 1.svg"
                                alt="telegram"
                                width={40}
                                height={40}
                                className="w-10 h-10 md:w-12 md:h-12"
                            />
                        </div>
                    </div>
                    
                    {/* Desktop: Two column layout */}
                    <div className='hidden lg:block'>
                        <div className='w-full flex flex-col mb-10'>
                            <div className='grid grid-cols-2 w-full'>
                                <div className='flex flex-col items-center'>
                                    <h1 className='w-fit text-3xl font-bold border-b-1 py-1 mb-2'>همراه کارفرما</h1>
                                    <div className='flex gap-2'>
                                        <Img
                                            src="footer/enamad_icon_text_color_blue_1024 1.svg"
                                            alt="enamad"
                                            width={168}
                                            height={168}
                                        />
                                        <Img
                                            src="footer/samandehi 1.svg"
                                            alt="enamad"
                                            width={168}
                                            height={168}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:grid grid-cols-2'>
                        <div></div>
                        <div className='flex flex-col items-center gap-5 text-2xl'>
                            <div className='flex flex-col items-center'>
                                <p className='text-end'>ارتباط با ما</p>
                                <p className='text-end'>حریم خصوصی و خط مشی</p>
                                <p className='text-end'>سوالات متداول</p>
                                <p className='text-end'>پشتیبانی</p>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <Img
                                    src="footer/media/gmail-svgrepo-com 1.svg"
                                    alt="gmail"
                                    width={50}
                                    height={50}
                                />
                                <Img
                                    src="footer/media/social-whats-app-svgrepo-com 1.svg"
                                    alt="whatsapp"
                                    width={50}
                                    height={50}
                                />
                                <Img
                                    src="footer/media/telephone-svgrepo-com 1.svg"
                                    alt="telephone"
                                    width={50}
                                    height={50}
                                />
                                <Img
                                    src="footer/media/telegram-svgrepo-com 1.svg"
                                    alt="telegram"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center text-center py-4 px-2 text-sm md:text-base'>
                <p>UI Designer: Sajooli | Frontend Engineer: Yazdan | Backend Engineer: Javad</p>
            </div>
        </footer>
    );
};

export default Footer;