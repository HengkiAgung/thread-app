import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/network-data';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddThread from './pages/AddThreadPage';
import MentionPage from './pages/MentionPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import Navigation from './components/Navigation';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getUserLogged();
      setUser(data);
      setLoading(false);
    };

    getUser();
  }, []);

  const onSuccessLogin = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setUser(data);
  };

  const onLogOut = () => {
    setUser(null);
    putAccessToken('');
  };

  if (loading) {
    return null;
  }

  if (!user) {
    return (
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onSuccessLogin} />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navigation user={user} onLogOut={onLogOut}/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions" element={<MentionPage />} />
          <Route path="/thread/new" element={<AddThread />} />
          <Route path="/thread/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
