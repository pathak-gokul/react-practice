const Pet = (props) => {
    return React.createElement("div",{},
    [
        React.createElement("h1",{},props.sound),
        React.createElement("h2",{}, props.gg),
        React.createElement("h2",{},props.type),
    ])
};
const App = () => {
    return React.createElement(
      "div",
      {},
      [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { 
            sound: 'meow',
            gg: 'is',
            type: 'cat'
        }),
        React.createElement(Pet, { 
            sound: 'bau bau',
            gg: 'is',
            type: 'dog'
        }),
      ]
    )
  };
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));