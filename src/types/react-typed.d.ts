declare module 'react-typed' {
  import { Component } from 'react';

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    [key: string]: any;
  }

  const Typed: React.FC<TypedProps>;
  export default Typed;
} 