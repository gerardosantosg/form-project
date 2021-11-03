import Home from './Home'
import General from './General'
import Address from './Address'
import Contact from './Contact'
import LegalRepresentative from './LegalRepresentative'
import Bank from './Bank'
import Success from './Success'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

const MainForm = () => {
    return (
        <Router>
            <div>
                <Navbar bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand>
                            <h2>Logo</h2>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/general' component={General} />
                    <Route path='/domicilio' component={Address} />
                    <Route path='/contacto' component={Contact} />
                    <Route path='/representante-legal' component={LegalRepresentative} />
                    <Route path='/banco' component={Bank} />
                    <Route path='/enviado' component={Success} />
                </Switch>
            </div>
        </Router>
    )
}

export default MainForm
