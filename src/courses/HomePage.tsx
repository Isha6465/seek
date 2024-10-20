// pages/index.tsx
import React from 'react';
import Card from '@/courses/Card';

const cardsData = [
    {
        title: 'Card 1',
        description: 'Description for Card 1',
        image: '/',
        link: '/link1',
    },
    {
        title: 'Card 2',
        description: 'Description for Card 2',
        image: '/',
        link: '/link2',
    },
    {
        title: 'Card 3',
        description: 'Description for Card 3',
        image: '/',
        link: '/link3',
    },
    {
        title: 'Card 4',
        description: 'Description for Card 4',
        image: '/',
        link: '/link4',
    },
    {
        title: 'Card 5',
        description: 'Description for Card 5',
        image: '/',
        link: '/link5',
    },
    {
        title: 'Card 6',
        description: 'Description for Card 6',
        image: '/',
        link: '/link6',
    },
];

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {cardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default HomePage;
