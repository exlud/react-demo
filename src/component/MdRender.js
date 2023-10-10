// mermaid render fetching file from server
import React, { useState, useEffect } from 'react';
import mermaid from 'mermaid';

const MdRenderer = ({ url }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMermaid = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const text = await response.text();
          setContent(text);
          mermaid.initialize({ startOnLoad: false });
          await mermaid.run({
            querySelector: '.mermaid',
          });
        } else {
          console.error('Failed to fetch Mermaid file');
        }
      } catch (error) {
        console.error('Error fetching Mermaid file:', error);
      }
    };

    fetchMermaid();
  }, [url]);

  return (
    <div>
        <div >
        {content && <div className="mermaid" dangerouslySetInnerHTML={{ __html: content }} />}
        </div>
    </div>
    
  );
};

export default MdRenderer;
