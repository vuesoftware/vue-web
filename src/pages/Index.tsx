
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ShieldCheck, Users } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-vue-50 to-slate-50 section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vue-800 mb-6">
                   Vue Software
                </h1>
                <p className="text-xl text-slate-700 mb-8">
                  Vue Software is een toonaangevende partner in softwareontwikkeling.
                  Met geavanceerde technologie realiseren wij schaalbare, veilige en toekomstbestendige oplossingen die organisaties vooruithelpen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link to="/demo">
                      Probeer onze demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/about">Over ons</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-vue-200 rounded-full opacity-20 blur-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Professional team working on software" 
                    className="relative z-10 rounded-lg shadow-lg max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-vue-800 mb-4">
                Waarom Vue Software?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We creëren gespecialiseerde softwareoplossingen die de operaties stroomlijnen, de nauwkeurigheid vergroten en waardevolle inzichten bieden voor uw bedrijf.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-vue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-vue-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">Precisie en nauwkeurigheid</h3>
                <p className="text-slate-600">
                  Onze software is zorgvuldig ontworpen om nauwkeurige berekeningen en nauwkeurige resultaten te garanderen,
                  Vooral belangrijk voor financiële toepassingen en naleving van regelgeving.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-vue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-vue-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">Veiligheid voorop</h3>
                <p className="text-slate-600">
                  We implementeren robuuste beveiligingsmaatregelen om gevoelige gegevens te beschermen,
                  Zorgen voor naleving van privacyregelgeving en industriestandaarden.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-vue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-vue-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">Gebruikersgericht ontwerp</h3>
                <p className="text-slate-600">
                  We creëren intuïtieve interfaces die minimale training vereisen,
                  zodat uw team efficiënt en met vertrouwen kan werken.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-vue-700 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-white mb-4">
                  Ervaar onze oplossingen in actie
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Probeer onze bijstandsuitkering calculator om te zien hoe onze software voorziet in nauwkeurige berekeningen en gebruiksvriendelijke ervaringen.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/demo">
                    Probeer onze bijstandsuitkering calculator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
