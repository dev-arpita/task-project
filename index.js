function toggleMenu() {
                var menuBox = document.querySelector('.sidebar');
                if (menuBox.style.display == "block") { // if is menuBox displayed, hide it
                    // menuBox.style.display = "none";
                    menuBox.classList.remove("show");
                    menuBox.classList.add("hide");
                }
                else { // if is menuBox hidden, display it
                    // menuBox.style.display = "block";
                    menuBox.classList.add("show");
                }
            }
            function toggleFromDesktop() {
                    var menuBox = document.querySelector('.nav__menu');
                    console.log(menuBox.classList.contains("show"));
                    if (menuBox.classList.contains("show")) { // if is menuBox displayed, hide it
                        // menuBox.style.display = "none";
                        menuBox.classList.remove("show");
                        menuBox.classList.add("hide");
                    }
                    else { // if is menuBox hidden, display it
                        // menuBox.style.display = "block";
                        menuBox.classList.remove("hide");
                         menuBox.classList.add("show");
                    }
                }