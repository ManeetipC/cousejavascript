console.log(123)

$(function () {
    loaddata()
    setInterval(loaddata, 5000);

    function loaddata() {
        var firebasetest = firebase.database().ref();
        let datachat = firebasetest.once('value').then(data => {
            return data.val();
        });
        datachat.then(data => {
            $('.datashow').html('');
            Object.keys(data).forEach(function (key) {
                if ($('#txtname').val() === data[key]['name']) {
                    $('.datashow').append(`<div class="text-right datayou" ">
                     <h4>คุณ : ${data[key]['name']}</h4>
                     <h3>${data[key]['value']}</h3>
                 </div>`)
                } else {
                    $('.datashow').append(` <div class="text-left datafriend">
                                        <h4>คุณ : ${data[key]['name']}</h4>
                                      <h3>${data[key]['value']}</h3>
                                   </div>`)
                }
            });
        })
    }

    $("#btnsenddata").click(function () {
        let d = new Date();
        let datadate = d.getDay() + '-' + d.getMonth() + '-' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        var firebasetest = firebase.database().ref(datadate);
        try {
            if ($('#txtname').val() === '') {
                $('#txtname').focus()
                throw new Error('กรุณากรอกชื่อ')
            }

            if ($('#comment').val() === '') {
                $('#comment').focus()
                throw new Error('กรุณากรอกข้อความที่จะส่ง')
            }
            let datachat = firebasetest.once('value').then(data => {
                return data.val();
            });
            datachat.then(data => {
                let countkey = 0
                if (!data === null) {
                    let countkey = Object.keys(data).length
                }

                firebasetest.child("name").set($('#txtname').val())
                firebasetest.child("value").set($('#comment').val())
                    .then(data => {
                        loaddata()
                        $('#comment').val('')
                    })
            })

        } catch (ex) {
            alert(ex.message)
        }

    });

});

function test() {
    $('#comment').val().css('color', '')
}