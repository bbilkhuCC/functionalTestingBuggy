/**
 * File Name: jsfile.js
 *
 * Revision History:
 *       Baljeet Bilkhu: 05/20/2022 - code added and created
 *
 */


var errorMessages = "";


function ValidateInputs() {

    var f = $("#registrationForm");

    f.validate({
        rules: {
            firstName: {
                required: true,
                firstNameCheck: true
            },
            lastName: {
                required: true,
                lastNameCheck: true
            },
            email: {
                required: true
            },
            range01: {
                required: true,
                rangeCheck: true
            },
            phone: {
                required: true,
                phoneCheck: true
            },
            pin: {
                required: true,
                pinCheck: true
            },

            dateBefore: {
                required: true,
                dateBeforeCheck: true
            },

            dateAfter: {
                required: true,
                dateAfterCheck: true
            }

        },
        messages: {
            firstName: {
                required: "First name is required",
                firstNameCheck: "First name must contain  more than one alphabetic characters with the first letter capitalized"
            },
            lastName: {
                required: "Last name is required",
                lastNameCheck: "Last name must contain more than one alphabetic characters with the first letter capitalized"
            },
            email: {
                required: "A valid email address is required"
            },
            range01: {
                required: "Please enter a number between 1 and 100 only",
                rangeCheck: "Please enter a number between 1 and 100"
            },
            phone: {
                required: "Please enter a valid phone number",
                phoneCheck: "Phone Number must follow the patterns 111-111-1111 or (111)111-1111 and cannot start with 0 or a 1"
            },
            pin: {
                required: "Please enter a valid four-digit PIN",
                pinCheck: "PIN must be a four digit number like 1111"
            },
            dateBefore: {
                required: "Please select a valid date",
                dateBeforeCheck: "Selected date must be before January 1st, 1980"
            },
            dateAfter: {
                required: "Please select a valid date",
                dateAfterCheck: "Selected date must be after January 1st, 2000"
            }

        }
    });

    return f.valid();

}


jQuery.validator.addMethod("rangeCheck",
    function (value, element) {
        var rangePattern = /^\b([1-9]|[1-9][0-9]|100)\b$/i;

        return this.optional(element) || rangePattern.test(value);

    },
    "Number has to be between 1 and 100"
);

jQuery.validator.addMethod("firstNameCheck",
    function (value, element) {
        var firstNamePattern = /^[A-Z][-a-zA-Z']+$/;

        return this.optional(element) || firstNamePattern.test(value);

    },
    "First Name must only contain more than one alphabetic characters in it and the first letter must be capialized"
);

jQuery.validator.addMethod("lastNameCheck",
    function (value, element) {
        var lastNamePattern = /^[A-Z][-a-zA-Z']+$/;

        return this.optional(element) || lastNamePattern.test(value);

    },
    "Last Name must only contain more than one alphabetic characters in it and the first letter must be capialized"
);

jQuery.validator.addMethod("phoneCheck",
    function (value, element) {
        var phonePattern1 = /^[2-9]\d{2}-\d{3}-\d{4}$/;
        var phonePattern2 = /^\([2-9]\)\d{2}-\d{3}-\d{4}$/;

        return this.optional(element) || phonePattern1.test(value) || phonePattern2.test(value);

    },
    "Phone Number must follow the patterns 111-111-1111 or (111)111-1111 and cannot start with 0 or a 1"
);

jQuery.validator.addMethod("pinCheck",
    function (value, element) {
        var pinPattern = /^\d{5}$/;

        return this.optional(element) || pinPattern.test(value);

    },
    "PIN must follow the pattern 1111"
);

$.validator.addMethod("dateBeforeCheck",
    function (value, element) {
        var d = new Date(value);

        r = (d < new Date('1981-01-01'));
        return r;
    },
    "Date must be before January 1st, 1980"
);

$.validator.addMethod("dateAfterCheck",
    function (value, element) {
        var d = new Date(value);

        r = (d > new Date('2000-01-01'));
        return r;
    },
    "Date must be after January 1st, 2000"
);

function Register() {
    if (ValidateInputs()) {

        var json = {};

        $(":input").each(function () {
            json[$(this).attr("id")] = $(this).val();
        });

        localStorage.setItem("registration", JSON.stringify(json));
        $(location).prop('href', 'viewResults.html');

    }
}

function LoadRegistrationData(id) {

    var json = JSON.parse(localStorage.getItem("registration"));

    $(":input").each(function () {
        $(this).val(json[$(this).attr("id")]);
    });

    console.log(json);


}




