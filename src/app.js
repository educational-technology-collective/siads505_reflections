import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import MarkdownEditor from "./markdown";

const CodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CodeBlock = styled.div`
  width: 45%;
  margin-bottom: 20px;
`;

function App() {
  // const classes = useStyles();
  const correctCode = `def add(a, b):\n  return a + b`;
  const incorrectCode = `def add(a, b):\n  return a - b`;
  const [hint, setHint] = React.useState("Change the '-' operator to '+' in the function body to correct the code.");

  return (
    <div>
      <CodeContainer>
        <CodeBlock>
          <SyntaxHighlighter language="python" style={solarizedlight}>
            {correctCode}
          </SyntaxHighlighter>
        </CodeBlock>
        <CodeBlock>
          <SyntaxHighlighter language="python" style={solarizedlight}>
            {incorrectCode}
          </SyntaxHighlighter>
        </CodeBlock>
      </CodeContainer>
        <MarkdownEditor hint={hint} setHint={setHint} />
    </div>
  );
}

export default App;
