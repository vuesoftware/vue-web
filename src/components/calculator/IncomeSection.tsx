
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AlertCircle } from 'lucide-react';
import FileUpload from '@/components/ui/FileUpload';
import { FormSectionProps } from './types';

const IncomeSection: React.FC<FormSectionProps> = ({ formData, setFormData }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (files: File[] | null) => {
        setFormData({
            ...formData,
            documents: files
        });
    };

    // Determine minimum files required based on calculation type
    const getMinimumFilesRequired = () => {
        return formData.calculationType === 'yearly' ? 3 : 0;
    };

    return (
        <div>
            <h3 className="text-lg font-medium mb-4">
                Inkomen specificatie
                {formData.calculationType === 'yearly' && " (gemiddeld per maand)"}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="form-group">
                    <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="employmentIncome">
                            Inkomen uit werk (€/{formData.calculationType === 'monthly' ? 'maand' : 'maand gemiddeld'})
                        </Label>
                        <div className="tooltip">
                            <AlertCircle className="h-4 w-4 text-slate-400" />
                            <span className="tooltip-text">
                {formData.calculationType === 'monthly'
                    ? 'Netto maandelijks inkomen uit dienstverband'
                    : 'Gemiddelde netto maandelijkse inkomen uit dienstverband over het hele jaar'}
              </span>
                        </div>
                    </div>
                    <Input
                        id="employmentIncome"
                        name="employmentIncome"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.employmentIncome}
                        onChange={handleInputChange}
                        placeholder="0.00"
                    />
                </div>

                <div className="form-group">
                    <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="socialSecurityIncome">
                            Uitkeringen (€/{formData.calculationType === 'monthly' ? 'maand' : 'maand gemiddeld'})
                        </Label>
                        <div className="tooltip">
                            <AlertCircle className="h-4 w-4 text-slate-400" />
                            <span className="tooltip-text">Inkomen uit andere sociale uitkeringen</span>
                        </div>
                    </div>
                    <Input
                        id="socialSecurityIncome"
                        name="socialSecurityIncome"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.socialSecurityIncome}
                        onChange={handleInputChange}
                        placeholder="0.00"
                    />
                </div>

                <div className="form-group">
                    <Label htmlFor="pensionIncome">
                        Pensioeninkomen (€/{formData.calculationType === 'monthly' ? 'maand' : 'maand gemiddeld'})
                    </Label>
                    <Input
                        id="pensionIncome"
                        name="pensionIncome"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.pensionIncome}
                        onChange={handleInputChange}
                        placeholder="0.00"
                    />
                </div>

                <div className="form-group">
                    <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="otherIncome">
                            Overig inkomen (€/{formData.calculationType === 'monthly' ? 'maand' : 'maand gemiddeld'})
                        </Label>
                        <div className="tooltip">
                            <AlertCircle className="h-4 w-4 text-slate-400" />
                            <span className="tooltip-text">Alle andere regelmatige inkomsten die hierboven niet zijn vermeld</span>
                        </div>
                    </div>
                    <Input
                        id="otherIncome"
                        name="otherIncome"
                        type="number"
                        min="0"
                        step="0.01"
                        value={formData.otherIncome}
                        onChange={handleInputChange}
                        placeholder="0.00"
                    />
                </div>

                <div className="col-span-1 sm:col-span-2">
                    <FileUpload
                        label="Ondersteunende documenten"
                        description={`Upload inkomensbewijzen (zoals loonstroken, uitkeringsbrieven, enz.) ${
                            formData.calculationType === 'yearly' ? '- minimaal 3 documenten per werkgever voor jaarlijkse berekening' : ''
                        }`}
                        onFileChange={handleFileChange}
                        tooltip={`Documenten worden veilig verwerkt en alleen gebruikt voor verificatie van berekening. ${
                            formData.calculationType === 'yearly'
                                ? 'Voor een jaarlijkse berekening zijn minimaal 3 documenten nodig, bij voorkeur verspreid over het jaar.' : ''
                        }`}
                        multiple={true}
                        minFiles={getMinimumFilesRequired()}
                    />
                </div>
            </div>
        </div>
    );
};

export default IncomeSection;