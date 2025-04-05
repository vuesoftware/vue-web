import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AlertCircle, CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { FormSectionProps } from './types';

const PersonalDetailsSection: React.FC<FormSectionProps> = ({ formData, setFormData }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDateChange = (date: Date | undefined) => {
        setFormData({
            ...formData,
            calculationDate: date
        });
    };

    const handleCalculationTypeChange = (type: 'monthly' | 'yearly') => {
        setFormData({
            ...formData,
            calculationType: type
        });
    };

    return (
        <div>
            <h3 className="text-lg font-medium mb-4">Persoonlijke gegevens</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="form-group">
                    <Label htmlFor="name">Volledige naam</Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Vul uw volledige naam in"
                    />
                </div>

                <div className="form-group">
                    <Label htmlFor="dateOfBirth">Geboortedatum</Label>
                    <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <Label htmlFor="nationality">Nationaliteit</Label>
                    <Input
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        required
                        placeholder="Vul uw nationaliteit in"
                    />
                </div>

                <div className="form-group">
                    <Label>Type berekening</Label>
                    <RadioGroup
                        value={formData.calculationType}
                        onValueChange={(value: 'monthly' | 'yearly') => handleCalculationTypeChange(value)}
                        className="flex flex-col space-y-1 mt-2"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="monthly" id="monthly" />
                            <Label htmlFor="monthly">Maandelijkse berekening</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yearly" id="yearly" />
                            <Label htmlFor="yearly">Jaarlijkse berekening</Label>
                            <div className="tooltip">
                                <AlertCircle className="h-4 w-4 text-slate-400" />
                                <span className="tooltip-text">Voor jaarlijkse berekeningen zijn minimaal 3 inkomensdocumenten per werkgever vereist</span>
                            </div>
                        </div>
                    </RadioGroup>
                </div>

                <div className="form-group">
                    <Label htmlFor="calculationDate">
                        {formData.calculationType === 'monthly' ? 'Berekeningsmaand' : 'Berekeningsjaar'}
                    </Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="calculationDate"
                                variant="outline"
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !formData.calculationDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {formData.calculationDate ? (
                                    formData.calculationType === 'monthly'
                                        ? format(formData.calculationDate, "MMMM yyyy")
                                        : format(formData.calculationDate, "yyyy")
                                ) : (
                                    <span>Kies een {formData.calculationType === 'monthly' ? 'maand' : 'jaar'}</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={formData.calculationDate}
                                onSelect={handleDateChange}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                                // Voor yearly calculation willen we alleen het jaar tonen
                                captionLayout={formData.calculationType === 'yearly' ? 'buttons' : 'dropdown'}
                                fromYear={2020}
                                toYear={2030}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetailsSection;
