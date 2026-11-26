import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
// Standalone pages (invoices, agreements, demos) load on demand, so the marketing pages skip their pdf libraries.
const NIRoadmap = lazy(() => import('./pages/NIRoadmap'))
const Invoice = lazy(() => import('./pages/Invoice'))
const InvoiceLookup = lazy(() => import('./pages/InvoiceLookup'))
const InvoiceAdmin = lazy(() => import('./pages/InvoiceAdmin'))
const ClientQuestionnaire = lazy(() => import('./pages/ClientQuestionnaire'))
const QuestionnaireSubmissions = lazy(() => import('./pages/QuestionnaireSubmissions'))
const ServiceAgreement = lazy(() => import('./pages/ServiceAgreement'))
const ITSDemo = lazy(() => import('./pages/ITSDemo'))
const LOrdinateur = lazy(() => import('./pages/LOrdinateur'))
import './App.css'
import './site.css'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function ProductRedirect() {
  const { id } = useParams()
  return <Navigate to={`/products#${id}`} replace />
}

function ExternalRedirect({ to }) {
  useEffect(() => { window.location.replace(to) }, [to])
  return null
}

function AppLayout() {
  const { pathname } = useLocation()
  const isStandalone = pathname === '/ni-roadmap' || pathname.startsWith('/invoice/') || pathname === '/pay' || pathname === '/admin/invoices' || pathname === '/questionnaire' || pathname === '/admin/questionnaire' || pathname.startsWith('/agreements/') || pathname === '/its-demo' || pathname === '/lead-finder' || pathname === '/lordinateur'

  if (isStandalone && pathname === '/ni-roadmap') return <NIRoadmap />
  if (isStandalone && pathname === '/its-demo') return <ITSDemo />
  if (isStandalone && pathname === '/lordinateur') return <LOrdinateur />
  if (isStandalone && pathname === '/questionnaire') return <ClientQuestionnaire />

  if (isStandalone) {
    return (
      <>
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/invoice/:id" element={<Invoice />} />
            <Route path="/pay" element={<InvoiceLookup />} />
            <Route path="/admin/invoices" element={<InvoiceAdmin />} />
            <Route path="/admin/questionnaire" element={<QuestionnaireSubmissions />} />
            <Route path="/agreements/nexus-rv" element={<ServiceAgreement />} />
          </Routes>
        </main>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductRedirect />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/work" element={<Navigate to="/projects" replace />} />
          <Route path="/resume" element={<ExternalRedirect to="https://roddy.hiro-labs.dev" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Suspense fallback={null}>
          <AppLayout />
        </Suspense>
      </div>
    </Router>
  )
}

export default App
