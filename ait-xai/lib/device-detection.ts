/**
 * Device detection utilities for performance optimization
 */

export interface DeviceCapabilities {
  isMobile: boolean;
  isLowEnd: boolean;
  supportsWebGL: boolean;
  hardwareConcurrency: number;
  devicePixelRatio: number;
}

export function detectDeviceCapabilities(): DeviceCapabilities {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      isLowEnd: false,
      supportsWebGL: false,
      hardwareConcurrency: 4,
      devicePixelRatio: 1,
    };
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  const hardwareConcurrency = navigator.hardwareConcurrency || 4;

  // Consider device low-end if it has fewer than 4 CPU cores
  const isLowEnd = isMobile && hardwareConcurrency < 4;

  const supportsWebGL = checkWebGLSupport();

  const devicePixelRatio = window.devicePixelRatio || 1;

  return {
    isMobile,
    isLowEnd,
    supportsWebGL,
    hardwareConcurrency,
    devicePixelRatio,
  };
}

function checkWebGLSupport(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  } catch (e) {
    return false;
  }
}

export function getParticleCount(capabilities: DeviceCapabilities): number {
  if (!capabilities.supportsWebGL) return 0;
  if (capabilities.isLowEnd) return 1000;
  if (capabilities.isMobile) return 2000;
  return 10000;
}

export function getParticleSize(capabilities: DeviceCapabilities): number {
  if (capabilities.isMobile) return 3.0;
  return 2.0;
}
