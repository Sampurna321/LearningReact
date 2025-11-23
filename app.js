const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello From H1"),
    React.createElement("h2", {}, "Hello From H2"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
