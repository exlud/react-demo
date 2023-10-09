import React from 'react';
import Mermaid from "react-mermaid2"

const doc = `
graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
`;
class Lab extends React.Component {


    render() {
        return (
            <pre class="mermaid">
            {doc}
            </pre>
        );
    };
};

export default Lab;