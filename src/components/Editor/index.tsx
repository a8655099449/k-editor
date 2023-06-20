import './index.less';

import { Color } from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ReactElement } from 'react';

import MenuBar from './components/MenuBar';

const CustomDocument = Document.extend({
  content: 'heading block*',
});

type EditorProps = unknown;
function EditorComponent(props: EditorProps): ReactElement {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({
        types: [ListItem.name],
      } as any),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
    ],
    content: 'heading block*',
  });

  return (
    <div
      style={{
        padding: 10,
        height: 300,
      }}
    >
      <MenuBar editor={editor as Editor} />
      <EditorContent
        editor={editor}
        style={{
          height: 500,
          padding: 10,
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
}
export default EditorComponent;
