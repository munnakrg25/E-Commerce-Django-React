# E-Commerce Frontend

React/Vite frontend for the E-Commerce Store project. The app provides product browsing, product details, authentication pages, cart management, and checkout.

For full project setup, including the Django backend and PostgreSQL configuration, see the root `README.md`.

## Setup

```powershell
npm install
```

Create `frontend/.env`:

```env
VITE_DJANGO_BASE_URL=http://localhost:8000
```

## Scripts

```powershell
npm run dev      # Start the local Vite server
npm run build    # Build for production
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Routes

- `/` - product list
- `/product/:id` - product details
- `/cart` - shopping cart
- `/checkout` - protected checkout page
- `/login` - user login
- `/signup` - user registration
