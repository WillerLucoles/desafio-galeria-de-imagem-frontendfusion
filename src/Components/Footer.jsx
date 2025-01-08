import SocialLinks from "./SocialLinks"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='w-full mt-10 md:m-0 md:pt-10'>
      <section className='px-5 md:px-10 py-6 mx-auto'>
        <nav className='mb-4'>
          <ul className='flex items-center justify-center gap-8'>
            {SocialLinks.map(social => (
              <li key={social.name}>
                <a href={social.url} target='blank' rel='noreferrer' className='text-black'>
                  {social.logo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className='text-sm text-center text-black'>&copy; {currentYear} Willer Lucoles. Feito com <span className="invert">🤍</span> em Minas Gerais, Brasil.</p>
      </section>
    </footer>
  )
}

export default Footer