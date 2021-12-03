/*!
    * Start Bootstrap - SB Admin v7.0.3 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//AQUI EMPIEZA MI CAGADERO PART1

// dom variables
var tag = document.getElementsByTagName("fieldset");
//declaro el campo activo y la cuenta
var formcount = 0;
var fieldset = tag[formcount];
fieldset.className = "show";

// creates and stores a number of bullets
var bullet = "<div class='msf_bullet'></div>";
var msize = tag.length;
for (var i = 1; i < msize; ++i) {
    bullet += "<div class='msf_bullet'></div>";
};
// injects balas
var msf_bullet_o = document.getElementsByClassName("msf_bullet_o");
for (var i = 0; i < msf_bullet_o.length; ++i) {
    var msf_b_item = msf_bullet_o[i];
    msf_b_item.innerHTML = bullet;
};

// removes the first back button & the last next button
document.getElementsByName("back")[0].className = "msf_hide";
document.getElementsByName("next")[msf_bullet_o.length - 1].className = "msf_hide";

// Activar el bullet activo
var msf_bullets = document.getElementsByClassName("msf_bullet");
msf_bullets[formcount].className += " msf_bullet_active";

// validacion y loopeo de los botones
function msf_btn_next() {
    var val1l = true;

    var msf_fs = document.querySelectorAll("fieldset")[formcount];
    var msf_fs_i_count = msf_fs.querySelectorAll("input").length;

    for (i = 0; i < msf_fs_i_count; ++i) {
        var msf_input_s = msf_fs.querySelectorAll("input")[i];
        if (msf_input_s.getAttribute("type") === "button") {
            // aqui moria
        } else {
            if (msf_input_s.value === "") {
                msf_input_s.style.backgroundColor = "pink";
                val1l = false;
            } else {
                if (val1l === false) {} else {
                    val1l = true;
                    msf_input_s.style.backgroundColor = "lime";
                }
            }
        };
    };
    if (val1l === true) {
        // ir al siguiente paso
        var selection = tag[formcount];
        selection.className = "msf_hide";
        formcount = formcount + 1;
        var selection = tag[formcount];
        selection.className = "show";
        // hacer el bullet activo
        var msf_bullets_a = formcount * msize + formcount;
        msf_bullets[msf_bullets_a].className += " msf_bullet_active";
    }
};
function myFunction() {
    var radiobut = document.getElementById("check");
    var text = document.getElementById("text");
    if (radiobut.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  function myFunction2() {
    var radiobut = document.getElementById("check2");
    var text = document.getElementById("text2");
    if (radiobut.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  function myFunction3() {
    var radiobut = document.getElementById("check3");
    var text = document.getElementById("text3");
    if (radiobut.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

// regresar al paso anterior
function msf_btn_back() {
    tag[formcount].className = "msf_hide";
    formcount = formcount - 1;
    tag[formcount].className = "showhide";
};

/* Aqui termina */