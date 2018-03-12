module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/js/app/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      Header: 'app/components/header/header.jsx',
      MenuLeft: 'app/components/header/menuLeft/menuLeft.jsx',
      MenuRight: 'app/components/header/menuRight/menuRight.jsx',
      Body: 'app/components/body/body.jsx',
      Calendar: 'app/components/body/calendar/calendar.js',
      EventModal: 'app/components/body/calendar/eventModal.js',
      PlusButton: 'app/components/body/plusButtonModal/plusButton.jsx',
      PlusModalMethodes: 'app/components/body/plusButtonModal/plusModalMethodes.jsx',
      PlusModal: 'app/components/body/plusButtonModal/plusModal.jsx',
      Footer: 'app/components/footer/footer.js',
      MenuDayoff: 'app/components/footer/menuDayoff/menuDayoff.jsx',
      MenuDisplayType: 'app/components/footer/menuDisplayType/menuDisplayType.jsx',
      MenuTeam: 'app/components/footer/menuTeam/menuTeam.jsx',
      DayOffDetails: 'app/components/popup/form/dayOffDetails/dayOffDetails.jsx',
      PersonalDetails: 'app/components/popup/form/personalDetails/personalDetails.jsx',
      Form: 'app/components/popup/form.jsx',
      Events: 'app/components/body/calendar/events.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
