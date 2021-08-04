import React, { useLayoutEffect, useRef, useCallback, useMemo } from "react";
import { XTerm } from "xterm-for-react";
import { FitAddon } from "xterm-addon-fit";

import "./Terminal.css";
export const Terminal = () => {
  const xtermRef = useRef<XTerm>(null);
  const fitAddon = useMemo(() => {
    return new FitAddon();
  }, []);
  const promptValue = "root@dockbox# ";

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
    prompt();
  }, [onResize]);

  function prompt() {
    const term = xtermRef.current;
    if (term !== null) {
      term.terminal.write("\r\n\x1b[32m" + promptValue + "\x1b[37m");
    }
  }

  function onData(data: string) {
    if (xtermRef.current == null) return;
    switch (data) {
      case "\r": // Enter
        prompt();
        break;
      case "\u0003": // Ctrl+C
        prompt();
        break;
      case "\u007F": // Backspace (DEL)
        // Do not delete the prompt
        if (xtermRef.current.terminal.buffer.active.cursorX > promptValue.length) {
          xtermRef.current.terminal.write("\b \b");
        }
        break;
      default:
        // Print all other characters for demo
        xtermRef.current.terminal.write(data);
    }
  }
  return (
    <div>
      <XTerm
        className="terminal-container"
        onData={onData}
        ref={xtermRef}
        onResize={onResize}
        addons={[fitAddon]}
        options={{ theme: { background: "#2E2929" } }}
      />
    </div>
  );
};
