# Snitch - E-Commerce Platform

A full-stack e-commerce application built with **Node.js/Express** backend and **React/Vite** frontend. Snitch enables users to browse, purchase products, and allows sellers to manage their inventory.

## 🎯 Features

- **User Authentication**: Register, login, and Google OAuth integration
- **Product Management**: Browse products, filter, search functionality
- **Shopping Cart**: Add/remove items, manage quantities
- **Seller Dashboard**: Upload and manage products (for seller accounts)
- **Payment Integration**: Razorpay payment gateway (in development)
- **Image Upload**: ImageKit integration for product images
- **Role-Based Access**: Buyer and seller roles with different permissions

## 📁 Project Structure

```
Snitch/
├── Backend/                 # Node.js/Express server
│   ├── src/
│   │   ├── app.js          # Express app configuration
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route handlers
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── middlewares/    # Custom middleware
│   │   └── validators/     # Input validation
│   ├── server.js           # Server entry point
│   └── package.json
│
└── Frontend/                # React/Vite client
    ├── src/
    │   ├── app/            # Main app config
    │   ├── features/       # Feature modules (auth, cart, products)
    │   └── main.jsx        # Entry point
    ├── package.json
    └── vite.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB instance running
- Git

### Backend Setup

1. **Navigate to Backend directory**
   ```bash
   cd Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** (use `.env.example` as reference)
   ```bash
   cp .env.example .env
   ```

4. **Configure environment variables**
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_oauth_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_secret
   IMAGEKIT_PRIVATE_KEY=your_imagekit_key
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   BACKEND_URL=http://localhost:5000
   ```

5. **Start the server**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup

1. **Navigate to Frontend directory**
   ```bash
   cd Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/google` - Google OAuth login
- `GET /api/auth/google/callback` - Google OAuth callback
- `GET /api/auth/me` - Get authenticated user

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create product (seller only)
- `PUT /api/products/:id` - Update product (seller only)
- `DELETE /api/products/:id` - Delete product (seller only)

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

## 🔐 Security

- ✅ Environment variables for sensitive data (no hardcoded secrets)
- ✅ JWT authentication for protected routes
- ✅ Password hashing with bcryptjs
- ✅ CORS configured for frontend URL
- ✅ Input validation and sanitization
- ✅ `.env` files excluded from git

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, Passport.js (Google OAuth)
- **Validation**: express-validator
- **File Upload**: Multer, ImageKit
- **Payments**: Razorpay

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios (via RTK Query)

## 📦 Available Scripts

### Backend
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests (not implemented yet)
```

### Frontend
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔄 Development Workflow

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make changes and commit
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

3. Push to remote
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request

## 📝 Notes

- Both apps use `localhost` for development
- Backend communicates with MongoDB Atlas (or local MongoDB)
- Frontend uses Redux for state management
- CORS is configured to accept requests from the frontend URL
- Google OAuth credentials required for authentication

## 🤝 Contributing

Contributions are welcome! Please follow the existing code structure and add tests for new features.

## 📄 License

This project is open source and available under the ISC License.

## 👤 Author

Created as a Portfolio Project

---

**Happy Coding! 🚀**
