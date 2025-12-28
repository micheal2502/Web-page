// CodeTypingAnimation.jsx
import { useState, useEffect } from 'react';

const CodeTypingAnimation = () => {
  const [codeLines, setCodeLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullCode = [
    { prefix: 'const', variable: 'developerProfile', color: 'text-purple-400', type: 'declaration' },
    { prefix: 'name', value: '"Micheal"', color: 'text-cyan-400', type: 'property' },
    { prefix: 'role', value: '"Full Stack Developer"', color: 'text-cyan-400', type: 'property' },
    { prefix: 'location', value: '"Wellington, NZ"', color: 'text-cyan-400', type: 'property' },
    { prefix: 'const', variable: 'techStack', color: 'text-purple-400', type: 'declaration' },
    { prefix: 'frontend', value: '["React", "TypeScript", "Next.js"]', color: 'text-cyan-400', type: 'property' },
    { prefix: 'backend', value: '["Node.js", "Express", "MongoDB"]', color: 'text-cyan-400', type: 'property' },
    { prefix: 'tools', value: '["Git", "Docker", "AWS"]', color: 'text-cyan-400', type: 'property' },
    { prefix: 'const', variable: 'currentFocus', color: 'text-purple-400', type: 'declaration' },
    { prefix: 'projects', value: '["Real-time Apps", "AI Integration", "Web3"]', color: 'text-cyan-400', type: 'property' },
  ];

  useEffect(() => {
    const typingSpeed = 30;
    const pauseBetweenLines = 500;

    const typeNextLine = () => {
      if (currentLine < fullCode.length) {
        if (currentChar < getLineLength(fullCode[currentLine])) {
          const timer = setTimeout(() => {
            setCurrentChar(prev => prev + 1);
          }, typingSpeed);
          return () => clearTimeout(timer);
        } else {
          const timer = setTimeout(() => {
            setCodeLines(prev => [...prev, fullCode[currentLine]]);
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
          }, pauseBetweenLines);
          return () => clearTimeout(timer);
        }
      } else {
        // Loop animation after 3 seconds
        const timer = setTimeout(() => {
          setCodeLines([]);
          setCurrentLine(0);
          setCurrentChar(0);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };

    const timer = setTimeout(typeNextLine, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentLine, currentChar]);

  const getLineLength = (line) => {
    if (line.type === 'declaration') {
      return `const ${line.variable} = {`.length;
    } else {
      return `  ${line.prefix}: ${line.value},`.length;
    }
  };

  const getCurrentLineText = () => {
    if (currentLine >= fullCode.length) return '';
    
    const line = fullCode[currentLine];
    if (line.type === 'declaration') {
      const text = `const ${line.variable} = {`;
      return text.substring(0, currentChar);
    } else {
      const text = `  ${line.prefix}: ${line.value},`;
      return text.substring(0, currentChar);
    }
  };

  return (
    <div className="font-mono text-sm">
      <div className="text-gray-500 mb-4">// My Developer Toolkit — TypeScript</div>
      
      <div className="space-y-1">
        {/* Already typed lines */}
        {codeLines.map((line, index) => (
          <div key={index} className="flex">
            {line.type === 'declaration' ? (
              <>
                <span className="text-purple-400">{line.prefix}</span>
                <span className="text-gray-300"> </span>
                <span className="text-yellow-400">{line.variable}</span>
                <span className="text-gray-300"> = {"{"}</span>
              </>
            ) : (
              <>
                <span className="text-gray-300">  </span>
                <span className="text-cyan-400">{line.prefix}</span>
                <span className="text-gray-300">: </span>
                <span className="text-green-400">{line.value}</span>
                <span className="text-gray-300">,</span>
              </>
            )}
          </div>
        ))}
        
        {/* Currently typing line */}
        {currentLine < fullCode.length && (
          <div className="flex">
            {getCurrentLineText()}
            <span className="animate-pulse">▌</span>
          </div>
        )}
        
        {/* Closing brace when appropriate */}
        {currentLine === 4 && (
          <div className="text-gray-300">{"}"};</div>
        )}
        {currentLine === 8 && (
          <>
            <div className="text-gray-300">{"}"};</div>
            <div className="mt-4 border-l-2 border-blue-500 pl-4 bg-blue-500/10 py-2 rounded-r-lg">
              <div className="text-gray-400">// Running build...</div>
              <div className="text-green-400">✓ Compiled successfully</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CodeTypingAnimation;
