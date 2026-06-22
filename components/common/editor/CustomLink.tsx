import { defaultProps } from '@blocknote/core';
import { createReactInlineContentSpec } from '@blocknote/react';

export const NameLink = createReactInlineContentSpec(
  {
    type: 'myLink',
    propSchema: {
      textAlignment: defaultProps.textAlignment,
      textColor: defaultProps.textColor,
      name: {
        default: 'Enter name',
        type: 'string',
        editable: true, // Allows user input
        description: 'Enter the name',
      },
      link: {
        default: 'https://example.com',
        type: 'string',
        editable: true, // Allows user input
        description: 'Enter the link URL',
      },
    },
    content: 'none',
  },
  {
    render: (props) => {
      const { name, link } = props.inlineContent.props;
      const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : `https://${link}`;

      return (
        <a
          href={formattedLink}
          target='_blank'
          rel='noopener noreferrer'
          style={{
            textDecoration: 'none',
            padding: '2px 4px',
            borderRadius: '4px',
            textDecorationLine: 'underline',
          }}
        >
          {name}
        </a>
      );
    },
  }
);
