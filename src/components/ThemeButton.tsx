interface IButtonProps {
  children: JSX.Element;
  click: () => void;
}

export const ThemeButton = ({ children, click }: IButtonProps) => {
  return (
    <>
      <div className="themeButton" onClick={click}>
        {children}
      </div>
    </>
  );
};
