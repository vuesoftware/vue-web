
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { format } from 'date-fns';
import { FormData } from '../types';
import { calculateResults, formatCurrency, generateMonthlyData } from '../utils/calculationutils.ts';

interface MonthlyDetailTabProps {
    formData: FormData;
}

const MonthlyDetailTab: React.FC<MonthlyDetailTabProps> = ({ formData }) => {
    const { calculatedMonthlyBenefit } = calculateResults(formData);
    const monthlyData = generateMonthlyData(calculatedMonthlyBenefit, formData.calculationDate);

    return (
        <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-2">
                Geschatte maandelijkse bijstandsuitkering voor het jaar {formData.calculationDate ? format(formData.calculationDate, 'yyyy') : new Date().getFullYear()}:
            </p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Maand</TableHead>
                        <TableHead>Geschat bedrag</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {monthlyData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.month}</TableCell>
                            <TableCell>{formatCurrency(item.amount)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow className="bg-vue-50">
                        <TableCell className="font-medium">Gemiddeld per maand</TableCell>
                        <TableCell className="font-bold">{formatCurrency(calculatedMonthlyBenefit)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default MonthlyDetailTab