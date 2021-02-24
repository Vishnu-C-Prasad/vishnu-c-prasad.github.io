import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Details from './components/Details';
import Links from './components/Links';
import Skills from './components/Skils';
import Profile from './components/Profile';
import Education from './components/Education';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <Row>
        <Col xs={4} className="col-left">
          <Header />
          <Details />
          <Links />
          <Skills />
        </Col>
        <Col xs={8} className="col-right">
          <Profile />
          <Education />
          <Projects />
        </Col>
      </Row>
    </div>
  );
}

export default App;
