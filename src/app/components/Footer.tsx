export default function Footer() {
    return (
        <footer className="bg-gray-900 py-8 text-center">
            <div className="text-gray-400 text-sm">
                <p className="mb-2">
                    <span className="font-semibold text-white">NEUX</span> — Empowering Digital Experiences
                </p>
                <p>© {new Date().getFullYear()} NEUX. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
