import { Provider } from 'react-redux';
import React, { Suspense } from 'react';

import Home from './pages/Home';
import {
  createBrowserRouter,
} from "react-router-dom";
import { appStore } from './store/appStore';
import Body from './components/body/Body';

// Lazy load the Video component
const Video = React.lazy(() => import('./pages/Video'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/video/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Video />
          </Suspense>
        )
      }
    ]
  },
]);

function App() {
  return (
    <div className='App size-full'>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}
