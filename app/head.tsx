import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '禅茶房 - Zen Café | A Digital Taste of Tranquility',
    description: 'Experience the serene atmosphere of traditional Japanese tea culture in our modern café. Featuring ceremonial matcha, traditional sweets, and mindful moments.',
    keywords: 'Japanese tea, matcha, zen café, traditional sweets, tea ceremony, Tokyo café',
    generator: 'v0.dev',
};

export default function Head() {
    return (
        <>
            <title>禅茶房 - Zen Café | A Digital Taste of Tranquility</title>
            <meta name="description" content="Experience the serene atmosphere of traditional Japanese tea culture in our modern café. Featuring ceremonial matcha, traditional sweets, and mindful moments." />
            <meta name="keywords" content="Japanese tea, matcha, zen café, traditional sweets, tea ceremony, Tokyo café" />
            <meta name="generator" content="v0.dev" />
            <link rel="icon" href="/flavicon.ico" type="image/x-icon" />
        </>
    );
}
