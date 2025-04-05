import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FormData } from '../types';
import { calculateResults, formatCurrency } from '../utils/calculationutils.ts';

interface OverviewTabProps {
  formData: FormData;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ formData }) => {
  const {
    baseAmount,
    childBenefit,
    dependentBenefit,
    totalIncome,
    calculatedMonthlyBenefit,
    calculatedYearlyBenefit,
    holidayAllowance,
    isYearlyCalculation
  } = calculateResults(formData);

  const childrenCount = parseInt(formData.childrenCount) || 0;
  const dependentsCount = parseInt(formData.dependentsCount) || 0;

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead colSpan={2} className="text-center bg-slate-50">Overzicht bijstandsberekening</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Huishoudtype</TableCell>
            <TableCell>
              {formData.householdStatus === 'single' ? 'Alleenstaand' :
               formData.householdStatus === 'married' ? 'Getrouwd' : 'Samenwonend'}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Afhankelijken</TableCell>
            <TableCell>
              {childrenCount} kinderen, {dependentsCount} andere afhankelijken
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Totaal maandelijks inkomen</TableCell>
            <TableCell>{formatCurrency(totalIncome)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">Basis bijstandsbedrag</TableCell>
            <TableCell>{formatCurrency(baseAmount)}</TableCell>
          </TableRow>

          {childrenCount > 0 && (
            <TableRow>
              <TableCell className="font-medium">Toeslag voor kinderen</TableCell>
              <TableCell>{formatCurrency(childBenefit)}</TableCell>
            </TableRow>
          )}

          {dependentsCount > 0 && (
            <TableRow>
              <TableCell className="font-medium">Toeslag voor afhankelijken</TableCell>
              <TableCell>{formatCurrency(dependentBenefit)}</TableCell>
            </TableRow>
          )}

          <TableRow className="bg-vue-50">
            <TableCell className="font-medium text-vue-800">Geschatte maandelijkse bijstandsuitkering</TableCell>
            <TableCell className="font-bold text-vue-700">{formatCurrency(calculatedMonthlyBenefit)}</TableCell>
          </TableRow>

          {isYearlyCalculation && (
            <>
              <TableRow>
                <TableCell className="font-medium">Jaarlijks basisbedrag (12 maanden)</TableCell>
                <TableCell>{formatCurrency(calculatedMonthlyBenefit * 12)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Vakantietoeslag (8%)</TableCell>
                <TableCell>{formatCurrency(holidayAllowance)}</TableCell>
              </TableRow>

              <TableRow className="bg-vue-100">
                <TableCell className="font-medium text-vue-800">Geschatte jaarlijkse bijstandsuitkering</TableCell>
                <TableCell className="font-bold text-vue-800">{formatCurrency(calculatedYearlyBenefit + holidayAllowance)}</TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default OverviewTab;
