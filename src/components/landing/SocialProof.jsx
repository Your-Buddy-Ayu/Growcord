import { useState, useEffect } from 'react';
import OptimizedImage from '../OptimizedImage';
import { imageHelper } from '@/lib/api';

const SocialProof = () => {
  const initialPeople = [
    { name: "Rajesh", imageId: 'social-proof-rajesh', location: "Mumbai" },
    { name: "Priya", imageId: 'social-proof-priya', location: "Delhi" },
    { name: "Amit", imageId: 'social-proof-amit', location: "Bangalore" },
    { name: "Sneha", imageId: 'social-proof-sneha', location: "Pune" },
    { name: "Vikram", imageId: 'social-proof-vikram', location: "Hyderabad" },
  ];

  // Initialize with fallback avatars for immediate display
  const [people, setPeople] = useState(
    initialPeople.map(person => ({
      ...person,
      avatar: imageHelper.getFromGenerated(person.imageId)
    }))
  );

  useEffect(() => {
    // Load avatar URLs from Testimonials (keep fallback if API fails)
    const loadImages = async () => {
      try {
        const peopleWithAvatars = await Promise.all(people.map(async person => {
          if (!person.imageId) return person;

          // Try Testimonials first
          const avatarUrl = await imageHelper.getFromTestimonials(person.name, person.imageId);

          return {
            ...person,
            avatar: avatarUrl || imageHelper.getFromGenerated(person.imageId)
          };
        }));
        setPeople(peopleWithAvatars);
      } catch (error) {
        console.error('Error loading social proof avatars:', error);
        // Keep fallback images on error
      }
    };
    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg">
      <div className="flex -space-x-3">
        {people.slice(0, 4).map((person, index) => (
          person.avatar ? (
            <OptimizedImage
              key={index}
              src={person.avatar}
              alt={person.name}
              className="w-10 h-10 rounded-full border-2 border-white shadow-lg object-cover"
              loading="lazy"
              width={40}
              height={40}
              sizes={{
                mobile: 'thumbnail',
                tablet: 'thumbnail',
                desktop: 'small'
              }}
              onError={(e) => {
                // Try reliable fallback (UI Avatars) if main image fails
                const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=random&color=fff&size=128`;
                if (e.target.src !== fallbackUrl) {
                  e.target.src = fallbackUrl;
                } else {
                  // If even UI Avatars fails (unlikely), hide
                  e.target.style.display = 'none';
                }
              }}
            />
          ) : (
            <div
              key={index}
              className="w-10 h-10 rounded-full border-2 border-white shadow-lg bg-gray-400 flex items-center justify-center text-white text-xs font-bold"
            >
              {person.name[0]}
            </div>
          )
        ))}
        <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
          +{people.length - 4}
        </div>
      </div>
      <div className="text-sm font-semibold text-white">
        <span className="text-orange-300">500+</span> businesses trust us
      </div>
    </div>
  );
};

export default SocialProof;

