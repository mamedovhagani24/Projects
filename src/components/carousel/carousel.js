import Slider from "../../scripts/Slider";

const carousel = document.getElementById("carousel");

const slider = new Slider({
  container: carousel,
  slidesClass: ".carousel__slide",
  headerClass: ".carousel__slide",
  descriptionClass: ".carousel__slide",
});

slider.init();
