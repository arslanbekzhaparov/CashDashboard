import React, { useState } from 'react';
import styled from 'styled-components';
import CashAdvanceCard from './CashAdvanceCard';
import TransactionList from './TransactionList';
import CashAdvanceModal from './CashAdvanceModal';

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  text-align: left;
  font-weight: 700;
  font-size: 2rem;
  margin: 0; 
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const RequestButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  box-shadow: 2px 2px 0 black;

  transform: translate(-1px, -1px); 

  &:hover {
    box-shadow: none;
    transform: translate(0, 0);
  }

  &:active {
    background-color: #0056b3;
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
`;

const Dashboard: React.FC = () => {
  const [transactions] = useState([
    { id: '1', date: '2024-10-01', amount: 100, status: 'Completed', repaymentDate: '2024-10-05' },
    { id: '2', date: '2024-10-05', amount: -50, status: 'Completed', repaymentDate: '2024-10-10' },
    { id: '3', date: '2024-10-10', amount: 200, status: 'Pending', repaymentDate: '2024-10-15' },
    { id: '4', date: '2024-10-15', amount: -150, status: 'Pending', repaymentDate: '2024-10-20' },
    { id: '5', date: '2024-10-20', amount: 300, status: 'Completed', repaymentDate: '2024-10-25' },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRequestClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <CashAdvanceCard availableBalance={350} />
      <RequestButton onClick={handleRequestClick}>Request Cash</RequestButton>
      <TransactionList transactions={transactions} />
      {isModalOpen && (
        <CashAdvanceModal closeModal={closeModal} isVisible={isModalOpen} />
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
