import { useState } from 'react';

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholder: string;
}

export default function BlurImage({ placeholder, className = '', src, alt, ...rest }: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  // Extract any rounded-* classes from className to apply to the wrapper too
  const roundedMatch = className.match(/rounded-\S+/g) ?? [];
  const wrapperRounded = roundedMatch.join(' ');

  return (
    <div
      className={`relative overflow-hidden ${wrapperRounded}`}
      style={{ background: `url(${placeholder}) center/cover no-repeat` }}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        {...rest}
      />
    </div>
  );
}
