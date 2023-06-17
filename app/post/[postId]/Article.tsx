'use client'
// REACT & PACKAGE Imports
import React, { useState } from 'react'
import { Editor, EditorContent } from '@tiptap/react'

// MUI Imports
import { Box, Typography, TextField, Button, Divider } from '@mui/material'

// COMPONENT Imports
import EditorMenuBar from './EditorMenuBar'
import { RocketLaunchOutlined } from '@mui/icons-material'

// TYPESAFE
type Props = {
  contentError: string;
  editor: Editor | null;
  isEditable: boolean;
  setContent: (content: string) => void;
  title: string;
}

export default function Article({contentError, editor, isEditable, setContent, title }: Props) {
  
  const [role, setRole] = useState<string>("I am a helpful assistant.")

  if (!editor) {
    return null;
  }

  const postAiContent = async () => {
    editor
      .chain()
      .focus()
      .setContent("Generating AI content. Please wait...")
      .run();
    
    const response = await fetch(`/api/openai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        role: role,
      }),
    });
    const data = await response.json();

    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };

  return (
    <article className='text-wh-500 leading-8'>
      
      {/* AI GENERATOR */}
      {isEditable && (
        <Box className='border-2 rounded-md bg-wh-50 p-3 mb-3'>
          <Typography variant='h4' className='m-0 p-0'>Generate AI Content</Typography>
          <Typography className='my-1 p-0 text-xs'>What type of writer do you want?</Typography>
          <Box className='flex gap-5 justify-between'>
            <TextField
              className='border-2 rounded-md bg-wh-50 px-3 py-1 w-full'
              placeholder='Role'
              onChange={(event) => setRole(event.target.value)}
              value={role}
            />
            <Button type='button' onClick={postAiContent}>
              <RocketLaunchOutlined className='h-8 w-8 text-accent-orange hover:text-wh-300'/>
            </Button>
          </Box>
        </Box>
      )}

      <Box className={isEditable ? 'border-2 rounded-md bg-wh-50 p-3' : 'w-full max-w-full'}>
        {isEditable && (
          <>
            <EditorMenuBar editor={editor}/>
            <Divider className='border-1 mt-2 mb-5'/>
          </>
        )}
        <EditorContent editor={editor}/>
      </Box>

      {contentError && <Typography className='mt-1 text-wh-900'>{contentError}</Typography>}

    </article>
  );
};
