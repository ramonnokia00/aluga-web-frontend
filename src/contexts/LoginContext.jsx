import { createContext, useState, useContext, useEffect } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (email, senha) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`);
      const data = await response.json();
      if (data.length === 0) {
        throw new Error('Usuário ou senha inválidos');
      }
      setUser(data[0]);
      localStorage.setItem('user', JSON.stringify(data[0]));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <LoginContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);