import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const handleSimpleBtn = () => console.log("Simple Pressed");
  const handleAlertBtn = () =>
    Alert.alert("Alert Button", "Are you over on 18?", [
      { text: "Evet", onPress: () => console.log("Yes, I am.") },
      { text: "Hayr", onPress: () => console.log("No, I am not.") },
    ]);
  const handlePromptBtn = () =>
    Alert.prompt("Prompt Button", "Write anythings:", (text) =>
      console.log("Prompt working only on IOS")
    );

  const handlePressRemoteImg = () => console.log("Pressed Remote Image");
  const handlePressLocalImg = () => console.log("Pressed Local Image");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>-- Hello, Guest! --</Text>

      <View style={styles.boxwrapper}>
        <View style={styles.boxBtns}>
          <Button title="Simple Btn" color="green" onPress={handleSimpleBtn} />
        </View>
        <View style={styles.boxBtns}>
          <Button title="Alert Btn" onPress={handleAlertBtn} />
        </View>
        <View style={styles.boxBtns}>
          <Button title="Promp Btn" color="red" onPress={handlePromptBtn} />
        </View>
      </View>
      <View style={styles.imgBoxs}>
        <View style={styles.imgBox}>
          <TouchableWithoutFeedback onPress={handlePressRemoteImg}>
            <Image
              style={styles.img}
              source={{
                width: 200,
                // height: 320,
                uri: "https://picsum.photos/200/320",
              }}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.imgBox}>
          <TouchableWithoutFeedback onPress={handlePressLocalImg}>
            <Image
              style={styles.img}
              source={require("./assets/adaptive-icon.png")}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const stil = {
  borderColor: "",
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    paddingBottom: 20,
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#41da4b",
    fontWeight: 600,
    borderColor: "#41da4b",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    marginBottom: 15,
  },
  boxwrapper: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    borderColor: "#41da4b",
    borderLeftWidth: 10,
    borderRightWidth: 10,
  },
  boxBtns: {
    width: 200,
    marginBottom: 5,
  },
  img: {
    maxWidth: "100%",
    height: "100%",
    borderColor: "#41da4b",
    borderWidth: 2,
    borderRadius: 8,
  },
  imgBoxs: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  imgBox: {
    width: "50%",
    height: 320,
    padding: 5,
  },
});
