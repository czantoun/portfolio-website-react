
# Portfolio Website

This project is a responsive portfolio website built using React. It showcases skills, projects, testimonials, and blogs, along with additional features like theme toggling and dynamic content submission.

## Features

- **Home Page**: Includes sections for About, Skills, Portfolio, Testimonials, Blog, and Contact.
- **Theme Toggle**: Switch between light and dark themes using Redux for global state management.
- **Dynamic Testimonials**: Users can submit testimonials dynamically, which are displayed in the testimonials section.
- **Blog Section**: View a list of blogs and navigate to individual blog posts dynamically.
- **Portfolio Filters**: Filter projects based on categories like Web, Mobile, and Design.
- **Custom Loader**: Displays a loading spinner while fetching data.
- **Unit Tests**: Includes Jest and React Testing Library for component testing.
- **SEO Ready**: Meta tags managed with React Helmet for better search engine optimization.
- **Responsive Design**: Built with responsive styles for a seamless experience across devices.

## Technologies Used

- **Frontend**: React, React Router, React Helmet, Redux, Framer Motion
- **Testing**: Jest, React Testing Library
- **Styling**: Bootstrap, CSS
- **State Management**: Redux
- **Data Fetching**: Fetch API, JSON files
- **Animations**: Framer Motion

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Deploy the `build` directory to platforms like **Vercel** or **Netlify**.

## File Structure

```
src/
├── components/
│   ├── About.jsx
│   ├── BlogList.jsx
│   ├── BlogPost.jsx
│   ├── Contact.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── Portfolio.jsx
│   ├── Skills.jsx
│   ├── Testimonials.jsx
│   ├── Loader.jsx
├── redux/
│   ├── store.js
│   ├── slices/
│       ├── themeSlice.js
│       ├── userInteractionSlice.js
├── css/
│   ├── style.css
```

## Running Tests

Run unit tests:
```bash
npm test
```

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to your preferred hosting platform:
   - **Netlify**: Drag and drop the `build` folder into the deployment interface.
   - **Vercel**: Use the Vercel CLI or connect your repository for automatic deployment.
