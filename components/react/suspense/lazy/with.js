import React from 'react';
import './App.css';
// React.lazy gibt ein Promise zurück, welches mit 
// React.Suspense fallback={<Component />} bedient wird.
const Tag = React.lazy(() => import("./Tag") );

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 
          React.Suspense wird von React.lazy benötigt
        */}
        <React.Suspense fallback={<div>loading...</div>}>
        <Tag />
        </React.Suspense>
      </header>
    </div>
  );
}