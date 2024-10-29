# Cash Dashboard

## Overview

This project is a **Cash Dashboard** built with React and styled-components.

## Live Demo

For remote access, visit the live version on Vercel:  
👉 **[cash-dashboard-mu.vercel.app](https://cash-dashboard-mu.vercel.app)**

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

### Installation and Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cash-advance-dashboard.git
   cd cash-advance-dashboard
   ```

The application will now run locally at http://localhost:3000.

#Design Decisions

The design was inspired by the About page of the TryBree website, focusing on the following:

Simplicity and familiarity: Balances are displayed in a credit card/account format to resemble the interface of mobile banking apps, making it easy for users to connect with the layout.
Responsive Design: Achieving a responsive layout was challenging but handled with dynamic sizing and media queries.
Color Coding: Status indicators use color-coding for easy attention (e.g., red for negative amounts, green for positive).
Transparency and Accessibility: A bright and straightforward design ensures accessibility and maintains a sense of clarity.

#Challenges and Solutions

Responsive Design: Ensuring that the dashboard looks good on different devices was one of the key challenges. Media queries and dynamic styles were used to adjust layouts.
Design Consistency: Picking an overall theme and ensuring consistency throughout the components was tricky. I aimed for a balance between simplicity and prominence, ensuring the design feels both modern and accessible.
Dynamic Modal Placement: Currently, the cash request functionality is implemented as a modal. In the future, this could be integrated directly into the main dashboard screen for quicker and easier interaction.
Naming Adjustments: Some of the component names or labels were adjusted to be shorter and clearer (e.g., "Available Balance" could be changed to just "Balance" in future iterations).

#Future Improvements

Inline Modal: Moving the cash request modal onto the main dashboard for better UX.
Backend Integration: Connecting the transactions with a backend API to persist data.
Component Reusability: The dashboard component is designed to be exportable and extendable for future feature updates.

#License
This project is licensed under the MIT License.

---

This version contains all the necessary sections, formatted correctly for **`README.md`**. You can now copy and paste it directly into your project!
