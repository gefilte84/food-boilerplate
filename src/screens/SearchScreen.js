import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

//Scrollview må importeres fra react native. Wrapp i scrollview for å gjøre det mulig å scrolle

// her søke til api gjøres
// hver gang vi snakker om å oppdatere noe på skjermen så snakker vi om useState
// useEffect er en hook som lar oss ha et søk klart (api request) ved første innlastning av skjermen
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  // HJELPEFUNKSJON som hjelper med gruppering av resultater.
  // filtreres på pris
  const filterResultsByPrice = (price) => {
    // Price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };
  // flex style i most parent view gjør at alt blir med.
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice("$")} title="Rolig priser" />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Varme priser"
        />
        <ResultsList results={filterResultsByPrice("$$$")} title="Lægza" />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Dumme lægz"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
