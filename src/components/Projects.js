import React, { useState } from 'react';
import Modal from './Modal.js';

function Project() {
    const [currentProject, setProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const projects = [
        {
            name: 'Run Buddy',
            description: 'Find your Run Buddy here. A mock website to offer running and training services. It was used as pratice for learning HTML and CSS.',
            url: 'https://oscarh1025.github.io/run-buddy/',
            github:'https://github.com/OscarH1025/run-buddy',
            image:'run-buddy.jpg'
        },
        
        
    ];

    const toggleModal = (projects, i) => {
        setProject({...projects, index: i});
        setIsModalOpen(!isModalOpen);
      }
    
    return (
        <section>
            <div>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
                <div className='flex-row'>
                    {projects.map((projects, i) => (
                    <img
                        src={require(`../assets/images/${projects.image}`)}
                        alt={projects.name}
                        className='img-thumbnail mx-1'
                        onClick={() => toggleModal(projects, i)}
                        key={projects.name}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;