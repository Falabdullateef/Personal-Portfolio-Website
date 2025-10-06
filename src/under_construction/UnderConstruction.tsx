import React from 'react';

interface UnderConstructionProps {
  title?: string;
  description?: string;
}

export function UnderConstruction({
  title = 'Page Under Construction',
  description = "I'm still building this page. Check back soon!",
}: UnderConstructionProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 text-center">
      <div className="inline-block px-4 py-1 mb-4 rounded-full bg-yellow-100 text-yellow-800 text-sm">
        Coming Soon
      </div>
      <h1 className="text-4xl text-gray-900 mb-3">{title}</h1>
      <p className="text-lg text-gray-600 mb-8">{description}</p>
      <div className="text-sm text-gray-500">Use the navigation to return home.</div>
    </div>
  );
}


