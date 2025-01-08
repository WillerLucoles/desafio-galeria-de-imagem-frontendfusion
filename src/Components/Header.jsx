import logo from '../assets/WillerLucoles_Logo.svg';
import backgroundImage from '../assets/pexels-aramis-cartam-1316421-2652496.jpg';

const Header = () => (
  <header
    className="text-center relative bg-cover bg-center h-96"
    style={{ backgroundImage: `url(${backgroundImage})`, marginTop: 0 }}
  >
    <div className="absolute top-4 left-4">
      <img src={logo} alt="Logo" className="h-8" />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      <p className="mt-10 text-4xl font-bold text-white max-w-md">As melhores fotos profissionais gratuitas você encontra aqui</p>
      <input
        type="text"
        placeholder="Pesquisar..."
        className="mt-4 p-2 border rounded w-full max-w-xs md:max-w-md"
      />
    </div>
  </header>
);

export default Header;