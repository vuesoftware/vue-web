import React, { useState } from 'react';
import { Upload, X, CheckCircle, AlertCircle, Paperclip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface FileUploadProps {
  label: string;
  description?: string;
  onFileChange: (file: File[] | null) => void;
  accept?: string;
  maxSizeInMB?: number;
  tooltip?: string;
  multiple?: boolean;
  minFiles?: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
                                                 label,
                                                 description,
                                                 onFileChange,
                                                 accept = "application/pdf,image/jpeg,image/png",
                                                 maxSizeInMB = 5,
                                                 tooltip,
                                                 multiple = false,
                                                 minFiles = 0
                                               }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    validateAndSetFiles(selectedFiles);
  };

  const validateAndSetFiles = (selectedFiles: File[]) => {
    if (selectedFiles.length === 0 && files.length === 0) {
      setError(null);
      setFiles([]);
      onFileChange(null);
      return;
    }

    let newFiles = [...files];
    let hasErrors = false;

    // Validate each file
    for (const file of selectedFiles) {
      // Check file size
      if (file.size > maxSizeInBytes) {
        setError(`Bestand '${file.name}' is te groot. Maximale grootte is ${maxSizeInMB}MB.`);
        hasErrors = true;
        continue;
      }

      // Check file type
      const acceptedTypes = accept.split(',');
      if (!acceptedTypes.some(type => file.type.includes(type.replace('application/', '').replace('image/', '')))) {
        setError(`Ongeldig bestandstype voor '${file.name}'. Geaccepteerde types: ${accept.replace(/application\/|image\//g, '')}`);
        hasErrors = true;
        continue;
      }

      // If we're not allowing multiple files, replace the array
      if (!multiple) {
        newFiles = [file];
      } else {
        // Otherwise add to the array if it doesn't exist already
        if (!newFiles.some(f => f.name === file.name)) {
          newFiles.push(file);
        }
      }
    }

    if (!hasErrors) {
      setError(null);
    }

    // Check if we meet minimum requirements
    if (minFiles > 0 && newFiles.length < minFiles) {
      setError(`U moet minimaal ${minFiles} bestanden uploaden.`);
    } else {
      setFiles(newFiles);
      onFileChange(newFiles.length > 0 ? newFiles : null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
    validateAndSetFiles(droppedFiles);
  };

  const removeFile = (fileName: string) => {
    const updatedFiles = files.filter(file => file.name !== fileName);
    setFiles(updatedFiles);
    onFileChange(updatedFiles.length > 0 ? updatedFiles : null);

    // Check if we meet minimum requirements after removal
    if (minFiles > 0 && updatedFiles.length < minFiles) {
      setError(`U moet minimaal ${minFiles} bestanden uploaden.`);
    } else {
      setError(null);
    }
  };

  return (
      <div className="form-group">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          {tooltip && (
              <div className="tooltip">
                <AlertCircle className="h-4 w-4 text-slate-400" />
                <span className="tooltip-text">{tooltip}</span>
              </div>
          )}
        </div>

        {description && (
            <p className="text-sm text-muted-foreground mb-2">{description}</p>
        )}

        {files.length === 0 ? (
            <div
                className={cn(
                    "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                    isDragging ? "border-vue-500 bg-vue-50" : "border-slate-200 hover:border-vue-400",
                    error ? "border-red-300 bg-red-50" : ""
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById(`file-upload-${label}`)?.click()}
            >
              <input
                  type="file"
                  id={`file-upload-${label}`}
                  className="hidden"
                  accept={accept}
                  onChange={handleFileChange}
                  multiple={multiple}
              />
              <div className="flex flex-col items-center justify-center gap-2">
                <Upload className="h-10 w-10 text-muted-foreground" />
                <p className="text-sm font-medium">
                  Sleep bestanden hierheen, of <span className="text-vue-600">klik om te bladeren</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Max bestandsgrootte: {maxSizeInMB}MB | Ondersteunde formaten: PDF, JPG, PNG
                  {multiple && <> | Meerdere bestanden toegestaan</>}
                  {minFiles > 0 && <> | Minimaal {minFiles} bestanden vereist</>}
                </p>
              </div>
            </div>
        ) : (
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium">Geüploade bestanden ({files.length})</h4>
                {multiple && (
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => document.getElementById(`file-upload-${label}`)?.click()}
                    >
                      <Paperclip className="h-4 w-4 mr-1" />
                      Meer toevoegen
                    </Button>
                )}
              </div>
              <div className="space-y-2">
                {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded border">
                      <div className="flex items-center overflow-hidden">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mr-2" />
                        <span className="text-sm truncate max-w-[200px]" title={file.name}>
                    {file.name}
                  </span>
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {(file.size / 1024 / 1024).toFixed(2)}MB
                        </Badge>
                      </div>
                      <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(file.name);
                          }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                ))}
              </div>
            </div>
        )}

        {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
        )}

        {minFiles > 0 && (
            <p className="mt-2 text-xs text-amber-600">
              <strong>Let op:</strong> Voor nauwkeurige jaarlijkse schattingen zijn minimaal {minFiles} bestanden vereist.
            </p>
        )}
      </div>
  );
};

export default FileUpload;
