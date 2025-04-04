const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", null, "I'm an h1 tag"),
        React.createElement("h2", null, "I'm an h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", null, "I'm another h1 tag"),
        React.createElement("h2", null, "I'm another h2 tag")
    ])
]);
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=episode_2.6bd02f5a.js.map
