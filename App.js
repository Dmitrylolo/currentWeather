import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './helpers/configureStore';

//Components
import WeatherApp from './components/WeatherApp';

const { persistor, store } = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WeatherApp />
        </PersistGate>
      </Provider>
    );
  }
}
