function checkdata() {
    try {
        if ($("#txtname").val() === '') {
            $("#txtname").addClass('is-invalid');
            $("#txtname").focus();
            throw new Error('คำผิด')
        } else {
            $("#txtname").removeClass('is-invalid');
        }
        if ($("#txtlastname").val() === '') {
            $("#txtlastname").addClass('is-invalid');
            $("#txtlastname").focus();
            throw new Error('คำผิด')
        } else {
            $("#txtlastname").removeClass('is-invalid');
        }
        if ($("#txtemail").val() === '') {

            $("#txtemail").addClass('is-invalid');
            $("#txtemail").focus();
            $('.checkdataemail').html('').html('กรุณากรอกอีเมลล์')
            throw new Error('คำผิด')


        } else {

            if (validateEmail($("#txtemail").val())) {
                $("#txtemail").removeClass('is-invalid');
                $('.checkdataemail').html('').html('กรุณากรอกอีเมลล์')
            } else {
                $("#txtemail").addClass('is-invalid');
                $("#txtemail").focus();
                $('.checkdataemail').html('').html('กรุณากรอกอีเมลล์ให้ถูกต้อง')
                throw new Error('คำผิด')
            }
        }
        if ($("#txtpassword").val() === '') {
            $("#txtpassword").addClass('is-invalid');
            $("#txtpassword").focus();
            throw new Error('คำผิด')
        } else {
            $("#txtpassword").removeClass('is-invalid');
        }

        if ($("#txtmobile").val() === '') {

            $("#txtmobile").addClass('is-invalid');
            $("#txtmobile").focus();
            $('.checkdatamobile').html('').html('กรุณากรอกเบอร์โทรศัพท์')
            throw new Error('คำผิด')


        } else {
            var phoneno = /^\d{10}$/;
            if ($("#txtmobile").val().match(phoneno)) {
                $("#txtmobile").removeClass('is-invalid');
                $('.checkdatamobile').html('').html('กรุณากรอกเบอร์โทรศัพท์')
            } else {
                $("#txtmobile").addClass('is-invalid');
                $("#txtmobile").focus();
                $('.checkdatamobile').html('').html('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง')
                throw new Error('คำผิด')
            }
        }

        if ($("#selectday").val() === 'วัน') {
            $("#selectday").addClass('is-invalid');
            $("#selectday").focus();
            throw new Error('คำผิด')
        } else {
            $("#selectday").removeClass('is-invalid');
        }

        if ($("#selectmonth").val() === 'เดือน') {
            $("#selectmonth").addClass('is-invalid');
            $("#selectmonth").focus();
            throw new Error('คำผิด')
        } else {
            $("#selectmonth").removeClass('is-invalid');
        }

        if ($("#selectyear").val() === 'ปี') {
            $("#selectyear").addClass('is-invalid');
            $("#selectyear").focus();
            throw new Error('คำผิด')
        } else {
            $("#selectyear").removeClass('is-invalid');
        }
    } catch (ex) {
        console.log(ex.message)
    }
}

function login() {
    try {
        if ($("#txtusername").val() === '') {
            $("#txtusername").addClass('is-invalid');
            $("#txtusername").focus();
            throw new Error('คำผิด')
        } else {
            $("#txtusername").removeClass('is-invalid');
        }

        if ($("#txtpass").val() === '') {
            $("#txtpass").addClass('is-invalid');
            $("#txtpass").focus();
            throw new Error('คำผิด')
        } else {
            $("#txtpass").removeClass('is-invalid');
        }
    } catch (ex) {
        console.log(ex.message)
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}