import React from 'react';
import styled from 'styled-components';

const HeaderBar = styled.header`
  width: 100%;
  height: 60px;
  background: #fff;
  border-bottom: 1.5px solid #ececec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 700;
  color: #9e1b32;
  letter-spacing: -1px;
`;


const Header = ({ onLogout }) => {
  // Recupera nome do usuário do localStorage (ajuste conforme sua lógica de autenticação)
  const username = localStorage.getItem('username') || 'Usuário';
  return (
    <HeaderBar>
      <Logo>
        <img src="/Logo-Test.png" alt="Logo Empresa" style={{ height: 36, marginRight: 8 }} />
      </Logo>
      {onLogout && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ color: '#3b455b', fontSize: '1rem', fontWeight: 500 }}>Bem-vindo, {username}</span>
          <button onClick={onLogout} style={{ padding: '8px 16px', background: '#9e1b32', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 700 }}>
            Logout
          </button>
        </div>
      )}
    </HeaderBar>
  );
};

export default Header;
