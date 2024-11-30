import Link from 'next/link';

export default function AdminDashboard() {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <Link href="/admin/projects">Manage Projects</Link>
                <Link href="/admin/users">Manage Users</Link>
            </nav>
        </div>
    );
}
