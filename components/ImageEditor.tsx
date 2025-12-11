import React, { useState } from 'react';
import { editImageWithGemini } from '../services/geminiService';
import { Button } from './Button';

export const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResultImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    setError(null);

    try {
      const generatedImage = await editImageWithGemini(selectedImage, prompt);
      setResultImage(generatedImage);
    } catch (err) {
      setError("Error al generar la imagen. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  
};