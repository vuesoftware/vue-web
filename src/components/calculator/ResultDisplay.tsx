import React from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { FormData } from './types';

import OverviewTab from './result-components/OverviewTab';
import MonthlyDetailTab from './result-components/MonthlyDetailTab';
import DocumentsTab from './result-components/DocumentsTab';
import RationaleSection from './result-components/RationaleSection';

interface ResultDisplayProps {
  formData: FormData;
  onBack: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ formData, onBack }) => {
  const isYearlyCalculation = formData.calculationType === 'yearly';

  return (
      <div>
        <Button
            variant="ghost"
            className="mb-4 flex items-center gap-1"
            onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" />
          Terug naar formulier
        </Button>

        <Card className="border-vue-200 shadow-md">
          <CardHeader className="bg-vue-50 border-b border-vue-100">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-vue-800">Berekeningsresultaten</CardTitle>
                <CardDescription>
                  Indicatieve bijstandsuitkering berekening voor {formData.name}
                  {formData.calculationDate && (
                      <span> {isYearlyCalculation ?
                          `voor het jaar ${format(formData.calculationDate, 'yyyy')}` :
                          `voor ${format(formData.calculationDate, 'MMMM yyyy')}`}
                  </span>
                  )}
                </CardDescription>
              </div>
              <Badge variant={isYearlyCalculation ? "secondary" : "outline"} className="ml-2">
                {isYearlyCalculation ? 'Jaarlijkse berekening' : 'Maandelijkse berekening'}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="space-y-6">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Dit is een vereenvoudigde berekening uitsluitend voor demonstratiedoeleinden. Daadwerkelijke uitkeringsbedragen worden
                  bepaald door officiële beoordeling van de betreffende instanties.
                </AlertDescription>
              </Alert>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-4 w-full">
                  <TabsTrigger value="overview" className="flex-1">Overzicht</TabsTrigger>
                  {isYearlyCalculation && (
                      <TabsTrigger value="monthly" className="flex-1">Maandelijks detail</TabsTrigger>
                  )}
                  <TabsTrigger value="documents" className="flex-1">Documenten</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <OverviewTab formData={formData} />
                </TabsContent>

                {isYearlyCalculation && (
                    <TabsContent value="monthly">
                      <MonthlyDetailTab formData={formData} />
                    </TabsContent>
                )}

                <TabsContent value="documents">
                  <DocumentsTab formData={formData} />
                </TabsContent>
              </Tabs>

              {/* Rationale Section */}
              <RationaleSection formData={formData} />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-3 border-t bg-slate-50 py-4">
            <Button variant="outline" className="w-full sm:w-auto">
              <Download className="h-4 w-4 mr-2" />
              Download PDF rapport
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Plan een consultatie
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-6 text-sm text-muted-foreground bg-slate-50 p-4 rounded-md">
          <p className="mb-2"><strong>Disclaimer:</strong></p>
          <p>
            Deze berekening is uitsluitend bedoeld ter informatie en vertegenwoordigt een benadering op basis van de door u verstrekte informatie.
            Werkelijke bijstandsuitkeringsbedragen zijn onderworpen aan officiële beoordeling door de relevante overheidsinstanties en kunnen
            afwijken van deze schatting.
          </p>
        </div>
      </div>
  );
};

export default ResultDisplay;
