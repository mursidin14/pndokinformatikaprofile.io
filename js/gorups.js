// id html
var programs = document.getElementById("program");
var pendaftaran = document.getElementById("pendaftaran");
var sliderCards = document.getElementById("sliders")
    // data
var PROGRAM = [
    { title: "Ilmu agama", text: "Belajar agama adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { title: "Belajar IT", text: "Belajar IT adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { title: "Ekstrakulikuler", text: "Extra adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
]
var PENDAFTARAN = [
    { title: "Registrasi", icon: "fas fa-book-open", border: "border-top: 2px dashed rgba(18, 49, 88, 0.32);" },
    { title: "Seleksi Berkas", icon: "fas fa-file-signature", border: "border-top: 2px dashed rgba(18, 49, 88, 0.32);" },
    { title: "Interview", icon: "fas fa-comments", border: "border-top: 2px dashed rgba(18, 49, 88, 0.32);" },
    { title: "Orientasi", icon: "fas fa-people-carry" }

]

function HtmlProgram(pro) {
    let Url = `img/programs/program${pro}.png`;
    return `
    <div class="col">
    <a href="#" style="text-decoration:none;">
    <div class="card rectangle">
      <img src="${Url}" class="card-img-top" alt="programs">
      <div class="card-body">
        <h5 class="card-title">${PROGRAM[pro-1].title}</h5>
        <p class="card-text">${PROGRAM[pro-1].text}</p>
      </div>
    </div>
    </a>
  </div>
     `
}

function HtmlPendaftaran(pro) {
    return `
  <div class="col">
  <p style="${PENDAFTARAN[pro-1].border} width: 128px; border-radius: 100%; height: 44px;"></p>
  <div class="card icon-rectangle">
      <i class="${PENDAFTARAN[pro-1].icon} fa-2x m-auto"></i>
  </div>
  <div class="registrasi pt-4">
      <h5 class="card-title">${PENDAFTARAN[pro-1].title}</h5>
  </div>
</div>
  `
}

function render() {
    for (let index = 1; index <= PROGRAM.length; index++) {
        programs.innerHTML += `${HtmlProgram(index)}`;
    }
    for (let index = 1; index <= PENDAFTARAN.length; index++) {
        pendaftaran.innerHTML += `${HtmlPendaftaran(index)}`;
    }
}