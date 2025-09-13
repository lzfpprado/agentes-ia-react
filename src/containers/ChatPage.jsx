import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

const agentNames = {
  alex: 'Alex',
  sofia: 'Sofia',
  carlos: 'Carlos',
};


const agentColors = {
  alex: '#8e24aa', // roxo
  sofia: '#1b6ea8',
  carlos: '#2e8b57',
};

function ChatPage() {
  useEffect(() => {
    document.body.style.background = '#f8f9fa';
    document.body.style.backgroundImage = "url('/background-login.png')";
    document.body.style.backgroundRepeat = 'repeat-y';
    document.body.style.backgroundPosition = 'center bottom';
    document.body.style.backgroundSize = 'contain';
    return () => {
      document.body.style.background = '';
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundSize = '';
    };
  }, []);
  const { agenteId } = useParams();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };
  const [messages, setMessages] = useState([
    { sender: 'ia', text: 'Olá! Como posso ajudar?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputMaxLength = 200;

  // Scroll automático para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { sender: 'user', text: input }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: 'ia', text: 'Esta é uma resposta simulada da IA.' },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  // Limpar chat
  const handleClear = () => {
    setMessages([{ sender: 'ia', text: 'Olá! Como posso ajudar?' }]);
  };

  return (
    <>
      <Header onLogout={handleLogout} />
  <div style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px #0001', display: 'flex', flexDirection: 'column', height: '70vh' }}>
        <div style={{ padding: '18px 24px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: agentColors[agenteId] || '#888', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18 }}>
              {agentNames[agenteId]?.[0] || '?'}
            </div>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#333' }}>{agentNames[agenteId] || 'Agente'}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ color: '#2ecc40', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, background: '#2ecc40', borderRadius: '50%', display: 'inline-block' }}></span>
              Online
            </div>
          </div>
        </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 24, background: '#f8f9fa', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              background: msg.sender === 'user' ? '#9e1b32' : '#fff',
              color: msg.sender === 'user' ? '#fff' : '#333',
              borderRadius: 16,
              borderTopRightRadius: msg.sender === 'user' ? 4 : 16,
              borderTopLeftRadius: msg.sender === 'user' ? 16 : 4,
              padding: '10px 16px',
                maxWidth: '90%',
              boxShadow: msg.sender === 'user' ? '0 1px 6px #9e1b3222' : '0 1px 6px #0001',
              fontSize: 15,
            }}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div style={{ alignSelf: 'flex-start', color: '#888', fontSize: 14 }}>Digitando...</div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #eee', padding: 16, background: '#fff' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          maxLength={inputMaxLength}
          style={{ flex: 1, border: 'none', outline: 'none', fontSize: 15, padding: 10, borderRadius: 8, background: '#f3f3f3', marginRight: 12 }}
        />
        <button type="submit" style={{ background: '#9e1b32', color: '#fff', border: 'none', borderRadius: 8, padding: '0 22px', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
          Enviar
        </button>
      </form>
      </div>
      <div style={{position: 'fixed', left: 0, bottom: 8, width: '100vw', textAlign: 'center', fontSize: '0.78rem', color: '#bbb', letterSpacing: 1, zIndex: 9999, pointerEvents: 'none', userSelect: 'none', fontFamily: 'inherit'}}>
        Projeto Mascote IA
      </div>
    </>
  );
}

export default ChatPage;
