import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Messages from './Messages'
import MessageStandalone from './MessageStandalone'

import Header from './Header'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Settings from './Settings'
import Login from './Login'
import CreateAccount from './CreateAccount'
import Home from './Home'

const App = props => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
            {/* a route for the home page */}
            <Route path="/" element={<Home />} />

            {/* a route to see a list of all messages */}
            <Route path="/messages" element={<Messages />} />


            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateAccount />} />

            <Route path="/settings" element={<Settings />} />

            {/* a route for just a single message, where the id of the desired message is passed as a parameter */}
            <Route
              path="/messages/:messageId"
              element={<MessageStandalone />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
