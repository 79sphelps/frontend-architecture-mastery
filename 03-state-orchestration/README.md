# State Orchestration Architecture

## Overview

This project demonstrates how to properly manage different types of state in a React application:

- Server State → React Query
- Global State → Zustand
- UI State → useState

---

## Architecture

src/
  app/
  features/dashboard/
  shared/store/
  shared/api/
  shared/types/

---

## Key Principles

- Server state is remote and cached
- Global state is shared across the app
- UI state is local and ephemeral

---

## What to Observe

1. Click "Login"
   → updates global Zustand state

2. Todos load automatically
   → React Query server state

3. Toggle Todos button
   → UI state

---

## Accessibility

- aria roles used for status + alerts
- semantic HTML (main, ul, li)

---

## Testing Strategy

- Unit → Zustand store
- Integration → component behavior
- E2E → user interaction

---

## Run

npm install  
npm run dev  

---

## Takeaway

State is categorized into server, global, and UI layers, each managed with the appropriate tool to ensure scalability and maintainability.