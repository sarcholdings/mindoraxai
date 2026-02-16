import * as THREE from "three";

/**
 * Utilities for Three.js cleanup and optimization
 */

export function disposeGeometry(geometry: THREE.BufferGeometry | undefined) {
  if (geometry) {
    geometry.dispose();
  }
}

export function disposeMaterial(
  material: THREE.Material | THREE.Material[] | undefined
) {
  if (!material) return;

  if (Array.isArray(material)) {
    material.forEach((m) => m.dispose());
  } else {
    material.dispose();
  }
}

export function disposeTexture(texture: THREE.Texture | undefined) {
  if (texture) {
    texture.dispose();
  }
}

export function disposeObject(object: THREE.Object3D) {
  if (!object) return;

  // Traverse the object and dispose of all geometries, materials, and textures
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      disposeGeometry(child.geometry);
      disposeMaterial(child.material);
    }
  });

  // Remove from parent
  if (object.parent) {
    object.parent.remove(object);
  }
}

export function disposeScene(scene: THREE.Scene) {
  if (!scene) return;

  while (scene.children.length > 0) {
    const child = scene.children[0];
    disposeObject(child);
  }
}

/**
 * Convert hex color to RGB values (0-1 range)
 */
export function hexToRgb(hex: string): [number, number, number] {
  const color = new THREE.Color(hex);
  return [color.r, color.g, color.b];
}

/**
 * Normalize mouse position to -1 to 1 range
 */
export function normalizeMousePosition(
  clientX: number,
  clientY: number,
  width: number,
  height: number
): { x: number; y: number } {
  return {
    x: (clientX / width) * 2 - 1,
    y: -(clientY / height) * 2 + 1,
  };
}
