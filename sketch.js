const sketchProc = (processingInstance) => {
  with (processingInstance) {
    //THE FOLLOWING CODE IS WRITEN BY JOHAN ANDRES OCHOA QUIROZ
    //jandresochoa91@gmail.com
 
    size(800, 650);
    frameRate(40);
 
    //INTRODUCTION
    let isIntroduction = true;
    //Introduction function in DrawFunction
    const introduction = () => {
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
 
 
    //INSTRUCTIONS
    let isKeyPressed = true;
    //Instructions function in DrawFunction
    const instructions = () => {
      fill(255, 255, 255, 230);
      rect(125, 120, 550, 450);
      fill(0, 0, 0);
      textSize(40); 
      text("Instructions", 290, 160);
      textSize(20); 
      text(`Many aliens are lost in the city of San Francisco. Your \nmission is to help them to go back home. You have to catch \nthe required number of aliens in less than 30 seconds.\n\nYou can move the UFO with the cursor (mouse) and catch \nthe aliens with the UFO beam by CLICKING. \n\nThe beam you catch aliens with can only be generated by \nCLICKING ON THE UFO.You can only move the UFO just \nabove the Painted Ladies (The coloured houses). \n\nYou can pause or come back to the instructions by pressing \nENTER.`, 
            135,
            200
      );
      textSize(30)
      text(`Press ENTER to play`, 260, 520);  
 
      keyPressed = () => {
        if (keyCode === ENTER) {
          if (isKeyPressed) {
            isKeyPressed = false;                
          } else {
            isKeyPressed = true;
          }
        } 
      }
    };
 
    
    //SKY
    let colorOfSky = [0, 228, 255];
 
    //***Sky function in Draw function
    const sky =  () => {
      background(colorOfSky[0], colorOfSky[1], colorOfSky[2]);
      if (sunMovement < -300 && colorOfSky[2] > 0) {
        if (colorOfSky[1] > 0) {
          colorOfSky[1] -= 2;
        } else {
          colorOfSky[1] = 0;
          if (colorOfSky[2] <= 40) {
            colorOfSky[2] = 40;    //Defined 40 because I didn't want the sky to be totally black
          } else {
            colorOfSky[2] -= 2;
          }
        }
      } else if (sunMovement > -200 && colorOfSky[1] < 228) { 
        if (colorOfSky[2] < 255) {
          colorOfSky[2] += 2;
        } else {
          colorOfSky[1] += 2;
        }
      }
    };  
 
 
    //SUN
    let sunMovement = 380;
    
    //***Sun function in Draw function
    const sun = () => {
      fill(255, 255, 0);
      noStroke();
      ellipse(200, sunMovement, 130, 130);
      noFill();
      stroke(0, 0, 0);
      strokeWeight(3);
      fill(0, 0, 0);
      sunMovement--;
      
      if (colorOfSky[2] <= 60 && sunMovement === -800) {   
        sunMovement = 450;
      }
    };
 
 
    //MOON
    let moveMoonX = 850;
    let moveMoonY = 200;
    let moonPhase = 1;    //There are 3 phases in this code: 1: Waxing Crescent, 2: First Quarter, 3: Full.
    let isMoonMoving = false;
 
    //***Moon function in Draw function
    const moon = () => {

      if (colorOfSky[2] > 160 && isMoonMoving === true) {
        moonPhase += 1;
      }

      if (colorOfSky[2] <= 160) {
        isMoonMoving = true;
        noStroke();
        fill(255, 255, 255);
        ellipse(moveMoonX, moveMoonY, 50, 50);
 
        fill(colorOfSky[0], colorOfSky[1], colorOfSky[2]);
        if (moonPhase === 1) {
          ellipse(moveMoonX - 10, moveMoonY, 50, 50);
        } else if (moonPhase === 2) {
          rect(moveMoonX - 50, moveMoonY - 30, 50, 70);
        } else if (moonPhase > 3) {
          moonPhase = 1
        }
        moveMoonX -= 0.8;
        moveMoonY -= 0.8;
      } else {
        isMoonMoving = false;
        moveMoonX = 850;
        moveMoonY = 200;
      }

    };
 
 
    //STARS
    let sizeXStar = 0.0004;
    let sizeYStar = 0.0004;
    let isMidnight = false;
 
    //Array with position of random stars
    let allTheStars = [];
    for (let i = 0; i < 50; i++) {
      let randomXStars = random(0, 800);
      let randomYStars = random(0, 400);
      allTheStars.push([randomXStars, randomYStars]); 
    }
 
    //***Stars function in Draw function
    const stars = () => {
      for (var i = 0; i < allTheStars.length; i++) {
        
        if (colorOfSky[2] < 255) {              
          fill(255, 255, 255);
          noStroke();
          ellipse(allTheStars[i][0], allTheStars[i][1], sizeXStar, sizeYStar);
          
          if (isMidnight) {
            sizeXStar -= 0.0003;
            sizeYStar -= 0.0003;
          } else {
            sizeXStar += 0.0004;
            sizeYStar += 0.0004;
          }
          
          if (sizeXStar > 4) {
            isMidnight = true;
          } 
 
          if (colorOfSky[2] > 250) {
            sizeXStar = 0.0004;
            sizeYStar = 0.0004;
            isMidnight = false;
          }
        } 
      }
    };
 
 
    //TRANSAMERICA PYRAMID BUILDING
    //***Pyramid function in Draw function
    const pyramid = () =>  {
      stroke(0, 0, 0);
      strokeWeight(3);
      let randomRPyramid = random(0, 255);
      let randomGPyramid = random(0, 255);
      let randomBPyramid = random(0, 255);
 
      if (colorOfSky[2] < 255) {
        fill(randomRPyramid, randomGPyramid, randomBPyramid);
      } else {
        fill(buildingsAttributes[0][3][0],  //I used position 0, but you can use any other position of the array
             buildingsAttributes[0][3][1],  //I used position 0, but you can use any other position of the array
             buildingsAttributes[0][3][2]   //I used position 0, but you can use any other position of the array
        );
      }
 
      triangle(100, 450, 150, 150, 200, 450);
      rect(140, 225, 20, 70);
    };
 
 
    //SALESFORCE BUILDING
    //***Salesforse function in Draw function
    const salesforce = () => {
      let randomRSalesforceColor = random(0, 255);
      let randomGSalesforceColor = random(0, 255);
      let randomBSalesforceColor = random(0, 255);
 
      if (colorOfSky[2] < 255) {
        fill(randomRSalesforceColor, randomGSalesforceColor, randomBSalesforceColor);
      } else {
        fill(buildingsAttributes[1][3][0],  //I used position 1, but you can use any other position of the array
             buildingsAttributes[1][3][1],  //I used position 1, but you can use any other position of the array
             buildingsAttributes[1][3][2]   //I used position 1, but you can use any other position of the array
        );
      }
 
      stroke(0, 0, 0);
      strokeWeight(3);
      ellipse(520, 270, 50, 370);
 
      strokeWeight(3);
      line(505, 120, 534, 120);
 
      noStroke();
      fill(colorOfSky[0], colorOfSky[1], colorOfSky[2]);
      rect(500, 79, 40, 40);
    };
    
 
    //CLOUDS
    //Clouds attributes
    let cloudsAttributes = []; 
    let rgbCloudsColor = 255;
 
    for (let i = 1; i < 7; i++) {
      let randomXForClouds = random(0, 800);
      let setYForClouds = (50 * i) - 50;
      let randomSpeedForClouds = random(1, 3);
 
      cloudsAttributes.push([setYForClouds,  
                             randomSpeedForClouds,
                             randomXForClouds
                            ]
      );          
    }
 
    //***Clouds function in Draw function
    const clouds = () => {
      noStroke();
      fill(rgbCloudsColor, rgbCloudsColor, rgbCloudsColor);
 
      for (let i = 0; i < cloudsAttributes.length; i++) {
        let xCloud = cloudsAttributes[i][0];
        ellipse(cloudsAttributes[i][2]     , xCloud, 126, 97);
        ellipse(cloudsAttributes[i][2] + 62, xCloud, 70 , 60);
        ellipse(cloudsAttributes[i][2] - 62, xCloud, 70 , 60);
        
        if (i % 2 === 0) {
          if (cloudsAttributes[i][2] > 1000) {
            cloudsAttributes[i][2] = -200;
          } else {
            cloudsAttributes[i][2] += cloudsAttributes[i][1];
          }
        } else {
          if (cloudsAttributes[i][2] < -100) {
            cloudsAttributes[i][2] = 1000;
          } else {
            cloudsAttributes[i][2] -= cloudsAttributes[i][1];
          }
        }
      }
    };
 
 
    //BUILDINGS (NEITHER TRANSAMERICA PYRAMID NOR SALESFORCE INCLUIDED)
    //Array of random mumbers to make buildings and define colors
    let buildingsAttributes = [];
    for (let i = 0; i < 60; i++) {
      let randomXForBuildings = random(-40, 800);
      let randomWeigthOfBuildings = random(30, 50);
      let randomHeightOfBuildings = random(-200, -100);
      buildingsAttributes.push([randomXForBuildings,
                                randomWeigthOfBuildings,
                                randomHeightOfBuildings,
                                [random(140, 180), random(140, 180), random(140, 180)]
                               ]
      );
    }
 
    //***Buildings function in Draw function
    const buildings = () => {
      stroke(0, 0, 0);
 
      for (let i = 0; i < buildingsAttributes.length; i++) {
        let bA = buildingsAttributes[i];   
        if (colorOfSky[2] < 255) {
          fill(random(0, 255), random(0, 255), random(0, 255));
        } else {
          fill(bA[3][0], bA[3][1], bA[3][2]);
        }
        stroke(0, 0, 0);
        strokeWeight(3);
        rect(bA[0], 400, bA[1], bA[2]
        );
      }
    };
 
 
    //PAINTED LADIES
    let colorsForPaintedLadies = {
      1: [255, 100, 100],
      2: [255, 150,  60],
      3: [255, 255, 100],
      4: [100, 255, 100],
      5: [84,  89,  255],
      6: [133, 100, 255]
    };
 
    const PaintedLady = function (xAxis, yAxis, color) {
      this.xAxis = xAxis;
      this.yAxis = yAxis;
      this.color = color; 
      
      PaintedLady.prototype.show = function() {
        const { xAxis, yAxis, color } = this;
        
        fill(255, 255, 255);
        triangle(-5 + xAxis, 587 - yAxis,
                 60 + xAxis, 522 - yAxis,
                125 + xAxis, 587 - yAxis
        );
 
        let randomNumberChangingPaintedLadies = Math.round(random(1, 2));           
        if (colorOfSky[2] < 255) {
          if (randomNumberChangingPaintedLadies % 2 === 0) {
            fill(random(0, 255), random(0, 255), random(0, 255));
          } else {
            fill(color[0], color[1], color[2]);  
          }           
        } else {
          fill(color[0], color[1], color[2]);  
        }
 
        stroke(0, 0, 0);
        strokeWeight(3);
        rect(xAxis, 450 - yAxis + 137, 120, 180);
        
        triangle(10 + xAxis, 580 - yAxis,
                 60 + xAxis, 532 - yAxis,
                108 + xAxis, 580 - yAxis
        );
        
        quad(120 + xAxis, 587 - yAxis,
             120 + xAxis, 767 - yAxis,
             255 + xAxis, 747 - yAxis,
             255 + xAxis, 577 - yAxis
        );
 
        fill(40, 40, 40);
        quad(60 + xAxis, 522 - yAxis,
            125 + xAxis, 587 - yAxis,
            260 + xAxis, 577 - yAxis,
            190 + xAxis, 517 - yAxis    
        );
        
        fill(255, 255, 255);
        rect(xAxis      , 590 - yAxis, 7, 77);
        rect(xAxis - 5  , 663 - yAxis, 7, 105);
        rect(xAxis + 5  , 738 - yAxis, 35, 7);
        rect(xAxis      , 745 - yAxis, 40, 7);
        rect(xAxis - 3  , 752 - yAxis, 40, 7);
        rect(xAxis - 6  , 759 - yAxis, 40, 7);
        rect(xAxis - 9  , 766 - yAxis, 40, 7);
        rect(xAxis - 12 , 773 - yAxis, 40, 7);
        rect(xAxis + 35 , 663 - yAxis, 7, 105);
        rect(xAxis - 5  , 663 - yAxis, 122, 7);
        rect(xAxis      , 590 - yAxis,  120, 7);
        rect(xAxis + 57 , 605 - yAxis, 50, 50);
        rect(xAxis + 55 , 685 - yAxis, 50, 50);
        rect(xAxis + 46 , 550 - yAxis, 25, 25);
        rect(xAxis      , 651 - yAxis,  122, 4);
        rect(xAxis + 120, 590 - yAxis, 7, 175);
        fill(40, 40, 40);
        rect(xAxis + 64 , 612 - yAxis, 35, 35);
        rect(xAxis + 62 , 692 - yAxis, 35, 35);
        fill(46, 15, 25);
        rect(xAxis + 9  , 685 - yAxis, 26, 52); 
      };
    }
 
    let paintedLady1 = new PaintedLady(0,   200, colorsForPaintedLadies["1"]);
    let paintedLady2 = new PaintedLady(130, 210, colorsForPaintedLadies["2"]);
    let paintedLady3 = new PaintedLady(260, 220, colorsForPaintedLadies["3"]);
    let paintedLady4 = new PaintedLady(390, 230, colorsForPaintedLadies["4"]);
    let paintedLady5 = new PaintedLady(520, 240, colorsForPaintedLadies["5"]);
    let paintedLady6 = new PaintedLady(650, 250, colorsForPaintedLadies["6"]);
 
    //***All painted ladies 
    const allPaintedLadies = () => {
      paintedLady1.show();
      paintedLady2.show();
      paintedLady3.show();
      paintedLady4.show();
      paintedLady5.show();
      paintedLady6.show();
    };
   
    
    //REDUCTION COLOR NIGHT   
    let darkenColor = 0;   //Applied in Aliens and Crosswalk, street and grass. 
    
    const reductionColorNight = () => {
      if (colorOfSky[2] < 255) {
        if (isMidnight) {
          darkenColor += 0.5;
          rgbCloudsColor += 0.75
        } else {
          darkenColor -= 0.75;
          rgbCloudsColor -= 0.75;
        }
      } 
      if (colorOfSky[2] > 250) {
        darkenColor = 0;
        rgbCloudsColor = 255;
      }
    }
 
 
    //SIDEWALK AND GRASS
    //***function in Draw function
    const sidewalkAndGrass = () => {
      stroke(0, 0, 0);
      strokeWeight(3);
      
      //Sidewalk
      fill(120 + darkenColor, 120 + darkenColor, 120 + darkenColor);
      quad(0, 650, 0, 560, 1000, 495, 650, 800);
      
      //Upper Green field
      fill(0, 180 + darkenColor, 0);
      quad(0, 650, 0, 520, 1000, 560, 650, 800);
      
      //Lower Green Field
      fill(0, 255 + darkenColor, 0);
      rect(0, 600, 810, 60);
    };
 
 
    //ALIENS
    //Random positions and speed for aliens 
    let aliensAttributes = [];
    
    for (let i = 0; i < 3; i++) {
      aliensAttributes.push([random(0, 740), //Random X position for aliens   
                             random(0, 90),  //Random Y position for aliens
                             random(5, 10),  //Random speed for aliens
                             (0, 800),       //Random new position for aliens
                             true            //True or false to turn right or left
                            ]
      );
    }
 
    //Function to increase speed of aliens. Inside Congratulation function
 
    const increaseSpeed = () => {
      for (let i = 0; i < aliensAttributes.length; i++) {
        aliensAttributes[i][2] += aliensAttributes[i][2] * 0.05;   
      }
    };
 
    //***Aliens function in Draw function
    const aliens = () => {
      for (let i = 0; i < aliensAttributes.length; i++) {
        let xPosAlien = aliensAttributes[i][0];   //X position for aliens
        let yPosAlien = aliensAttributes[i][1];   //Y position for aliens
        let speedAlien = aliensAttributes[i][2];  //Speed for aliens
        let newPosAlien = aliensAttributes[i][3]; //New position for aliens
        let isRight = aliensAttributes[i][4];     //True or false to turn rigth or left            
        
        noStroke();
        
        fill(0, 0, 0);
        ellipse(xPosAlien, 643 - yPosAlien, 15, 10);
        
        stroke(0, 0, 0);
        strokeWeight(1);
 
        fill(255 + darkenColor, 60 + darkenColor, 0);
        ellipse(xPosAlien, 633 - yPosAlien, 30, 20);
        
        
        fill(80 + darkenColor, 254 + darkenColor, 104 + darkenColor);
        triangle(xPosAlien - 20, 609 - yPosAlien + 10,
                 xPosAlien - 40, 609 - yPosAlien - 20,
                 xPosAlien - 20, 609 - yPosAlien - 10
        );
        
        
        triangle(xPosAlien + 20, 609 - yPosAlien + 10,
                 xPosAlien + 40, 609 - yPosAlien - 20,
                 xPosAlien + 20, 609 - yPosAlien - 10
        );              
        
        ellipse(xPosAlien, 609 - yPosAlien, 50, 40);
        
        stroke(0, 0, 0);
        strokeWeight(2)            
        arc(-12  + xPosAlien, 613 - yPosAlien, 8 ,  10, -3,  0);
        arc( 12  + xPosAlien, 613 - yPosAlien, 8 ,  10, -3,  0);
        fill(0, 0, 0);
        arc(xPosAlien, 620 - yPosAlien, 12,  10,  0, PI);
        
        if (newPosAlien > xPosAlien && isRight) {
          aliensAttributes[i][0] += speedAlien;
        } else {
          if (isRight) {
            aliensAttributes[i][4] = false;
            aliensAttributes[i][3] = random(-400, 1200);
          }
        }
 
        if (newPosAlien <= xPosAlien && !isRight) {
          aliensAttributes[i][0] -= speedAlien;
        } else {
          if (!isRight) {
            aliensAttributes[i][4] = true;
            aliensAttributes[i][3] = random(-400, 1200);
          }
        }
      }
    };
    
 
    //UFO
    //***ufo function in Draw function
    const ufo = () => {
      let mouseXUfo = mouseX;
      let mouseYUfo = mouseY;
      let ufoSize = mouseYUfo * 0.006;
 
      if (mouseYUfo > 220) {
        mouseYUfo = 220;
        ufoSize = 1.3;
      }
      stroke(0, 0, 0);
      strokeWeight(3);
      fill(38, 25, 25);
      ellipse(mouseXUfo, mouseYUfo + (ufoSize)     ,  70 * ufoSize, 70 * ufoSize);
      fill(112, 59, 112);
      ellipse(mouseXUfo, mouseYUfo + (ufoSize * 15), 150 * ufoSize, 50 * ufoSize);
      noStroke()
      fill(255, 255, 255);
      ellipse(mouseXUfo, mouseYUfo + (ufoSize * 30),  70 * ufoSize, 25 * ufoSize);
    };
 
 
    
    //UFO beam
    let beamDuration = 0;

    //Function to know if beam is generated
    const isBeamGenerated = (hasClicked) => {
      if (hasClicked || beamDuration !== 0) {
        let mouseXUfoBeam = mouseX;
        let mouseYUfoBeam = mouseY;
        let beamSize = mouseYUfoBeam * 0.006;
        let isThereBeam = false;
        
        if (mouseYUfoBeam > 210) {
          mouseYUfoBeam = 220;
          beamSize = 1.3;
        }
        
        if (mouseY < 270) {
          noStroke();
          fill(255, 255, 255);
          rect(mouseXUfoBeam - (70 * beamSize / 2),
               mouseYUfoBeam + (65 * beamSize / 2),
               70 * beamSize,
               800
          );
          isThereBeam = true;
          
          if (hasClicked) {
            beamDuration = 2;
          } else {
            if (beamDuration > 0) {
              beamDuration--;
            }
          }
          
          for (let i = 0; i < aliensAttributes.length; i++) {
            let xAliens = aliensAttributes[i][0];  //X position for aliens
            if (xAliens > mouseX - 49 && xAliens < mouseX + 49 && isThereBeam) {
              let randomStart = random(1, 2); 
              aliensAttributes[i][1] = random(0, 90);
              if (randomStart >= 1.5) {
                aliensAttributes[i][0] = -400;
              } else {
                aliensAttributes[i][0] = 1000;
              }
              currentScore++;
            } 
          }
        }        
      }
    }

    //***ufo bean function in Draw function
    const ufoBeam = () => {  //Change light
      isBeamGenerated(false);
      mousePressed = () => {
        if (currentScore < goal && countdown > 0 && !isKeyPressed) {
          isBeamGenerated(true);                    
        }
      };
    };
 
 
    //SCORE
    let currentScore = 0;
    let goal = 6;
    let level = 1;
    let lives = 3;
    let countdown = 30;
 
    //***Score function in Draw function
    const score = () => {
      fill(255, 255, 255);
      rect(300, 0, 180, 110);
      fill(0, 0, 0);
      textSize(20);
      text("Goal: " + goal + " aliens", 325, 20);
      text("Current: " + currentScore + " aliens", 305, 40);
      text("Level: " + level, 360, 60);
      text((countdown).toFixed(1), 375, 80)
      text("Lives: " + lives, 360, 100);
      if (!isKeyPressed) {
        countdown -= 0.03;
      }
    };
    
 
    //TIME IS UP
    //***Time is up function in Draw function
    const timeIsUp = () => {
      textSize(60);
      fill(255, 255, 255);
      text("Time is up", 253, 170);
      fill(0, 0, 0);
      text("Time is up", 250, 170);
      fill(255, 255, 255);
      rect(280, 420, 215, 80);
      fill(0, 0, 0);
      stroke(0, 0, 0);
      textSize(40)
      text("Try again!", 300, 470);
      mousePressed = () => {
        if (mouseX > 280 && mouseX < 480 && mouseY > 420 && mouseY < 500) {
          currentScore = 0;
          countdown = 30;
          lives -= 1;
          beamDuration = 0;
          for (let i = 0; i < aliensAttributes.length; i++) {
            aliensAttributes[i][0] = random(0, 740);
            aliensAttributes[i][1] = random(0, 90);
          }              
        }
      }
    }
    
 
    //ANIMATION WITH SPIRAL
    let growthOfSpiral = 1;
 
    //Array of random colors for animation with spiral
    let colorsSpiral = [[random(0, 255), true],
                        [random(0, 255), true],
                        [random(0, 255), true]
    ];
 
    //***Animation with spiral function in Draw function
    const animationWithSpiral = (xSpiral, ySpiral, hasStroke) => {
      for (let i = 0; i < colorsSpiral.length; i++) {
        
        if (colorsSpiral[i][0] < 0) {
          colorsSpiral[i][1] = true;
        } else if (colorsSpiral[i][0] > 255) {
          colorsSpiral[i][1] = false;
        }
 
        if (colorsSpiral[i][1] === true) {
          colorsSpiral[i][0] += 2;
        } else {
          colorsSpiral[i][0] -= 2;
        }
      }
 
      let angle = 0.08 * growthOfSpiral;
      let x = (1 + angle)*Math.cos(angle);
      let y = (1 + angle)*Math.sin(angle);
      fill(colorsSpiral[0][0], colorsSpiral[1][0], colorsSpiral[2][0]);
      
      if (hasStroke === true) {
        stroke(0, 0, 0);
        strokeWeight(1);          
      } else {
        noStroke();
      }
 
      ellipse((x * 0.02 * growthOfSpiral) + xSpiral,
              (y * 0.02 * growthOfSpiral) + ySpiral,
               growthOfSpiral * 0.3,
               growthOfSpiral * 0.3
      );          
      growthOfSpiral += 1.5;
    }
 
 
    //CONGRATULATIONS
    //***Congratulations function in Draw function
    const congratulations = () => {
      fill(255, 255, 255)
      textSize(90);
      text("Congratulations!", 74, 200);
      fill(0, 0, 0);
      textSize(90)
      text("Congratulations!", 70, 200);
      
      stroke(0, 0, 0);
      fill(255, 255, 255);
      rect(260, 420, 260, 75);
      fill(0, 0, 0);
      textSize(40)
      text(`Start level ${level + 1}`, 275, 470);
      mousePressed = () => {
        if (mouseX > 280 && mouseX < 480 && mouseY > 420 && mouseY < 500) {
          currentScore = 0;
          countdown = 30;
          goal += 3;
          growthOfSpiral = 1;
          level++;
          beamDuration = 0;
          increaseSpeed();
          for (let i = 0; i < aliensAttributes.length; i++) {
            aliensAttributes[i][0] = random(0, 740);
            aliensAttributes[i][1] = random(0, 90);
          }              
        }
      }
      animationWithSpiral(random(100, 700), random(100, 560), false);
    }
 
 
    //GAME OVER
    //Game over function in Draw function
    const gameOver = () => {
      animationWithSpiral(400, 330, true);
      textSize(60);
      fill(255, 255, 255);
      text("GAME OVER", 203, 170);
      fill(0, 0, 0);
      text("GAME OVER", 200, 170);
      fill(255, 255, 255);
 
      text("Your record: Level " + level, 203 - 80, 250);
      fill(0, 0, 0);
      text("Your record: Level " + level, 200 - 80, 250);
      fill(255, 255, 255);
 
      rect(275, 420, 240, 80);
      fill(0, 0, 0);
      stroke(0, 0, 0);
      textSize(40)
      text("Play again!", 300, 470);
      mousePressed = () => {
        if (mouseX > 280 && mouseX < 480 && mouseY > 420 && mouseY < 500) {
          currentScore = 0;
          countdown = 30;
          lives = 3;
          growthOfSpiral = 1;
          level = 1;
          goal = 6; 
          beamDuration = 0;
          for (let i = 0; i < aliensAttributes.length; i++) {
            aliensAttributes[i][0] = random(0, 740);
            aliensAttributes[i][1] = random(0, 90);
            aliensAttributes[i][2] = random(5, 10);
          }              
        }
      }
    }
 
    //DRAW FUNCTION (MAIN)
    draw = () => {
      if (currentScore < goal && countdown > 0) {
        sky();        
        sun();
        moon();
        stars();
        pyramid();
        salesforce();
        clouds();
        buildings();
        allPaintedLadies();  
        reductionColorNight();
        sidewalkAndGrass();          
        if (isIntroduction) {
          introduction();
        } else {
          if (isKeyPressed) {
            instructions();
            score();
          } else {
            aliens();  
            ufo();
            ufoBeam();
            score();           
          }
        }
      } else if (countdown <= 0) {
        if (lives > 1) {
          timeIsUp();
        } else if (lives === 1 && currentScore < goal) {              
      gameOver();
        }
      } else {
        congratulations();
      }
    }      
  }
};
 
var canvas = document.getElementById("mycanvas"); 
var processingInstance = new Processing(canvas, sketchProc);