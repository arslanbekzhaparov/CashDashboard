import React from 'react';
import styled from 'styled-components';
import mastercardLogo from '../images/mastercard.png';

const CardContainer = styled.div`
  width: 80vw;
  max-width: 350px;
  height: 200px;
  padding: 2rem;
  border-radius: 12px;
  text-align: left;
  margin: 0 auto;
  border: 3px solid #4879F1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 400px) {
    padding: 1rem;
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  color: #696969;
  margin: 0;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

const Balance = styled.h2`
  font-size: 4rem;
  margin: 30px 0;
  color: #4879F1;
`;

const CardNumber = styled.p`
  font-size: 1.8rem;
  margin: 10px 0;
  color: #696969;
  letter-spacing: 1px;
`;

const LogoContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;

  img {
    width: 100%;
    max-width: 100px;
    height: auto;
  }
`;

interface CashAdvanceCardProps {
  availableBalance: number;
}

const CashAdvanceCard: React.FC<CashAdvanceCardProps> = ({ availableBalance }) => {
  return (
    <CardContainer>
      <Title>Available Balance</Title>
      <Balance>${availableBalance}</Balance>
      <CardNumber>**** 4219</CardNumber>
      <LogoContainer>
        <img src={mastercardLogo} alt="Mastercard Logo" />
      </LogoContainer>
    </CardContainer>
  );
};

export default CashAdvanceCard;
