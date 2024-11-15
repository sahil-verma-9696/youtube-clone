import { Provider } from 'react-redux';

import Home from './pages/Home'
import Video from './pages/Video'
import {
  createBrowserRouter,
} from "react-router-dom";
import {appStore} from './store/appStore';
import Body from './components/body/Body';


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
        element: <Video/>
      }
    ]
  },
])

function App() {

  return (
    <div className='App size-full'>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>);
}