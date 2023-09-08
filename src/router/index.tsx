import { Routes, Route, BrowserRouter } from 'react-router-dom';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
        </Route>
        
        <Route path="/" element={<h1>Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  )
}