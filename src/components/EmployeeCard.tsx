import Image from 'next/image';
import { Employee } from '../types/employee';

type Props = {
    employee: Employee;
};

export default function EmployeeCard({ employee }: Props) {
    return (
        <div className="group relative">
            <div className="aspect-square overflow-hidden bg-blue-100 rounded-lg relative">
                <div className="relative w-full h-full">
                    <Image
                        src={employee.Photo ? employee.Photo : 'https://ik.imagekit.io/fireaiglobal/Unknown?updatedAt=1736495106271&tr=w-1080%2Ch-1080%2Cfo-auto'}
                        alt={employee.Name}
                        fill
                        className="object-cover z-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                </div>
            </div>

            <div className="mt-4 flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold">{employee.Name}</h3>
                    <p className="text-blue-500 font-bold">{employee.Title} <span className="font-semibold text-gray-400">{employee.Intern ? ' | Intern' : ''}</span></p>
                </div>
                {
                    employee.Links && <a
                        href={employee.Links}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${employee.Name}'s profile`}
                    >
                        <button
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-label={`View details for ${employee.Name}`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </a>
                }
            </div>
        </div >
    );
} 