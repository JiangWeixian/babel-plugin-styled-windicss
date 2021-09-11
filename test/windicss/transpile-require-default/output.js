const styled_default = require('styled-components');

const TestNormal = styled.div(["\n  width: 100%;\n"]);
const Test = styled_default.default.div(["\n  width: 100%;\n"]);
const TestCallExpression = styled_default.default(Test)(["\n  height: 20px;\n   & {\n  height: 100vh;\n  margin: 0px;\n  overflow: hidden;\n  padding: 0px;\n  width: 100vw;\n}"]);
