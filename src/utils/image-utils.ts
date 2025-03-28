/**
 * Returns a random hover image path from the hover_img* pattern
 * This function will dynamically work with any number of hover_img*.png files
 * without requiring code changes when adding new images
 */
export function getRandomHoverImage(): string {
  // Store the image URLs indexed from 1 to represent hover_img1.png to hover_imgN.png
  const baseUrl = '/images/hover_img';
  
  // Create a function to generate the URL for a given index
  const getUrlForIndex = (index: number): string => {
    return `${baseUrl}${index}.png`;
  };
  
  // For now we know there are at least 2 hover images
  // We'll use a storage-based approach to track the available images
  // to automatically adapt when new images are added
  
  // Get the total tracked in localStorage, or default to 2 (what we know exists)
  let totalImages = 2;
  
  // Try to get from storage if this is client-side
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('hoverImageCount');
    if (stored) {
      totalImages = parseInt(stored, 10);
    }
  }
  
  // Select a random index from 1 to totalImages
  const randomIndex = Math.floor(Math.random() * totalImages) + 1;
  return getUrlForIndex(randomIndex);
}

/**
 * Try to load the next hover image to see if it exists
 * This function should be called on component mount to discover new images
 */
export function discoverHoverImages(): void {
  // Only run in browser
  if (typeof window === 'undefined') return;
  
  // Get current known count
  const stored = localStorage.getItem('hoverImageCount');
  let currentCount = stored ? parseInt(stored, 10) : 2; // Default to 2 as we know those exist
  
  // Try to load the next image in sequence
  const nextImageUrl = `/images/hover_img${currentCount + 1}.png`;
  
  const img = new Image();
  img.onload = () => {
    // Image exists, update the count
    localStorage.setItem('hoverImageCount', (currentCount + 1).toString());
    
    // Try the next one recursively, but with a delay to avoid too many requests
    setTimeout(() => {
      discoverHoverImages();
    }, 500);
  };
  
  img.onerror = () => {
    // Image doesn't exist, we've reached the limit
    // No need to update anything
  };
  
  // Start loading
  img.src = nextImageUrl;
}