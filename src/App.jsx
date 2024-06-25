import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes } from './routes/index';
import DefaultLayout from './components/layout/default-layout';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          {routes.map(route => (
            <Route key={route.path}
              path={route.path}
              element={
                <DefaultLayout showCarousel={route.showCarousel}>
                  <route.element />
                </DefaultLayout>} />
          ))}
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
