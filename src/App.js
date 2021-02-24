import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Details from './components/Details';
import Links from './components/Links';
import Skills from './components/Skils';

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
          
        </Col>
      </Row>
    </div>
  );
}

export default App;
