export type ShelterImage = {
  src: string;
  alt: string;
};

const MAX_IMAGES = 10;

const SHELTER_FILES = Array.from({ length: MAX_IMAGES }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  return `shelter-${num}.jpg`;
});

export function getShelterImages(
  imageFolder = "",
  altPrefixes: readonly string[] = [],
): ShelterImage[] {
  const basePath = imageFolder ? `/images/${imageFolder}` : "/images";

  return SHELTER_FILES.map((file, index) => ({
    src: `${basePath}/${file}`,
    alt: altPrefixes.length
      ? `${altPrefixes[index % altPrefixes.length]} — 실제 보호소 사진 ${index + 1}`
      : `보호소 사진 ${index + 1}`,
  }));
}

export function getFirstShelterImagePath(imageFolder = ""): string {
  const basePath = imageFolder ? `/images/${imageFolder}` : "/images";
  return `${basePath}/${SHELTER_FILES[0]}`;
}
