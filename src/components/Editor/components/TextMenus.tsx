import { Editor } from '@tiptap/react';
import { ReactElement } from 'react';
import DownMenu from './DownMenu';

type TextMenusProps = {
  editor: Editor;
};
function TextMenus({ editor }: TextMenusProps): ReactElement {

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

  const current = textList.find(item => item.active) 

  return <DownMenu
    options={textList}
    onChange={(a, b, c) => {
      c?.handle()
    }}
    value={current?.value}
  >
    {current?.label ||'正文'}
  </DownMenu>;
}
export default TextMenus;