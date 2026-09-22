"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type LoadingImageProps = ImageProps;

export default function LoadingImage({ alt, className, fill, ...props }: LoadingImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <span className={`image-loading-shell${fill ? " image-loading-shell-fill" : ""}`}>
      {!isLoaded && <span className="image-loading-indicator" aria-hidden="true" />}
      <Image
        {...props}
        alt={alt}
        fill={fill}
        className={`${className ?? ""}${isLoaded ? " image-is-loaded" : ""}`.trim()}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
      />
    </span>
  );
}