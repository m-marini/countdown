import React, { FunctionComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import moment, { Moment } from 'moment';
import 'moment/locale/it';
import { Badge, Container, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import { version } from '../package.json';

moment.locale('it');

const Counter: FunctionComponent<{
  date: Moment;
}> = ({ date }) => {
  const duration = moment.duration(date.diff(moment().startOf('day')));

  return (
    <div>
      <h1>
        <Badge variant="primary" pill>
          {date.format('LL')}
        </Badge> - <Badge variant="primary" pill>
          {duration.years()} anno, {duration.months()} mesi, {duration.days()} giorni
        </Badge>
      </h1>
    </div>
  );
}

const CountdownPage: FunctionComponent<{}> = () => {
  const queryParms = new URLSearchParams(useLocation<{}>().search);
  const br = queryParms.get('br') ?? 'www.mmarini.org';
  const lnk = queryParms.get('lnk') ?? 'http://www.mmarini.org';
  const dt = queryParms.get('dt') ?? '2022-02-01'
  const targetDate = moment(`${dt}`, moment.ISO_8601).startOf('day');
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href={lnk}>{br}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Countdown {version}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Jumbotron className="text-center">
          <h1>Conto alla rovescia</h1>
          <Counter date={targetDate}></Counter>
        </Jumbotron>
      </Container>
    </div >
  );
}

export const App: FunctionComponent<{}> = () => {
  return (
    <Router basename=".">
      <CountdownPage />
    </Router>
  );
}
