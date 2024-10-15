import LogoImage from '../assets/logo.png';
import LogoSmall from '../assets/logo886.png';

export const Logo = () => {
  return (
    <a href="/" className="logo">
      <img className="header__img" src={LogoImage} alt="логотип" />
      <img className="header__img-replace" src={LogoSmall} alt="" />
    </a>
  );
};
