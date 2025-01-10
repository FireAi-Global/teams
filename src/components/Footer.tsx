import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="pt-28 bg-black mt-10">
            <div className="h-[100px] flex flex-col justify-center pb-10">
                <Image src="/fire-ai-logo.png" alt="Fire AI Logo" width={200} height={200} className="mx-auto" />
                <span className="text-gray-400 mx-auto font-medium mt-2">Your trusted AI for data analysis</span>
            </div>
            <div className="max-w-7xl mx-auto px-8 py-12 border-t border-gray-600">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Copyright */}
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <span className="text-sm text-gray-600">
                            © {new Date().getFullYear()} Fire AI. All rights reserved.
                        </span>
                    </div>

                    {/* Legal Links */}
                    <div className="flex gap-x-6 mt-4 md:mt-0">
                        <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                            Terms
                        </Link>
                        <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                            Privacy
                        </Link>
                        <Link href="/careers" className="text-sm text-gray-600 hover:text-gray-900">
                            Careers
                        </Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}