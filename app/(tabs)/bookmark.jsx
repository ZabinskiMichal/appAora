import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Welcome = () => {
  // const navigation = useNavigation();

  return (
    <View style={styles.welcome}>
      <Pressable
        style={styles.welcomeChild}
        onPress={() => navigation.navigate("Skip")}
      />
      <Text style={[styles.rozpocznij, styles.rozpocznijTypo]}>Rozpocznij</Text>
      <Text style={[styles.witajMioCiContainer, styles.rozpocznijTypo]}>
        <Text style={styles.witaj}>{`Witaj!
`}</Text>
        <Text style={styles.mioCiWidzie}>{`
Miło Cię widzieć, cieszymy sie, wybierasz nasze lody robione z pasją!`}</Text>
      </Text>
      <Image
        style={styles.coconutCashewVanillaIceCreIcon}
        contentFit="cover"
        source={require("../assets/coconutcashewvanillaicecream17-1.png")}
      />
      <Image
        style={styles.slodkoSlonaLogi2Icon}
        contentFit="cover"
        source={require("../assets/slodkoslonalogi-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rozpocznijTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  welcomeChild: {
    top: 778,
    left: 86,
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorGoldenrod,
    width: 250,
    height: 56,
    position: "absolute",
  },
  rozpocznij: {
    top: 792,
    left: 148,
    color: Color.colorWhite,
    textAlign: "left",
    width: 176,
    height: 42,
    fontSize: FontSize.size_5xl,
  },
  witaj: {
    fontSize: 28,
  },
  mioCiWidzie: {
    fontSize: FontSize.size_5xl,
  },
  witajMioCiContainer: {
    top: 565,
    left: 40,
    color: Color.colorBlack,
    textAlign: "center",
    width: 347,
    height: 175,
  },
  coconutCashewVanillaIceCreIcon: {
    top: 275,
    left: 25,
    width: 377,
    height: 252,
    position: "absolute",
  },
  slodkoSlonaLogi2Icon: {
    top: 89,
    left: 0,
    width: 428,
    height: 134,
    position: "absolute",
  },
  welcome: {
    backgroundColor: "#fefdfd",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Welcome;


