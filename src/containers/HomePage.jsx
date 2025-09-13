

import React, { useEffect } from 'react';
import { FaHeadset, FaLaptopCode, FaHandshake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Container, Title, Subtitle, ButtonsContainer, AgentButton } from './HomePage.styles';
import Header from './Header';




function HomePage() {
  useEffect(() => {
    document.body.style.background = '#f8f9fa';
  document.body.style.backgroundImage = "url('/background-login.png')";
  document.body.style.backgroundRepeat = 'repeat-y';
  document.body.style.backgroundPosition = 'center bottom';
  document.body.style.backgroundSize = 'cover';
    return () => {
      document.body.style.background = '';
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundSize = '';
    };
  }, []);
  const navigate = useNavigate();

  const agentes = [
    {
      id: 1,
      nome: 'Alex',
      funcao: 'Suporte ao Usuário',
    descricao: 'Soluções rápidas para problemas de acesso, redefinição de senhas, VDI e dúvidas gerais de TI',
  iconComponent: <FaHeadset color="#9e1b32" size={36} />, 
    },
    {
      id: 2,
      nome: 'Sofia',
      funcao: 'Analista de Monitoramento',
    descricao: 'Monitoramento de sistemas, análise de incidentes e elaboração de relatórios pós-incidente (FCA)',
  iconComponent: <FaLaptopCode color="#9e1b32" size={36} />, 
    },
    {
      id: 3,
      nome: 'Carlos',
      funcao: 'Consultor de Produtos',
  descricao: 'Fornece esclarecimentos e detalhes sobre os produtos, auxiliando a equipe comercial a fechar negócios',
  iconComponent: <FaHandshake color="#9e1b32" size={36} />,
    },
  ];

  const handleAgenteClick = (agente) => {
    navigate(`/chat/${agente.nome.toLowerCase()}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <Container>
        <Title>Central de Agentes</Title>
  <Subtitle>Selecione um agente de IA para conversar</Subtitle>
        <ButtonsContainer>
          {agentes.map(agente => (
            <AgentButton
              key={agente.id}
              onClick={() => handleAgenteClick(agente)}
            >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <span style={{ display: 'flex', alignItems: 'center', marginRight: 14 }}>{agente.iconComponent}</span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', flex: 1 }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#3b455b', lineHeight: 1.1, textAlign: 'left' }}>{agente.nome}</div>
                  <div style={{ fontSize: '1.02rem', fontWeight: 600, color: '#3b455b', lineHeight: 1.1, textAlign: 'left' }}>{agente.funcao}</div>
                </div>
              </div>
                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: '#3b455b',
                      lineHeight: 1.4,
                      marginTop: 24,
                      textAlign: 'left',
                      fontWeight: 400,
                      wordBreak: 'break-word',
                    }}
                    className="agent-desc"
                  >
                    {agente.descricao}
                  </div>
            </AgentButton>
          ))}
        </ButtonsContainer>
      </Container>
      <div style={{position: 'fixed', left: 0, bottom: 8, width: '100vw', textAlign: 'center', fontSize: '0.78rem', color: '#bbb', letterSpacing: 1, zIndex: 9999, pointerEvents: 'none', userSelect: 'none', fontFamily: 'inherit'}}>
        Projeto Mascote IA
      </div>
    </>
  );
}

export default HomePage;