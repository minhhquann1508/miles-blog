import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes } from './routes/index';
import DefaultLayout from './components/layout/default-layout';
import { useQuery } from '@tanstack/react-query';
import { getListCategoryApi } from './apis/category';
import { updateCategories } from './redux/slice/categorySlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const fetchListCategories = async () => {
    const res = await getListCategoryApi();

    return res.data;
  }

  const { data: queryData, isSuccess } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchListCategories,
  })

  useEffect(() => {
    if (isSuccess && queryData) {
      dispatch(updateCategories(queryData));
    }
  }, [queryData, isSuccess, dispatch]);

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
