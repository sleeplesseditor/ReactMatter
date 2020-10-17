import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import ErrorBoundary from './pages/ErrorBoundary';
import './App.scss';
import Menu from './components/Menu/Menu';
const MainPage = React.lazy(() => import('./pages/MainPage'));

function App() {
  return (
    <Router>
      <Menu title={'React Matter.js'} />
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={LazyLoader(MainPage)} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
