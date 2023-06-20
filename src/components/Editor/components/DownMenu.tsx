import { ReactElement, ReactNode } from 'react';

type DownMenuProps = Partial<{
  children: ReactNode;

  options: Array<{
    value: any;
    label: any;
  }>;
  onChange?(e: any, index: number, item: any): void;
  value: any
}>;
function DownMenu({ children, options, onChange, value }: DownMenuProps): ReactElement {
  return (
    <div className="down-menu">
      {children}

      {options && options.length > 0 && (
        <div className="down-menu-content">
          {options?.map((item, index) => (
            <div
              key={item.value}
              className={`menu-item ${value === item.value ? 'active' : ''}`}
              onClick={() => onChange?.(item.value, index, item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default DownMenu;
