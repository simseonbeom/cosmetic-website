import Image from "next/image";
import { Parallax } from "@/components/motion/Parallax";

type Props = {
  src: string;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[4/5]". */
  aspect?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  preload?: boolean;
  /** Parallax lag as a fraction of scroll; omit for a static image. */
  parallax?: number;
};

/** Cover-fit image in a fixed-aspect box, the page's standard photo treatment. */
export function Figure({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  preload,
  parallax,
}: Props) {
  const img = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      preload={preload}
      className={`object-cover ${imgClassName}`}
    />
  );
  return (
    <div className={`relative block w-full overflow-hidden ${aspect} ${className}`}>
      {parallax ? (
        <Parallax fill speed={parallax} className="absolute inset-0">
          {img}
        </Parallax>
      ) : (
        img
      )}
    </div>
  );
}
