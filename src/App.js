import React from 'react';
import './App.css';
import { Navbar, Container, Jumbotron, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
//import 'moment/dist/locale/it.js';
//import moment from 'moment/min/moment-with-locales';
import 'moment/locale/it';

moment.locale('it');

const TargetDate = moment('2022-02-01T00:00:00+01:00', moment.ISO_8601);

function Counter({ date }) {

  const duration = moment.duration(date.diff(moment()))

  return (
    <div>
      <h1>
        <Badge variant="primary" pill>
          {date.format('LL')}
        </Badge> = <Badge variant="primary" pill>
          {duration.years()} anno, {duration.months()} mesi, {duration.days()} giorni
        </Badge>
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Count down</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Jumbotron>
          <p>
            <Counter date={TargetDate}></Counter>
          </p>
        </Jumbotron>
      </Container>
    </div >
  );
}

export default App;
