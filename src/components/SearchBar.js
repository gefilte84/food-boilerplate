import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

// sender props til searchbar sånn at vi kan bruke de her
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none" // fjerner at første bokstav er stor
        autoCorrect={false} // fjerner autocorrect
        style={styles.inputStyle}
        placeholder="Søk"
        value={term}
        onChangeText={onTermChange} // vi kan refere direkte på denne måten. må ikke bruke arrow function
        onEndEditing={() => onTermSubmit()} // denne gjør at vi søker ikke før bruker trykker ok
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE", // grå bakgrunnsfarge
    height: 50,
    borderRadius: 5, // rundet kanter på viewen
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1, // flex gjør at de strekker seg og tar all plassen
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center", // fikser plasseringen til iconet
    marginHorizontal: 15, // space på venstre og høyre side
  },
});

export default SearchBar;
