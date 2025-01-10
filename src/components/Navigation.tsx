import Image from 'next/image';

export default function Navigation() {
    return (
        <nav className="px-8 py-4 border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <div className="text-xl font-bold">
                        <Image src="/fire-ai-logo.png" alt="Fire AI Logo" width={70} height={70} className="mx-auto" />
                    </div>
                    <div className="space-x-6 pl-10">
                        <a href="https://fireai.in" target="_blank" className="text-gray-400" rel="noopener">Dashboard</a>
                        <a href="https://www.linkedin.com/company/fireaiglobal/" target="_blank" className="text-gray-400" rel="noopener">LinkedIn</a>
                    </div>
                </div>
            </div>
        </nav>
    );
} 