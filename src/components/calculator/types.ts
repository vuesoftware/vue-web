
import { Dispatch, SetStateAction } from 'react';

export interface FormData {
    name: string;
    dateOfBirth: string;
    nationality: string;
    householdStatus: string;
    childrenCount: string;
    dependentsCount: string;
    employmentIncome: string;
    socialSecurityIncome: string;
    pensionIncome: string;
    otherIncome: string;
    documents: File[] | null;
    calculationDate: Date | undefined;
    calculationType: 'monthly' | 'yearly';
}

export interface FormSectionProps {
    formData: FormData;
    setFormData: Dispatch<SetStateAction<FormData>>;
    isSubmitting?: boolean;
}