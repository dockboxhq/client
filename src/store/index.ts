import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "store/rootReducer";
import { socketMiddleware } from "services/socket";
import rootSaga from "store/counter/counter.sagas";

const sagaMiddleware = createSagaMiddleware();

export const store: EnhancedStore = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, socketMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
