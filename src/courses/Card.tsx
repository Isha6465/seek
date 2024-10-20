// components/Card.tsx
import React from 'react';

interface CardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
    return (
        <div className="w-48 h-72 perspective my-4 mx-2">
            <div className="relative w-full h-full transition-transform transform-style-preserve-3d duration-300 group hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden bg-white shadow-lg flex flex-col items-center justify-center rounded-lg">
                    <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
                    <h3 className="mt-2 text-lg font-bold">{title}</h3>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white flex flex-col items-center justify-center rounded-lg rotate-y-180">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-center px-4">{description}</p>
                    <a href={link} className="mt-2 text-blue-200 underline">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default Card;

