// const heading = React.createElement("h1", {id: "heading"}, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// ########### create nested html structure in react ##############

// const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "Child"}, React.createElement("h1", {} , "Heading h1")));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// ############## but if you want to create siblings of react element  #############

const parent = React.createElement("div", {id: "parent"} , React.createElement("div", {id: "child"} , [React.createElement("h1", {} , "Heading 1") , React.createElement("h2", {} , "Heading 2")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);