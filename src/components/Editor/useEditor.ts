import { useEffect, useRef } from 'react';
function getSelectionRange() {
  let range = null;
  if (window.getSelection) {
    const selection = window.getSelection();
    if (selection!.rangeCount > 0) {
      range = selection!.getRangeAt(0);
    }
  }
  return range;
}

function removeSelection() {
  if (window.getSelection) {
    const selection: any = window.getSelection();
    console.log('👴selection', selection.deleteFromDocument);

    selection.deleteFromDocument();
  }
}

function useEditor() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const boldText = () => {
    // alert("加粗");
    const range = getSelectionRange();
    if (!range) {
      return;
    }

    const startOffset = range.startOffset;
    const endOffset = range.endOffset;
    document.execCommand('bold', false);
    console.log('👴range', range);
    console.log('👴startOffset', startOffset);
    console.log('👴endOffset', endOffset);
  };

  const handleKeyUp = (e: any) => {
    // console.log('👴2023-06-15 15:48:28 useEditor.ts line:10',e)
  };

  const handleKeyDown = (e: any) => {
    const isCtrl = e.metaKey || e.ctrlKey;
    const { key } = e;
    // 加粗
    if (key === 'b' && isCtrl) {
      boldText();
      return;
    }
  };
  function removeStyles(text: string) {
    // 使用正则表达式去除 HTML 标签和样式相关的属性
    const cleanedText = text.replace(/ style="[^"]*"/g, ''); // 去除样式相关的属性
    return cleanedText;
  }

  const handlePaste = (event: any) => {
    event.preventDefault(); // 阻止默认粘贴行为
    const clipboardData = event.clipboardData || window.Clipboard;

    const pasteHtml = removeStyles(clipboardData.getData('text/html'));

    console.log(pasteHtml);

    const html = wrapRef.current?.innerHTML;
    removeSelection();
    wrapRef.current!.innerHTML = `${html} ${pasteHtml}`;

    // console.log('👴2023-06-15 16:33:59 useEditor.ts line:48',plainText)
  };

  const created = () => {
    wrapRef.current!.contentEditable = 'true';
    wrapRef.current?.addEventListener('keyup', handleKeyUp);
    wrapRef.current?.addEventListener('keydown', handleKeyDown);
    wrapRef.current?.addEventListener('paste', handlePaste);
  };

  const unMounted = () => {
    wrapRef.current?.removeEventListener('keyup', handleKeyUp);
    wrapRef.current?.removeEventListener('keydown', handleKeyDown);
    wrapRef.current?.removeEventListener('paste', handlePaste);
  };

  useEffect(() => {
    if (!wrapRef.current) {
      return;
    }

    created();

    return () => unMounted();
  }, []);

  return {
    wrapRef,
  };
}

export default useEditor;
