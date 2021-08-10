import React, { useLayoutEffect, useRef, useCallback, useMemo, useEffect } from "react";
import { XTerm } from "xterm-for-react";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "./AttachAddOn";
import { websocket } from "services/socket";

import "./Terminal.css";
import { useAppSelector, useAppDispatch } from "hooks/hooks";
import { wsConnect, wsDisconnect } from "store/connection/connection.actions";
import { selectConnectionStatus } from "store/connection/connection.reducer";

export const Terminal = ({ WS_URL }: { WS_URL: string }) => {
  const dispatch = useAppDispatch();

  const xtermRef = useRef<XTerm>(null);

  const connectionStatus = useAppSelector(selectConnectionStatus);
  console.log(connectionStatus);

  const fitAddon = useMemo(() => new FitAddon(), []);
  const onResize = useCallback(
    (event: { cols: number; rows: number } = { cols: 0, rows: 0 }) => {
      fitAddon.fit();
    },
    [fitAddon]
  );

  useEffect(() => {
    dispatch(wsConnect(WS_URL));
  }, [WS_URL, dispatch]);

  useLayoutEffect(() => {
    window.addEventListener("resize", (ev) => {
      onResize();
    });
  }, [onResize]);

  return (
    <div>
      {websocket ? (
        <XTerm
          className="terminal-container"
          ref={xtermRef}
          onResize={onResize}
          addons={[fitAddon, new AttachAddon(websocket)]}
          options={{ theme: { background: "#2E2929" } }}
        />
      ) : null}
    </div>
  );
};
