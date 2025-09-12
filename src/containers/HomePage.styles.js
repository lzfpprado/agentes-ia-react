import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding-top: 7vh;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  color: #555;
  font-weight: 800;
  margin-bottom: 2px;
  margin-top: 0;
  letter-spacing: 0.1px;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #888;
  margin-top: 2px;
  margin-bottom: 28px;
  font-weight: 500;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;



export const AgentButton = styled.button`
  width: 390px;
  height: 135px;
  min-height: unset;
  background-color: #fff;
  border: 1.5px solid #e0e0e0;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: border-color 0.22s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: left;
  padding: 10px 14px 10px 14px;
  gap: 5px;

  &:hover {
    border-color: #9e1b32;
  }
`;