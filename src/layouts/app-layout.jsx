import Header from '@/components/header';
import { Outlet } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        <div className="flex items-center justify-center gap-2">
          Link To Source Code{' '}
          <a
            href="https://github.com/your-repo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
