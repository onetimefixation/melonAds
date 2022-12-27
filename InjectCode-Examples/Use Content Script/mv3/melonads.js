  
  
/* function getFileNames(){
    const input = document.createElement('input');
    input.type = 'file';
    input.id = 'file-selector';
    input.multiple = true;
    document.body.appendChild(input);
     input.addEventListener('change', (event) => {
       const fileList = event.target.files;
       console.log(fileList);
     });
   } */
   
   //getFileNames();


   class MakeBanner{

    ads = [
          {name: "",shape: "top"},
          {name: "",shape: "side"},
          {name: "",shape: "corner"}
          ] 

   types = [
       {
           name: "banner-centered",
           make: (image_name)=>{

               // Make the banner
               const banner = document.createElement("div");
               banner.className = 'melonAds-banner';

               // Make the button but will not use at the moment
               const button = document.createElement("button");
               button.innerText = "X";
               button.className="melonAds-closeButton"; 
               button.onclick = function (self){
                   // get parent
                   const parent = self.path[1]

                   parent.style.bottom = '-10%';
                   // Kill the parent
                   setTimeout(()=>{ parent.remove(); }, 200)
               }

               const image = document.createElement("img");


               //image.src = "https://cne360web.com/graphics/side-newhappyagent.png";
               //image.src = `https://cne360web.com/graphics/` + fileName;
               image.src = `https://cdn.pandacrp.com/rinoads/${realFileName}`;
               
               
          console.log(fileName)     // for testing

               //Make image parent
               const image_container = document.createElement("div");
               image_container.className = 'melonAds-image-container';

               //Combine all
               image_container.appendChild(image);

               image_container.onclick = function(){
                   window.location.href = "http://www._____.com";
                   };

               banner.appendChild(image_container);
               //banner.appendChild(button);  not using now

               document.body.appendChild(banner);
            }
       }
   ]
   constructor(shape, type){

       //TOP 

       switch (shape){
        case "top":
        if (!document.querySelector("style#melonAds")){
           const style = document.createElement("style");
           style.id = "melonAds";
           style.innerText = ".melonAds-banner{ z-index: 99999999; margin: auto; width: 50em; display: flex; margin-bottom: 1em; left: 50%; top: 50px; transform:translateX(-50%); position: fixed; aspect-ratio: 1/1; transition-property: bottom; transition-duration: 1s;}.melonAds-image-container{ width: 100%; height: 15%; overflow: hidden;} .melonAds-banner img{ width: 100%;} .melonAds-closeButton{ text-align: center; font-family: sans-serif; position: absolute; right: -10px; top: -10px; border-radius: 50%; aspect-ratio: 1/1; background-color: red;color: black;}"
           document.body.prepend(style); 
       }
       break;
      //SIDE   
       case "side":
       if (!document.querySelector("style#melonAds")){
           const style = document.createElement("style");
           style.id = "melonAds";
           style.innerText = ".melonAds-banner{ z-index: 99999999; margin: auto; width: 15em; display: flex; margin-bottom: 1em; left: 75%; top: 200px; transform:translateX(50%); position: fixed; aspect-ratio: 1/1; transition-property: bottom; transition-duration: 1s;}.melonAds-image-container{ width: 100%; height: 500%; overflow: hidden;} .melonAds-banner img{ width: 75%;} .melonAds-closeButton{ text-align: center; font-family: sans-serif; position: absolute; right: -10px; top: -10px; border-radius: 50%; aspect-ratio: 1/1; background-color: red;color: black;}"
           document.body.prepend(style);
       }
       break;
       //CORNER
        case "corner":
            if (!document.querySelector("style#melonAds")){
                const style = document.createElement("style");
                style.id = "melonAds";
                style.innerText = ".melonAds-banner{ z-index: 99999999; margin: auto; width: 40em; display: flex; margin-bottom: 1em; left: 50%; top: 0; transform:translateX(50%); position: fixed; aspect-ratio: 1/1; transition-property: bottom; transition-duration: 1s;} .melonAds-image-container{ width: 100%; height: 25%; margin-right: 0; overflow: hidden;} .melonAds-banner img{ width: 75%;} .melonAds-closeButton{ text-align: center; font-family: sans-serif; position: absolute; right: 0px; top: 0px; border-radius: 50%; aspect-ratio: 1/1; background-color: red;color: white;}"
                document.body.prepend(style);
            }
                break;
        default:
            console.log("Position Unknown");
    }
       //Get all ads with selected shape
       const selected_ads = this.ads.filter(ad => ad.shape == shape);
       if (selected_ads.length == 0) {
           console.warn(`No ads with shape: ${shape} have been found`);
           return(0);
       }

       //Get the type selected
       const selected_type = this.types.filter(element=> element.name == type)
       if (selected_type.length != 1) {
           console.warn(`Zero or more than one type have been found for: ${type}`);
           return(0);
       }

       selected_type[0].make(selected_ads);

   }
}


//ADD NEW OR MODIFY EXISTING AD PICTURES HERE

// ******************************************************************************//
// **** NOTE: Make sure the file names are EXACTLY the same as on the server
// ****       Do not add a "," to the last file name
// ******************************************************************************//

verifiedAds = [ "top-3YrYLye.png",
                "corner-5lhydyw.png",
                "corner-6zThWbb.png",
                "side-96H8nTV.png",
                "top-fvStHFy.png",
                "corner-IfbHv4Q.png",
                "corner-ItsSnbk.png",
                "top-kbPhzlY.png",
                "corner-kLwpaWL.png",
                "top-m0TQ3fo.png",
                "corner-m5JlrL0.png",
                "side-maE1OQk.png",
                "corner-mB3fEew.png",
                "top-mJJjZFk.png",
                "top-VoarYuW.png"
]


// ************Don't use these for the time being *********************//
/* verifiedAds = ["side-3agents.png",                                   
               "side-happyagent.png",
               "side-headsets.png",
               "top-headsets.png",
               "bottom-hairloss.png"  
               ]; */      
// ******************************************************************************//

// randomly select the ad
var int = Math.floor(Math.random() * verifiedAds.length);
const fileName = verifiedAds[int];
// extract the position on the screen from the filename
const position = fileName.split("-");
// now extract just the filename
 const realFileName = position[1];
// for testing and debugging down the line
console.log ("position = " + position[0]) 
console.log ("realFileName = "+ realFileName)

new MakeBanner(position[0], "banner-centered", realFileName);

