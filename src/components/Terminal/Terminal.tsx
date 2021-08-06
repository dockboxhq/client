import React, { useLayoutEffect, useRef, useCallback, useMemo } from "react";
import { XTerm } from "xterm-for-react";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "xterm-addon-attach";

import "./Terminal.css";
export const Terminal = ({ WS_URL }: { WS_URL: string }) => {
  const xtermRef = useRef<XTerm>(null);
  const fitAddon = useMemo(() => {
    return new FitAddon();
  }, []);

  const attachAddon = useMemo(() => {
    const websocket = new WebSocket(WS_URL);
    websocket.addEventListener("open", () => {
      websocket.send("\r");
    });
    return new AttachAddon(websocket);
  }, [WS_URL]);

  const onResize = useCallback(
    (event: { cols: number; rows: number } = { cols: 0, rows: 0 }) => {
      console.log("Fitting");
      fitAddon.fit();
    },
    [fitAddon]
  );

  useLayoutEffect(() => {
    const terminal = xtermRef.current;
    if (terminal == null) return;
    terminal.terminal.onResize(onResize);
    window.addEventListener("resize", (ev) => {
      onResize();
    });
  }, [onResize]);

  return (
    <div>
      <XTerm
        className="terminal-container"
        // onData={onData}
        ref={xtermRef}
        onResize={onResize}
        addons={[fitAddon, attachAddon]}
        options={{ theme: { background: "#2E2929" } }}
      />
    </div>
  );
};
