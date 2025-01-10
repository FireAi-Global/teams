'use client'

import { useState } from 'react';
import { Employee } from '../types/employee';
import Image from 'next/image';

export default function Testimonial({ employees }: { employees: Employee[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? employees.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === employees.length - 1 ? 0 : prev + 1
        );
    };

    const currentTestimonial = employees[currentIndex];
    const author = employees.find(emp => emp['Name'] === currentTestimonial.Name);

    return (
        <div className="relative mt-18 px-12 h-[300px] flex items-center">
            <div className="p-8 rounded-lg shadow-lg w-full">
                <p className="text-3xl mb-4 text-blue-500 text-center font-semibold">{currentTestimonial.Testimonial}</p>
                {author && (
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-12 h-12 mx-auto mb-2">
                            <Image
                                src={author.Photo || 'https://ik.imagekit.io/fireaiglobal/Unknown'}
                                alt={author.Name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-bold">{author.Name}</p>
                            <p className="text-gray-500">{author.Title}, Fire AI</p>
                        </div>
                    </div>
                )}
            </div>
            <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 border-2 border-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-50"
                aria-label="Previous testimonial"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 border-2 border-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-50"
                aria-label="Next testimonial"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
} 