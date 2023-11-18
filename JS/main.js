cccdocument.addEventListener('DOMContentLoaded', (event) => {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    if(page === 'Planine.html'){
      let confirmed = false;
      while(!confirmed){
        confirmed = confirm("Pažnja! Stazama se krećete na sopstvenu odgovornost!");
        if(confirmed){
            let checkbox = prompt("Pažnja! Stazama se krećete na sopstvenu odgovornost! (Pročitao/la sam i slažem se - odgovorite sa 'da' za potvrdu)");
            confirmed = checkbox.toLowerCase() === 'da';
        }
      }
    }
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    if(page === 'Ture.html'){
      let confirmed = false;
      while(!confirmed){
        confirmed = confirm("Pažnja! Stazama se krećete na sopstvenu odgovornost!");
        if(confirmed){
            let checkbox = prompt("Pažnja! Stazama se krećete na sopstvenu odgovornost! (Pročitao/la sam i slažem se - odgovorite sa 'da' za potvrdu)");
            confirmed = checkbox.toLowerCase() === 'da';
        }
      }
    }
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    if(page === 'Rezervacije.html'){
      let confirmed = false;
      while(!confirmed){
        confirmed = confirm("Pažnja! Stazama se krećete na sopstvenu odgovornost!");
        if(confirmed){
          let checkbox = prompt("Pažnja! Stazama se krećete na sopstvenu odgovornost! (Pročitao/la sam i slažem se - odgovorite sa 'da' za potvrdu)");
          confirmed = checkbox.toLowerCase() === 'da';
        }
      }
    }
  });
  