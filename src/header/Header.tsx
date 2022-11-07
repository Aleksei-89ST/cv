
import style from './Header.module.css'
import {ReactComponent as Github} from '../icons/github.svg'
import {ReactComponent as Linkedin} from '../icons/linkedin.svg'

type HeaderPropsType = {
    color: string
    text: string
    displayIcons?: string
}

const Header = (props: HeaderPropsType) => {

    return (
        <div className={style.header}>
            <div className={style.headerBlock} style={{backgroundColor: `${props.color}`}}></div>
            <div className={style.title}><p>Alexey Starovoitov</p></div>
            <div className={style.title} style={{color: `${props.color}`}}><span>{props.text}</span></div>
            <div className={style.iconsBox} style={{display: `${props.displayIcons}`}}>
                <a href={'https://www.linkedin.com/in/aleksei-starovoitov-b8b48b232/'}>
                    <Linkedin className={style.icon}/>
                </a>
                <a href={'https://github.com/Aleksei-89ST'}> 
                    <Github className={style.icon}/>
                </a>
            </div>
        </div>
    );
};

export default Header;