import { ReactElement } from 'react';

type IconKeyIn =
  | 'bold'
  | 'huiche'
  | 'yinyong'
  | 'code'
  | 'Table'
  | 'bold'
  | 'italic'
  | 'fengexian'
  | 'h-1'
  | 'h-2'
  | 'h-3'
  | 'shanchuxian'
  | 'fengexian';

type MenuIconProps = Partial<{
  icon: IconKeyIn;
  active: boolean;
}> &
  React.HTMLAttributes<HTMLElement>;
function MenuIcon({
  icon = 'bold',
  active = false,
  className = '',
  ...props
}: MenuIconProps): ReactElement {
  return (
    <i
      className={`${className} iconfont icon-${icon} ${active ? 'active' : ''}`}
      {...props}
    />
  );
}
export default MenuIcon;
