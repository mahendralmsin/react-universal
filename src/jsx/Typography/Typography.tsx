import React, { ReactNode, CSSProperties } from 'react';

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
  className?: string; // Add className prop to allow passing custom classes
  style?: CSSProperties; // Separate style prop for CSS properties
};

const Typography = ({ tag = 'p', children, className, style }: TypographyProps) => {
  const Tag = tag || 'p'; // Default to 'p' if tag is not provided or invalid
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};

export default Typography;