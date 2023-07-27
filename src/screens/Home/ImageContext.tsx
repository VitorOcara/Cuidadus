import React, { createContext, useState } from 'react';

interface ImageContextType {
  image: string | null;
  setImage: (imageUrl: string) => void;
}

const ImageContext = createContext<ImageContextType>({
  image: null,
  setImage: () => {},
});

export default ImageContext;