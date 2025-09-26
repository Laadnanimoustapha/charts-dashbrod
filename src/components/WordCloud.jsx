import React from 'react';

const WordCloud = () => {
  const words = [
    {text: 'JavaScript', size: 30},
    {text: 'HTML', size: 25},
    {text: 'CSS', size: 25},
    {text: 'React', size: 20},
    {text: 'Vue', size: 18},
    {text: 'Angular', size: 15},
    {text: 'Node.js', size: 15},
    {text: 'Python', size: 12},
    {text: 'Java', size: 10},
    {text: 'C#', size: 8}
  ];

  return (
    <div className="word-cloud text-center p-4 flex items-center justify-center flex-wrap">
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block mx-1 my-1 cursor-pointer"
          style={{
            fontSize: `${word.size}px`,
            color: `hsl(${Math.random() * 360}, 70%, 50%)`
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default WordCloud;