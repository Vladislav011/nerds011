var link = document.querySelector(".write-us");

      var popup = document.querySelector(".modal-content");
      var close = popup.querySelector(".modal-content-close");

      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=name]");
      var password = popup.querySelector("[name=email]");

      var storage = localStorage.getItem(".write-us");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");

        if (storage) {
          name.value = storage;
          email.focus();
        } else {
          name.focus();
        }

      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function(event) {
        if (!name.value || !email.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("name", name.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
          }
        }
      });
      