import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import HomePage from './pages/HomePage';
import MosquePage from './pages/MosquePage';
import MadrasaPage from './pages/MadrasaPage';
import SchoolPage from './pages/SchoolPage';
import DreamHomesPage from './pages/DreamHomesPage';
import ITCenterPage from './pages/ITCenterPage';
import LibraryPage from './pages/LibraryPage';
import ConstructionPage from './pages/ConstructionPage';
import AgroPage from './pages/AgroPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />

          {/* Project Pages - Clean and Legacy .html routes */}
          <Route path="/projects/mosque" element={<MosquePage />} />
          <Route path="/projects/mosque.html" element={<Navigate to="/projects/mosque" replace />} />

          <Route path="/projects/madrasa" element={<MadrasaPage />} />
          <Route path="/projects/madrasa.html" element={<Navigate to="/projects/madrasa" replace />} />

          <Route path="/projects/school" element={<SchoolPage />} />
          <Route path="/projects/school.html" element={<Navigate to="/projects/school" replace />} />

          <Route path="/projects/homes" element={<DreamHomesPage />} />
          <Route path="/projects/homes.html" element={<Navigate to="/projects/homes" replace />} />

          <Route path="/projects/it-center" element={<ITCenterPage />} />
          <Route path="/projects/it-center.html" element={<Navigate to="/projects/it-center" replace />} />

          <Route path="/projects/library" element={<LibraryPage />} />
          <Route path="/projects/library.html" element={<Navigate to="/projects/library" replace />} />

          <Route path="/projects/construction" element={<ConstructionPage />} />
          <Route path="/projects/construction.html" element={<Navigate to="/projects/construction" replace />} />

          <Route path="/projects/agro" element={<AgroPage />} />
          <Route path="/projects/agro.html" element={<Navigate to="/projects/agro" replace />} />

          {/* Contact Page */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/contact.html" element={<Navigate to="/contact" replace />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
