export const InnerButton = styled.button`
  margin-top: 14px;
  align-self: stretch;
  background: #007298;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 24px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 2px 8px #00729822;
  transition: background 0.18s, color 0.18s, border 0.18s;

  &:hover,
  &:focus {
    background: #fff;
    color: #007298;
    border: 1.5px solid #007298;
  }
`;
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding-top: 7vh;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  color: #3b455b;
  font-weight: 800;
  margin-bottom: 2px;
  margin-top: 0;
  letter-spacing: 0.1px;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #3b455b;
  margin-top: 2px;
  margin-bottom: 48px;
  font-weight: 500;
  text-align: center;
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

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 18px;
    align-items: center;
    max-width: 100vw;
  }
`;



export const AgentButton = styled.button`
  width: 320px;
  height: 248px;
  min-height: unset;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 8px #3b455b22;
  transition: background 0.18s, color 0.18s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: left;
  padding: 28px 24px 22px 24px;
  gap: 16px;

  &:hover {
    background: #007298;
  }
  &:hover * {
    color: #fff !important;
  }
  &:hover button {
    background: #fff;
    color: #007298 !important;
    border: 1.5px solid #007298;
  }

  @media (max-width: 900px) {
    width: 90vw;
    max-width: 370px;
    min-width: 220px;
    height: 120px;
    padding: 12px 10px 12px 10px;
  }
`;