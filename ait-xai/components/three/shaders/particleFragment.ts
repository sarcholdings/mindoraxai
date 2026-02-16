export const particleFragmentShader = `
uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec3 vPosition;
varying float vAlpha;

void main() {
  // Circular particle shape
  vec2 center = gl_PointCoord - vec2(0.5);
  float dist = length(center);

  if (dist > 0.5) {
    discard;
  }

  // Soft edge falloff
  float alpha = 1.0 - smoothstep(0.3, 0.5, dist);

  // Color mixing based on position
  float mixFactor = (vPosition.y + 5.0) / 10.0;
  mixFactor = clamp(mixFactor, 0.0, 1.0);

  vec3 color = mix(uColorA, uColorB, mixFactor);

  // Apply depth-based alpha
  alpha *= vAlpha;

  gl_FragColor = vec4(color, alpha * 0.8);
}
`;
