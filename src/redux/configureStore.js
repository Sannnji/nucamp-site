import { createStore, combineReducers } from "redux";
import { Campsites } from "./reducers/campsites";
import { Comments } from "./reducers/comments";
import { Partners } from "./reducers/partners";
import { Promotions } from "./reducers/promotions";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites: Campsites,
      comments: Comments,
      partners: Partners,
      promotions: Promotions,
    })
  );

  return store;
};
