import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen0220587Navigator from '../features/BlankScreen0220587/navigator';
import Maps220536Navigator from '../features/Maps220536/navigator';
import Maps220531Navigator from '../features/Maps220531/navigator';
import UserProfile220527Navigator from '../features/UserProfile220527/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen0220587: { screen: BlankScreen0220587Navigator },
Maps220536: { screen: Maps220536Navigator },
Maps220531: { screen: Maps220531Navigator },
UserProfile220527: { screen: UserProfile220527Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
