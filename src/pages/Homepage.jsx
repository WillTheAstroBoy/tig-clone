import Navbar from '../containers/NavbarContainer';
import Footer from '../containers/FooterContainer';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import logo from '../assets/images/logo.png';
import mobileBanner from '../assets/images/mobileBanner.png';
import { Button, JourneyCard, ServiceCard, WorkCard } from '../components';

import Slider from 'react-slick';

import journeyOne from '../assets/images/journey/journey-1.jpg';
import journeyTwo from '../assets/images/journey/journey-2.jpg';
import journeyThree from '../assets/images/journey/journey-3.jpg';
import journeyFour from '../assets/images/journey/journey-4.jpg';
import serviceOne from '../assets/images/services/service1.png';
import serviceTwo from '../assets/images/services/service2.png';
import serviceThree from '../assets/images/services/service3.png';
import serviceFour from '../assets/images/services/service4.png';
import serviceFive from '../assets/images/services/service5.png';
import serviceSix from '../assets/images/services/service6.png';

import ourApproach from '../assets/images/our-approach.png'

import parkLane1 from '../assets/images/work/Park-Lane-Thumbnail-1024x1280.jpg';
import parkLane2 from '../assets/images/work/Park-Lane-Thumbnail-rollover-1024x1280.jpg';

import speakEasy1 from '../assets/images/work/Rayburn-Thumbnail-1024x1280.jpg';
import speakEasy2 from '../assets/images/work/Rayburn-Thumbnail-rollover-1024x1280.jpg';

import moonlake1 from '../assets/images/work/Moonlake-Thumbnail-1024x1280.jpg';
import moonlake2 from '../assets/images/work/Moonlake-Thumbnail-rollover-1024x1280.jpg';

import essentialPharma1 from '../assets/images/work/Essentail-Pharma-Thumbnail-1024x1280.jpg';
import essentialPharma2 from '../assets/images/work/Essentail-Pharma-Thumbnail-rollover-1024x1280.jpg';

import countryProduct1 from '../assets/images/work/Country-Products-Thumbnail-1024x1280.jpg';
import countryProduct2 from '../assets/images/work/Country-Products-Thumbnail-rollover-1024x1280.jpg';

import boltonAbbey1 from '../assets/images/work/bolton-abbey-thumbnail-1-1024x1280.jpg';
import boltonAbbey2 from '../assets/images/work/Bolton-Abbey-Thumbnail-rollover-1024x1280.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Homepage() {

    const [isItOpen, setIsItOpen] = useState(false);
    const [parentWidth, setParentWidth] = useState(0);
    const [ scrollTop, setScrollTop ] = useState(window.scrollY);
    const [ isMouseIn, setIsMouseIn ] = useState(false);

    const handleMouseIn = () => {
        setIsMouseIn(true);
    }

    const handleMouseOut = () => {
        setIsMouseIn(false);
    }

    const cardToBeRendered = useMemo(() => {
        if (window.innerWidth > 768 && window.innerWidth < 1024) {
            return 2;
        } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
            return 3;
        } else if (window.innerWidth < 768) {
            return 1;
        } else {
            return 4;
        }
    }, [parentWidth]);

    const handleToggleNavbar = (value) => {
        setIsItOpen(value);
    }

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 10000,
        swipe: false,
        touchMove: false,
    };

    const goNext = () => sliderRef.current.slickNext();
    const goPrevious = () => sliderRef.current.slickPrev();


    useEffect(() => {
        window.addEventListener("resize", (e) => setParentWidth(e.target.innerWidth));
        window.addEventListener("scroll", e => setScrollTop(window.scrollY));
        return () => {
            window.removeEventListener("scroll", e => setScrollTop(window.scrollY));
            window.removeEventListener("resize", (e) => setParentWidth(e.target.innerWidth));
        }
    }, []);

    return (
        <div className='relative' >
            <Navbar
                handleToggleNavbar={handleToggleNavbar}
                isItOpen={isItOpen}
            />
            {
                !isItOpen && (
                    <div className="z-[999] flex justify-between px-10 fixed w-full top-0" >
                        <img className={`${scrollTop > 150 ? "-translate-y-[150px]" : "translate-y-0"} transform duration-300 w-[122px] h-[118px] mt-7`} src={logo} alt="Tig logo" />

                        <div className='lg:flex lg:items-center lg:gap-x-10' >
                            <button
                                onMouseEnter={handleMouseIn}
                                onMouseLeave={handleMouseOut}
                                className={`${scrollTop > 150 ? "-translate-y-[145px]" : "translate-y-0"} lg:block hidden w-[139px] text-white hover:text-[#fff] h-[48px] text-center hover:text-right hover:bg-[#5ba1bd] px-4 transition duration-300 block font-light border border-white border-solid rounded-full`}
                            >say hello {" "}
                                <span className={`transition inline-block text-xl duration-300 ${isMouseIn ? "rotate-45" : "rotate-0"}`} >+</span>
                            </button>
                            <button onClick={() => handleToggleNavbar(true)} className="cursor-pointer w-[120px] h-36 opacity-90 px-5  flex items-center justify-center bg-[#488098]" >
                                <div className='block transition duration-300 hover:flex hover:gap-x-1 hover:mt-[5px]' >
                                    <span className='border border-solid border-white w-2 h-2 rounded-full mb-1 block' ></span>
                                    <span className='border border-solid border-white w-2 h-2 rounded-full mb-1 block' ></span>
                                    <span className='border border-solid border-white w-2 h-2 rounded-full block' ></span>
                                </div>
                                <p className='text-white text-sm ml-1' >menu</p>
                            </button>
                        </div>
                    </div>
                )
            }
            <div className="px-10 pt-24 md:pt-44 pb-10 " style={{ background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${mobileBanner})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} >
                <p className='mt-44 text-white uppercase font-semibold text-left' >the inter group</p>
                <h1 className='text-[#99c6d6] my-5 text-5xl max-w-[90%] font-medium text-left' >more than a creative digital marketing agency</h1>
                <p className='text-white mt-8 mb-12 leading-[22px] max-w-[90%]' >
                    TIG is a Harrogate-based creative digital marketing agency. We guarantee results across six key business areas: <span className='font-semibold' >graphic design, photography, print, web design & build, seo marketing</span> and <span className='font-medium' >social media</span>.
                </p>
                <Button color="" hoverTextColor="white" margin="0" border="white" hoverColor="#488098" textColor="white" width="271px" height="48px" >send your brief +</Button>
            </div>
            <div className='lg:grid grid-cols-2 ' >
                <div className='px-10 font-semibold pt-24' >
                    <p className='uppercase text-[17px]' >empowering brands, elevating experiences</p>
                    <h2 className='text-5xl my-6 mb-10 text-[#5ba1bd]' >our approach to your vision</h2>
                    <p className='my-4 font-light leading-[21px]' >
                        We understand that your business is unique, and our team of experienced professionals will help you create an effective digital strategy that will get you noticed and ensure that your message is heard. We are dedicated to providing a tailored approach and a personalised service, it is all about bringing together media, creativity, technology and data.
                    </p>
                    <p className='my-5 font-light leading-[21px]' >
                        We are committed to staying ahead of the curve and utilising the latest digital trends and technologies to ensure your digital marketing campaigns succeed.
                    </p>
                    <p className='my-5 font-light leading-[21px]' >
                        Ready to take your business to the next level?
                    </p>
                    <p className='font-light leading-[21px] mb-10' >Let's talk.</p>
                    <Button color="" hoverTextColor="white" margin="0 0 20px 0" border="#488098" hoverColor="#488098" textColor="#488098" width="288px" height="48px" >get in touch +</Button>
                    <Button hoverTextColor="white" color="" margin="0 0 20px 0" border="#000" hoverColor="#000" textColor="#000" width="288px" height="48px" >our team +</Button>
                </div>
                <div className='mt-10 md:px-[30px] self-center' >
                    <img alt="our approach" className='m-0 w-full' src={ourApproach} />
                </div>
            </div>
            <div className='px-10 font-semibold pt-24 pb-24' >
                <p className='text-right uppercase text-[17px]' >what we do</p>
                <h2 className='text-5xl text-right my-6 mb-10 text-[#5ba1bd]' >our service</h2>
                <p className='text-right font-light leading-[23px]' >
                    We believe that a successful marketing strategy involves  much more than just putting your product out there.
                </p>
                <p className='font-light text-right leading-[23px]' >
                    It’s about bringing together media, creativity, technology and data. And that’s where we come in, we create a seamless experience for our customers from start to finish.
                </p>
                <p className='text-right font-light leading-[23px]' >
                    Not sure where to start?<br />
                    Let’s talk and turn your vision into reality.
                </p>
            </div>
            <div className='md:px-[60px] lg:grid grid-cols-2 lg:gap-x-8' >
                <ServiceCard backgroundImg={serviceOne} color="#5ba1bd" name="graphic design" bullets={["Branding Design", "Print & Digital Design", "Exhibition Stands & Wall Graphics", "Packing Design"]} />
                <ServiceCard color="#2f6175" backgroundImg={serviceTwo} name="digital" bullets={["Web Design & Development", "Web Hosting", "Website Management", "Email Marketing"]} />
                <ServiceCard color="#18303a" backgroundImg={serviceThree} name="print" bullets={["Litho & Digital Print", "Busi Flyers", "Booklets & Catalogue", "Packaging & Mailing"]} />
                <ServiceCard color="#18303a" backgroundImg={serviceFour} name="social media" bullets={["Social Media Strategy", "Content Planning", "Platform Management", "Influencer Marketing"]} />
                <ServiceCard color="#2f6175" backgroundImg={serviceFive} name="photography" bullets={["Studio & Location Photography", "Videography", "Post-Production", "Animation"]} />
                <ServiceCard color="#5ba1bd" backgroundImg={serviceSix} name="seo marketing" bullets={["Organic & Technical SEO", "PPC Search Ads", "Content & Copywriting", "Digital PR"]} />

            </div>
            <div className='px-10 md:px-[60px] font-semibold pt-6 pb-24 lg:pb-12' >
                <p className='text-left uppercase text-[17px]' >TIG PORTFOLIO</p>
                <h2 className='text-5xl my-6 mb-10 text-[#5ba1bd]' >our work</h2>
                <p className='text-left font-light leading-[23px]' >
                    Our work in the digital realm encompasses a wide range of services, including web development, digital marketing, online advertising, social media management, and content creation, all aimed at helping businesses thrive in the digital landscape.
                </p>
            </div>
            <div className='md:px-[60px]' >
                <div className='mb-6 flex justify-end px-8' >
                    <button onClick={goPrevious} className='border-2 mr-2 border-solid border-[#5ba1bdbf] rounded-full w-10 h-10' >
                        <FontAwesomeIcon size="lg" color="#5ba1bdbf" icon={faChevronLeft} />
                    </button>

                    <button onClick={goNext} className='border-2 border-solid border-[#5ba1bdbf] rounded-full w-10 h-10' >
                        <FontAwesomeIcon size="lg" color="#5ba1bdbf" icon={faChevronRight} />
                    </button>
                </div>
                {/* <section className='overflow-hidden overflow-x-scroll grid grid-cols-1 md:grid-cols-[repeat(2,minmax(200px,300px))] lg:grid-cols-[repeat(3,minmax(200px,300px))] xl:grid-cols-4 h-[110vw] h-[120vw] md:h-auto' > */}
                <section
                    className=' w-full '
                >
                    <Slider {...settings} ref={sliderRef} slidesToShow={cardToBeRendered} >
                        <WorkCard name="Speakeasy" bullets={["Web Design & Development", "Website Hosting", "Branding Design", "SEO"]} backgroundImg={speakEasy1} hoverBackgroundImg={speakEasy2} />
                        <WorkCard name="Park Lane" bullets={["Branding", "Print", "Photography", "Graphic Design"]} backgroundImg={parkLane1} hoverBackgroundImg={parkLane2} />
                        <WorkCard name="Speakeasy" bullets={["Web Design & Development", "Website Hosting", "Branding Design", "SEO"]} backgroundImg={speakEasy1} hoverBackgroundImg={speakEasy2} />
                        {/* <WorkCard name="Rayburn" bullets={["Branding", "Print", "Photography", "Graphic Design"]} backgroundImg={} hoverBackgroundImg="" /> */}
                        <WorkCard name="Moonlake TX" bullets={["Branding", "Print", "Web Design & development", "Social Media"]} backgroundImg={moonlake1} hoverBackgroundImg={moonlake2} />
                        <WorkCard name="Essential Pharma Group" bullets={["Branding", "Print", "Photography", "Graphic Design"]} backgroundImg={essentialPharma1} hoverBackgroundImg={essentialPharma2} />
                        <WorkCard name="Country Products" bullets={["Web Design & Development", "Print", "Photography", "SEO"]} backgroundImg={countryProduct1} hoverBackgroundImg={countryProduct2} />
                        <WorkCard name="Bolton Abbey" bullets={["Web Design & Development/ Hosting & Maintenance", "Print", "Graphic Design", "SEO"]} backgroundImg={boltonAbbey1} hoverBackgroundImg={boltonAbbey2} />
                    </Slider>
                </section>

            </div>
            <div className='px-10 md:px-[60px] font-semibold pt-8 pb-24' >
                <p className='text-right uppercase text-[17px]' >what we are talking about</p>
                <h2 className='text-5xl text-right mt-4 mb-8 text-[#5ba1bd]' >our journey</h2>
                <p className='text-right font-light mb-5 leading-[23px]' >
                    Launched in 1970, our company aspired was to drive innovation and collaboration in high-end photography, design and print.                </p>
                <p className='font-light text-right leading-[23px]' >
                    The Inter Group have been delivering design, print and digital for over 50 years; we have all the services you need under one roof.
                </p>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 h-[100vw] gap-4 md:px-[60px]' >
                <JourneyCard src={journeyOne} />
                <JourneyCard src={journeyTwo} />
                <JourneyCard src={journeyThree} />
                <JourneyCard src={journeyFour} />
            </div>
            <div className='flex items-center justify-center my-6' >
                <Button animateText={false} hoverTextColor="white" color="" margin="0 0 20px 0" border="#488098" hoverColor="#488098" textColor="#488098" width="288px" height="48px" >View on Instagram</Button>
            </div>
            <Footer />
        </div>
    );
}