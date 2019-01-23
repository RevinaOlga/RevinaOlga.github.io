(function () {

    document.querySelectorAll('.portfolio_top-menu .item_link').forEach

        (function (el, index) {

            var illustration = document.querySelectorAll('.illustration'),
                art = document.querySelectorAll('.art'),
                design = document.querySelectorAll('.design'),
                portfolioIcon = document.querySelectorAll('.portfolio_icon'),
                portfolioIconName = document.querySelectorAll('.portfolio_icon-name');


            el.onclick = function (item) {



                illustration.forEach(function (elem) {elem.classList.remove('portfolio_icon__current')});

                art.forEach(function (elem) {elem.classList.remove('portfolio_icon__current')});

                design.forEach(function (elem) {elem.classList.remove('portfolio_icon__current')});



                if (el.textContent === "illuctration") {

                    art.forEach(function (elem) {elem.classList.add('portfolio_icon__current')});

                    design.forEach(function (elem) {elem.classList.add('portfolio_icon__current')});

                }


                if (el.textContent === "digital art") {

                    illustration.forEach(function (elem) {elem.classList.add('portfolio_icon__current')});

                    design.forEach(function (elem) {elem.classList.add('portfolio_icon__current')});


                }


                if (el.textContent === "web design") {

                    art.forEach(function (elem) {elem.classList.add('portfolio_icon__current')});

                    illustration.forEach(function (elem) {elem.classList.add('portfolio_icon__current')});


                }


            }

        })


})();

