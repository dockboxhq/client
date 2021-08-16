import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createRootReducer } from "store/rootReducer";
import { socketMiddleware } from "services/socket";
import dockboxSagas from "store/dockbox/dockbox.sagas";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const routerMiddlewareLocal = routerMiddleware(history);

export const store: EnhancedStore = configureStore({
  reducer: createRootReducer(history),
  middleware: [sagaMiddleware, socketMiddleware, routerMiddlewareLocal],
});

sagaMiddleware.run(dockboxSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
