import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ParaEmpresas from './pages/ParaEmpresas';
import Proposta from './pages/Proposta';
import Cadastro from './pages/Cadastro';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import PropostaDetalhes from './pages/PropostaDetalhes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Rotas com Header */}
          <Route path="/" element={
            <>
              <Header />
              <main><ParaEmpresas /></main>
            </>
          } />
          <Route path="/orcamento" element={
            <>
              <Header />
              <main><Home /></main>
            </>
          } />
          <Route path="/proposta" element={
            <>
              <Header />
              <main><Proposta /></main>
            </>
          } />
          <Route path="/cadastro" element={
            <>
              <Header />
              <main><Cadastro /></main>
            </>
          } />

          {/* Rota do Dashboard sem Header (tem sidebar própria) */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Rota do Dashboard Administrativo */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Rota de Detalhes da Proposta */}
          <Route path="/admin/proposta/:id" element={<PropostaDetalhes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
