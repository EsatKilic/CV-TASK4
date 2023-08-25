// Metin içeriklerini alıp CV içeriğine yerleştirme
const adSoyadInput = document.getElementById('adSoyad');
const unvanInput = document.getElementById('unvan');
const tel = document.getElementById('tel');
const mail = document.getElementById('mail');
const web = document.getElementById('web');
const adres = document.getElementById('adres');
const egitimAciklama = document.getElementById('aciklama1');
const okulSayisi = document.getElementById('okul');
const yetenekAciklama = document.getElementById('aciklama2');
const yetenekSayisi = document.getElementById('yetenek');
const hakkimdaTextarea = document.getElementById('hakkimda');
const deneyim = document.getElementById('deneyim');
const yaziTipiSelect = document.getElementById('yaziTipi')
const isimKutusu = document.querySelector('.isimKutusu');
const iletisimdiv = document.querySelector('.iletisim');
const egitimdiv = document.querySelector('.egitim');
const yetenekdiv = document.querySelector('.yetenekdiv');
const hakkimdadiv = document.querySelector('.hakkimdadiv');
const deneyimdiv = document.querySelector('.deneyimdiv');


adSoyadInput.addEventListener('input', updateCVisim);
unvanInput.addEventListener('input', updateCVisim);
tel.addEventListener('input', updateCViletisim);
mail.addEventListener('input', updateCViletisim);
web.addEventListener('input', updateCViletisim);
adres.addEventListener('input', updateCViletisim);
egitimAciklama.addEventListener('input', updateCVegitim);
okulSayisi.addEventListener('input', updateCVegitim);
yetenekAciklama.addEventListener('input', updateCVyetenek);
yetenekSayisi.addEventListener('input', updateCVyetenek);
hakkimdaTextarea.addEventListener('input', updateCVhakkimda);
deneyim.addEventListener('input', updateCVdeneyim);
yaziTipiSelect.addEventListener('change', applyFont);

function applyFont() {
    const selectedFont = yaziTipiSelect.value;
    cvContent.style.fontFamily = selectedFont;
  }

function updateCVisim() {
    isimKutusu.innerHTML = `
    <h3>${adSoyadInput.value}</h3>
    <p>${unvanInput.value}</p>
  `;
}
  function updateCViletisim() {
    // iletisimdiv=""
    iletisimdiv.innerHTML = `
    <p>İLETİŞİM:  </p> <br>
     <ul>
     <li>${tel.value}</li>
     <li>${mail.value}</li>
     <li>${adres.value}</li>
     <li>${web.value}</li>
     </ul>
      
    `;
  }
  function updateCVegitim() {
    egitimdiv.innerHTML = `
    <p> <b>EĞİTİM:</b>  </p> <br>
    <p>${egitimAciklama.value}</p>
    <p>Okul Sayisi: ${okulSayisi.value}</p>
    `;
  }
  function updateCVyetenek() {
    yetenekdiv.innerHTML = `
    <p>YETENEKLER: </p> <br>
    <p>${yetenekAciklama.value}</p>
    <p>Yetenek Sayisi: ${yetenekSayisi.value}</p>
    `;
  }
  function updateCVhakkimda() {
    hakkimdadiv.innerHTML = `
      <p>Hakkımda: ${hakkimdaTextarea.value}</p>
    `;
  }
  function updateCVdeneyim() {
    deneyimdiv.innerHTML = `
    <p>İŞ DENEYİMİ: ${deneyim.value}</p>
    `;
  }



const arkaPlanRenkInput = document.getElementById('arkaPlanRenk');
const solKolonRenkInput = document.getElementById('solKolon');
const isimKutusuInput = document.getElementById('isimKutusu');
const isimKutusuYaziInput = document.getElementById('isimKutusuYazi');
const cvColumns = document.querySelectorAll('.cv-column');
const solKolon = document.querySelectorAll('.solKolon');


arkaPlanRenkInput.addEventListener('input', applyAppearance);
solKolonRenkInput.addEventListener('input', applyAppearanceSol);
isimKutusuInput.addEventListener('input', applyAppearanceIsim);
isimKutusuYaziInput.addEventListener('input', applyAppearanceYazi);

function applyAppearance() {
  const selectedColor = arkaPlanRenkInput.value;
  cvColumns.forEach(column => {
    column.style.backgroundColor = selectedColor;
  });
}
  function applyAppearanceSol() {
    const selectedColorSol = solKolonRenkInput.value;
    solKolon.forEach(column => {
      column.style.backgroundColor = selectedColorSol;
    });
}
function applyAppearanceIsim() {
    const selectedColorIsim = isimKutusuInput.value;
    isimKutusuInput.forEach(column => {
      column.style.backgroundColor = selectedColorIsim;
    });
}
function applyAppearanceYazi() {
    const selectedColorIsim = isimKutusuYaziInput.value;
    isimKutusuYaziInput.forEach(column => {
      column.style.backgroundColor = selectedColorIsim;
    });
}

// Diğer görünüş ayarları ve işlevselliği buraya ekleyebilirsiniz
