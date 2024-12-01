export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-bold">NEUX</h1>
            <nav className="space-x-6">
                <a href="/work" className="hover:underline">Work</a>
                <a href="/about" className="hover:underline">About</a>
                <a href="/services" className="hover:underline">Services</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </nav>
        </header>
    );
}
