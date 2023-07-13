import './App.css';
import { createBrowserHistory } from 'history';
import configureStore from './utils/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Register from './components/Register/Register';
import routes from './utils/routes';
import Home from './components/Home/Home';

function App() {

  const history = createBrowserHistory();
  const initialState = {};
  const store = configureStore(history, initialState);
  return (
    <Provider store={store}>
      <BrowserRouter history = {history}>
        <Header/>
        <Routes>
            <Route exact path = {routes.index} element = {<Navigate to={routes.home} />} />
            <Route path = {routes.home} element = {<Home/>}/>
            <Route path = {routes.register} element = {<Register/>} />
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
