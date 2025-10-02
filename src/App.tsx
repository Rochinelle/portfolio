import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Linkedin, Github, ExternalLink, Award, Briefcase, GraduationCap, User, Code, BarChart3, Database, Brain, LayoutDashboardIcon, CodeIcon } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'education', 'contact'];
      const scrollY = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">MYR</h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Photo */}
            <div className="relative max-w-xs mx-auto mb-8">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/image/me1.jpg" 
                  alt="Makoukam Yvana Rochinelle" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Makoukam Yvana
              <br />
              Rochinelle
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Final Year Computer Science Student
              <br />
              <span className="text-blue-600 font-medium">Aspiring Data Science Master's Candidate</span>
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about transforming data into actionable insights. Experienced in machine learning, 
              data analysis, and building intelligent solutions that drive business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-200 p-8 rounded-2xl">
                  <User className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-4xl font-bold mb-4 text-gray-800">My Journey</h3>
                  <p className="text-grey-400 leading-relaxed text-xl">
                    As a final-year Computer Science student with a passion for data science, I combine strong 
                    technical skills with analytical thinking to solve complex problems. My journey spans across 
                    machine learning, data analysis, and software development, with hands-on experience in both 
                    academic projects and professional internships.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <Code className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800 text-2xl">Programming</h4>
                  <p className="text-m text-gray-600">Python, C++, SQL</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl">
                  <BarChart3 className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800 text-2xl">Analytics</h4>
                  <p className="text-m text-gray-600">Power BI</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <Brain className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800 text-2xl">AI/ML</h4>
                  <p className="text-m text-gray-600">Scikit-learn</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <Database className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-800 text-2xl">Data</h4>
                  <p className="text-m text-gray-600">Pandas, NumPy</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div  onClick={() => window.open("https://github.com/Rochinelle/Breast-Cancer-Prediction", "_blank")} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 p-8 flex items-center justify-center">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Breast Cancer Classification</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Machine learning model to classify breast cancer tumors using diagnostic features. 
                    Implemented various algorithms including SVM, Random Forest, and Neural Networks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Scikit-learn</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Pandas</span>
                  </div>
                </div>
              </div>

              <div  onClick={() => window.open("https://github.com/Rochinelle/Telco-Customer-Churn-Prediction-Analysis?tab=readme-ov-file", "_blank")} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 p-8 flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Telco Customer Churn Analysis</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Predictive analytics project to identify customers likely to churn. Used feature engineering 
                    and ensemble methods to improve prediction accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Python</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">ML models</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Matplotlib</span>
                  </div>
                </div>
              </div>

              <div  onClick={() => window.open("https://github.com/Rochinelle/Telco-Customer-Churn-Prediction-Analysis/blob/main/Telco-dashboard.jpeg", "_blank")}  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex items-center justify-center">
                  <Database className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Power BI Dashboard</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Interactive business intelligence dashboard providing comprehensive data visualization 
                    and insights for decision-making processes.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Power BI</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">DAX</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">SQL</span>
                  </div>
                </div>
              </div>

              <div  onClick={() => window.open("https://github.com/Rochinelle/Telco-Customer-Churn-Prediction-Analysis/blob/main/Telco-dashboard.jpeg", "_blank")} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-purple-300 to-purple-500 p-8 flex items-center justify-center">
                  <CodeIcon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">DataViz app</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Full-stack data visualization tool that automatically transforms user-uploaded datasets into interactive dashboards and intelligent insights.
                     it empowers users to explore their data without writing a single line of code.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">FlaskAPI</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">SQLAlchemy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Professional Experience</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-400"></div>
              
              <div className="mb-12 relative">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full p-3 relative z-10">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Python Developer Intern</h3>
                    <p className="text-blue-600 font-medium mb-3">InternPe</p>
                    <p className="text-gray-600 leading-relaxed">
                      Developed Python applications and scripts, worked on data processing pipelines, 
                      and contributed to various software development projects using modern Python frameworks and libraries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 relative">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full p-3 relative z-10">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8 bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Data Analyst Extern</h3>
                    <p className="text-cyan-600 font-medium mb-3">Extern</p>
                    <p className="text-gray-600 leading-relaxed">
                      Analyzed complex datasets, created compelling visualizations, and provided data-driven 
                      insights to support business decision-making processes through statistical analysis and reporting.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 relative">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-400 rounded-full p-3 relative z-10">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8 bg-gradient-to-br from-purple-100 to-purple-400 p-6 rounded-xl flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Data Science Intern</h3>
                    <p className="text-purple-600 font-medium mb-3">Oasis</p>
                    <p className="text-gray-600 leading-relaxed">
                      Analyzed complex datasets, created compelling visualizations, and provided data-driven 
                      insights to support business decision-making processes through statistical analysis and reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Education & Certifications</h2>
            
            <div className="mb-12">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Computer Science Student</h3>
                <p className="text-blue-100 mb-4">Final Year • Aspiring Master's in Data Science</p>
                <p className="text-blue-100">
                  Strong foundation in algorithms, data structures, and software engineering with specialization in data science and machine learning.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
                <Award className="w-8 h-8 text-blue-500 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">AI Workshop</h4>
                <p className="text-gray-600 text-sm">Advanced artificial intelligence concepts and applications</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                <Award className="w-8 h-8 text-green-500 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Introduction to AI</h4>
                <p className="text-gray-600 text-sm">Great Learning • Fundamental AI principles and techniques</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
                <Award className="w-8 h-8 text-purple-500 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Self Awareness</h4>
                <p className="text-gray-600 text-sm">Coursera • Personal development and emotional intelligence</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
                <Award className="w-8 h-8 text-orange-500 mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">Leadership Skills</h4>
                <p className="text-gray-600 text-sm">HEC Paris • Building effective leadership capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to discuss data science opportunities, collaborate on projects, 
              or explore potential research partnerships. Let's create something amazing together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:rochinelley@gmail.com" 
                className="flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 mr-3" />
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/makoukam-yvana-rochinelle-b237a233a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                className="flex items-center bg-blue-800 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Rochinelle" 
                className="flex items-center bg-gray-800 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Github className="w-5 h-5 mr-3" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2025 Makoukam Yvana Rochinelle. All rights reserved.</p>
          <p className="text-gray-500">Designed with passion for data science and innovation</p>
        </div>
      </footer>
    </div>
  );
}

export default App;