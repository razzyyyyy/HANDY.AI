
import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  words: string[];
  delay?: number;
  deleteDelay?: number;
}

export const useTypewriter = ({ words, delay = 100, deleteDelay = 50 }: UseTypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? deleteDelay : delay);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, delay, deleteDelay]);

  return currentText;
};
