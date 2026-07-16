import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

type DemoScreenshotProps = {
  src: string;
  alt: string;
  role: string;
  caption: string;
};

export function DemoScreenshot({ src, alt, role, caption }: DemoScreenshotProps) {
  const publicPath = src.startsWith("/") ? src.slice(1) : src;
  const isAvailable = existsSync(join(process.cwd(), "public", publicPath));

  return (
    <figure className="demo-screenshot">
      <div className="demo-browser-bar" aria-hidden="true">
        <span /><span /><span /><strong>Edora Education OS</strong>
      </div>
      <div className="demo-screenshot-viewport">
        {isAvailable ? (
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1000}
            sizes="(max-width: 768px) 100vw, 52vw"
            className="demo-screenshot-image"
          />
        ) : (
          <div className="demo-screenshot-placeholder" role="img" aria-label={`${role} platform screenshot placeholder`}>
            <span><ImageIcon aria-hidden="true" /></span>
            <strong>{role}</strong>
            <p>Platform screenshot coming soon</p>
            <small>Recommended: 1600 × 1000 pixels · WebP</small>
          </div>
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
