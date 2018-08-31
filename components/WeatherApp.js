import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

//actions
import * as actions from '../actions';

//Common components
import { Button } from './common/Button';
import { Spinner } from './common/Spinner';

class WeatherApp extends Component {
  componentDidMount = () => {
    this.getWeather();
  };

  onRefresh = () => {
    this.getWeather();
  };

  getWeather = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let { latitude: lat, longitude: lon } = position.coords;
      this.props.refreshWeather(lat, lon);
    });
  };

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner />;
    }
    return <Button onPress={this.onRefresh}>Refresh</Button>;
  };

  renderError = () => {
    if (this.props.error) {
      return <Text style={styles.error}>{this.props.error}</Text>;
    }
  };

  onClear = () => {
    this.props.onClear();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Weather at your location</Text>
          </View>
          <View style={styles.weather}>
            <Text>
              City: {this.props.weather.temp && this.props.weather.city}
            </Text>
            <Text>
              Temperature:{' '}
              {this.props.weather.temp && `${this.props.weather.temp} °C`}
            </Text>
            <Text>
              Humidity:{' '}
              {this.props.weather.temp && `${this.props.weather.humidity} %`}
            </Text>
            <Text>
              Last Updated:{' '}
              {this.props.weather.temp && this.props.weather.updated}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, width: '100%' }}>
          {this.renderButton()}
          {this.renderError()}
        </View>
        <Button onPress={this.onClear}>clear</Button>
      </View>
    );
  }
}

mapStateToProps = ({ weather }) => {
  let { loading, error } = weather;
  return { weather, loading, error };
};

export default connect(
  mapStateToProps,
  actions
)(WeatherApp);

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginTop: 6,
    marginLeft: 20
  },
  weather: {}
};
