
import { createStackNavigator, createAppContainer } from "react-navigation";
import welcomeScreen from "./screens/onboarding/welcome/welcomescreen";
import provisionScreen from "./screens/onboarding/provision/provision";
import chatlist from "./screens/chats/chatlist/chatlist";
import chatpage from "./screens/chats/chatpage/chatpage";
import chatstatus from "./screens/chats/chatstatus/chatstatus";
import settings from "./screens/settings/settingspage/settings";
                                       

var routeArray = { 
    Welcome:{screen: welcomeScreen, navigationOptions:{header:null}},
    Provision:{screen: provisionScreen},
    ChatList:{screen: chatlist, },
    ChatPage:{screen: chatpage,navigationOptions:{header:null}},
    ChatStatus:{screen: chatstatus,},
    Settings:{screen: settings}
}


var navigations = createStackNavigator(
       routeArray,
    {
        initialRouteName: "Welcome"
    }
)

const Routes = createAppContainer(navigations);


export default Routes