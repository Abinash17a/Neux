'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-black text-gray-100 sticky top-0 z-50">
            {/* NEUX Logo */}
            <div
                onClick={() => router.push('/')}
                className="text-3xl font-extrabold text-blue-400 cursor-pointer"
            >
                NEUX
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-6">
                <a
                    href="/portfolio"
                    className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
                >
                    Portfolio
                </a>
                <a
                    href="/about"
                    className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
                >
                    About
                </a>
                <a
                    href="/services"
                    className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
                >
                    Services
                </a>
                <a
                    href="/contact"
                    className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}
