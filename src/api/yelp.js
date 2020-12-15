import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer i2e7AzoBSfP-z_C24bIQV73GL88WLWt2_zJu-bxNKoHQaw-qJd6pexKAV9AVrpXgfRE2VqO817fwLmdh6L4S_U_EBKyKOEra-kZ3bP5JwTddFJMyy78mi3Fma8bIX3Yx",
  },
});
