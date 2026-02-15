import * as THREE from "three";

function buildFileName(prefix: string): string {
  const iso = new Date().toISOString().replace(/[:.]/g, "-");
  return `${prefix}_${iso}.png`;
}

function triggerDownload(href: string, fileName: string): void {
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName;
  link.click();
}

export function capturePng(renderer: THREE.WebGLRenderer, prefix: string): Promise<void> {
  const canvas = renderer.domElement;
  const fileName = buildFileName(prefix);

  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          triggerDownload(url, fileName);
          URL.revokeObjectURL(url);
          resolve();
          return;
        }

        triggerDownload(canvas.toDataURL("image/png"), fileName);
        resolve();
      },
      "image/png",
      1.0
    );
  });
}
