function finder(){
    var ele = document.getElementsByName('opt');
    for(i = 0; i < ele.length; i++) {
        let val = ele[i].value ;
        if (ele[i].checked){
            if (val === "toefl"){
                const college = [
                    {from: 114.01, to: 120,name: 'college1'},
                    {from: 108.01, to: 114, name: 'college2'},
                    {from: 102.01, to: 108, name: 'college3'},
                    {from: 96.01, to: 102, name: 'college4'},
                    {from: 90.01, to: 96, name: 'college5'},
                    {from: 84.01, to: 90, name: 'college6'},
                    {from: 78.01, to: 84, name: 'college7'},
                    {from: 72.01, to: 78, name: 'college8'},
                    {from: 66.01, to: 72, name: 'college9'},
                    {from: 60.01, to: 66, name: 'college10'},
                    {from: 54.01, to: 60, name: 'college11'},
                    {from: 48.01, to: 54, name: 'college12'},
                    {from: 42.01, to: 48, name: 'college13'},
                    {from: 36.01, to: 42, name: 'college14'},
                    {from: 30.01, to: 36, name: 'colege15'},
                    {from: 24.01, to: 30, name: 'college16'},
                    {from: 18.01, to: 24, name: 'college17'},
                    {from: 12.01, to: 18, name: 'college18'},
                    {from: 6.01,  to: 12, name: 'college19'},
                    {from: 0.01,  to: 6,  name: 'college20'},
                ]
                    value = document.getElementById("input").value
                    if (value > 0){
                        function isInRange(marks, value) {
                        return (marks.from <= value) && ( marks.to >= value)
                    }
                    var priceFound = false
                    for (var i = 0; i <college.length && !priceFound; i++) {
                        var marks = college[i];
                        if (isInRange(marks, value)) {
                            document.getElementById("result").innerHTML = marks.name + "<br/>" + "USA";
                            priceFound = true
                        }
                    }}
                    else{
                        document.getElementById("result").innerHTML = 'No results found. Sorry!';
                    }
            }
            if (val === "ielts"){
                const college = [
                    {from: 8.56,  to: 9.00,name: 'college1'},
                    {from: 8.11,  to: 8.55, name: 'college2'},
                    {from: 7.66,  to: 8.10, name: 'college3'},
                    {from: 7.21,  to: 7.65, name: 'college4'},
                    {from: 6.76,  to: 7.20, name: 'college5'},
                    {from: 6.31,  to: 6.75, name: 'college6'},
                    {from: 5.86,  to: 6.30, name: 'college7'},
                    {from: 5.41,  to: 5.85, name: 'college8'},
                    {from: 4.96,  to: 5.40, name: 'college9'},
                    {from: 4.51,  to: 4.95, name: 'college10'},
                    {from: 4.06,  to: 4.50, name: 'college11'},
                    {from: 3.61,  to: 4.05, name: 'college12'},
                    {from: 3.16,  to: 3.60, name: 'college13'},
                    {from: 2.71,  to: 3.15, name: 'college14'},
                    {from: 2.26,  to: 2.70, name: 'colege15'},
                    {from: 1.81,  to: 2.25, name: 'college16'},
                    {from: 1.36,  to: 1.80, name: 'college17'},
                    {from: 0.91,  to: 1.35, name: 'college18'},
                    {from: 0.46,  to: 0.90, name: 'college19'},
                    {from: 0.00,  to: 0.45,  name: 'college20'},
                ]
                    value = document.getElementById("input").value
                    if (value > 0){
                        function isInRange(marks, value) {
                        return (marks.from <= value) && ( marks.to >= value)
                    }
                    var priceFound = false
                    for (var i = 0; i <college.length && !priceFound; i++) {
                        var marks = college[i];
                        if (isInRange(marks, value)) {
                            document.getElementById("result").innerHTML = marks.name + "<br/>" + "New Zealand";
                            priceFound = true
                        }
                    }}
                    else{
                        document.getElementById("result").innerHTML = 'No results found. Sorry!';
                    }
            }
            if (val === "pte"){
                const college = [
                    {from: 85.51,  to: 90.0,name: 'college1'},
                    {from: 81.01,  to: 85.5, name: 'college2'},
                    {from: 76.51,  to: 81.0, name: 'college3'},
                    {from: 72.01,  to: 76.5, name: 'college4'},
                    {from: 67.51,  to: 72.0, name: 'college5'},
                    {from: 63.01,  to: 67.5, name: 'college6'},
                    {from: 58.51,  to: 63.0, name: 'college7'},
                    {from: 54.01,  to: 58.5, name: 'college8'},
                    {from: 49.51,  to: 54.0, name: 'college9'},
                    {from: 45.01,  to: 49.5, name: 'college10'},
                    {from: 40.51,  to: 45.0, name: 'college11'},
                    {from: 36.01,  to: 40.5, name: 'college12'},
                    {from: 31.51,  to: 36.0, name: 'college13'},
                    {from: 27.01,  to: 31.5, name: 'college14'},
                    {from: 22.51,  to: 27.0, name: 'colege15'},
                    {from: 18.01,  to: 22.5, name: 'college16'},
                    {from: 13.51,  to: 18.0, name: 'college17'},
                    {from: 9.01,   to: 13.5, name: 'college18'},
                    {from: 4.51,   to: 9.00, name: 'college19'},
                    {from: 0.00,   to: 4.50,  name: 'college20'},
                ]
                    value = document.getElementById("input").value
                    if (value > 0){
                        function isInRange(marks, value) {
                        return (marks.from <= value) && ( marks.to >= value)
                    }
                    var priceFound = false
                    for (var i = 0; i <college.length && !priceFound; i++) {
                        var marks = college[i];
                        if (isInRange(marks, value)) {
                            document.getElementById("result").innerHTML = marks.name + "<br/>" + "Australia";
                            priceFound = true
                        }
                    }}
                    else{
                        document.getElementById("result").innerHTML = 'No results found. Sorry!';
                    }
            }
        }
    }

}
function dynamic(){
    var ele = document.getElementsByName('options');
    for(i = 0; i < ele.length; i++) {
        let val = ele[i].value ;
        if (ele[i].checked){
            if (val === "bachelor"){
                document.getElementById("next").href = "bachelor_page.html";
            }
            if (val === "master"){
                document.getElementById("next").href = "master_page.html";
            }
        }
    }
}
function place(){
    var ele = document.getElementsByName('opt');
    for(i = 0; i < ele.length; i++) {
        let val = ele[i].value ;
        if (ele[i].checked){
            if (val === "toefl"){
                document.getElementById("input").placeholder = "out of 120";
            }
            if (val === "ielts"){
                document.getElementById("input").placeholder = "out of 9";
                document.getElementById("input").min = "1";
                document.getElementById("input").max = "9";
            }
            if (val === "pte"){
                document.getElementById("input").placeholder = "out of 90";
                document.getElementById("input").min = "1";
                document.getElementById("input").max = "90";
            }
        }
    }
}
function back(){
    var e = document.getElementsByTagName("input");
    for (i = 0; i < e.length; i++){
        e[i].required = false ;
    }
}