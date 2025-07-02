import imageOne from "../../assets/images/imageOne.jpg";

import imageTwo from "../../assets/images/imageOne.jpg";
import imageThree from "../../assets/images/imagesTwo.jpg";
import imageFour from "../../assets/images/imageThreee.jpg";
import imageFive from "../../assets/images/imageFour.jpg";
import imageSix from "../../assets/images/imageFive.jpg";
function Gallery() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={imageOne}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={imageTwo}
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src={imageThree}
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                src={imageFour}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={imageFive}
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                src={imageSix}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
