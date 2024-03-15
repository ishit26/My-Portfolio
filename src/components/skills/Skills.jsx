import React, { useState } from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillCard from './skillscard/skillscard';
import SkillsInfoCard from './skillsinfocard/SkillsInfoCard';


const Skills = () => {

    const [ selectedSkills, setSelectedSkills ] = useState(SKILLS[0]);

    const handleSelectedSkills = (data) => {
        setSelectedSkills(data);
    }

  return (
   <section className='skills-container' id='skills'>
        <h5>Technical Proficiency</h5>

        <div className='skills-content'>
            <div className='skills'>
                {
                    SKILLS.map((item) => (
                        <SkillCard 
                            key={item.title}
                            iconUrl={item.icon} 
                            title={item.title}
                            isActive={selectedSkills.title === item.title}
                            onClick={() => handleSelectedSkills(item)} 
                        />
                    ))
                }
            </div>
            <div className='skills-info'>
                 <SkillsInfoCard
                    heading={selectedSkills.title}
                    skills={selectedSkills.skills} /> 
            </div>
        </div>
   </section>
  )
}

export default Skills;