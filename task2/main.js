

$(document).ready(function () {

    $("#console").keyup(function () {
        alert("Iltimos ekrandagi klavishlardan foydalaning men klaviatura qurulmasidan kiritilgan malumotlarni qabul qilmayman ! ");
        $("#console").val(function () {
            this.value = "";
            return this.value;
        });
    });
    var arrays = [];
    var consoleValue = "";
    var chars = "";
    var number = "";
    var bol = true;
    $(".buttons").click(function () {
        switch ($(this).text()) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9": {
                number = $(this).text();
                consoleValue = $("#console").val();
                console.log(consoleValue);
                var a = "";
                for (let index = 0; index < consoleValue.length; index++) {
                    chars = consoleValue.charAt(index);
                    if (chars === "+" || chars === "-" || chars === "*" || chars === "/") {
                        a = consoleValue.charAt(index + 1);
                        bol = false;
                    }
                }

                if (bol) {
                    $("#console").val(function () {
                        $("#parag").text(this.value + number);
                        return this.value + number;
                    });
                } else {
                    if (a !== "0") {
                        $("#console").val(function () {
                            $("#parag").text(this.value + number);
                            return this.value + number;
                        });
                    }
                }
                number = "";
                consoleValue = "";
                break;
            }

            case "AC": {
                $("#console").val(function () {
                    this.value = ""
                    $("#parag").text(this.value);
                    return this.value;
                });
                number = "";
                consoleValue = "";
                chars = "";
                arrays = [];
                bol = true;
                break;
            }

            case "0": {
                number = $(this).text();
                consoleValue = $("#console").val();
                chars = consoleValue.charAt(consoleValue.length - 1);
                if (consoleValue !== "" && chars !== "+" && chars !== "-" && chars !== "*" && chars !== "/") {
                    var a = "";
                    for (let index = 0; index < consoleValue.length; index++) {
                        chars = consoleValue.charAt(index);
                        if (chars === "+" || chars === "-" || chars === "*") {
                            a = consoleValue.charAt(index + 1);
                        }
                    }
                    if (a !== "0") {
                        $("#console").val(function () {
                            $("#parag").text(this.value + number);
                            return this.value + number;
                        });
                    }
                } else if (chars === "+" || chars === "-" || chars === "*") {
                    $("#console").val(function () {
                        $("#parag").text(this.value + number);
                        return this.value + number;
                    });
                }
                number = "";
                consoleValue = "";
                chars = "";
                break;
            }

            case "+": {
                number = $(this).text();
                consoleValue = $("#console").val();
                chars = consoleValue.charAt(consoleValue.length - 1);
                if (consoleValue !== "" && chars !== "+" && chars !== "-" && chars !== "*" && chars !== "/") {
                    $("#console").val(function () {
                        $("#parag").text(this.value + number);
                        return this.value + number;
                    });
                }
                number = "";
                consoleValue = "";
                chars = "";
                break;
            }

            case "-": {
                number = $(this).text();
                consoleValue = $("#console").val();
                chars = consoleValue.charAt(consoleValue.length - 1);
                if (consoleValue === "") {
                    $("#console").val(function () {
                        $("#parag").text(this.value + number);
                        return this.value + number;
                    });
                } else if (chars !== "-" && chars !== "+") {
                    $("#console").val(function () {
                        $("#parag").text(this.value + number);
                        return this.value + number;
                    });
                } else if (chars === "-") {
                    $("#console").val(function () {
                        var chars1 = consoleValue.charAt(consoleValue.length - 2);
                        if (chars1 !== "*" && chars1 !== "/") {
                            consoleValue = consoleValue.substring(0, consoleValue.length - 1);
                            this.value = consoleValue + "+";
                            $("#parag").text(this.value);
                            return this.value;
                        } else {
                            $("#parag").text(this.value);
                            return this.value;
                        }

                    });
                } else if (chars = "+") {
                    $("#console").val(function () {
                        consoleValue = consoleValue.substring(0, consoleValue.length - 1);
                        this.value = consoleValue;
                        $("#parag").text(this.value + number);
                        return this.value + number;
                    });
                }
                number = "";
                consoleValue = "";
                chars = ""
                break;
            }

            case "*": {
                number = $(this).text();
                consoleValue = $("#console").val();
                chars = consoleValue.charAt(consoleValue.length - 1);
                if (consoleValue !== "" && chars !== "+" & chars !== "-" && chars !== "*" && chars !== "/") {
                    $("#console").val(function () {
                        $("#parag").text(this.value + number);
                        return this.value + number;
                    });
                }
                number = "";
                consoleValue = "";
                chars = "";
                break;
            }

            case "/": {
                number = $(this).text();
                consoleValue = $("#console").val();
                chars = consoleValue.charAt(consoleValue.length - 1);
                if (consoleValue !== "" && chars !== "+" & chars !== "-" && chars !== "*" && chars !== "/") {
                    $("#console").val(function () {
                        $("#parag").text(this.value + number);
                        return this.value + number;
                    });
                }
                number = "";
                consoleValue = "";
                chars = "";
                break;
            }

            case "=": {
                number = $(this).text();
                consoleValue = $("#console").val();
                chars = consoleValue.charAt(0);
                var num = 0;
                for (let index = 1; index < consoleValue.length; index++) {
                    if (consoleValue.charAt(index) !== "*" && consoleValue.charAt(index) !== "/" && consoleValue.charAt(index) !== "+" && consoleValue.charAt(index) !== "-") {
                        chars += consoleValue.charAt(index);
                        if (index + 1 === consoleValue.length) {
                            num = parseFloat(chars);
                            arrays.push(num);
                            chars = "";
                            num = 0;
                        }
                    } else if (chars !== "") {
                        num = parseFloat(chars);
                        arrays.push(num);
                        chars = "";
                        num = 0;
                        arrays.push(consoleValue.charAt(index));
                    } else {
                        arrays.push(consoleValue.charAt(index));
                    }
                }
                var count = 1;
                var hisob = 0;
                while (count < arrays.length) {
                    if (arrays[count] === "*") {
                        if (arrays[count + 1] === "-") {
                            hisob = (arrays[count - 1] * ((arrays[count + 2]) * -1));
                            arrays.splice((count - 1), 4, hisob);
                            count = 1;
                            continue;
                        } else {
                            hisob = (arrays[count - 1] * arrays[count + 1]);
                            arrays.splice((count - 1), 3, hisob);
                            count = 1;
                            continue;
                        }
                    } else if (arrays[count] === "/") {
                        if (arrays[count + 1] === "-") {
                            hisob = (arrays[count - 1] / ((arrays[count + 2]) * -1));
                            arrays.splice((count - 1), 4, hisob);
                            count = 1;
                            continue;
                        } else {
                            hisob = arrays[count - 1] / arrays[count + 1];
                            arrays.splice((count - 1), 3, hisob);
                            count = 1;
                            continue;
                        }
                    }
                    count += 1;
                }
                var hisob = arrays[0];
                count = 1;
                while (count < arrays.length) {
                    if (arrays[count] == "+") {
                        hisob += arrays[count + 1];
                        arrays.splice((count - 1), 3, hisob);
                        hisob = arrays[0];
                        continue;
                    } else if (arrays[count] == "-") {
                        hisob -= arrays[count + 1];
                        arrays.splice((count - 1), 3, hisob);
                        hisob = arrays[0];
                    }
                }
                $("#console").val(function () {
                    $("#parag").text(this.value + " " + number + " " + arrays[0]);
                    this.value = arrays[0];
                    return this.value;
                });
                number = "";
                consoleValue = "";
                chars = "";
                arrays = [];
                bol = true;
                break;
            }
        }
    });

});