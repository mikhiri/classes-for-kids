import { useState, useEffect, memo, useCallback } from "react";

const PhotoGallery = () => {
  const photos = [
    { src: "/img/DSC_9475.jpg", alt: "Educational activities for kids" },
    { src: "/img/DSC_9482.jpg", alt: "Children learning" },
    { src: "/img/DSC_9496.jpg", alt: "Interactive learning session" },
    { src: "/img/DSC_9502.jpg", alt: "Kids in class" },
    { src: "/img/DSC_9508.jpg", alt: "Educational activities" },
    { src: "/img/DSC_9511.jpg", alt: "Learning environment" },
    { src: "/img/DSC_9522.jpg", alt: "Children's education" },
    { src: "/img/DSC_9593.jpg", alt: "Classroom activities" },
    { src: "/img/DSC_9642.jpg", alt: "Kids learning together" },
    { src: "/img/DSC_9718.jpg", alt: "Educational moments" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Preload all images on component mount
  useEffect(() => {
    photos.forEach((photo) => {
      const img = new Image();
      img.src = photo.src;
    });
  }, []);

  const handlePrevious = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  // Handle touch events for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left, go to next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right, go to previous
      handlePrevious();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Featured Image */}
        <div
          className="mb-6 relative overflow-hidden rounded-xl shadow-strong aspect-video bg-gray-100 group touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Render all images but only show the selected one */}
          {photos.map((photo, index) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                index === selectedIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ pointerEvents: index === selectedIndex ? "auto" : "none" }}
            />
          ))}

          {/* Left Chevron */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-3 shadow-strong transition-all duration-300"
            aria-label="Previous photo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Right Chevron */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-foreground rounded-full p-3 shadow-strong transition-all duration-300"
            aria-label="Next photo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Miniatures Grid */}
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-3">
          {photos.map((photo, index) => (
            <Thumbnail
              key={photo.src}
              photo={photo}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Memoized thumbnail component to prevent unnecessary re-renders
const Thumbnail = memo(({ photo, isSelected, onClick }: {
  photo: { src: string; alt: string };
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`aspect-square overflow-hidden rounded-lg transition-all duration-300 ${
        isSelected
          ? "ring-4 ring-primary shadow-strong scale-105"
          : "shadow-medium hover:shadow-strong hover:scale-105 opacity-70 hover:opacity-100"
      }`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-full object-cover"
      />
    </button>
  );
});

Thumbnail.displayName = "Thumbnail";

export default PhotoGallery;
