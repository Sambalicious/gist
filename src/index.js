import React from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Spinner,
  Flex
} from "@chakra-ui/core";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import { store } from './redux/Store/store';
import firebase from "./redux/config/Firebase"
import { createFirestoreInstance } from "redux-firestore";
import { Provider, useSelector } from "react-redux";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <Flex
  justify="center"
  align="center"
  minHeight="100vh"

 >
    
    <Spinner
  thickness="4px"
  speed="0.65s"
  alignContent="center"
  emptyColor="gray.200"
  color="blue.500"
  size="xl"
/></Flex>;
  return children;
};

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
const newTheme = {
  ...theme,
  breakpoints,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={newTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
              <App />
            </AuthIsLoaded>
          </ReactReduxFirebaseProvider>
        </Provider>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
