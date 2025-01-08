import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const SocialLinks = [	
	{
		name: 'Instagram',
		logo: <AiFillInstagram size={22} />,
		url: 'https://www.instagram.com/willerlucoles',
	},
	{
		name: 'linkedin',
		logo: <FaLinkedinIn size={22} />,
		url: 'https://www.linkedin.com/in/willerlucoles',
	},
	{
		name: 'github',
		logo: <FaGithub size={22} />,
		url: 'https://github.com/willerlucoles',
	},
];

export default SocialLinks;