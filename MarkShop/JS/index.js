﻿var btnShow1 = document.querySelector(".feat-show");
var btnShow2 = document.querySelector(".serv-show");
var icon1 = document.querySelector(".first");
var icon2 = document.querySelector(".second");
document.querySelector(".feat-btn").onclick = function () {
    document.querySelector(".feat-btn").classList.toggle("active");
    btnShow1.classList.toggle("show");
    icon1.classList.toggle("rolate");
}
document.querySelector(".serv-btn").onclick = function () {
    document.querySelector(".serv-btn").classList.toggle("active");
    btnShow2.classList.toggle("show1");
    icon2.classList.toggle("rolate");
}


$("#form-validate").validate({
    rules: {
        TenSP: {
            required: !0
        },
        MoTa: {
            minlength: 20,
            required: !0
        },
        GiaBan: {
            required: !0,
            number: !0
        },
        GiaNhap: {
            required: !0,
            number: !0
        },
        SoLuongTon: {
            required: !0,
            number: !0
        }
    },
    errorClass: "help-block error",
    highlight: function (e) {
        $(e).closest(".form-group").addClass("has-error")
    },
    unhighlight: function (e) {
        $(e).closest(".form-group").removeClass("has-error")
    },
});




