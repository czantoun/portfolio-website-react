
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ name: '', testimonial: '' });

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/data/testimonials.json');
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error('Failed to load testimonials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.testimonial) {
            setTestimonials((prev) => [...prev, { id: prev.length + 1, ...formData }]);
            setFormData({ name: '', testimonial: '' });
        }
    };

    if (loading) {
        return <div className="text-center py-5">Loading testimonials...</div>;
    }

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Testimonials</h2>
                <div className="row mb-4">
                    {testimonials.map((testimonial) => (
                        <div className="col-md-4 mb-3" key={testimonial.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">"{testimonial.testimonial}"</p>
                                    <h5 className="card-title">- {testimonial.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <h3>Add Your Testimonial</h3>
                    <form onSubmit={handleSubmit} className="mt-3">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                name="testimonial"
                                placeholder="Your Testimonial"
                                rows="3"
                                value={formData.testimonial}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
