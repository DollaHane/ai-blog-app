'use client'
// REACT & NEXT Imports
import React, { useState } from "react";
import Image from "next/image";

// TIPTAP Imports
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// MUI Imports
import { Box, Typography, InputBase, Button } from "@mui/material";

// COMPONENT Imports
import { FormattedPost } from "@/app/components-shared/types";
import SocialLinks from "@/app/(shared)/SocialLinks";
import EditorMenuBar from "./EditorMenuBar";
import CategoryAndEdit from "./CategoryAndEdit";
import Article from "./Article";

// TYPESAFE
type Props = {
  post: FormattedPost
}

export default function Content({ post }: Props) {
  
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");
  const [tempContent, setTempContent] = useState<string>(content);

  const date = new Date(post?.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
    content: content,
    editable: isEditable,
  });

  // PATCH REQUEST
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation checks
    if (title === "") setTitleError("This field is required.");
    if (editor?.isEmpty) setContentError("This field is required.");
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );
    const data = await response.json();

    handleIsEditable(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  return (
    <Box className='prose w-full max-w-full mb-10'>

      {/* BREADCRUMBS */}
      <Typography variant='h5'>
        {`Home > ${post.category} > ${post.title}`}
      </Typography>

      {/* CATEGORY & EDIT */}
      <CategoryAndEdit
        isEditable={isEditable}
        handleIsEditable={handleIsEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        <Box>
          {isEditable ? (
            <Box>
              <InputBase
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                onChange={handleOnChangeTitle}
              />
              {titleError && (
                <Typography className='mt-1 text-primary-500'>
                  {titleError}
                </Typography>
              )}
            </Box>
          ) : (
            <Typography variant="h3" className="font-bold text-3xl mt-3">
              {title}
            </Typography>
          )}
          <Box className='flex gap-3'>
            <Typography variant='h5' className="font-semibold text-xs"></Typography>
            <Typography variant='h6' className="text-wh-300 text-xs"></Typography>
          </Box>
        </Box>

        {/* IMAGE */}
        <Box className='relative w-auto mt-2 mb-16 h-96'>
          <Image
            fill
            alt={post.title}
            src={post.image}
            sizes='(max-width: 480px) 100vw,
              (max-width: 768px) 85vw,
              (max-width: 1060px) 75vw,
              60vw'
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {/* SUBMIT BUTTON */}
        {isEditable && (
          <Box>
            <Button 
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </Button>
          </Box>
        )}
      </form>

      {/* SOCIAL LINKS */}
      <Box className='hidden md:block mt-10 w-1/3'>
        <SocialLinks isDark/>
      </Box>

    </Box>
  );
};
