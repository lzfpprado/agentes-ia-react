import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.background = '';
    document.body.style.backgroundImage = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundPosition = '';
    document.body.style.backgroundSize = '';
    return () => {
      document.body.style.background = '';
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundSize = '';
    };
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
      <div style={{ width: 340, margin: '90px auto', padding: '32px 24px 28px 24px', background: '#fff', borderRadius: 22, boxShadow: '0 4px 32px #3b455b22', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'inherit' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0 18px 0' }}>
          <img src="/Logo-Test.png" alt="Logo Empresa" style={{ height: 48, marginBottom: 0 }} />
        </div>
        <h2 style={{ color: '#3b455b', textAlign: 'center', width: '100%', letterSpacing: '0.1px', fontWeight: 800, fontSize: '1.35rem', marginBottom: 38 }}>Central de Agentes</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
              padding: '14px 12px',
              marginBottom: 14,
              border: '1.5px solid #e0e0e0',
              borderRadius: 10,
              outline: 'none',
              fontSize: '1.05rem',
              background: '#f8f9fa',
              color: '#3b455b',
              fontWeight: 500,
              transition: 'border-color 0.2s'
            }}
            onFocus={e => e.target.style.borderColor = '#9e1b32'}
            onBlur={e => e.target.style.borderColor = '#e0e0e0'}
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
              padding: '14px 12px',
              marginBottom: 20,
              border: '1.5px solid #e0e0e0',
              borderRadius: 10,
              outline: 'none',
              fontSize: '1.05rem',
              background: '#f8f9fa',
              color: '#3b455b',
              fontWeight: 500,
              transition: 'border-color 0.2s'
            }}
            onFocus={e => e.target.style.borderColor = '#9e1b32'}
            onBlur={e => e.target.style.borderColor = '#e0e0e0'}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px 0',
              background: '#9e1b32',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
              fontSize: '1.08rem',
              fontWeight: 700,
              marginBottom: 2,
              letterSpacing: '0.5px',
              boxShadow: '0 2px 8px #9e1b3222'
            }}
          >
            Entrar
          </button>
          {error && <div style={{ color: 'red', marginTop: 10, textAlign: 'center', fontWeight: 500 }}>{error}</div>}
        </form>
      </div>
      <div style={{position: 'fixed', left: 0, bottom: 8, width: '100vw', textAlign: 'center', fontSize: '0.78rem', color: '#bbb', letterSpacing: 1, zIndex: 9999, pointerEvents: 'none', userSelect: 'none', fontFamily: 'inherit'}}>
        Projeto Mascote IA
      </div>
    </>
  );
};

export default Login;
