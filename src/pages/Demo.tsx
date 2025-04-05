import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CalculatorForm from '@/components/calculator/CalculatorForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Demo: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-vue-50 to-slate-50 py-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-vue-800 mb-4">
                Bijstandsuitkering Calculator
              </h1>
              <p className="text-lg text-slate-700">
                Gebruik onze calculator om een indicatieve schatting te krijgen van uw potentiële bijstandsuitkering op basis van uw persoonlijke situatie.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Alert className="mb-8">
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Deze calculator biedt alleen een schatting en is bedoeld voor demonstratiedoeleinden.
                  Raadpleeg voor nauwkeurige berekeningen uw lokale gemeentelijke instanties.
                </AlertDescription>
              </Alert>

              <Card>
                <CardHeader className="bg-slate-50 border-b">
                  <CardTitle>Bereken uw potentiële uitkering</CardTitle>
                  <CardDescription>
                    Vul hieronder uw gegevens in om een indicatieve bijstandsuitkering berekening te ontvangen.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <CalculatorForm />
                </CardContent>
              </Card>

              <div className="mt-8 text-sm text-muted-foreground bg-white p-4 rounded-md border">
                <p className="mb-2 font-medium">Instructies:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Voer uw persoonlijke gegevens in het formulier hierboven in.</li>
                  <li>Geef uw huishoudelijke situatie aan (alleenstaand, getrouwd, etc.).</li>
                  <li>Voer uw maandelijkse inkomsten uit verschillende bronnen in.</li>
                  <li>Upload eventueel ondersteunende documenten voor een nauwkeurigere schatting.</li>
                  <li>Dien het formulier in om uw geschatte bijstandsuitkering te zien.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
