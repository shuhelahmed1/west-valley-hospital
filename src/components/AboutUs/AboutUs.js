import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='about-us-container mx-auto'>
            <h1 className='my-4'>About Us</h1>
            <div className='about-us-banner my-5 d-grid'>
                <div className='mx-2'>
                    <h2>West Valley Hospital</h2>
                    <h6>GET A WORLD CLASS HEALTH SERVICE</h6>
                    <p>WVH has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records.</p>
                    </div>
                <div className='mx-2'>
                    <img src="https://img.freepik.com/free-photo/doctors-pushing-emergency-stretcher-bed-corridor_107420-63715.jpg?size=626&ext=jpg" alt="" />
                </div>
            </div>
            <div className='about-us-mission m-5 d-grid'>
                <div className='mx-2'>
                    <h1>MISSION</h1>
                    <h4>WE ARE DEDICATED TO MEETING THE NEEDS OF:</h4>
                    <ul>
                        <li>Our patient - excellent and cost-effective healthcare</li>
                        <li>Our staff - continuing development and welfare</li>
                        <li>Our nation - partnership in promoting health in Bangladesh.</li>
                    </ul>
                </div>
                <div className='mx-2'>
                    <h1>VISSION</h1>
                    <h4>"TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF MEDICINE, PROVIDING QUALITY HEALTHCARE TO MEET OUR NATION'S ASPIRATIONS."</h4>
                </div>
            </div>
            <h1>Board of Directors</h1>
            <div className='director-container d-grid m-4'>
                <div className='director m-2'>
                    <div>
                        <img className='w-100 director-img' src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <h2>Dr. Shamim Hasan</h2>
                    <p>Chairman</p>
                </div>
                <div className='director m-2'>
                    <div>
                        <img className='w-100 director-img' src="https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt="" />
                    </div>
                    <h2>Dr. Iqbal Khan</h2>
                    <p>Managing Director</p>
                </div>
                <div className='director m-2'>
                    <div>
                        <img className='w-100 director-img' src="https://t4.ftcdn.net/jpg/04/30/38/27/240_F_430382775_WecmnuDe7GxwofVcL4XfzXjcXC0VeaE0.jpg" alt="" />
                    </div>
                    <h2>Dr. Jamil Hussain</h2>
                    <p>Director & CEO</p>
                </div>
                <div className='director m-2'>
                    <div>
                        <img className='w-100 director-img' src="https://t3.ftcdn.net/jpg/03/08/95/96/240_F_308959677_9dsUpeKnj2wWy42Vr8ofYNeKoazLXgSX.jpg" alt="" />
                    </div>
                    <h2>Dr. Taslima Khatun</h2>
                    <p>Director</p>
                </div>
                <div className='director m-2'>
                    <div>
                        <img className='w-100 director-img' src="https://t4.ftcdn.net/jpg/03/05/41/27/240_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg" alt="" />
                    </div>
                    <h2>Dr. Sumon Karim</h2>
                    <p>Director</p>
                </div>
                <div className='director m-2'>
                    <div>
                        <img className='w-100 director-img' src="https://t4.ftcdn.net/jpg/02/76/94/29/240_F_276942923_vRe2zKQBgaQj0MyNOjqD8f7eVMyKZ2eL.jpg" alt="" />
                    </div>
                    <h2>Dr. Oishi Biswas</h2>
                    <p>Director</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;