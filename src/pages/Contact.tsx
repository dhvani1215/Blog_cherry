
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mail, MessageCircle, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🌸",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setShowSuccessDialog(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-spring-gradient">
      <Header onSearch={() => {}} searchQuery="" />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold spring-text-gradient mb-6 animate-bloom">
              Get in Touch
            </h1>
            <p className="text-xl text-spring-800 max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you! 💌
            </p>
            <div className="text-5xl mt-6 animate-float">🌸</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-effect p-8 shadow-xl animate-bloom hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl font-bold spring-text-gradient mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      <label htmlFor="name" className="block text-spring-800 font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/70 border-spring-300 focus:border-spring-pink transition-all duration-300 hover:bg-white/90"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      <label htmlFor="email" className="block text-spring-800 font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/70 border-spring-300 focus:border-spring-pink transition-all duration-300 hover:bg-white/90"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <label htmlFor="subject" className="block text-spring-800 font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white/70 border-spring-300 focus:border-spring-pink transition-all duration-300 hover:bg-white/90"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <label htmlFor="message" className="block text-spring-800 font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-white/70 border-spring-300 focus:border-spring-pink resize-none transition-all duration-300 hover:bg-white/90"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  
                  <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <Button 
                      type="submit" 
                      className="w-full bg-cherry-gradient hover:opacity-90 text-white shadow-lg text-lg py-3 transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Message 🌸
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="glass-effect p-6 shadow-lg animate-bloom hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold spring-text-gradient mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex items-center gap-3 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-all duration-300">
                        <div className="w-10 h-10 bg-spring-200 rounded-full flex items-center justify-center animate-pulse">
                          <Mail className="w-5 h-5 text-spring-700" />
                        </div>
                        <div>
                          <p className="font-medium text-spring-900">Email</p>
                          <p className="text-spring-700">hello@cherryblossom.blog</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="glass-effect">
                      <DialogHeader>
                        <DialogTitle className="spring-text-gradient">Email Contact</DialogTitle>
                      </DialogHeader>
                      <div className="text-center py-4">
                        <Mail className="w-16 h-16 text-spring-600 mx-auto mb-4 animate-bounce" />
                        <p className="text-spring-800">Send us an email at:</p>
                        <p className="text-spring-600 font-semibold text-lg">hello@cherryblossom.blog</p>
                        <p className="text-sm text-spring-700 mt-2">We typically respond within 24 hours!</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex items-center gap-3 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-all duration-300">
                        <div className="w-10 h-10 bg-spring-200 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                          <MessageCircle className="w-5 h-5 text-spring-700" />
                        </div>
                        <div>
                          <p className="font-medium text-spring-900">Live Chat</p>
                          <p className="text-spring-700">Available 9-5 EST</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="glass-effect">
                      <DialogHeader>
                        <DialogTitle className="spring-text-gradient">Live Chat Support</DialogTitle>
                      </DialogHeader>
                      <div className="text-center py-4">
                        <MessageCircle className="w-16 h-16 text-spring-600 mx-auto mb-4 animate-bounce" />
                        <p className="text-spring-800">Chat with us live!</p>
                        <p className="text-spring-600 font-semibold">Available 9 AM - 5 PM EST</p>
                        <p className="text-sm text-spring-700 mt-2">Monday through Friday</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <div className="flex items-center gap-3 hover:bg-white/50 p-2 rounded-lg transition-all duration-300">
                    <div className="w-10 h-10 bg-spring-200 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                      <MapPin className="w-5 h-5 text-spring-700" />
                    </div>
                    <div>
                      <p className="font-medium text-spring-900">Location</p>
                      <p className="text-spring-700">Wherever knowledge blooms</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="glass-effect p-6 shadow-lg animate-bloom hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold spring-text-gradient mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-spring-700 hover:text-spring-900 hover:bg-white/50 p-2 rounded transition-all duration-300">
                    📝 Submit a Guest Post
                  </a>
                  <a href="#" className="block text-spring-700 hover:text-spring-900 hover:bg-white/50 p-2 rounded transition-all duration-300">
                    💌 Subscribe to Newsletter
                  </a>
                  <a href="#" className="block text-spring-700 hover:text-spring-900 hover:bg-white/50 p-2 rounded transition-all duration-300">
                    🐛 Report a Bug
                  </a>
                  <a href="#" className="block text-spring-700 hover:text-spring-900 hover:bg-white/50 p-2 rounded transition-all duration-300">
                    💡 Suggest a Topic
                  </a>
                </div>
              </Card>

              <Card className="glass-effect p-6 shadow-lg animate-bloom hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold spring-text-gradient mb-4">Response Time</h3>
                <p className="text-spring-700 text-sm">
                  We typically respond within 24 hours during business days. For urgent matters, please mark your subject line with "URGENT" 🚨
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="glass-effect text-center">
          <DialogHeader>
            <DialogTitle className="spring-text-gradient text-2xl">Message Sent Successfully! 🌸</DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <CheckCircle className="w-20 h-20 text-spring-600 mx-auto mb-4 animate-bounce" />
            <p className="text-spring-800 text-lg mb-2">Thank you for reaching out!</p>
            <p className="text-spring-700">We've received your message and will get back to you within 24 hours.</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Decorative Elements */}
      <div className="fixed top-40 right-16 text-pink-300 opacity-20 animate-float">
        <div className="text-4xl">🌸</div>
      </div>
      <div className="fixed bottom-40 left-16 text-pink-300 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-6xl">🌺</div>
      </div>
    </div>
  );
};

export default Contact;
