import style from './Footer.module.css'
import {ReactComponent as Github} from '../icons/github.svg'
import {ReactComponent as Linkedin} from '../icons/linkedin.svg'
const Footer = () => {
    return (
        <div className={`${style.footer}`}>
                    <a href={'https://www.linkedin.com/in/aleksei-starovoitov-b8b48b232/'}>
                        <Linkedin  className={style.icon}/>
                    </a>
                    <a href={'https://github.com/Aleksei-89ST'}>
                        <Github className={style.icon}/>
                    </a>
        </div>
    );
};

export default Footer;