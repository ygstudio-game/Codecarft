import { useEffect, useState } from 'react';

export function DecryptedText({ text, className = '', speed = 50 }) {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(true);

  useEffect(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            // Keep spaces as they are
            if (char === ' ') return ' ';
            
            // If the iteration has passed this index, show the actual character
            if (index < iteration) {
              return text[index];
            }
            
            // Otherwise, show a random character from the set
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsDecrypting(false);
      }

      // Increase iteration fractional to slow down the "reveal" compared to the shuffle
      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayText}
      {isDecrypting && (
        <span className="animate-pulse text-[--logic-blue]">|</span>
      )}
    </span>
  );
}