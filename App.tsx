import { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import * as Font from "expo-font";

export default function App() {

  useEffect(() => {
    loadFont();
  }, []);


  const loadFont = async () => {
    try {
      await Font.loadAsync({
        "Mulish-Bold": require("./fonts/Mulish-Bold.ttf"),
        "Mulish-Regular": require("./fonts/Mulish-Regular.ttf"),
        "Mulish-SemiBold": require("./fonts/Mulish-SemiBold.ttf")
      });
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Text>App.tsx</Text>
      </View>
    </SafeAreaView>
  );
}
