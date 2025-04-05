import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AlertCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormSectionProps } from './types';

const HouseholdSection: React.FC<FormSectionProps> = ({ formData, setFormData }) => {
    const handleSelectChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <h3 className="text-lg font-medium mb-4">Huishoudelijke situatie</h3>
            <div className="grid grid-cols-1 gap-6">
                <div className="form-group">
                    <div className="flex items-center justify-between mb-2">
                        <Label>Huishoudtype</Label>
                        <div className="tooltip">
                            <AlertCircle className="h-4 w-4 text-slate-400" />
                            <span className="tooltip-text">Uw woonsituatie beïnvloedt het bedrag van de bijstandsuitkering waarvoor u in aanmerking komt</span>
                        </div>
                    </div>
                    <RadioGroup
                        defaultValue="single"
                        value={formData.householdStatus}
                        onValueChange={(value) => handleSelectChange('householdStatus', value)}
                        className="flex flex-col space-y-1"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="single" id="single" />
                            <Label htmlFor="single">Alleenstaand</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="married" id="married" />
                            <Label htmlFor="married">Getrouwd</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cohabiting" id="cohabiting" />
                            <Label htmlFor="cohabiting">Samenwonend</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="form-group">
                        <div className="flex items-center justify-between mb-2">
                            <Label htmlFor="childrenCount">Aantal kinderen</Label>
                            <div className="tooltip">
                                <AlertCircle className="h-4 w-4 text-slate-400" />
                                <span className="tooltip-text">Kinderen onder de 18 jaar die bij u wonen</span>
                            </div>
                        </div>
                        <Select
                            value={formData.childrenCount}
                            onValueChange={(value) => handleSelectChange('childrenCount', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecteer" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0">0</SelectItem>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="form-group">
                        <div className="flex items-center justify-between mb-2">
                            <Label htmlFor="dependentsCount">Aantal afhankelijken</Label>
                            <div className="tooltip">
                                <AlertCircle className="h-4 w-4 text-slate-400" />
                                <span className="tooltip-text">Andere personen die financieel van u afhankelijk zijn</span>
                            </div>
                        </div>
                        <Select
                            value={formData.dependentsCount}
                            onValueChange={(value) => handleSelectChange('dependentsCount', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Selecteer" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0">0</SelectItem>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseholdSection;
