"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Quote,
  Undo,
  Redo,
  Minus,
} from "lucide-react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function TiptapEditor({ value, onChange }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Počnite pisati sadržaj posta..." }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  const btn = (active: boolean) =>
    active
      ? "flex items-center justify-center h-8 w-8 rounded text-sm bg-primary text-primary-foreground"
      : "flex items-center justify-center h-8 w-8 rounded text-sm text-muted-foreground hover:bg-muted hover:text-foreground";

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="flex flex-wrap items-center gap-1 border-b border-border bg-muted/40 px-3 py-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={btn(editor.isActive("bold"))}
        >
          <Bold className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={btn(editor.isActive("italic"))}
        >
          <Italic className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={btn(editor.isActive("strike"))}
        >
          <Strikethrough className="h-4 w-4" />
        </button>
        <div className="mx-1 h-5 w-px bg-border" />
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={btn(editor.isActive("heading", { level: 2 }))}
        >
          <Heading2 className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={btn(editor.isActive("heading", { level: 3 }))}
        >
          <Heading3 className="h-4 w-4" />
        </button>
        <div className="mx-1 h-5 w-px bg-border" />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={btn(editor.isActive("bulletList"))}
        >
          <List className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={btn(editor.isActive("orderedList"))}
        >
          <ListOrdered className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={btn(editor.isActive("blockquote"))}
        >
          <Quote className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={btn(false)}
        >
          <Minus className="h-4 w-4" />
        </button>
        <div className="mx-1 h-5 w-px bg-border" />
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className={btn(false)}
        >
          <Undo className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className={btn(false)}
        >
          <Redo className="h-4 w-4" />
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="min-h-[300px] px-4 py-3 prose prose-neutral max-w-none text-sm [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-[280px]"
      />
    </div>
  );
}
