
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

const BlogPost = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch('/data/blogs.json');
                const data = await response.json();
                const post = data.find((b) => b.id === parseInt(id, 10));
                setBlog(post);
            } catch (error) {
                console.error('Failed to load blog post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!blog) {
        return <div className="text-center py-5">Blog post not found.</div>;
    }

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="mb-4">{blog.title}</h2>
                <p className="text-muted">By {blog.author}</p>
                <p>{blog.content}</p>
            </div>
        </section>
    );
};

export default BlogPost;
