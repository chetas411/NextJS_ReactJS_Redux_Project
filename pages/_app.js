import { Provider } from "react-redux";
import store from "../store";
import { fetchInitalData, getSearhResults } from "../store/movieSlice";
import "../styles/globals.css";

store.dispatch(fetchInitalData)

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
