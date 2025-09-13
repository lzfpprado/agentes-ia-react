import React, { useEffect } from 'react';
import { FaHeadset, FaLaptopCode, FaHandshake, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Container, Title, Subtitle, ButtonsContainer, AgentButton, InnerButton } from './HomePage.styles';
import Header from './Header';




function HomePage() {
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
  const navigate = useNavigate();

  const agentes = [
    {
      id: 1,
      nome: 'Alex',
      funcao: 'Suporte ao Usuário',
      descricao: 'Soluções rápidas para problemas de acesso, redefinição de senhas, VDI e dúvidas gerais de TI',
      iconComponent: <FaHeadset color="#007298" size={36} />, 
    },
    {
      id: 2,
      nome: 'Sofia',
      funcao: 'Analista de Monitoramento',
      descricao: 'Monitoramento de sistemas, análise de incidentes e elaboração de relatórios pós-incidente (FCA)',
      iconComponent: <FaLaptopCode color="#007298" size={36} />, 
    },
    {
      id: 3,
      nome: 'Carlos',
      funcao: 'Consultor de Produtos',
      descricao: 'Fornece esclarecimentos e detalhes sobre os produtos, auxiliando a equipe comercial a fechar negócios',
      iconComponent: <FaHandshake color="#007298" size={36} />,
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
        <Title style={{ color: '#9e1b32' }}>Portal Aquifaz IA</Title>
  <Subtitle>Escolha um agente para começar</Subtitle>
        <ButtonsContainer>
          {agentes.map(agente => (
            <AgentButton
              key={agente.id}
              onClick={() => handleAgenteClick(agente)}
            >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 4 }}>
                <span style={{ display: 'flex', alignItems: 'center', marginRight: 14 }}>{agente.iconComponent}</span>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', flex: 1 }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#3b455b', lineHeight: 1.1, textAlign: 'left', marginTop: 2 }}>{agente.nome}</div>
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
              <InnerButton
                onClick={e => {
                  e.stopPropagation();
                  handleAgenteClick(agente);
                }}
              >
                {`Conversar com ${agente.nome}`}
              </InnerButton>
            </AgentButton>
          ))}
        </ButtonsContainer>
      </Container>
      {/* Ajuda - canto inferior direito */}
      <div style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}>
        <div style={{
          background: '#9e1b32',
          color: '#fff',
          borderRadius: 12,
          padding: '14px 18px',
          fontSize: 15,
          fontWeight: 500,
          marginBottom: 10,
          boxShadow: '0 2px 8px #9e1b3222',
          maxWidth: 220,
          textAlign: 'right',
        }}>
          <span style={{ fontWeight: 700 }}>Algo não parece certo?</span><br />
          Se você encontrou alguma alucinação, fale com TI!
        </div>
        <div style={{
          background: '#9e1b32',
          borderRadius: '50%',
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 28,
          boxShadow: '0 2px 8px #9e1b3222',
          cursor: 'pointer',
        }}
          title="Ajuda"
        >
          <FaEnvelope />
        </div>
      </div>
      <div style={{position: 'fixed', left: 0, bottom: 8, width: '100vw', textAlign: 'center', fontSize: '0.7rem', color: '#bbb', letterSpacing: 1, zIndex: 9999, pointerEvents: 'none', userSelect: 'none', fontFamily: 'inherit'}}>
        Projeto Mascote IA
      </div>
    </>
  );
}

export default HomePage;