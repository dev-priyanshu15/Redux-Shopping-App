# Redux Shopping Cart App

A modern e-commerce shopping cart application built with React, Redux Toolkit, and Vite.

Live demo: [redux-shopping-app-nine.vercel.app](https://redux-shopping-app-nine.vercel.app)

## Features

- Product catalog with detailed product information
- Shopping cart functionality
  - Add/remove items
  - Adjust quantities
  - Calculate totals
- Responsive navigation bar with cart summary
- State management using Redux Toolkit
- Fast refresh and HMR support through Vite

## Technology Stack

- [React](https://reactjs.org/) - UI Framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - State Management
- [Vite](https://vitejs.dev/) - Build Tool
- [SWC](https://swc.rs/) - Fast Refresh via @vitejs/plugin-react-swc

## Project Structure

```
src/
├── Components/
│   ├── Cart.jsx       # Shopping cart component
│   ├── Counter.jsx    # Quantity counter component
│   ├── Navbar.jsx     # Navigation bar component
│   └── Product.jsx    # Product display component
├── redux/
│   ├── cartSlice/     # Cart state management
│   ├── counterSlice/  # Counter state management
│   └── store/         # Redux store configuration
├── App.jsx            # Main application component
├── data.js           # Product data
└── main.jsx          # Application entry point
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
