import '../index.less';

import { Editor } from '@tiptap/react';
import { ReactElement, useMemo } from 'react';

import DownMenu from './DownMenu';
import MenuIcon from './MenuIcon';
import TextMenus from './TextMenus';
type MenuBarProps = {
  editor: Editor;
};
function MenuBar({ editor }: MenuBarProps): ReactElement {
  if (!editor) {
    return <></>;
  }


  const textList = [
    { label: '正文', value: 'text', active: editor.isActive('paragraph'), handle: () => editor.chain().focus().setParagraph().run() },
    {
      value: 'h1',
      label: 'h1',
      active: editor.isActive('heading', { level: 1 }),
      handle: () => editor.chain().focus().toggleHeading({ level: 1 }).run()
    },
    {
      value: 'h2',
      label: 'h2',
      active: editor.isActive('heading', { level: 2 }),
      handle: () => editor.chain().focus().toggleHeading({ level: 2 }).run()

    },
    {
      value: 'h3',
      label: 'h3',
      active: editor.isActive('heading', { level: 3 }),
      handle: () => editor.chain().focus().toggleHeading({ level: 3 }).run()

    },
    {
      value: 'h4',
      label: 'h4',
      active: editor.isActive('heading', { level: 4 }),
      handle: () => editor.chain().focus().toggleHeading({ level: 4 }).run()

    },
  ]
  console.log(textList)


  return (
    <div className="menubar">
      <MenuIcon
        icon="bold"
        active={editor.isActive('bold')}
        onClick={() => editor.chain().focus().toggleBold().run()}
        title='加粗'
      />

      <MenuIcon
        icon="italic"
        active={editor.isActive('italic')}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        title='斜体'
      />
      <MenuIcon
        icon="shanchuxian"
        active={editor.isActive('strike')}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        title='删除'
      />
      <MenuIcon
        icon="fengexian"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        title='分割线'

      />
      <MenuIcon
        icon="code"
        onClick={() => editor.chain().focus().toggleCode().run()}
        active={editor.isActive('code')}
        title='代码'
      />
      <TextMenus editor={editor} />
    </div>
  );
}
export default MenuBar;
