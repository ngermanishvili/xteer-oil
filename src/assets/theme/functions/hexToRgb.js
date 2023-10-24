function hexToRgb(hex) {
  // Remove the hash "#" if it's present
  hex = hex.replace(/^#/, '');

  // Parse the hex string to a number
  const num = parseInt(hex, 16);

  // Extract the red, green, and blue components
  const red = (num >> 16) & 255;
  const green = (num >> 8) & 255;
  const blue = num & 255;

  // Return the RGB values as a string
  return `${red}, ${green}, ${blue}`;
}

export default hexToRgb;
