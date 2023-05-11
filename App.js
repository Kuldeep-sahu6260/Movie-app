import { StripeProvider } from "@stripe/stripe-react-native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MovieContext } from "./Context";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <>
      <MovieContext>
        <StripeProvider publishableKey="pk_test_51MnwapSIhkz3a0QuLMEBwQEOFJphc7bVWapZ9opNhqwFSP2Xf27pLg6rNYShkhVQ8qQsQoe2VT0HxUh5Jj4x9uvG00gp0jd7U7">
          <StackNavigator />
          <StatusBar style="auto" />
        </StripeProvider>
      </MovieContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
