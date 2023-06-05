'use client'
// REACT Imports
import React from 'react'
import { FormattedPost } from '@/app/components-shared/types'

// TIPTAP Imports
import { Editor } from '@tiptap/react'

// MUI Imports
import { Box, Typography, Button } from '@mui/material'
import { CloseOutlined, Edit } from '@mui/icons-material'

// TYPESAFE
type Props = {
  isEditable: Boolean;
  handleIsEditable: (isEditable: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
  editor: Editor | null;
  post: FormattedPost;
}

export default function CategoryAndEdit({
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
  post,
}: Props) {

  const handleEnableEdit = () => {
    handleIsEditable(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || "");
  }

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  }

  return (
    <Box className='flex justify-between items-center'>

      <Typography variant='h4' className='bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold'>
        {post.category}
      </Typography>

      <Box className='mt-4'>
        {isEditable ? (
          <Box className='flex justify-between gap-3'>
            <Button onClick={handleCancelEdit}>
              <CloseOutlined className='h-6 w-6 text-accent-red'/>
            </Button>
          </Box>
        ) : (
          <Box className='flex justify-between gap-3'>
            <Button onClick={handleEnableEdit}>
              <Edit className='h-6 w-6 text-accent-red'/>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}
