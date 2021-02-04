// id html
var pendaftaran = document.getElementById("pendaftaran");
var programs = document.getElementById("program");
var sliderCards = document.getElementById("sliders");
var tims = document.getElementById("Tim-company");
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

var TIM = [
    { nama: "Akbar Abustang", divis: "Co-Founder / Divisi Humas" },
    { nama: "Muhammad Lutfi", divis: "Co-Founder / Divisi Akademik" },
    { nama: "Hadi Sutrisno", divis: "Co-Founder / Divisi Umum" },
    { nama: "Al Ihsan", divis: "Co-Founder / Divisi Asrama" }

]

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

function HtmlTimCompany(pro) {
    let Url = `img/tentang/teams/team${pro}.png`;
    return `
  <div class="col">
    <div class="card">
      <img src="${Url}" alt="Team">
      <div class="card-body">
        <h5 class="card-title">${TIM[pro-1].nama}</h5>
        <p class="card-text">${TIM[pro-1].divis}</p>
      </div>
    </div>
  </div>
`
}

function render() {
    for (let index = 1; index <= PENDAFTARAN.length; index++) {
        pendaftaran.innerHTML += `${HtmlPendaftaran(index)}`;
    }
    for (let index = 1; index <= PROGRAM.length; index++) {
        programs.innerHTML += `${HtmlProgram(index)}`;
    }
}

function Teams() {
    for (let index = 1; index <= TIM.length; index++) {
        tims.innerHTML += `${HtmlTimCompany(index)}`;
    }
}