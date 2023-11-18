
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    if(page === 'Planine.html' || page === 'Ture.html' || page === 'Rezervacije.html'){
      let confirmed = false;
      while(!confirmed){
        confirmed = confirm("Pažnja! Stazama se krećete na sopstvenu odgovornost!");
        if(confirmed){
            let checkbox = prompt("Pažnja! Stazama se krećete na sopstvenu odgovornost! (Pročitao/la sam i slažem se - odgovorite sa 'da' za potvrdu)");
            confirmed = checkbox.toLowerCase() === 'da';
        }
      }
    }
  
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
    calculateTotal(); // Inicijalno izračunavanje ukupnog iznosa
  });
  
  function openGallery(images) {
    if(images && images.length > 0) {
      const gallery = document.getElementById('galleryModal');
      gallery.innerHTML = '<span class="close" onclick="closeGallery()">&times;</span>';
      images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.classList.add('modal-content');
        img.alt = 'Slika ' + (index + 1);
        gallery.appendChild(img);
      });
      gallery.style.display = "block";
    }
  }
  
  function closeGallery() {
    document.getElementById('galleryModal').style.display = "none";
  }
  
  function updateTotal(change) {
    var peopleInput = document.getElementById('people');
    var currentCount = parseInt(peopleInput.value);
    var newCount = currentCount + change;
    if(newCount >= 1 && newCount <= 20) {
      peopleInput.value = newCount;
    }
    calculateTotal();
  }
  
  function calculateTotal() {
    var peopleCount = parseInt(document.getElementById('people').value);
    var tourSelect = document.getElementById('tour');
    var tourPrice = parseInt(tourSelect.options[tourSelect.selectedIndex].value);
    var lunchPrice = document.getElementById('lunch').checked ? 1500 : 0;
    var totalPrice = (peopleCount * tourPrice) + (peopleCount * lunchPrice);
    document.getElementById('total-price').textContent = totalPrice;
  }
  
  $(document).ready(function(){
    $('#date').datepicker({
      minDate: 0, // Korisnik ne može da izabere datum pre današnjeg dana
      dateFormat: 'dd/mm/yy' // Format datuma
    });
  });
  