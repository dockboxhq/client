import React, { useRef, useCallback, useMemo, useLayoutEffect, useState } from "react";
import { XTerm } from "xterm-for-react";
import { FitAddon } from "xterm-addon-fit";
import { AttachAddon } from "./AttachAddOn";

import "./Terminal.scss";
import { useAppSelector } from "hooks/hooks";
import { selectConnectionStatus } from "store/connection/connection.reducer";

import { Rnd } from "react-rnd";

type PositionState = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const Terminal = ({ style, websocket, id }: { style?: any; websocket: WebSocket; id: string }) => {
  const xtermRef = useRef<XTerm>(null);

  const [posSize, setPosSize] = useState<PositionState>({
    x: 450,
    y: 100,
    width: 700,
    height: 500,
  });

  const connectionStatus = useAppSelector(selectConnectionStatus);

  const fitAddon = useMemo(() => {
    const addon = new FitAddon();
    if (xtermRef.current == null) return addon;
    addon.activate(xtermRef.current.terminal);
    return addon;
  }, [xtermRef]);
  const onResize = useCallback(
    (event: { cols: number; rows: number } = { cols: 0, rows: 0 }) => {
      fitAddon.fit();
    },
    [fitAddon]
  );

  useLayoutEffect(() => {
    onResize();
  }, [onResize]);

  return websocket ? (
    <Rnd
      className="terminal-container"
      style={style}
      size={{
        width: posSize.width,
        height: posSize.height,
      }}
      position={{
        x: posSize.x,
        y: posSize.y,
      }}
      minWidth={300}
      minHeight={100}
      onDragStop={(e, d) => {
        setPosSize({ ...posSize, x: d.x, y: d.y });
      }}
      cancel=".xterm-cursor-layer"
      onResize={(e) => onResize()}
      onResizeStop={(e, direction, ref, delta, position) => {
        onResize();
        setPosSize({ ...position, width: ref.offsetWidth, height: ref.offsetHeight });
      }}>
      <div className="terminal-close" />
      <div className="terminal-bar">Hellow</div>
      <XTerm
        className="terminal-main"
        ref={xtermRef}
        onResize={onResize}
        addons={[fitAddon, new AttachAddon(websocket)]}
        options={{ theme: { background: "#2E2929" } }}
      />
    </Rnd>
  ) : null;
};

export default React.memo(Terminal);
