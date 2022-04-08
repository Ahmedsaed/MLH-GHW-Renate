import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableHighlight,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi There!</Text>
      <TouchableHighlight onPress={() => console.log(StatusBar.currentHeight)}>
        <View style={styles.imgContainer}>
          <Image source={require("./assets/tree.png")} style={styles.img} />
        </View>
      </TouchableHighlight>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: Platform.os === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
  },
  img: {
    resizeMode: "cover",
    width: 300,
  },
});
