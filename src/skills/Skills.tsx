import style from './Skills.module.css';
import Skill from "./skill/Skill";

const Skills = () => {
    const skills = ['React JS','React Native', 'Redux-Toolkit', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Git','GitLab', 'Ajax', 'REST API','Sass'];
    return (
        <div className={style.skills}>
            <h2 className={style.title}>My main skills are:</h2>
            <div>
                {skills.map((el) =>
                    <Skill title={el} key={el}/>)}
            </div>
        </div>
    );
};

export default Skills;