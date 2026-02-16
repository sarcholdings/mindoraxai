export const portalFragmentShader = `
uniform float uTime;
uniform vec3 uColorCore;
uniform vec3 uColorMid;
uniform vec3 uColorOuter;
uniform float uIntensity;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vec2 center = vec2(0.5, 0.5);
  float dist = distance(vUv, center);

  // Create torus/arc shape
  float torusRadius = 0.35;
  float torusThickness = 0.15;
  float torusDist = abs(dist - torusRadius);

  // Only show top half (arc)
  float arcMask = smoothstep(0.5, 0.48, vUv.y);

  // Create glow with multiple layers
  float glow1 = 1.0 - smoothstep(0.0, torusThickness * 0.3, torusDist);
  float glow2 = 1.0 - smoothstep(0.0, torusThickness * 0.6, torusDist);
  float glow3 = 1.0 - smoothstep(0.0, torusThickness * 1.2, torusDist);

  // Pulsing animation
  float pulse = 0.9 + 0.1 * sin(uTime * 1.5);

  // Mix colors based on distance from center
  vec3 color1 = mix(uColorCore, uColorMid, smoothstep(0.0, 0.3, torusDist / torusThickness));
  vec3 color2 = mix(color1, uColorOuter, smoothstep(0.3, 1.0, torusDist / torusThickness));

  // Combine glows
  float finalGlow = glow1 * 1.0 + glow2 * 0.6 + glow3 * 0.3;
  finalGlow *= arcMask * pulse * uIntensity;

  // Add some radial energy lines
  float angle = atan(vUv.y - center.y, vUv.x - center.x);
  float energyLines = sin(angle * 12.0 + uTime * 2.0) * 0.5 + 0.5;
  energyLines *= smoothstep(0.0, 0.1, torusDist) * smoothstep(torusThickness, torusThickness * 0.5, torusDist);
  finalGlow += energyLines * 0.2 * arcMask;

  gl_FragColor = vec4(color2, finalGlow);
}
`;
