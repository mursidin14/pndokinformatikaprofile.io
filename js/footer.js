class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h1>Logo</h1>
                    <div class="card card1">
                        <div class="card-body">
                            <h5 class="card-title">Pondok Informatika</h5>
                            <p class="card-text">Adalah komunitas belajar yang bertujuan Membina generasi IT yang Rabbani, mencetak santri yang yang profesional dan bermanfaat bagi Ummat.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card card2">
                        <div class="card-body">
                            <h5 class="card-title">Alamat</h5>
                            <p class="card-text">Pondok informatika HQ Jalan perintis kemerdekaan 7 No. 100, Kota Makassar, Sulawesi Selatan, Indonesia.</p>
                            <div class="map">
                            <a class="text-white" href="#" style="text-decoration: none;">  
                                 <p class="card-text">Lihat Google Maps &nbsp&nbsp <i class="fas fa-external-link-alt"></i></p>
                            </a> 
                            </div>
                        </div>
                    </div>
                    <div class="card card3">
                        <div class="card-body">
                            <h5 class="card-title">Kontak</h5>
                            <p class="card-text">Email : salam@pimakassar.com <br> WA : 028308179874981, 973403481740173</p>
                        </div>
                        <div class="d-flex card4">
                            <div class="sosmed">
                                <i class="fab fa-facebook-f facebook"></i>
                            </div>
                            <div class="sosmed ms-3">
                                <i class="fab fa-twitter facebook"></i>
                            </div>
                            <div class="sosmed ms-3">
                                <i class="fab fa-instagram facebook"></i>
                            </div>
                            <div class="sosmed ms-3">
                                <i class="fab fa-youtube facebook"></i>
                            </div>
                            <div class="sosmed ms-3">
                                <i class="fab fa-linkedin-in facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
        `
    }
}

customElements.define("footer-foot", Footer);