'use client'
// REACT Imports
import React from 'react'

// TIPTAP Imports
import { Editor } from '@tiptap/react'
import ListItem from "@tiptap/extension-list-item";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// MUI Imports
import { Box, Button } from '@mui/material';

// TYPESAFE
type Props = {
  editor: Editor | null;
}

export default function EditorMenuBar({ editor }: Props) {

  if (!editor) {
    return null;
  }

  return (
    <Box className='flex justify-between items-center'>
      <Box className='flex items-center gap-4'>

        {/* HEADING BUTTONS */}
        <Button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? "bg-wh-500 text-wh-50 p-1 rounded-md" : "p-1"}
        >
          H<span className='text-xs'>1</span>
        </Button>
        <Button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? "bg-wh-500 text-wh-50 p-1 rounded-md" : "p-1"}
        >
          H<span className='text-xs'>2</span>
        </Button>
        <Button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? "bg-wh-500 text-wh-50 p-1 rounded-md" : "p-1"}
        >
          H<span className='text-xs'>3</span>
        </Button>
        
        {/* PARAGRAPH BUTTON */}
        <Button
          type='button'
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? "bg-wh-500 text-wh-50 p-1 rounded-md" : "p-1"}
        >
          Paragraph
        </Button>

        {/* BOLD BUTTON */}
        <Button
          type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? "bg-wh-500 text-wh-50 p-1 rounded-md" : "p-1"}
        >
          <b>B</b>
        </Button>

        {/* ITALIC BUTTON */}
        <Button
          type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? "bg-wh-500 text-wh-50 p-1 rounded-md" : "p-1"}
        >
          <i>I</i>
        </Button>
      </Box>
    </Box>
  );
};
