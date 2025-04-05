import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ResultDisplay from './ResultDisplay';
import { FormData } from './types';
import PersonalDetailsSection from './PersonalDetailsSection';
import HouseholdSection from './HouseholdSection';
import IncomeSection from './IncomeSection';

const CalculatorForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    dateOfBirth: '',
    nationality: '',
    householdStatus: 'single',
    childrenCount: '0',
    dependentsCount: '0',
    employmentIncome: '0',
    socialSecurityIncome: '0',
    pensionIncome: '0',
    otherIncome: '0',
    documents: null,
    calculationDate: new Date(),
    calculationType: 'monthly'
  });

  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowResults(true);
    }, 1500);
  };

  const resetForm = () => {
    setShowResults(false);
  };

  // Determine minimum files required based on calculation type
  const getMinimumFilesRequired = () => {
    return formData.calculationType === 'yearly' ? 3 : 0;
  };

  if (showResults) {
    return (
        <ResultDisplay
            formData={formData}
            onBack={resetForm}
        />
    );
  }

  return (
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Details Section */}
        <PersonalDetailsSection formData={formData} setFormData={setFormData} />

        <Separator />

        {/* Household Setup Section */}
        <HouseholdSection formData={formData} setFormData={setFormData} />

        <Separator />

        {/* Income Section */}
        <IncomeSection formData={formData} setFormData={setFormData} />

        <div className="pt-4">
          <Button type="submit" className="w-full" disabled={isSubmitting ||
              (formData.calculationType === 'yearly' && (!formData.documents || formData.documents.length < getMinimumFilesRequired()))}>
            {isSubmitting ? "Berekenen..." : `Bereken Bijstandsuitkering (${formData.calculationType === 'monthly' ? 'Maandelijks' : 'Jaarlijks'})`}
          </Button>

          {formData.calculationType === 'yearly' && (!formData.documents || formData.documents.length < getMinimumFilesRequired()) && (
              <p className="text-amber-600 text-sm text-center mt-2">
                Voor een jaarlijkse berekening zijn minimaal {getMinimumFilesRequired()} documenten vereist
              </p>
          )}
        </div>
      </form>
  );
};

export default CalculatorForm;
