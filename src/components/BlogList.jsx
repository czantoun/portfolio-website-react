
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/data/blogs.json');
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Failed to load blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Blog</h2>
                <ul className="list-group">
                    {blogs.map((blog) => (
                        <li className="list-group-item" key={blog.id}>
                            <Link to={`/blog/${blog.id}`} className="text-decoration-none">
                                {blog.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BlogList;
