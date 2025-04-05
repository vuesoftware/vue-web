import React from 'react';
import { FileText } from 'lucide-react';
import { FormData } from '../types';

interface DocumentsTabProps {
    formData: FormData;
}

const DocumentsTab: React.FC<DocumentsTabProps> = ({ formData }) => {
    return (
        <div>
            <h4 className="font-medium mb-2">Gebruikte documenten voor de berekening</h4>
            {formData.documents && formData.documents.length > 0 ? (
                <div className="space-y-2 border rounded-md divide-y">
                    {formData.documents.map((doc, i) => (
                        <div key={i} className="flex items-center p-3">
                            <FileText className="h-5 w-5 text-blue-500 mr-2" />
                            <div>
                                <p className="text-sm font-medium">{doc.name}</p>
                                <p className="text-xs text-muted-foreground">
                                    {(doc.size / 1024 / 1024).toFixed(2)}MB • {doc.type.split('/')[1].toUpperCase()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-muted-foreground italic">Geen documenten geüpload</p>
            )}
        </div>
    );
};

export default DocumentsTab;