{/*

import React from 'react';
import PropTypes from 'prop-types';
import mermaid from 'mermaid';

var createReactClass = require('create-react-class');

const MermaidWrapper = createReactClass({

  propTypes: {
    name: PropTypes.string
  },

  getDefaultProps () {
    return {
      name: 'mermaid'
    };
  },

  getInitialState () {
    return {
      diagram: 'Loading diagram...'
    };
  },

  componentDidMount () {
    mermaid.mermaidAPI.render(this.props.name, this.props.children.toString(), (html) => this.setState({diagram: html}));
  },

  render () {
    return (
      <div className="mermaid" dangerouslySetInnerHTML={{__html: this.state.diagram}}></div>
    )
  }
});

export default MermaidWrapper;

*/}