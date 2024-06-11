import React from 'react';
import './Experience.css';
import theme_patern from '../../assets/theme_pattern.svg';

const Experience = () => {
  const experiences = [
    {
      company: "In1Go Technologies Inc.",
      position: "Web Developer",
      location: "Las Piñas City",
      date: "September 29, 2023 - Present",
      description: [
        "Developed and maintained interactive, responsive websites using HTML, CSS, JavaScript, Bootstrap, WordPress, and Elementor.",
        "Integrated Google Analytics and Pipedrive CRM to websites.",
        "Setup UTM Parameters using Google Tag Manager.",
        "Fixed page indexing in Google Search Console.",
        "Worked with back-end developers to integrate front-end and back-end functionality, enhancing overall application functionality.",
        "Conducted thorough testing and debugging, identifying and resolving issues to maintain a high standard of quality.",
        "Maintained company website by regularly updating content, ensuring accurate information, and improving the user experience."
      ]
    },
    {
      company: "Spadmond Technology Inc.",
      position: "Front-End Developer",
      location: "Makati City",
      date: "June 26, 2023 - September 2023",
      description: [
        "Developed and maintained interactive, responsive web applications using HTML, CSS, JavaScript, Bootstrap, WordPress, and Elementor.",
        "Fixed Bugs.",
        "Worked with back-end developers to integrate front-end and back-end functionality, enhancing overall application functionality.",
        "Conducted thorough testing and debugging, identifying and resolving issues to maintain a high standard of quality."
      ]
    },
    {
      company: "Phosclay Chemical Manufacturing (On-The-Job Training)",
      position: "Web Developer / Programmer",
      location: "Dasmariñas City, Cavite",
      date: "March 20, 2023 - June 19, 2023",
      description: [
        "Developed and maintained interactive, responsive web applications using HTML, CSS, JavaScript, and Bootstrap.",
        "Developed Inventory Management System using PHP and MySQL for backend.",
        "Maintained company website by regularly updating content, ensuring accurate information, and improving the user experience, and fixing bugs."
      ]
    },
    {
      company: "The Parks Pizza (Capstone Project)",
      position: "Web Developer",
      location: "Capstone Project",
      date: "May 2022 - April 2023",
      description: [
        "Developed an E-commerce with Inventory Management System and Point-of-Sales.",
        "Database created using MySQL and developed back-end using PHP.",
        "Front-end Developer using HTML, CSS, JavaScript, and Bootstrap."
      ]
    }
  ];

  return (
    <div id="experience" className='experience sections'>
        <div className="experience-title">
            <h1>Experiences</h1>
            <img src={theme_patern} alt="" />
        </div>
      <div className='experience-main-container'>
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <h3 className="experience-company">{exp.company}</h3>
          <p className="experience-position">{exp.position}</p>
          <p className="experience-details">{exp.location} | {exp.date}</p>
          <ul className="experience-description">
            {exp.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Experience;
