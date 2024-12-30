
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import store from '../redux/store';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Helmet>
                    <title>My Portfolio</title>
                    <meta name="description" content="A portfolio showcasing my skills, projects, and experience." />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
};

const Home = () => (
    <>
        <Header />
        <main>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </main>
    </>
);

export default App;
