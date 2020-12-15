import React from "react";
import { FlatList } from "react-native";
import { withNavigation } from "react-navigation";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";

// kan render alt i FlatList. Brukes når vi vil ha scroll mulighet til resultatene våre
// touchableOpacity brukes til fading av noe når det trykkes på noe
const ResultsList = ({ title, results, navigation }) => {
  // fjerner resultater hvis det ikke er noe å vise
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false} // fjerner scrollbar
        data={results}
        keyExtractor={(result) => result.id}
        // renderItem iterer over resultatet
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

// gjør at navigasjon er enklere å kode.
export default withNavigation(ResultsList);
