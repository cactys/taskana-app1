import { Logo } from './Logo.jsx';
import { Input } from './Input.jsx';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner flex ">
        <Logo />
        <Input />
      </div>
    </header>
  );
};
