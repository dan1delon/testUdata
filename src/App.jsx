import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import HomePage from './pages/HomePage/HomePage';
import TasksPage from './pages/TasksPage/TasksPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
