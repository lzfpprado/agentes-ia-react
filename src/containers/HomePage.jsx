

import React from 'react';
import { FaHeadset, FaLaptopCode, FaHandshake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Container, Title, Subtitle, ButtonsContainer, AgentButton } from './HomePage.styles';
import Header from './Header';




function HomePage() {
  const navigate = useNavigate();

  const agentes = [
    {
      id: 1,
      nome: 'Alex',
      funcao: 'Suporte ao Usuário',
    descricao: 'Ajuda com problemas de acesso, redefinição de senha, VDI e dúvidas gerais de TI',
  iconComponent: <FaHeadset color="#9e1b32" size={36} />, 
    },
    {
      id: 2,
      nome: 'Sofia',
      funcao: 'Analista de Monitoramento',
    descricao: 'Monitoramento de sistemas, análise de incidentes e elaboração de postmortems',
  iconComponent: <FaLaptopCode color="#9e1b32" size={36} />, 
    },
    {
      id: 3,
      nome: 'Carlos',
      funcao: 'Consultor de Produtos',
  descricao: 'Apoio ao time comercial com esclarecimento de dúvidas sobre produtos e funcionalidades',
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
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#555', lineHeight: 1.1 }}>{agente.nome}</div>
                  <div style={{ fontSize: '1.02rem', fontWeight: 600, color: '#666', lineHeight: 1.1 }}>{agente.funcao}</div>
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.2, marginTop: 7 }}>{agente.descricao}</div>
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