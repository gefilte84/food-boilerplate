import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // hjelpefunksjon må await og promise. Dette brukes for å hente resultater fra en api.
  // params er feltene innenfor JSON objektet og hva du ønsker å vise i resultatet
  // kan ha hooks i egen komponent for at den kan brukes i flere komponenter
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Oslo",
        },
      });
      setResults(response.data.businesses); //JSON data
    } catch (err) {
      setErrorMessage("Noe gikk galt. Prøv igjen");
    }
  };
  // bruker useEffect for å ha start søk ved første innlastning
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage]; // returnerer det vi trenger i andre deler av programmet
};
