import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "store/rootReducer";
import { socketMiddleware } from "services/socket";
import dockboxSagas from "store/dockbox/dockbox.sagas";

const sagaMiddleware = createSagaMiddleware();

export const store: EnhancedStore = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, socketMiddleware],
});

sagaMiddleware.run(dockboxSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
