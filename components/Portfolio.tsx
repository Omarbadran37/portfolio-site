import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Network, 
  Puzzle, 
  Star, 
  LineChart,
  Database,
  Code,
  Hospital,
  Lightbulb,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const projects = [
    {
      title: "MOHDAK (Museum of HealthPlan's Data and Knowledge)",
      description: "A platform making institutional knowledge discoverable through ontology-based knowledge graphs and API integrations.",
      impact: "Revolutionized how teams access and utilize institutional knowledge",
      icon: <Database className="w-6 h-6 text-blue-500" />
    },
    {
      title: "SPACE INKOD",
      description: "Standardized Process for Automating Custom Experience Integrating Noteworthy Knowledge On Demand - A platform that democratizes data by converting individual perspectives into standardized visual narratives.",
      impact: "Enhanced decision-making through visual knowledge sharing",
      icon: <Brain className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Member Flower Visualization",
      description: "An intuitive Power BI visualization synthesizing ten key health indicators for simultaneous patient and population-level assessment.",
      impact: "Made complex health data immediately actionable",
      icon: <LineChart className="w-6 h-6 text-green-500" />
    },
    {
      title: "ML-Driven Program Enrollment",
      description: "Machine learning system for improving patient enrollment in structured family communication programs.",
      impact: "22% increase in sensitivity, 45% improvement in specificity",
      icon: <Network className="w-6 h-6 text-red-500" />
    }
  ];

  const mentalModels = [
    {
      title: '"Everything Connected" Framework',
      description: "A holistic approach to problem-solving focusing on data dependencies and ecosystem relationships.",
      icon: <Network className="w-8 h-8 text-blue-500" />
    },
    {
      title: '"Déjà Résolu" Approach',
      description: "Emphasis on modular design and reusable components, recognizing that most problems have existing solutions that can be adapted.",
      icon: <Puzzle className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Solution Engineering Process',
      description: '"Magical outcome" approach - reverse engineering from ideal results while balancing between Occam\'s Razor and "over-solutioning".',
      icon: <Star className="w-8 h-8 text-yellow-500" />
    }
  ];

  const skills = [
    { name: "Python", icon: <Code className="w-6 h-6" /> },
    { name: "R", icon: <LineChart className="w-6 h-6" /> },
    { name: "SQL", icon: <Database className="w-6 h-6" /> },
    { name: "D3.JS", icon: <LineChart className="w-6 h-6" /> },
    { name: "Healthcare Analytics", icon: <Hospital className="w-6 h-6" /> },
    { name: "Machine Learning", icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Omar Badran</h1>
          <p className="text-xl text-gray-600">
            Healthcare Data Strategist | Innovation Catalyst | System Thinker
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/Omarbadran37" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/omar-badran-ms-rn-38758a23/" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {['about', 'mental models', 'projects', 'skills'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === section
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* About Section */}
        {activeSection === 'about' && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Healthcare data innovator who transforms clinical challenges through three interconnected frameworks: 
                systems thinking, modular design, and outcome-driven engineering. Pioneer of sustainable, 
                human-centered platforms that improve patient care, enhance operational efficiency, and revolutionize 
                how healthcare organizations understand and utilize their data assets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Hospital className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                  <h3 className="font-semibold mb-1">Healthcare Expertise</h3>
                  <p className="text-sm text-gray-600">11+ years at UPMC</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Brain className="w-8 h-8 mx-auto text-purple-500 mb-2" />
                  <h3 className="font-semibold mb-1">Data Science</h3>
                  <p className="text-sm text-gray-600">MS Applied Data Science (3.92 GPA)</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Lightbulb className="w-8 h-8 mx-auto text-green-500 mb-2" />
                  <h3 className="font-semibold mb-1">Innovation</h3>
                  <p className="text-sm text-gray-600">Multiple breakthrough platforms</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Mental Models Section */}
        {activeSection === 'mental models' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mentalModels.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{model.icon}</div>
                  <CardTitle className="text-lg font-semibold">{model.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {project.icon}
                    <CardTitle className="ml-2 text-lg">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Impact:</strong> {project.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-2">{skill.icon}</div>
                  <p className="font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
