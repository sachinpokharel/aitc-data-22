'use client';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

import { BlockNoteSchema, defaultBlockSpecs, defaultInlineContentSpecs } from '@blocknote/core';
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import { useEffect } from 'react';
import { Alert } from '@/components/common/editor/CustomAlert';
import { NameLink } from '@/components/common/editor/CustomLink';

interface IProps {
  // BlockNote content JSON (already parsed) or an empty array.
  // We keep this permissive because upstream data comes from a JSON string.
  content: unknown;
  theme?: 'light' | 'dark';
}

const schema = BlockNoteSchema.create({
  blockSpecs: {
    // Adds all default blocks.
    ...defaultBlockSpecs,
    // Adds the Alert block.
    alert: Alert,

    // proCode: CodeBlock,
  },
  inlineContentSpecs: {
    ...defaultInlineContentSpecs,
    myLink: NameLink,
  },
});

// Our <Editor> component we can reuse later
const Editor = ({ content, theme = 'light' }: IProps) => {
  // BlockNote expects either a string or an array of blocks.
  // Upstream data comes as parsed JSON, so we defensively handle non-array values.
  const initialContent = Array.isArray(content) ? (content as []) : [];

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent,
    schema,
  });
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection();
      if (selection && !selection.isCollapsed) {
        e.preventDefault();
        const plainText = selection.toString();
        e.clipboardData?.setData('text/plain', plainText);
      }
    };

    document.addEventListener('copy', handleCopy);
    return () => document.removeEventListener('copy', handleCopy);
  }, []);
  return <>{editor && <BlockNoteView theme={theme} editable={false} editor={editor} />}</>;
};

export default Editor;
