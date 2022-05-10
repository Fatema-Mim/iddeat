 const modalOverlay = document.querySelector("#modal-overlay");
      const modal = document.querySelector("#modal");

      function openModal(value) {
        if (value) {
          modalOverlay.classList.remove("hidden");
          modal.classList.remove("opacity-0");
        } else {
          modalOverlay.classList.add("hidden");
          modal.classList.add("opacity-0");
        }
      }

      const decreaseNumber = (decrement,mainPice) =>{
          var itemval = document.getElementById(decrement);
          const mPrice = document.getElementById(mainPice);
            console.log("de", mPrice)

          if(itemval.value <=0){
              itemval.value = 0;
          }else{
              itemval.value = parseInt(itemval.value) -1;
          }
      }
      const increaseNumber = (increment,mainPice) =>{
          var itemval = document.getElementById(increment);
          const mPrice = document.getElementById(mainPice);
          const newPrice = parseFloat(mPrice.innerHTML)
          mPrice.innerHTML = newPrice + newPrice;
          console.log("in", mPrice.innerHTML)
        
          itemval.value = parseInt(itemval.value) + 1;
        }