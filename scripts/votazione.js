function iterLog(argument, time) {
    console.log(argument.checked);
    setTimeout(iterLog, time, argument, time);
}
// iterLog(radio_referendum, 2000);

window.onload = function() {
    let data_inizio = $("input[name='data_inizio']").get(0);

    let data_fine = $("input[name='data_fine']").get(0);

    data_inizio.addEventListener('change', function(event) {
        Cookies.set('data_inizio', data_inizio.value);
        if (data_fine.value != '') {
            if (event.target.value > data_fine.value) {
                alert('La data di inizio deve essere precedente alla data di fine');
                event.target.value = '';
            }
        }
    });

    data_fine.addEventListener('change', function(event) {
        Cookies.set('data_fine', data_fine.value);
        if (data_inizio.value != '') {
            if (event.target.value < data_inizio.value) {
                alert('La data di fine deve essere successiva alla data di inizio');
                event.target.value = '';

            }
        }
    });

    let navbar_as = $(".navbar a:not([class='link-selected'])");
    navbar_as.addClass('link-disabled');
    let radio_referendum = $("input[value='R']").get(0);
    let radio_elezione = $("input[value='E']").get(0);
    let checked = null;

    radio_referendum.addEventListener('change', function(event) {
        if (event.target.checked) {
            Cookies.set('type', radio_referendum.value);
            navbar_as.filter(":not([href*=liste])").removeClass('link-disabled');
            navbar_as.filter("[href*=liste]").addClass('link-disabled');
        }
    });
    radio_elezione.addEventListener('change', function(event) {
        if (event.target.checked) {
            Cookies.set('type', radio_elezione.value);
            navbar_as.removeClass('link-disabled');
        }
    });

    
}