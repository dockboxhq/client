import Sidebar from "components/Sidebar/Sidebar";
import { selectConnectionStatus, ConnectionEnum } from "store/connection/connection.reducer";
import { useAppSelector, useAppDispatch, useWindowDimensions } from "hooks/hooks";
import Terminal from "components/Terminal/Terminal";
import { websocket } from "services/socket";
import { useParams } from "react-router";
import { useCallback, useEffect } from "react";
import { wsConnect } from "store/connection/connection.actions";
import { Spinner } from "reactstrap";
import { getDockboxAPIWSURL } from "api/dockboxAPI";

const Playground = () => {
  const connectionStatus = useAppSelector<ConnectionEnum>(selectConnectionStatus);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  // const { height, width } = useWindowDimensions();

  useEffect(() => {
    const host = getDockboxAPIWSURL({ id });
    dispatch(wsConnect(host));
  }, [dispatch, id, connectionStatus]);

  const component = (() => {
    switch (connectionStatus) {
      case ConnectionEnum.CONNECTED:
        return <Terminal style={{ zIndex: -1 }} websocket={websocket!} id={id} />;
      case ConnectionEnum.CONNECTING:
        return (
          <Spinner color="primary" style={{ position: "absolute", top: "50%", left: "60%" }}>
            {null}
          </Spinner>
        );
      default:
        return <div style={{ position: "absolute" }}>Please create dockbox</div>;
    }
  })();
  return (
    <>
      <Sidebar />
      {component}
    </>
  );
};

export default Playground;
