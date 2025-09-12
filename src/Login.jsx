import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.background = '#f8f9fa';
    return () => { document.body.style.background = ''; };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setError('');
      localStorage.setItem('auth', 'true');
      localStorage.setItem('username', username);
      navigate('/'); // Redireciona para Home
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <>
      <div style={{ width: 300, margin: '100px auto', padding: 30, background: '#fff', borderRadius: 8, boxShadow: '0 0 10px #ccc' }}>
        <h2 style={{ color: '#333', textAlign: 'center', width: '100%' }}>Central de Agentes</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            style={{
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              padding: 10,
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: 4,
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={e => e.target.style.borderColor = '#9e1b32'}
            onBlur={e => e.target.style.borderColor = '#ccc'}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              padding: 10,
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: 4,
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={e => e.target.style.borderColor = '#9e1b32'}
            onBlur={e => e.target.style.borderColor = '#ccc'}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: 10,
              background: '#9e1b32',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600
            }}
          >
            Entrar
          </button>
          {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
        </form>
      </div>
      <div style={{position: 'fixed', left: 0, bottom: 8, width: '100vw', textAlign: 'center', fontSize: '0.78rem', color: '#bbb', letterSpacing: 1, zIndex: 9999, pointerEvents: 'none', userSelect: 'none', fontFamily: 'inherit'}}>
        Projeto Mascote IA
      </div>
    </>
  );
};

export default Login;
