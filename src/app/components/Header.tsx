'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    return (
        <header className="flex items-center justify-between px-8 py-4">
            {/* Make "NEUX" text clickable and navigate to home using useRouter */}
            <div
                onClick={() => router.push('/')}
                className="text-2xl font-bold cursor-pointer"
            >
                NEUX
            </div>
            <nav className="space-x-6">
                <a href="/work" className="hover:underline">Work</a>
                <a href="/about" className="hover:underline">About</a>
                <a href="/services" className="hover:underline">Services</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </nav>
        </header>
    );
}
