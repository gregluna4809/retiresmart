\# RetireSmart



A full-stack personal finance and retirement planning platform built with Java Spring Boot, React, and PostgreSQL.



\## Overview



RetireSmart helps users manage their financial lives and model retirement outcomes. Users can track income, expenses, budgets, assets, and debts, while the retirement planner projects future balances based on contributions, expected returns, inflation, pension income, and Social Security estimates. A scenario comparison feature lets users test different retirement assumptions side by side.



\## Tech Stack



\*\*Backend:\*\* Java 21, Spring Boot 3.4.5, Spring Security, Spring Data JPA, PostgreSQL 16, Flyway, Maven



\*\*Frontend:\*\* React 18, Vite, React Router, Axios, React Context API



\*\*Infrastructure:\*\* Docker, Docker Compose



\## Features



\- JWT-based user authentication (register, login, logout)

\- BCrypt password hashing

\- Protected routes on both frontend and backend

\- Global exception handling with structured JSON error responses

\- 11-table normalized PostgreSQL schema covering users, transactions, budgets, accounts, assets, debts, retirement plans, scenarios, and goals

\- Persistent auth state with localStorage



\## Getting Started



\### Prerequisites

\- Java 21

\- Node.js 18+

\- Docker Desktop



\### Run the database

`docker compose up -d`



\### Run the backend

`cd backend \&\& ./mvnw spring-boot:run`



\### Run the frontend

`cd frontend \&\& npm install \&\& npm run dev`



The backend runs on `http://localhost:8080` and the frontend on `http://localhost:5173`.



\## API Endpoints



| Method | Endpoint | Description | Auth Required |

|--------|----------|-------------|---------------|

| POST | `/api/auth/register` | Register a new user | No |

| POST | `/api/auth/login` | Login and receive JWT | No |



\## Roadmap



\- \[ ] Transaction tracking (income and expenses)

\- \[ ] Budget management with planned vs actual comparison

\- \[ ] Account and asset tracking

\- \[ ] Debt tracking with payoff strategies

\- \[ ] Retirement planner with projection engine

\- \[ ] Scenario comparison dashboard

\- \[ ] Goal tracking

\- \[ ] Interactive charts with Recharts

