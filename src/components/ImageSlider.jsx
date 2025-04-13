import { useState, useEffect, useRef } from 'preact/hooks';

export default function ImageSlider({ images, sliderNumber, }) {
    const [index, setIndex] = useState(0);
    const touchStartX = useRef(null);

    // ✅ Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000); // 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    // ✅ Swipe gesture
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (diff > 50) prev();
        if (diff < -50) next();
        touchStartX.current = null;
    };

    // ✅ Navigation buttons
    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);

    return (
        <div
            class={`preact-slider ${sliderNumber}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div class="slider-image">
                <img src={images[index].src} alt={`Slide ${index}`} />
            </div>

            {/* Arrows */}
            <div class="slider-buttons">
                <button onClick={prev}>‹</button>
                <button onClick={next}>›</button>
            </div>

            {/* Dots */}
            <div class="slider-dots">
                {images.map((_, i) => (
                    <button
                        key={i}
                        class={`dot ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
