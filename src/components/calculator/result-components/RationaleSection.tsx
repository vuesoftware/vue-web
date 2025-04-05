import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Edit } from 'lucide-react';
import { FormData } from '../types';
import { calculateResults, generateDefaultRationale } from '../utils/calculationutils.ts';

interface RationaleSectionProps {
    formData: FormData;
}

const RationaleSection: React.FC<RationaleSectionProps> = ({ formData }) => {
    const [rationale, setRationale] = useState<string>('');
    const [isEditingRationale, setIsEditingRationale] = useState<boolean>(false);

    const {
        baseAmount,
        childBenefit,
        dependentBenefit,
        totalIncome,
        isYearlyCalculation,
        holidayAllowance
    } = calculateResults(formData);

    const childrenCount = parseInt(formData.childrenCount) || 0;
    const dependentsCount = parseInt(formData.dependentsCount) || 0;

    // Initialize rationale with default text if empty
    useEffect(() => {
        if (!rationale && !isEditingRationale) {
            const defaultRationale = generateDefaultRationale(
                formData.householdStatus,
                childrenCount,
                dependentsCount,
                baseAmount,
                childBenefit,
                dependentBenefit,
                totalIncome,
                isYearlyCalculation,
                holidayAllowance
            );
            setRationale(defaultRationale);
        }
    }, [formData, baseAmount, childBenefit, dependentBenefit, totalIncome, isYearlyCalculation, holidayAllowance]);

    const handleEditRationale = () => {
        setIsEditingRationale(!isEditingRationale);
    };

    return (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-medium text-vue-800">Onderbouwing van de berekening</h4>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleEditRationale}
                >
                    <Edit className="h-4 w-4 mr-1" />
                    {isEditingRationale ? "Opslaan" : "Bewerken"}
                </Button>
            </div>

            {isEditingRationale ? (
                <Textarea
                    value={rationale}
                    onChange={(e) => setRationale(e.target.value)}
                    placeholder="Voeg hier uitleg toe over hoe deze berekening tot stand is gekomen..."
                    className="min-h-[200px]"
                />
            ) : (
                <div className="bg-white p-4 rounded-md border whitespace-pre-line">
                    {rationale}
                </div>
            )}
        </div>
    );
};

export default RationaleSection;
