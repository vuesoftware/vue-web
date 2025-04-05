import { FormData } from "../types";

// Format currency values
export const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(value);
};

// Calculate all the results based on formData
export const calculateResults = (formData: FormData) => {
    // Convert income values to numbers
    const employmentIncome = parseFloat(formData.employmentIncome) || 0;
    const socialSecurityIncome = parseFloat(formData.socialSecurityIncome) || 0;
    const pensionIncome = parseFloat(formData.pensionIncome) || 0;
    const otherIncome = parseFloat(formData.otherIncome) || 0;

    const totalIncome = employmentIncome + socialSecurityIncome + pensionIncome + otherIncome;
    const isYearlyCalculation = formData.calculationType === 'yearly';

    // Calculate bijstand based on household status
    // These are simplified example calculations and not accurate to real-world rules
    let baseAmount = 0;

    switch(formData.householdStatus) {
        case 'single':
            baseAmount = 1052.32; // Example amount for singles
            break;
        case 'married':
        case 'cohabiting':
            baseAmount = 1503.31; // Example amount for couples
            break;
        default:
            baseAmount = 1052.32;
    }

    // Adjust for children
    const childrenCount = parseInt(formData.childrenCount) || 0;
    const dependentsCount = parseInt(formData.dependentsCount) || 0;
    const childBenefit = childrenCount > 0 ? (childrenCount * 75) : 0;
    const dependentBenefit = dependentsCount > 0 ? (dependentsCount * 50) : 0;

    // Calculate final amount (simplified example)
    let calculatedMonthlyBenefit = baseAmount + childBenefit + dependentBenefit - totalIncome;
    calculatedMonthlyBenefit = calculatedMonthlyBenefit < 0 ? 0 : Math.round(calculatedMonthlyBenefit * 100) / 100;

    // Calculate yearly benefit if applicable
    const calculatedYearlyBenefit = calculatedMonthlyBenefit * 12;

    // Calculate holiday allowance (8% of yearly benefit)
    const holidayAllowance = calculatedYearlyBenefit * 0.08;

    return {
        baseAmount,
        childBenefit,
        dependentBenefit,
        totalIncome,
        calculatedMonthlyBenefit,
        calculatedYearlyBenefit,
        holidayAllowance,
        isYearlyCalculation
    };
};

// Generate monthly detail data for yearly calculations
export const generateMonthlyData = (calculatedMonthlyBenefit: number, calculationDate?: Date) => {
    const months = [];
    const currentDate = calculationDate || new Date();
    const year = currentDate.getFullYear();

    for (let i = 0; i < 12; i++) {
        const month = new Date(year, i, 1);
        const monthName = new Intl.DateTimeFormat('nl-NL', { month: 'long' }).format(month);

        // Create some slight variations for demonstration
        const variation = (Math.random() * 50) - 25; // Between -25 and +25
        const monthlyAmount = Math.max(0, calculatedMonthlyBenefit + variation);

        months.push({
            month: monthName,
            amount: monthlyAmount
        });
    }

    return months;
};

// Generate default rationale text based on calculation factors
export const generateDefaultRationale = (
    householdStatus: string,
    childrenCount: number,
    dependentsCount: number,
    baseAmount: number,
    childBenefit: number,
    dependentBenefit: number,
    totalIncome: number,
    isYearlyCalculation: boolean,
    holidayAllowance: number
): string => {
    let statusText = '';
    switch(householdStatus) {
        case 'single':
            statusText = 'alleenstaande';
            break;
        case 'married':
            statusText = 'getrouwde persoon';
            break;
        case 'cohabiting':
            statusText = 'samenwonende persoon';
            break;
        default:
            statusText = 'alleenstaande';
    }

    let rationaleText = `De berekening is gebaseerd op uw status als ${statusText} met ${childrenCount} kinderen en ${dependentsCount} andere afhankelijken.\n\n`;
    rationaleText += `Het basisbedrag voor uw situatie is ${formatCurrency(baseAmount)} per maand.\n\n`;

    if (childrenCount > 0) {
        rationaleText += `Er is een toeslag van ${formatCurrency(childBenefit)} toegevoegd vanwege uw ${childrenCount} kinderen.\n`;
    }

    if (dependentsCount > 0) {
        rationaleText += `Er is een toeslag van ${formatCurrency(dependentBenefit)} toegevoegd vanwege uw ${dependentsCount} afhankelijken.\n\n`;
    }

    rationaleText += `Uw totale maandelijkse inkomen van ${formatCurrency(totalIncome)} is van dit bedrag afgetrokken.\n\n`;

    if (isYearlyCalculation) {
        rationaleText += `Deze maandelijkse berekening is gebaseerd op een gemiddelde van de geüploade inkomensdocumenten en vermenigvuldigd met 12 voor de jaarlijkse schatting.\n\n`;
        rationaleText += `De vakantietoeslag van 8% (${formatCurrency(holidayAllowance)}) is inbegrepen bij het totale jaarlijkse bedrag.\n\n`;
    }

    rationaleText += `De berekening is een indicatie en kan afwijken van het definitieve bedrag dat door de gemeente wordt vastgesteld.`;

    return rationaleText;
};
