# E-Commerce-Django-React
# E-Commerce Store

A full-stack e-commerce application built with a React frontend and a Django REST API backend.

This project supports product browsing, product details, user registration, login, cart management, and checkout.

## Tech Stack

- Frontend: React, Vite, React Router, Tailwind CSS
- Backend: Django, Django REST Framework, Simple JWT
- Database: PostgreSQL
- Auth: JWT access and refresh tokens

## Project Structure

```text
E-Commerce/
  backend/
    backend/
      __init__.py
      asgi.py
      settings.py
      urls.py
      wsgi.py
    store/
      admin.py
      apps.py
      models.py
      serializers.py
      tests.py
      urls.py
      views.py
      migrations/
    media/          # uploaded product images in development
    manage.py
  frontend/
    public/
    src/
      assets/
      components/
        Navbar.jsx
        PrivateRouter.jsx
        ProductCard.jsx
      context/
        CartContext.jsx
      pages/
        CartPage.jsx
        CheckoutPage.jsx
        Login.jsx
        ProductDetails.jsx
        ProductList.jsx
        Signup.jsx
      utils/
        auth.js
      App.jsx
      index.css
      main.jsx
    package.json
    vite.config.js
README.md
```

## Features

- Browse products on a product listing page
- View product details with image, description, and price
- Register a new user and log in
- JWT authentication with access and refresh tokens
- Add products to a cart and view cart contents
- Update cart item quantities or remove items
- Protected checkout page for authenticated users
- Place an order and clear the cart
- Admin support for categories and products

## Backend Details

### Key functionality

- `Category`, `Product`, `Cart`, `CartItem`, `Order`, and `OrderItem` models
- User registration endpoint with password confirmation
- JWT login and token refresh via `rest_framework_simplejwt`
- Cart endpoints to add, update, remove items, and retrieve cart contents
- Order creation endpoint with basic phone validation
- Media serving in development for product images

### Main backend files

- `backend/backend/settings.py` — Django settings, database, JWT, CORS, and media configuration
- `backend/backend/urls.py` — root URL routing and media static serving in debug mode
- `backend/store/models.py` — product, cart, and order models
- `backend/store/serializers.py` — serializers for API responses
- `backend/store/views.py` — view functions for products, cart, orders, and registration
- `backend/store/urls.py` — API route definitions

### Environment variables

Create `backend/.env` with:

```env
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432
```

### Backend setup

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install django djangorestframework djangorestframework-simplejwt django-cors-headers psycopg2-binary python-dotenv pillow
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The backend will be available at `http://localhost:8000`.

## Frontend Details

### Key functionality

- React routing for home, product details, cart, checkout, login, and signup
- `CartContext` for fetching cart state and handling cart actions
- `auth.js` helper to store JWT tokens in localStorage and attach auth headers
- Protected checkout route via `PrivateRouter`
- Responsive UI styled with Tailwind CSS

### Main frontend files

- `frontend/src/App.jsx` — main router setup
- `frontend/src/main.jsx` — app entry point with `CartProvider`
- `frontend/src/context/CartContext.jsx` — cart state and actions
- `frontend/src/components/Navbar.jsx` — navigation and login/logout state
- `frontend/src/components/PrivateRouter.jsx` — route guard for authenticated pages
- `frontend/src/pages/` — product list, product details, cart, checkout, login, signup pages
- `frontend/src/utils/auth.js` — token storage and authenticated fetch wrapper

### Environment variables

Create `frontend/.env` with:

```env
VITE_DJANGO_BASE_URL=http://localhost:8000
```

### Frontend setup

```powershell
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`.

## API Endpoints

All routes are prefixed with `/api/`.

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/register/` | Register a new user |
| POST | `/api/token/` | Get JWT access and refresh tokens |
| POST | `/api/token/refresh/` | Refresh access token |
| GET | `/api/products/` | List all products |
| GET | `/api/products/<id>/` | Retrieve a product by ID |
| GET | `/api/categories/` | List all categories |
| GET | `/api/cart/` | Get authenticated user's cart |
| POST | `/api/cart/add/` | Add a product to the cart |
| POST | `/api/cart/update/` | Update cart item quantity |
| POST | `/api/cart/remove/` | Remove a cart item |
| POST | `/api/orders/create/` | Create an order from the cart |

> Cart and order endpoints require an `Authorization: Bearer <access_token>` header.

## Running the App

1. Start PostgreSQL.
2. Run backend:
   - `cd backend`
   - activate virtual environment
   - `python manage.py migrate`
   - `python manage.py runserver`
3. Run frontend:
   - `cd frontend`
   - `npm install`
   - `npm run dev`
4. Open `http://localhost:5173` in your browser.

## Usage

- Browse the homepage for available products.
- Click a product to view details.
- Sign up or log in to add items to the cart.
- Manage cart item quantities or remove products.
- Proceed to checkout to submit an order.

## Notes

- Product media files are stored in `backend/media/` during local development.
- The frontend stores JWT tokens in `localStorage`.
- The checkout route is protected and redirects unauthenticated users to login.
- Add products and categories using Django admin at `http://localhost:8000/admin/`.
