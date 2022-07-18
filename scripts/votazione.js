window.onload = function() {
    // let data_inizio = document.body.getElementsByTagName('input').data_inizio;
    let data_inizio = $("input[name='data_inizio']").get(0);

    // let data_fine = document.body.getElementsByTagName('input').data_fine;
    let data_fine = $("input[name='data_fine']").get(0);

    data_inizio.addEventListener('change', function(event) {
        if (data_fine.value != '') {
            if (event.target.value > data_fine.value) {
                alert('La data di inizio deve essere precedente alla data di fine');
                event.target.value = '';
            }
        }
    });

    data_fine.addEventListener('change', function(event) {
        if (data_inizio.value != '') {
            if (event.target.value < data_inizio.value) {
                alert('La data di fine deve essere successiva alla data di inizio');
                event.target.value = '';

            }
        }
    });
}