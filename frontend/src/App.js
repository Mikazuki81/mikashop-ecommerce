import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route component={HomePage} path='/' exact />
          <Route component={ProductPage} path='/product/:id' />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
