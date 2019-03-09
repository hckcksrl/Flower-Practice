import React from "react";
import { createAppContainer } from "react-navigation";
import mainTabNavigation from "../../Navigation/MainNavigation";

const AppContainer = createAppContainer(mainTabNavigation);

export default AppContainer;
