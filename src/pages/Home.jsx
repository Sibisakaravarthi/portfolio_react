import Typewriter from 'typewriter-effect';
import profileImage from '../assets/SIBI.jpg';

export default function Home() {
    return (
        <section id="home" className="flex flex-col md:flex-row items-center justify-center gap-16 px-8 md:px-20 py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-all duration-700">
            
            {/* Left Side: Animated Profile Card */}
            <div className="relative group rounded-3xl overflow-hidden bg-white/40 dark:bg-white/10 backdrop-blur-md shadow-2xl p-10 flex flex-col items-center animate-slide-in-left transition-all duration-700 hover:scale-105 hover:shadow-3xl">
                <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg transform group-hover:rotate-6 transition-transform duration-700 mb-6">
                    <img
                        src={profileImage}
                        alt="Sibisakaravarthi S"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2 tracking-wide">
                    Sibisakaravarthi S
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center text-base italic">
                    Passionate Developer | Lifelong Learner
                </p>
            </div>

            {/* Right Side: Text + Animated Typewriter */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left animate-slide-in-right transition-all duration-700">
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
                    Hello, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Sibisakaravarthi</span>
                </h1>

                <div className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-purple-400 mb-10">
                    <Typewriter
                        options={{
                            strings: ['Full Stack Developer', 'React.js Enthusiast', 'Java Programmer'],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                        }}
                    />
                </div>

                <a
                    href="/SIBISAKARAVARTHI S_RESUME5.pdf"
                    download
                    className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white px-12 py-4 rounded-full font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
                >
                    Download Resume
                </a>
            </div>

        </section>
    );
}
