Weather AppUsing React Native (not using Expo), build an app that does the following:
1. Retrieve the temperature and humidity at the device’s current location from theOpenWeatherMap API: https://openweathermap.org/current 
The application should retrieve this data when launched. 
It should also contain a refreshbutton to allow the user to update the data.
The screen should be labeled “Weather at your location”. 
It should show the temperature(degrees Celsius) and humidity (percent) retrieved from OpenWeatherMap. 
It shouldalso show the last time that data was received.
2. The application should store the last retrieved data and display it initially when launched.
The screen should be refreshed when updated data is received.
3. The app should run on both Android and iOS

### Installation:
- To run your app on iOS:
   ```sh
   cd currentWeather
   react-native run-ios
   ```
   
    or
    
   Open ios/example.xcodeproj in Xcode
   Hit the Run button
- To run your app on Android:

   Simple open link and download application: https://i.diawi.com/ZfZc65
   
   or

   ```sh
   cd currentWeather
   ```
   Have an Android emulator running (quickest way to get started), or a device connected
   ```sh
   react-native run-android
   ```
