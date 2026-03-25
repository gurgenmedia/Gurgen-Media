// открытие попапов
document.getElementById('portfolioObj').onclick = () => openPopup('portfolioPopup');
document.getElementById('blogObj').onclick = () => openPopup('blogPopup');
document.getElementById('resumeObj').onclick = () => openPopup('resumePopup');
document.getElementById('contactsObj').onclick = () => openPopup('contactsPopup');

function openPopup(id) {
  document.getElementById(id).classList.add('active');
}

function closePopup(id) {
  document.getElementById(id).classList.remove('active');
}

// загрузка фото
const upload = document.getElementById('upload');
const gallery = document.getElementById('gallery');

upload.addEventListener('change', function() {
  const files = upload.files;

  for (let file of files) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      gallery.appendChild(img);
    }

    reader.readAsDataURL(file);
  }
});