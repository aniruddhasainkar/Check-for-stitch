import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { DashboardView } from './views/DashboardView';
import { ProjectsView } from './views/ProjectsView';
import { KanbanView } from './views/KanbanView';
import { TaskDetailView } from './views/TaskDetailView';
import { SettingsView } from './views/SettingsView';
import { LoginView } from './views/LoginView';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 bg-surface">
        <TopNav />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true); // Mock auth state

  if (!isAuthenticated) {
    return <LoginView onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView onLogin={() => setIsAuthenticated(true)} />} />
        <Route
          path="/"
          element={
            <MainLayout>
              <DashboardView />
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout>
              <ProjectsView />
            </MainLayout>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <MainLayout>
              <KanbanView />
            </MainLayout>
          }
        />
        <Route
          path="/tasks/:id"
          element={
            <MainLayout>
              <TaskDetailView />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <SettingsView />
            </MainLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
