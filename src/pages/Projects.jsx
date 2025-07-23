import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            title: "Personal Voice Assistant",
            description: "A custom voice assistant built using Python that can perform tasks like web search, app control, and fetching information.",
            github: "https://github.com/Sibisakaravarthi/personal-voice-assistant",
        },
        {
            title: "University Sports Management System",
            description: "A full-stack web application for managing university-level sports events, teams, and scores.",
            github: "https://github.com/Sibisakaravarthi/University-sports-club",
        },
        {
            title: "Face Tracking Attendance System",
            description: "An AI-powered attendance system using face recognition to automatically record student attendance.",
            github: "https://github.com/Sibisakaravarthi/Face-recognition-based-attendance-system",
        },
    ];

    return (
        <section
            className="p-8 max-w-8xl mx-auto transition-colors duration-500 bg-gray-50 dark:bg-gray-900 flex flex-col items-center"
            id="projects"
        >
            {/* Intro */}
            <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
          </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    Dive into some of the projects I've passionately crafted — each one reflects a new milestone in my coding journey.
                </p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-white dark:bg-gray-800 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 border border-gray-300 dark:border-gray-700 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-3xl"
                    >
                        {/* Glowing Border on Hover */}
                        <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-purple-500 transition-all duration-500 pointer-events-none"></div>

                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300">
                            {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-8">{project.description}</p>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-500 rounded-full font-semibold transition-all group-hover:bg-purple-500 group-hover:text-white hover:scale-105 transform duration-300"
                        >
                            <FaGithub className="mr-2" />
                            GitHub Repo
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
