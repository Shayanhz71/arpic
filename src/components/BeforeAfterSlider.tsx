
import { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  heading?: string;
  description?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  heading,
  description
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const calculatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    return Math.min(Math.max(position, 0), 100);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newPosition = calculatePosition(e.clientX);
    if (newPosition !== undefined) {
      setSliderPosition(newPosition);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    
    const touch = e.touches[0];
    const newPosition = calculatePosition(touch.clientX);
    if (newPosition !== undefined) {
      setSliderPosition(newPosition);
    }
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const onMouseUp = () => handleMouseUp();
    const onTouchMove = (e: TouchEvent) => handleTouchMove(e);
    const onTouchEnd = () => handleTouchEnd();

    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      document.addEventListener("touchend", onTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col items-center">
      {heading && <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>}
      {description && <p className="text-lg text-gray-600 mb-8 max-w-3xl text-center">{description}</p>}
      
      <div ref={containerRef} className="relative w-full max-w-4xl h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
        {/* Before image (full width) */}
        <div className="absolute top-0 right-0 w-full h-full">
          <img src={beforeImage} alt="قبل از ویرایش" className="w-full h-full object-cover" />
          <span className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md">
            قبل
          </span>
        </div>

        {/* After image (partial width based on slider) */}
        <div 
          className="absolute top-0 right-0 h-full overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={afterImage} 
            alt="بعد از ویرایش" 
            className="h-full object-cover absolute top-0 right-0"
            style={{ 
              width: `${100 / sliderPosition * 100}%`,
              maxWidth: 'none',
              minWidth: '100%'
            }} 
          />
          <span className="absolute top-4 left-4 bg-[#78156F] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
            بعد
          </span>
        </div>

        {/* Slider control */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" 
          style={{ left: `calc(${sliderPosition}% - 0.5px)` }} 
          onMouseDown={handleMouseDown} 
          onTouchStart={handleTouchStart}
        >
          {/* Slider handle */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize" 
            onMouseDown={handleMouseDown} 
            onTouchStart={handleTouchStart}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12H3M10 5L3 12L10 19M14 5L21 12L14 19"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
