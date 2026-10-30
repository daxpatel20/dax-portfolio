import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const files = [
  {
    name: "Dashboard.jsx",
    icon: FaReact,
    code: `import { useState, useEffect } from "react";
import { api } from "./services/api";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then(setUsers);
  }, []);

  return <UserTable data={users} />;
}`,
    terminal: ["$ npm run build", "✓ 142 modules transformed", "✓ built in 1.84s — ready to deploy"],
  },
  {
    name: "server.js",
    icon: FaNodeJs,
    code: `const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => console.log("Live"));`,
    terminal: ["$ node server.js", "✓ MongoDB connected", "✓ API running on :5000"],
  },
];

const tokenRe =
  /("[^"]*"?)|\b(import|from|export|default|function|const|return|await|async|require|new)\b|(\b\d+\b)|(<\/?[A-Z]\w*|\/?>)|(\b[a-zA-Z_]\w*(?=\())/g;
const tokenClass = ["s", "k", "n", "t", "f"];

// Tiny syntax highlighter — good enough for the snippets above.
const highlight = (line) => {
  const out = [];
  let last = 0;
  for (const m of line.matchAll(tokenRe)) {
    if (m.index > last) out.push(line.slice(last, m.index));
    const group = m.slice(1).findIndex(Boolean);
    out.push(
      <span className={`tk-${tokenClass[group]}`} key={m.index}>
        {m[0]}
      </span>
    );
    last = m.index + m[0].length;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
};

const CodeWindow = () => {
  const [fileIndex, setFileIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [termLines, setTermLines] = useState(0);
  const file = files[fileIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(file.code.length);
      setTermLines(file.terminal.length);
      return;
    }
    let timer;
    if (typed < file.code.length) {
      timer = setTimeout(() => setTyped((t) => t + 1), file.code[typed] === "\n" ? 120 : 26);
    } else if (termLines < file.terminal.length) {
      timer = setTimeout(() => setTermLines((n) => n + 1), 550);
    } else {
      timer = setTimeout(() => {
        setFileIndex((i) => (i + 1) % files.length);
        setTyped(0);
        setTermLines(0);
      }, 3200);
    }
    return () => clearTimeout(timer);
  }, [typed, termLines, file]);

  const lines = file.code.slice(0, typed).split("\n");

  return (
    <div className="code-stage">
      <div className="code-window">
        <div className="code-bar">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          <div className="code-tabs">
            {files.map((f, i) => (
              <span key={f.name} className={`code-tab ${i === fileIndex ? "active" : ""}`}>
                <f.icon /> {f.name}
              </span>
            ))}
          </div>
        </div>

        <pre className="code-body">
          {lines.map((line, i) => (
            <div className="code-line" key={i}>
              <span className="ln">{i + 1}</span>
              <code>
                {highlight(line)}
                {i === lines.length - 1 && <span className="caret" />}
              </code>
            </div>
          ))}
        </pre>

        <div className="code-status mono">
          <span>
            <i className="pulse-dot" /> main
          </span>
          <span>{file.name.endsWith("jsx") ? "JavaScript React" : "Node.js"}</span>
          <span>UTF-8</span>
        </div>
      </div>

      <div className="terminal">
        <div className="terminal-head mono">
          <span>terminal</span>
          <span>zsh</span>
        </div>
        {file.terminal.slice(0, termLines).map((t) => (
          <div key={t} className={`terminal-line ${t.startsWith("✓") ? "ok" : ""}`}>
            {t}
          </div>
        ))}
        {termLines < file.terminal.length && <span className="caret" />}
      </div>

      <span className="tech-chip chip-1">
        <FaReact /> React
      </span>
      <span className="tech-chip chip-2">
        <FaNodeJs /> Node.js
      </span>
      <span className="tech-chip chip-3">
        <SiMongodb /> MongoDB
      </span>
      <span className="tech-chip chip-4">
        <SiExpress /> Express
      </span>
    </div>
  );
};

export default CodeWindow;
