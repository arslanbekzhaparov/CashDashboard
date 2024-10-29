# Cash Advance Dashboard

## Overview

This project is a cash advance dashboard built using React and styled-components. It displays the available balance and a list of recent transactions. Users can request cash through a modal interface.

## Features

- Display available balance using a card component.
- Filter and list recent transactions.
- Modal for cash request functionality.

## Design Decisions

- **Styled Components**: I chose styled-components for scoped CSS, which allows for cleaner code and easier styling management within components.
- **Responsive Design**: Media queries were implemented to ensure a good user experience on both mobile and desktop devices.
- **Separation of Concerns**: The application is divided into reusable components, such as `CashAdvanceCard`, `TransactionList`, and `CashAdvanceModal`, promoting reusability and maintainability.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cash-advance-dashboard.git
   cd cash-advance-dashboard
   ```
