var AllColors=[
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];

toColor=0;
const buttonColorChange=document.createElement('button');
buttonColorChange.innerText="ClickToChange To New BackgroundColor";
buttonColorChange.id="BackgroundColorChangeButton";
buttonColorChange.style.position="relative";
buttonColorChange.style.left="700px";
buttonColorChange.style.top="450px";
buttonColorChange.addEventListener("click",function() { changeBackgroundColor(false,toColor) });
document.body.appendChild(buttonColorChange);


const infoLabel=document.createElement('label');
infoLabel.innerText="Current Color code and name information ";
infoLabel.id="infoLabel";
infoLabel.style.position="relative";
infoLabel.style.left="450px";
infoLabel.style.top="400px";
document.body.appendChild(infoLabel);

const infoLabelSuggested=document.createElement('label');
infoLabelSuggested.innerText="New Color Suggestion: ";
infoLabelSuggested.id="infoLabel2";
infoLabelSuggested.style.position="absolute";
infoLabelSuggested.style.left="1000px";
infoLabelSuggested.style.top="450px";
document.body.appendChild(infoLabelSuggested);

var startColor=document.body.style.backgroundColor="White";
infoLabel.innerText="Current Color is: "+startColor;
changeBackgroundColor(true);
//infoLabelSuggested.innerText="Click to change the Color to: "+ intoColor;
    

function changeBackgroundColor(ima,inputColor) 
{
    if(ima==false) { 
        document.body.style.backgroundColor = AllColors[inputColor];
        infoLabel.innerText="Current Color is: "+document.body.style.backgroundColor;
        toColor=findRandom();
    } else {
        infoLabel.innerText="Current Color is: "+document.body.style.backgroundColor;
        toColor=findRandom();
    }
    
}
function findRandom()
{
    var nextColor=Math.trunc(Math.random()*AllColors.length);
    infoLabelSuggested.innerText="Click to change the Color to: "+AllColors[nextColor];
    return nextColor; 
}

