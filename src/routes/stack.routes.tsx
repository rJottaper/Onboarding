import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Onboarding from '../screens/Onboarding/Onboarding';
import Home from '../screens/Home';
import AddMoney from '../screens/AddMoney';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Onboarding' component={Onboarding} />
      <Screen name='Home' component={Home} />
      <Screen name='AddMoney' component={AddMoney} />
    </Navigator>
  );
};

export default StackRoutes;