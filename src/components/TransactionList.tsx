import React, { useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
`;

const FilterContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 8px;
  margin-left: 5px;
  border: 1px solid #007bff;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0056b3;
    outline: none;
  }
`;

const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const HeaderCell = styled.div`
  text-align: center;
  color: #007bff;
  padding: 10px;
  font-weight: bold;
`;

const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f7f7f7;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 5px;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.2s ease;
  z-index: 10;

  ${TransactionItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const Date = styled.span`
  color: #555;
  font-weight: 500;
`;

const Amount = styled.span<{ isNegative: boolean }>`
  color: ${({ isNegative }) => (isNegative ? '#dc3545' : '#28a745')};
  font-weight: 600;
  font-size: 1.1rem;
`;

const Status = styled.span<{ status: string }>`
  color: ${({ status }) => (status === 'Pending' ? '#6c757d' : status === 'Completed' ? '#000' : '#555')};
`;

interface Transaction {
  date: string;
  amount: number;
  status: string;
  id: string;
  repaymentDate: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Completed'>('All');

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === 'All') return true;
    return transaction.status === filter;
  });

  return (
    <ListContainer>
      <h3>Recent Transactions</h3>
      <FilterContainer>
        <FilterLabel>Filter:</FilterLabel>
        <Select value={filter} onChange={(e) => setFilter(e.target.value as 'All' | 'Pending' | 'Completed')}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </Select>
      </FilterContainer>
      <TransactionHeader>
        <HeaderCell>Date</HeaderCell>
        <HeaderCell>Amount</HeaderCell>
        <HeaderCell>Status</HeaderCell>
      </TransactionHeader>
      {filteredTransactions.map((transaction, index) => (
        <TransactionItem key={index}>
          <Date>{transaction.date}</Date>
          <Amount isNegative={transaction.amount < 0}>
            {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
          </Amount>
          <Status status={transaction.status}>{transaction.status}</Status>
          <Tooltip>
            <div>Transaction ID: {transaction.id}</div>
            <div>Repayment Date: {transaction.repaymentDate}</div>
          </Tooltip>
        </TransactionItem>
      ))}
    </ListContainer>
  );
};

export default TransactionList;
