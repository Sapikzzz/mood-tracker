import Dashboard from '@/components/Dashboard';
import Hero from '@/components/Hero';
import Login from '@/components/Login';
import Main from '@/components/Main';

export const metadata = {
    title: 'Mood • Tracker Dashboard',
};

export default function DashboardPage() {
    const isAuthenticated = true;

    let children = <Login />;

    if (isAuthenticated) {
        children = <Dashboard />;
    }

    return <Main>{children}</Main>;
}
