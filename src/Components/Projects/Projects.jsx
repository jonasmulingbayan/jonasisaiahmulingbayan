import React, { useState, useEffect } from 'react';
import './Projects.css';
import themePattern from '../../assets/theme_pattern.svg';
import ProjectData from '../../assets/mywork_data';
import { FaGithub,FaLink, FaInfoCircle } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    // Retrieve selected category from localStorage if available, or default to 'All'
    return localStorage.getItem('selectedCategory') || 'All';
  });
  const [currentPage, setCurrentPage] = useState(() => {
    // Retrieve current page from localStorage if available, or default to 1
    return parseInt(localStorage.getItem('currentPage')) || 1;
  });
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project
  const projectsPerPage = 6;

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset current page when changing categories
    localStorage.setItem('selectedCategory', category); // Persist selected category to localStorage
    localStorage.setItem('currentPage', 1); // Persist current page to localStorage
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const filteredProjects = ProjectData.filter(work =>
    selectedCategory === 'All' || work.w_category === selectedCategory
  ).slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(
    ProjectData.filter(work => selectedCategory === 'All' || work.w_category === selectedCategory).length / projectsPerPage
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem('currentPage', pageNumber); // Persist current page to localStorage
  };
  const goToNextPage = () => setCurrentPage(prevPage => {
    const nextPage = prevPage + 1;
    localStorage.setItem('currentPage', nextPage); // Persist current page to localStorage
    return nextPage;
  });
  const goToPrevPage = () => setCurrentPage(prevPage => {
    const prevPageNumber = prevPage - 1;
    localStorage.setItem('currentPage', prevPageNumber); // Persist current page to localStorage
    return prevPageNumber;
  });

  // Function to open modal and set selected project
  const openModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Add event listener to close modal when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);


  return (
    <div id="projects" className='projects sections'>
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="filter-buttons">
        <button
          onClick={() => handleFilter('All')}
          style={{ backgroundColor: selectedCategory === 'All' ? '#ffc201' : 'initial' }}
        >
          All
        </button>
        <button
          onClick={() => handleFilter('Wordpress')}
          style={{ backgroundColor: selectedCategory === 'Wordpress' ? '#ffc201' : 'initial' }}
        >
          WordPress
        </button>
        <button
          onClick={() => handleFilter('PHP')}
          style={{ backgroundColor: selectedCategory === 'PHP' ? '#ffc201' : 'initial' }}
        >
          PHP
        </button>

        <button
          onClick={() => handleFilter('React')}
          style={{ backgroundColor: selectedCategory === 'React' ? '#ffc201' : 'initial' }}
        >
          React
        </button>

        <button
          onClick={() => handleFilter('HTML')}
          style={{ backgroundColor: selectedCategory === 'HTML' ? '#ffc201' : 'initial' }}
        >
          HTML
        </button>
      </div>
      <div className="projects-container">
        {filteredProjects.map((work, index) => (
          <div className='projects-item' key={index}>
            <img src={work.w_img} alt=""/>
            <h3>{work.w_name}</h3>
            <div className='project-button-item'>
              <button type='button' className='info' onClick={() => openModal(work)} aria-label="View informations about my projects" >
                View Info <FaInfoCircle /> 
              </button>
              <a className='demo' href={work.w_demo_link} target="_blank" rel="noopener noreferrer" aria-label="Visit the repository of my projects">
                 View Demo <FaLink />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}
        style={{
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
        }}>Previous</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
            {i + 1}
          </button>
        ))}
        <button onClick={goToNextPage} disabled={currentPage === totalPages}
        style={{
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
        }}>Next</button>
      </div>
      {/* Modal */}
      {selectedProject && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      <div className='project-items'>
        <h2>{selectedProject.w_name}</h2>
        <h3>{selectedProject.w_proj}</h3>
        <p>Description: {selectedProject.w_description}</p>
        <p>Tech Stack:</p>
        <p className='techstack'>
          {selectedProject.w_tech_stack.map((tech, index) => (
            <span key={index} style={{ backgroundColor: getBackgroundColor(tech), color: getTextColor(tech) }}>
              {tech}
            </span>
          ))}
        </p>
        <div className='gh_btn'>
        {selectedProject.github_link && (
          <a href={selectedProject.github_link} target="_blank" rel="noopener noreferrer" className="view-source-button">
            View Source Code <FaGithub size={30}/>
          </a>
        )}
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  )
}

export default Projects;

// Function to get background color based on tech stack
const getBackgroundColor = (tech) => {
  switch (tech) {
    case 'WordPress':
      return '#21759B';
    case 'Elementor':
      return '#00A5E6';
    case 'PHP':
      return '#777BB4';
    case 'MySQL':
      return '#4479A1';
    case 'HTML':
      return '#E34F26';
    case 'JavaScript':
      return '#F7DF1E';
    case 'CSS':
      return '#1572B6';
    case 'Bootstrap':
      return '#563D7C';
    case 'Figma':
      return '#0ACF83';
    case 'Blocksy':
      return '#000';
    case 'React':
      return '#61DAFB';
    case 'Vite':
      return '#646cff';
    // Add more cases for other tech stack items if needed
    default:
      return 'initial';
  }
};

// Function to get text color based on tech stack
const getTextColor = (tech) => {
  switch (tech) {
    case 'WordPress':
      return '#ffffff';
    case 'Elementor':
      return '#FFFFFF';
    case 'MySQL':
      return '#ffffff';
    case 'PHP':
      return '#FFFFFF';
    case 'HTML':
      return '#FFFFFF';
    case 'JavaScript':
      return '#000000';
    case 'CSS':
      return '#FFFFFF';
    case 'Bootstrap':
      return '#ffffff';
    case 'Figma':
      return '#ffffff';
    case 'Blocksy':
      return '#ffffff';
    case 'React':
      return '#ffffff';
    case 'Vite':
      return '#ffffff';
    // Add more cases for other tech stack items if needed
    default:
      return 'initial';
  }
};
