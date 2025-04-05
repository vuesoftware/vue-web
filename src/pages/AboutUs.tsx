
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, MapPin, Phone } from 'lucide-react';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Mohammed El-Allaoui",
      role: "Oprichter & Lead Developer",
      bio: "Met meer dan 15 jaar ervaring in softwareontwikkeling richtte Mohammed Vue Software op, met als doel nauwkeurige en toegankelijke softwareoplossingen te creëren die complexe processen automatiseren en risico’s voor organisaties minimaliseren.",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEBIIhVMZdIwA/profile-displayphoto-shrink_800_800/B4EZWhCm_qHcAc-/0/1742163572540?e=1749081600&v=beta&t=nM09svsNaVJTcXPoeEgSs15NmH1JeLfBrEtJrd6uQ0k&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-vue-50 to-slate-50 section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-vue-800 mb-6">
                Over Vue Software
              </h1>
              <p className="text-xl text-slate-700">
                Vue Software is een innovatief softwarebedrijf gespecialiseerd in het ontwerpen, ontwikkelen en implementeren van geavanceerde digitale oplossingen voor bedrijven.
              </p>
            </div>
          </div>
        </section>
        
     <section className="section-padding bg-white">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold text-vue-800 mb-6">
          Ons Verhaal
        </h2>
        <p className="text-lg text-slate-700 mb-4">
          Vue Software werd opgericht in 2021 met een heldere missie: het ontwikkelen van betrouwbare en toegankelijke softwareoplossingen die complexe financiële en administratieve processen vereenvoudigen.
        </p>
        <p className="text-lg text-slate-700 mb-4">
          We zagen een duidelijke behoefte in de markt aan intuïtieve software die nauwkeurige berekeningen en complexe regelgeving aankan, zonder in te leveren op gebruiksvriendelijkheid.
        </p>
        <p className="text-lg text-slate-700 mb-4">
          Vandaag de dag ondersteunen wij klanten in uiteenlopende sectoren, waaronder het bankwezen (met name wholesale banking), de telecommunicatiesector en diverse administratieve dienstverleners. We helpen hen om te voldoen aan strenge wet- en regelgeving, en om processen slimmer en efficiënter in te richten.
        </p>
        <p className="text-lg text-slate-700">
          Of het nu gaat om maatwerksoftware, procesautomatisering of complexe datamigraties — Vue Software biedt slimme, veilige en schaalbare oplossingen op maat.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Team Vue Software in overleg"
          className="rounded-lg shadow-lg max-w-full"
        />
      </div>
    </div>
  </div>
</section>

        
        {/* Core Values */}
<section className="section-padding bg-slate-50">
  <div className="container-custom">
    <h2 className="text-3xl font-bold text-vue-800 mb-12 text-center">
      Onze Kernwaarden
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-vue-700 mb-4">Betrouwbaarheid</h3>
        <p className="text-slate-600">
          Onze klanten vertrouwen op software die werkt — altijd. Wij bouwen stabiele oplossingen die voldoen aan hoge standaarden en foutloze resultaten leveren, ook in complexe omgevingen.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-vue-700 mb-4">Beveiliging & Privacy</h3>
        <p className="text-slate-600">
          Veilig omgaan met data is voor ons vanzelfsprekend. Wij implementeren robuuste beveiliging en zorgen dat al onze oplossingen voldoen aan wetgeving zoals de AVG.
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-vue-700 mb-4">Slimme Eenvoud</h3>
        <p className="text-slate-600">
          Onze technologie is krachtig, maar blijft altijd begrijpelijk. We ontwerpen gebruiksvriendelijke interfaces waarmee je snel en efficiënt werkt, zonder onnodige complexiteit.
        </p>
      </div>
    </div>
  </div>
</section>

        
        {/* Team Section
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-vue-800 mb-12 text-center">
              Ontmoet ons team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-slate-50 rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-vue-800 mb-1">{member.name}</h3>
                    <p className="text-vue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-slate-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        {/* Contact Information */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-vue-800 mb-8 text-center">
                Neem contact met ons op!
              </h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-vue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-vue-700" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <a href="mailto:info@vuebyte.com" className="text-vue-600 hover:text-vue-800">info@vuebyte.com</a>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-vue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-vue-700" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Phone</h3>
                    <a href="tel:+31612310204" className="text-vue-600 hover:text-vue-800">+31 612310204</a>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-vue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-vue-700" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Office</h3>
                    <address className="text-slate-600 not-italic">
                      Amsterdam Business Center<br />
                      Herengracht 456<br />
                      1017 CA Amsterdam
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
