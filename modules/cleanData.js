module.exports = {
  /*
   * @str - String of raw JS.
   * @returns - json object parsed from @str.
   * 
   * This function was specially setup to parse some JS into json to
   * improve an open source project I am contributing to: 
   * https://github.com/Naksta/mapconan
   */
  generateJson(str) {
  // Gets coordinates
  const firstBracket = str.indexOf('[');
  const secondBracket = str.indexOf(']'); 
  const coordinates = str.slice(firstBracket, secondBracket + 1);
  
  // Gets icon
  const iconStrStart = '{icon: ';
  const iconStrEnd = '}).addTo';
  const iconStart = str.indexOf(iconStrStart) + iconStrStart.length;
  const iconEnd = str.indexOf(iconStrEnd);
  const icon = str.slice(iconStart, iconEnd);
  
  // Get label
  const labelStrStart = 'bindPopup("';
  const labelStrEnd = '").addTo';
  const labelStart = str.indexOf(labelStrStart) + labelStrStart.length;
  const labelEnd = str.indexOf(labelStrEnd);
  const label = str.slice(labelStart, labelEnd);
  
  // Get group
  const groupStrStart = '").addTo(';
  const groupStrEnd = "),";
  const groupStart = str.indexOf(groupStrStart) + groupStrStart.length;
  const groupEnd = str.indexOf(groupStrEnd);
  const group = str.slice(groupStart, groupEnd);
  
  const jsonConvert = {
     "coordinates": `${coordinates}`,
     "icon":`${icon}`,
     "label":`${label}`,
     "group":`${group}`
  };
  
  return jsonConvert;
  }
};
