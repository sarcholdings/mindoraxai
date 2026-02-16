export const particleVertexShader = `
uniform float uTime;
uniform vec2 uMouse;
uniform float uMorphFactor;
uniform float uSize;

attribute float aScale;

varying vec3 vPosition;
varying float vAlpha;

void main() {
  vPosition = position;

  // Original sphere position
  vec3 spherePos = position;

  // Distorted position for morphing effect
  float distortion = sin(position.x * 2.0 + uTime) *
                     cos(position.y * 2.0 + uTime * 0.8) *
                     sin(position.z * 2.0 + uTime * 0.6);
  vec3 morphedPos = position + normalize(position) * distortion * 0.3;

  // Interpolate between sphere and morphed position
  vec3 animatedPos = mix(spherePos, morphedPos, uMorphFactor);

  // Mouse influence - particles follow mouse with damping
  vec2 mouseInfluence = uMouse * 0.5;
  animatedPos.x += mouseInfluence.x * (1.0 - abs(position.z) / 5.0);
  animatedPos.y += mouseInfluence.y * (1.0 - abs(position.z) / 5.0);

  // Calculate depth-based alpha for fade effect
  vAlpha = 1.0 - (abs(animatedPos.z) / 8.0);
  vAlpha = clamp(vAlpha, 0.3, 1.0);

  // Apply transformations
  vec4 mvPosition = modelViewMatrix * vec4(animatedPos, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  // Size attenuation based on distance
  gl_PointSize = uSize * aScale * (300.0 / -mvPosition.z);
}
`;
