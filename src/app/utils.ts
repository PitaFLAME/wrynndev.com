import { useState, useEffect } from "react";

const IMAGE_PATHS = {
  home: {
    mountain: {
      mobile: '/assets/landing/mountain_v.png',
      desktop: '/assets/landing/mountain.png',
    },
    mountainBlur: {
      mobile: '/assets/landing/mountain_v_blur.png',
      desktop: '/assets/landing/mountain_blur.jpg',
    },
    samir: {
      mobile: '/assets/landing/samir_v.png',
      desktop: '/assets/landing/samir.jpg',
    },
    sand: {
      mobile: '/assets/landing/sand_v.png',
      desktop: '/assets/landing/sand.jpg',
    },
    blackbird: {
      mobile: '/assets/landing/blackbird_v.png',
      desktop: '/assets/landing/blackbird.jpg',
    },
  },
  services: {
    mountain: {
      mobile: '/assets/services/mountain_v.jpg',
      desktop: '/assets/services/mountain.jpg',
    },
    mountainBlur: {
      mobile: '/assets/services/mountain_v_blur.jpg',
      desktop: '/assets/services/mountain_blur.jpg',
    },
    stepping: {
      mobile: '/assets/services/stepping_v.jpg',
      desktop: '/assets/services/stepping.jpg',
    },
  },
  about: {
    mountain: {
      mobile: '/assets/about/mountain_v.jpg',
      desktop: '/assets/about/mountain.jpg',
    },
    mountainBlur: {
      mobile: '/assets/about/mountain_v_blur.jpg',
      desktop: '/assets/about/mountain_blur.jpg',
    },
  },
  contact: {
    vision: {
      mobile: '/assets/contact/vision_v.jpg',
      desktop: '/assets/contact/vision.jpg',
    },
    visionBlur: {
      mobile: '/assets/contact/vision_v_blur.jpg',
      desktop: '/assets/contact/vision_blur.jpg',
    },
    ledger: '/assets/contact/ledger.jpg',
  },
};

type ResponsiveImage = { mobile: string; desktop: string };

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);
  return isMobile;
}

export function useImagePath(
  section: keyof typeof IMAGE_PATHS,
  imageName: string
) {
  const isMobile = useIsMobile();
  const sectionImages = IMAGE_PATHS[section];
  if (!sectionImages) return '';
  const image = sectionImages[imageName as keyof typeof sectionImages];
  if (!image) return '';
  if (typeof image === 'string') return image;
  if (
    typeof image === 'object' &&
    image !== null &&
    'mobile' in image &&
    'desktop' in image
  ) {
    return isMobile ? (image as ResponsiveImage).mobile : (image as ResponsiveImage).desktop;
  }
  return '';
}

export { IMAGE_PATHS }