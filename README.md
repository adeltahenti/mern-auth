## MERN Auth Project

We use Vite to install frontend

```javascript
npm create vite@latest frontend
```

After, go to frontend directory and

```javascript
npm i
```

Add config in vite.config.js file (we don't need that using create-react-app)

```javascript
export default defineConfig({
  plugins: [react()],
  // Added
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
```

In package.json, add

```javascript
"client": "npm run dev --prefix frontend"
```

To run both frontend and backend (in the root directory)

```javascript
npm i -D concurrently
```

Create another script

```javascript
"dev": "concurrently \"npm run server\" \"npm run client\""
```

Clean frontend folder

1. Remove App.css
2. Update App.jsx
3. Change title in index.html
4. Clear index.css

Install Bootstrapp and icons in frontend folder

```javascript
npm i bootstrap react-bootstrap react-icons
```

Create components folder & screens folder in src folder

- Create Header component - Header.jsx
- Create Home screen - HomeScreen.jsx
- Create Hero component - Hero.jsx

Install react router & react-router bootstrap in frontend folder

```javascript
npm i react-router-dom react-router-bootstrap
```

> main.jsx has been updated for adding routes

- Create Form Container - FormContainer.jsx
- Create Login screen - LoginScreen.jsx
- Create Register screen - RegisterScreen.jsx

Install Redux in frontend folder

```javascript
npm i @reduxjs/toolkit react-redux
```

Create in frontend/src folder a store.js file, and import it in main.jsx

Create slices folder in frontend/src folder

Install react-toastify in frontend folder

```javascript
npm i react-toastify
```
