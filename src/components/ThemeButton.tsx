interface IButtonProps {
  children: JSX.Element;
  click: () => void;
}

export const ThemeButton = ({ children, click }: IButtonProps) => {
  return (
    <>
      <button className="themeButton" onClick={click}>
        {children}
      </button>
    </>
  );
};
