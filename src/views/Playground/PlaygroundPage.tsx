import Sidebar from "components/Sidebar/Sidebar";
import { selectConnectionStatus, ConnectionEnum } from "store/connection/connection.reducer";
import { useAppSelector, useAppDispatch } from "hooks/hooks";
import Terminal from "components/Terminal/Terminal";
import { websocket } from "services/socket";
import { useParams } from "react-router";
import { useEffect } from "react";
import { wsConnect } from "store/connection/connection.actions";
import { Spinner } from "reactstrap";

const Playground = () => {
  const connectionStatus = useAppSelector<ConnectionEnum>(selectConnectionStatus);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const host = `ws://localhost:8000/v1/ws/${id}`;
    dispatch(wsConnect(host));
  }, [dispatch, id, connectionStatus]);

  const component = (() => {
    switch (connectionStatus) {
      case ConnectionEnum.CONNECTED:
        return <Terminal style={{ zIndex: -1 }} websocket={websocket!} id={id} />;
      case ConnectionEnum.CONNECTING:
        return <Spinner color="primary">{null}</Spinner>;
      default:
        return <div>Please create dockbox</div>;
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
