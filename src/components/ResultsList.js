import React from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet, Flatlist } from "react-native";
import ResultsDetail from "./ResultsDetail";

// kan render alt i FlatList. Brukes når vi vil ha scroll mulighet til resultatene våre

const ResultsList = ({ title, results }) => {
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
          return <ResultsDetail result={item} />;
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

export default ResultsList;