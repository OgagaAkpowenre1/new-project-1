import './App.css';
import FeatureFlags from './components/feature-flags';
import FeatureFlagsGlobalState from './components/feature-flags/context/featureFlag';
import Weather from './weather-app/weather';


function App() {
  return (
    <div className="App">
      {/* <FeatureFlagsGlobalState>
        <FeatureFlags />
      </FeatureFlagsGlobalState> */}
      <Weather />
    </div>
  );
}

export default App;
