
import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch('/data/skills.json');
                const data = await response.json();
                setSkills(data);
            } catch (error) {
                console.error("Failed to load skills:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    if (loading) {
        return <div className="text-center py-5">Loading skills...</div>;
    }

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Skills and Tools</h2>
                <div className="row">
                    {skills.map((skill) => (
                        <div key={skill.id} className="col-md-6 mb-3">
                            <h5>{skill.skill}</h5>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${skill.level}%` }}
                                    aria-valuenow={skill.level}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {skill.level}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
