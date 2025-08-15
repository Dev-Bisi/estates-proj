import React from 'react'
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: 'Mr. Praise Larva',
        image: '/bukky 4.jpg',
        feedback: 'Living in Harmony Estate has been a dream come true. The environment is peaceful and well-secured.',
    },
    {
        id: 2,
        name: 'Mr. Saheed Larva',
        image: '/bukky 4.jpg',
        feedback: 'I love the clean streets and constant power supply. The estate management is very responsive too.',
    },
    
    {
        id: 4,
        name: 'Engr. Peculiar',
        image: '/bukky 4.jpg',
        feedback: 'Buying property in this estate was the best investment decision I ever made. Highly recommended!',
    },
    ];

    const Testifiers = () => {
    return (
        <div className="py-10 px-6 " id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl text-center font-bold mb-2'>Customers <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-gray-500  text-center mb-8'>Real Stories, From Those Who <br />Found Home With Us </p>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 ">
            {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-amber-600 p-6  hover:bg-amber-50 text-center">
                <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h3>
                <p className="text-gray-600 mb-4 italic">"{testimonial.feedback}"</p>
                <div className="flex justify-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                ))}
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

export default Testifiers