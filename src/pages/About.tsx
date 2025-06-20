
import { Header } from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-spring-gradient">
      <Header onSearch={() => {}} searchQuery="" />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold spring-text-gradient mb-6 animate-bloom">
              About Cherry Blossom Blog
            </h1>
            <div className="text-6xl mb-6 animate-float">🌸</div>
          </div>

          <div className="glass-effect rounded-2xl p-8 md:p-12 shadow-xl animate-bloom">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-spring-800 mb-6 leading-relaxed">
                Welcome to Cherry Blossom Blog, a beautiful space dedicated to exploring the wonders of the universe, the elegance of mathematics, the mysteries of physics, the harmony of music, and the art of coding. Just like cherry blossoms that bloom with delicate beauty, our blog aims to unfold knowledge in its most captivating form.
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold spring-text-gradient mb-4 flex items-center gap-2">
                  🌸 Our Mission
                </h2>
                <p className="text-spring-700 leading-relaxed">
                  Our mission is to make complex topics accessible and engaging for everyone. We believe that knowledge should be shared in a way that inspires curiosity and fosters a deeper understanding of our world and beyond. Through thoughtful articles, insightful analyses, and creative explorations, we aim to create a community of lifelong learners.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold spring-text-gradient mb-4 flex items-center gap-2">
                  ✨ Our Categories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white/50 rounded-lg p-4 border border-spring-200">
                    <div className="text-2xl mb-2">🔢</div>
                    <h3 className="font-semibold text-spring-900">Mathematics</h3>
                    <p className="text-sm text-spring-700">Exploring the beauty of numbers and patterns</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4 border border-spring-200">
                    <div className="text-2xl mb-2">⚛️</div>
                    <h3 className="font-semibold text-spring-900">Physics</h3>
                    <p className="text-sm text-spring-700">Understanding the fundamental laws of nature</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4 border border-spring-200">
                    <div className="text-2xl mb-2">🌌</div>
                    <h3 className="font-semibold text-spring-900">Universe</h3>
                    <p className="text-sm text-spring-700">Journey through space and cosmic wonders</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4 border border-spring-200">
                    <div className="text-2xl mb-2">🎵</div>
                    <h3 className="font-semibold text-spring-900">Music</h3>
                    <p className="text-sm text-spring-700">The harmony between art and science</p>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4 border border-spring-200">
                    <div className="text-2xl mb-2">💻</div>
                    <h3 className="font-semibold text-spring-900">Coding</h3>
                    <p className="text-sm text-spring-700">Building the digital future</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold spring-text-gradient mb-4 flex items-center gap-2">
                  🌱 Our Philosophy
                </h2>
                <p className="text-spring-700 leading-relaxed">
                  Like the fleeting beauty of cherry blossoms, knowledge is precious and should be cherished. We believe in:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-spring-700">
                  <li>Making learning beautiful and enjoyable</li>
                  <li>Connecting different fields of knowledge</li>
                  <li>Encouraging curiosity and wonder</li>
                  <li>Building a supportive learning community</li>
                  <li>Celebrating the joy of discovery</li>
                </ul>
              </div>

              <div className="text-center bg-spring-100/50 rounded-lg p-6">
                <h3 className="text-xl font-bold spring-text-gradient mb-2">
                  Join Our Journey
                </h3>
                <p className="text-spring-700">
                  Whether you're a curious beginner or an expert in your field, there's always something new to discover at Cherry Blossom Blog. Let's explore the universe of knowledge together! 🌸
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed top-32 left-10 text-pink-300 opacity-20 animate-float">
        <div className="text-5xl">🌸</div>
      </div>
      <div className="fixed bottom-32 right-10 text-pink-300 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="text-4xl">🌺</div>
      </div>
    </div>
  );
};

export default About;
