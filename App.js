{
  /* <div id="parent">
  <div id="child1">
  <h1>Hello First value</h1>
  <h1>Hello Second value</h1>
  </div>

    <div id="child2">
  <h1>Hello First value</h1>
  <h1>Hello Second value</h1>
  </div>
  </div> */
}

const heading1 = React.createElement("h1", { id: "h1" }, "h1 tag");

const heading2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "a" }, "Hello H1 tag"),
    React.createElement("h2", { id: "b" }, "Hello H2 tag"),
  ]),
]);

const heading3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "a" }, "Hello H1 tag"),
    React.createElement("h2", { id: "b" }, "Hello H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "a" }, "Hello H1 tag"),
    React.createElement("h2", { id: "b" }, "Hello H2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading1);
// root.render(heading2);
root.render(heading3);
