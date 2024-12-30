
import React, { useState, useEffect } from 'react';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/data/projects.json');
                const data = await response.json();
                setProjects(data);
                const uniqueCategories = ['All', ...new Set(data.map((project) => project.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Failed to load projects:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    if (loading) {
        return <div className="text-center py-5">Loading projects...</div>;
    }

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">My Work</h2>
                <div className="text-center mb-4">
                    <select
                        className="form-select w-auto d-inline-block"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="row">
                    {filteredProjects.map((project) => (
                        <div className="col-md-4 mb-4" key={project.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <span className="badge bg-primary">{project.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
