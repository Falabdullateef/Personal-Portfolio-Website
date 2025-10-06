import { useState } from 'react';
import { Homepage } from './components/Homepage';
import { Navigation } from './components/Navigation';

type Page = 'home' | 'experiences' | 'projects' | 'awards' | 'hobbies' | 'blog' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    return <Homepage onNavigate={setCurrentPage} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <footer className="py-8 text-center text-gray-500">
        <p>Coded by Faisal using React</p>
      </footer>
    </div>
  );
}