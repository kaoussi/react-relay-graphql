var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass({
  render: function() {
    return React.createElement("h3", null, "Hello Webpack!");
  }
});

ReactDOM.render(React.createElement(Hello), document.getElementById('main'));
