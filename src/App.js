import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { applyMiddleware,createStore,compose } from 'redux';
import reducers from "./reducers"
import RootContainer from './containers/RootContainer';
const middleware = [thunk]
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

function App(props) {
  return (
    <Provider store={store}>
      <RootContainer/>
    </Provider>
  );
}

export default App;
