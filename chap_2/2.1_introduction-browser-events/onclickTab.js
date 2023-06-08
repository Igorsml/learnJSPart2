const razmeryTab = document.querySelector("#razmery");
const razmeryTabActive = document.querySelector(".prop-Razmery");

function razmery() {
  razmeryTabActive.style.display = "block";
  razmeryTab.addEventListener(
    "click",
    razmeryTab.scrollIntoView({
      behavior: "smooth",
    })
  );
}

<div id="razmery"><span class="far fa-sliders-h fa-lg"></span>ХАРАКТЕРИСТИКИ</div>
    <div class="js-tabs-content tabs-content{% if tab_content_active != true %} is-active{% endif %}" data-tab="properties">
    <div class="js-tabs-content tabs-content prop-Razmery{% if tab_content_active != true %} is-active{% endif %}">
      {{ product.fields.Razmery.value | replace: '<table', '<table class="table-basic"' }}
     </div>
  </div>
