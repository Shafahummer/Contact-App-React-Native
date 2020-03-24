
import HomeScreen from "./screens/HomeScreen";
import AddNewContactScreen from "./screens/AddNewContactScreen";
import EditContactScreen from "./screens/EditContactScreen";
import ViewContactScreen from "./screens/ViewContactScreen";

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

  
const AppNavigator = createStackNavigator({

  Home: {
    screen: HomeScreen,
  },
  Add:{
    screen:AddNewContactScreen
  },
  Edit:{
    screen:EditContactScreen
  },
  View:{
    screen:ViewContactScreen
  }
},{
   defaultNavigationOptions : {
  title: 'Home',
  headerStyle: {
    backgroundColor: '#AE1438',
  },
  headerTintColor: '#25CCF7',
  headerTitleStyle: {
    fontWeight: 'bold',
  }}}
);

export default createAppContainer(AppNavigator);
