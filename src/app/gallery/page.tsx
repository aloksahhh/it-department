// app/gallery/page.tsx
import { GalleryMain } from '@/src/components/GalleryMain';
import { galleryImages } from '@/src/data/galleryData';

export default function GalleryPage() {
  return(
      <GalleryMain images={galleryImages} />
  )
  
  




}