import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

// dobbel braces: ytre brace er referering til javascript ekspresjon
// og indre brace er å forme objektet som vi skal sende til denne funksjonen

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stjerner, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4, // runder kantene på bildene
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
