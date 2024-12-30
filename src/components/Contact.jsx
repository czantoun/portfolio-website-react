
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(`Message sent!\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);
    };

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Contact Me</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                            {...register('message', { required: 'Message is required' })}
                        ></textarea>
                        {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
