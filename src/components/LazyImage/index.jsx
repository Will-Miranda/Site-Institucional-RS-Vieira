import React, { useState, useRef, useEffect } from 'react'

const LazyImage = ({ src, alt, className, placeholder = null }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`image-error ${className || ''}`}>
        {placeholder || (
          <div style={{ 
            width: '100%', 
            height: '200px', 
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}>
            Imagem não disponível
          </div>
        )}
      </div>
    )
  }

  return (
    <div ref={imgRef} className={`lazy-image-container ${className || ''}`}>
      {!isLoaded && (
        <div className="image-placeholder" style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666'
        }}>
          Carregando...
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            display: isLoaded ? 'block' : 'none',
            width: '100%',
            height: 'auto'
          }}
        />
      )}
    </div>
  )
}

export default LazyImage
