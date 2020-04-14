export let isIntroduction = true;

export const introduction = () => {
  fill(255, 255, 255, 230);
  rect(150, 10, 500, 630);
  fill(0, 0, 0);
  textSize(40); 
  text("Hello Code the Dream", 200, 60);
  textSize(30); 
  text(`My name is Johan Andres Ochoa, \nand this is my personal project \ncalled "UFO in San Francisco". \n\nThis is a videogame that I have \ncreated using ProcessingJS, the \nlibrary suggested in Khan \nAcademy, and also using some \nprior knowledge that I already have \nin JavaScript. \n\nThank you for the opportunity and I \nhope you like my creation.`, 
        165,
        110
  );            
  stroke(0, 0, 0);
  fill(255, 255, 255);
  rect(225, 540, 350, 80);
  fill(0, 0, 0);
  textSize(40)
  text("START PLAYING", 245, 590);
  mousePressed = () => {
    if (mouseX > 225 && mouseX < 575 && mouseY > 540 && mouseY < 620) {
      isIntroduction = false;
    }
  }
};
