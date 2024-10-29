import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div<{ isVisible: boolean }>`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 400px;
  border: 3px solid #4879f1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.3s ease;

  @media (max-width: 400px) {
    padding: 1rem;
  }
`;

const CommonButtonStyle = `
  display: block;
  margin: 10px auto;
  padding: 15px 30px;
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

const SubmitButton = styled.button`
  ${CommonButtonStyle}
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled.button`
  ${CommonButtonStyle}
  background-color: #dc3545;
  color: white;

  &:hover {
    background-color: #c82333;
  }
`;

const AmountInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 2px solid #4879f1;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  text-align: center;

  -moz-appearance: textfield;
  appearance: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin: 10px 0;
`;

interface CashAdvanceModalProps {
  closeModal: () => void;
  isVisible: boolean;
}

const CashAdvanceModal: React.FC<CashAdvanceModalProps> = ({ closeModal, isVisible }) => {
  const [amount, setAmount] = useState<number | ''>('');
  const [error, setError] = useState<string>('');
  const maxAmount = 350;

  const handleSubmit = () => {
    setError('');
    if (typeof amount === 'number' && amount > 0) {
      if (amount <= maxAmount) {
        alert(`You have requested $${amount}. It will be processed shortly.`);
        closeModal();
      } else {
        setError(`Please enter a valid amount (Max ${maxAmount}).`);
      }
    } else {
      setError('Please enter a valid amount (greater than $0).');
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer isVisible={isVisible}>
        <h3>Request Cash</h3>
        <AmountInput
          type="number"
          placeholder="Enter amount (Max 350)"
          value={amount}
          onChange={(e) => {
            const value = e.target.value === '' ? '' : Number(e.target.value);
            setAmount(value);
          }}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton onClick={handleSubmit}>Submit Request</SubmitButton>
        <CancelButton onClick={closeModal}>Cancel</CancelButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CashAdvanceModal;
