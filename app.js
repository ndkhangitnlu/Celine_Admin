var count = 0;
setInterval(function () {
    count++;
    if (count == 2) {
        document.getElementById("a").style.width = '90%';
    }
    if (count === 4) {
        document.getElementById("a").style.width = '0';
        count = 0;
    }
}, 500)
function showSide() {
    document.getElementById("loginArea").className += ' displaySide';
}
function closeSide() {
    document.getElementById("loginArea").className = 'area';
}
function a() {
    document.getElementById("adminLogin").className += ' displaySidee';
}
function closeSideOfAdminLogin() {
    document.getElementById("adminLogin").className = 'adminPanelLogin';
}
function e() {
    document.getElementById("employeeLogin").className += ' displaySidee';
}
function closeSideOfEmployeeLogin() {
    document.getElementById("employeeLogin").className = 'employeePanelLogin';
}
var adminAccount = {
    email: "admin@gmail.com",
    password: "admin123"
}

function adminLogin() {
    var email = document.getElementById("emailM").value;
    email.toLowerCase();
    var password = document.getElementById("passwordM").value;
    if (email === adminAccount.email && password === adminAccount.password) {
        document.getElementById("display1").style.display = 'block';
        document.getElementById("error2").style.display = 'none';
        setTimeout(function () {
            location = 'adminpanel.html'
        }, 2000)
    }
    else {
        document.getElementById("error2").style.display = 'block';
    }
}

function signUpEmployee() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var employeeAccount = {
        name: name,
        email: email,
        password: password
    }
    var a = localStorage.setItem("Employee_Account", JSON.stringify(employeeAccount));
    document.getElementById("display").style.display = 'block';
    setTimeout(function () {
        location = 'employelogin.html'
    }, 2000)

};

function employelogin() {
    var email = document.getElementById("emailM").value;
    var password = document.getElementById("passwordM").value;
    var b = JSON.parse(localStorage.getItem("Employee_Account"));
    if (email === b.email && password === b.password) {
        document.getElementById("display1").style.display = 'block';
        document.getElementById("error2").style.display = 'none';
        setTimeout(function () {
            location = 'employeepanel.html'
        }, 2000)
    }
    else {
        document.getElementById("error2").style.display = 'block';
    }

}

function logout() {
    var logoutArea = document.getElementById("container");
    var a = document.createElement("h1");
    a.setAttribute("class", "logout");
    var logoutFA = document.createElement("i");
    logoutFA.setAttribute("class", "fa fa-spinner");
    a.appendChild(logoutFA);
    var atext = document.createTextNode(" Logging Out...");
    a.appendChild(atext);
    logoutArea.appendChild(a);
    setTimeout(function () {
        location = 'index.html';
    }, 2000)
}

function Products(category, name, price, colors, stock, sizes) {
    this.category = category,
        this.name = name,
        this.price = price,
        this.color = colors,
        this.stock = stock,
        this.sizes = sizes
}

var products = {
    manStyle: {
        // ?????t t??n l?? aothunnam1,2,3 ????? khi d??ng ph????ng th???c sellProduct g???i l???i ????ng id
        aothunnam1: new Products("Th???i trang nam", "aothunnam1", 99000, "Black", "Yes", "S/M/L"),
        aothunnam2: new Products("Th???i trang nam", "aothunnam2", 499000, "Black", "No", "M/L"),
        aothunnam3: new Products("Th???i trang nam", "aothunnam3", 199000, "Light-White", "Yes", "M/L/XL"),
        quannam1: new Products("Th???i trang nam", "quannam1", 125000, "Black and White", "No", "S/M/L"),
        quannam2: new Products("Th???i trang nam", "quannam2", 129000, "Black", "Yes", "M/L/XL/XXL"),
        quannam3: new Products("Th???i trang nam", "quannam3", 150000, "Black/White", "Yes", "L/XL/XXL"),
    },
    womenStyle: {
        aothunnu1: new Products("Th???i trang n???", "aothunnu1", 159000, "Grey/Light-Red", "Yes", "S/M/L"),
        aothunnu2: new Products("Th???i trang n???", "aothunnu2", 90000, "Blue/Off-White", "No", "Free"),
        aothunnu3: new Products("Th???i trang n???", "aothunnu3", 75000, "Yellow", "Yes", "M/L"),
        quannu1: new Products("Th???i trang n???", "quannu1", 300000, "Black", "Yes", "S/M"),
        quannu2: new Products("Th???i trang n???", "quannu2", 50000, "Black/Blue/Grey/Pink", "No", "S/M/L"),
        quannu3: new Products("Th???i trang n???", "quannu3", 499000, "Pink", "Yes", "Free"),
    },
    accessory: {
        phukien1: new Products("Ph??? ki???n", "phukien1", 267000, "Yellow White", "Yes", "L"),
        phukien2: new Products("Ph??? ki???n", "phukien2", 220000, "Black-Pink", "No", "M"),
        phukien3: new Products("Ph??? ki???n", "phukien3", 450000, "White", "Yes", "Free"),
        phukien4: new Products("Ph??? ki???n", "phukien4", 135000, "Light-Pink", "Yes", "S/M/L"),
        phukien5: new Products("Ph??? ki???n", "phukien5", 110000, "Silver", "No", "Free"),
        phukien6: new Products("Ph??? ki???n", "phukien6", 290000, "Blue Jeans", "Yes", "L")
    },
}
function filter() {
    var userInput = document.getElementById("userInput").value;
    var a = userInput;
    a = a.toLowerCase();
    for (var i = 0; i < a.length; i++) {
        if (a[i] === " ") {
            a = a.slice(0, i) + a.slice(i + 1);
        }
    }
    var firstLetter = userInput.charAt(0).toUpperCase();
    var remain = userInput.slice(1).toLowerCase();
    userInput = firstLetter + remain;
    var flag = false;
    if (userInput != "" && userInput != undefined && userInput != " " && userInput != null) {
        for (var key in products) {
            for (var key2 in products[key]) {
                if (a === key2) {
                    flag = true;
                    document.getElementById("userInput").value = '';
                    document.getElementById("displaye").style.display = 'none';
                    document.getElementById("products").style.display = 'none';
                    document.getElementById("displayc").style.display = 'block';
                    document.getElementById("displayc").innerHTML = document.getElementById(key2).innerHTML;
                    document.getElementById("topButton").style.display = 'none';
                    document.getElementById("homeButton").style.display = 'block';
                }
                else if (userInput === products[key][key2].name) {
                    flag = true;
                    document.getElementById("userInput").value = '';
                    document.getElementById("displaye").style.display = 'none';
                    document.getElementById("products").style.display = 'none';
                    document.getElementById("displayc").style.display = 'block';
                    document.getElementById("displayc").innerHTML = document.getElementById(products[key][key2].name).innerHTML;
                    document.getElementById("topButton").style.display = 'none';
                    document.getElementById("homeButton").style.display = 'block';
                }
            }
        }
        if (flag != true) {
            document.getElementById("displayc").style.display = 'none';
            document.getElementById("products").style.display = 'none';
            document.getElementById("displaye").style.display = 'block';
            document.getElementById("topButton").style.display = 'none';
            document.getElementById("displaye").innerText = "KH??NG T??M TH???Y!";
            document.getElementById("homeButton").style.display = 'block';
        }
    }
}
function home() {
    setTimeout(function () {
        document.getElementById("userInput").value = '';
        document.getElementById("displayc").style.display = 'none';
        document.getElementById("products").style.display = 'block';
        document.getElementById("homeButton").style.display = 'none';
        document.getElementById("displaye").style.display = 'none';
    }, 1000)
}
function change(id) {
    document.getElementById(id).childNodes[1].style.display = "none";
    document.getElementById(id).childNodes[3].style.display = 'block';
}
function changee(id) {
    document.getElementById(id).childNodes[0].style.display = "none";
    document.getElementById(id).childNodes[1].style.display = 'block';
}
function changeag(id, src) {
    document.getElementById(id).childNodes[1].style.display = "block";
    document.getElementById(id).childNodes[3].style.display = 'none';
}
function changeeag(id, src) {
    document.getElementById(id).childNodes[0].style.display = "block";
    document.getElementById(id).childNodes[1].style.display = 'none';
}
function details(productName, srcc) {
    var src = srcc;
    var name = productName;
    for (var key in products) {
        for (var key2 in products[key]) {
            if (name === key2) {
                swal({
                    title: "T??n : " + products[key][key2].name,
                    text: "Ph??n lo???i : " + "( " + products[key][key2].category + " )  "
                        + " --- M??u s???c : ( " + products[key][key2].color + " ) "
                        + " --- S???n kho  : ( " + products[key][key2].stock + " ) "
                        + " --- Size : ( " + products[key][key2].sizes + " ) "
                        + " --- Gi?? : (" + products[key][key2].price + " ) ",
                    textColor: "red",
                    imageUrl: src,
                    imageWidth: 300,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                    animation: false,
                })
            }
            else if (name === products[key][key2].name) {
                swal({
                    title: "T??n : " + products[key][key2].name,
                    text: "Ph??n lo???i : " + "( " + products[key][key2].category + " )  "
                        + " --- M??u s???c : ( " + products[key][key2].color + " ) "
                        + " --- S???n kho  : ( " + products[key][key2].stock + " ) "
                        + " --- Size : ( " + products[key][key2].sizes + " ) "
                        + " --- Gi?? : ( " + products[key][key2].price + " ) ",
                    textColor: "red",
                    imageUrl: src,
                    imageWidth: 300,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                    animation: false,
                })
            }

        }
    }

}
function sellProductInfoGet(id) {
    var date = new Date();
    var todayDate = date.getDate();
    var todayMonth = date.getMonth() + 1;
    todayMonth = Number(todayMonth);
    var todayyear = date.getFullYear();
    for (var key in products) {
        for (var key2 in products[key]) {
            if (id === key2) {
                document.getElementById('productName').innerText = products[key][key2].name;
                document.getElementById("date").innerText = todayDate + "/" + todayMonth + "/" + todayyear;
                document.getElementById('priceOfProduct').innerText = products[key][key2].price;
                document.getElementById("mode").style.display = 'block';

            }
        }
    }
}
var counter = 0;
var sold = [];
// localStorage.setItem("sold", JSON.stringify(sold));
function sellProduct(id) {
    var nameProduct = id;
    for (var j = 0; j < nameProduct.length; j++) {
        if (nameProduct[j] === " ") {
            nameProduct = nameProduct.slice(0, j) + nameProduct.slice(j + 1);
        }
        else if (nameProduct[j] === "-") {
            nameProduct = nameProduct.slice(0, j) + nameProduct.slice(j + 1);
        }
    }
    nameProduct = nameProduct.toLowerCase();
    console.log(nameProduct);
    var quantity = document.getElementById("quantityOfProduct").value;

    var flag = false;
    for (var i = 0; i < quantity.length; i++) {
        if (quantity[i] === "-") {
            document.getElementById("errorinSaleInfo").innerHTML = "Please Avoid '-' in Quantity.";
            document.getElementById("errorinSaleInfo").style.display = 'block';
            document.getElementById("quantityOfProduct").value = "";
            flag = true;
        }
        quantity = Number(quantity);
        // if (quantity > 100) {
        //     document.getElementById("errorinSaleInfo").innerHTML = "Quantity Limit is 1 to 9.";
        //     document.getElementById("errorinSaleInfo").style.display = 'block';
        //     document.getElementById("quantityOfProduct").value = "";
        //     flag = true;
        // }
        if (quantity === 0) {
            document.getElementById("errorinSaleInfo").innerHTML = "Enter Quantity Please, It can't be 0.";
            document.getElementById("errorinSaleInfo").style.display = 'block';
            document.getElementById("quantityOfProduct").value = "";
            flag = true;
        }
        if (flag != true) {
            document.getElementById("errorinSaleInfo").style.display = 'none';
            document.getElementById("mode").style.display = 'none';
            document.getElementById("quantityOfProduct").value = "";
            for (var key in products) {
                for (var key2 in products[key]) {
                    if (nameProduct === key2) {
                        var NAME = products[key][key2].name;
                        var PRICE = products[key][key2].price;
                        var QUANTITY = Number(quantity);
                        var TOTALPRICE = QUANTITY * products[key][key2].price;
                        var date = new Date();
                        var todayDate = date.getDate();
                        var todayMonth = date.getMonth() + 1;
                        var DATE = todayDate + "/" + todayMonth;
                        swal({
                            type: "success",
                            title: "???? b??n!",
                            text: "S???n ph???m " + products[key][key2].name + " ???? ???????c b??n. T???ng ti???n : " + quantity + "X" + products[key][key2].price + "=" + quantity * products[key][key2].price + "." + "C???m ??n!",
                        })
                        var soldd = {
                            date: DATE,
                            name: NAME,
                            price: PRICE,
                            quantity: QUANTITY,
                            totalprice: TOTALPRICE,
                        }
                        localStorage.setItem("sold", JSON.stringify(sold.push(soldd)))
                        localStorage.setItem("sold", JSON.stringify(sold));
                        // document.getElementById("some").innerHTML = "";
                    }
                }
            }
        }
    }

}


function remove(id) {
    var target = document.getElementById(id);
    swal({
        type: "question",
        title: "B???n c?? ch???c mu???n x??a hay kh??ng?",
        text: "N???u x??a b???n s??? kh??ng th??? truy c???p v??o s???n ph???m n??y n???a.",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: 'rgb(106, 162, 245)',
        confirmButtonText: '???? x??a!',
        cancelButtonText: "H???y",
        confirmButtonColor: "rgb(87, 206, 87)",
    }).then((result) => {
        if (result.value) {
            target.remove();
            swal({
                type: "success",
                title: "???? x??a!"
            })
        }
    })
}

function add(id) {
    document.getElementById("modeForAdd").style.display = 'block';
    document.getElementById('category').innerHTML = id;
}
var counterForFoot = 6;
function insertData(id) {
    swal({
        type: "success",
        title: "???? th??m th??nh c??ng!"
    })
    if (id === "manStyle") {
        var name = document.getElementById("addName").value;
        var price = document.getElementById("addPrice").value;
        price = Number(price);
        var color = document.getElementById("addColors").value;
        var stock = document.getElementById("addStock").value;
        var size = document.getElementById("addSize").value;
        var firstLetter = name.charAt(0).toUpperCase();
        var remain = name.slice(1).toLowerCase();
        name = firstLetter + remain;

        document.getElementById("addName").value = "";
        document.getElementById("addPrice").value = "";
        document.getElementById("addColors").value = "";
        document.getElementById("addStock").value = "";
        document.getElementById("addSize").value = "";
        document.getElementById("modeForAdd").style.display = 'none';

        var objName = name;
        console.log(objName)
        for (var i = 0; i < objName.length; i++) {
            if (objName[i] === " ") {
                objName = objName.slice(0, i) + objName.slice(i + 1);
            }
            if (objName[i] === "  ") {
                objName = objName.slice(0, i) + objName.slice(i + 2);
            }
            if (objName[i] === "-") {
                objName = objName.slice(0, i) + objName.slice(i + 1);
            }
            if (objName[i] === "_") {
                objName = objName.slice(0, i) + objName.slice(i + 1);
            }
            objName = objName.toLowerCase();
        }

        for (var key in products) {
            if (key === id) {
                products[key].newProduct = new Products(id, name, price, color, stock, size)
            }
        }
        counterForFoot++;
        var maintarget = document.getElementById("newAddedOfFootwears");

        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "newOne");
        mainDiv.setAttribute("id", name);

        var subDiv = document.createElement("div");
        subDiv.setAttribute("class", "imgCover");
        subDiv.setAttribute("id", 'f' + counterForFoot);
        subDiv.setAttribute("onmouseover", 'changee(' + "'" + 'f' + counterForFoot + "'" + ')');
        subDiv.setAttribute("onmouseout", 'changeeag(' + "'" + 'f' + counterForFoot + "'" + ')');


        var img = document.createElement("img");
        img.setAttribute("src", "images/addimage.jpg");
        img.setAttribute("width", "200px");
        img.setAttribute("height", "150px");
        img.setAttribute("alt", "Please wait Loading...")

        subDiv.appendChild(img);

        var plus = document.createElement("div");
        plus.setAttribute("class", "b");
        plus.setAttribute("onclick", 'details(' + "'" + name + "'" + ',' + "'" + 'images/addimage.jpg' + "'" + ')');
        var plustext = document.createTextNode("+");
        plus.appendChild(plustext);
        subDiv.appendChild(plus);
        mainDiv.appendChild(subDiv);



        var p = document.createElement("p");
        p.setAttribute("class", "proInfoN");
        p.setAttribute("id", objName + "1");
        p.setAttribute("onclick", 'details(' + "'" + name + "'" + ',' + "'" + 'images/addimage.jpg' + "'" + ')')
        var ptext = document.createTextNode(name);
        p.appendChild(ptext);

        mainDiv.appendChild(p);
        var priceInfo = document.createElement("p");
        priceInfo.setAttribute("class", "proInfo");
        var priceText = document.createTextNode("" + price);
        priceInfo.appendChild(priceText);
        mainDiv.appendChild(priceInfo);
        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "adminBtnsEdit");
        editBtn.setAttribute("title", "More");
        editBtn.setAttribute("onclick", 'details(' + "'" + name + "'" + ',' + "'" + 'images/addimage.jpg' + "'" + ')')
        var editBtnFa = document.createElement("i");
        editBtnFa.setAttribute("class", "fa fa-arrow-up");
        editBtn.appendChild(editBtnFa);
        var editBtnText = document.createTextNode(" TH??M");
        editBtn.appendChild(editBtnText);
        mainDiv.appendChild(editBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "adminBtnsDelete");
        deleteBtn.setAttribute("title", "Delete Product");
        deleteBtn.setAttribute("onclick", 'remove(' + "'" + name + "'" + ')')
        var deleteBtnFa = document.createElement("i");
        deleteBtnFa.setAttribute("class", "fa fa-trash");
        deleteBtn.appendChild(deleteBtnFa);
        var deleteBtnText = document.createTextNode(" X??A");
        deleteBtn.appendChild(deleteBtnText);
        mainDiv.appendChild(deleteBtn);


        maintarget.appendChild(mainDiv);
        var a = document.getElementById("footwearsAdd");
        a.removeAttribute("onclick");
        a.style.backgroundColor = "rgb(164, 252, 164)"
    }
    if (id === "womenStyle") {
        var name = document.getElementById("addName").value;
        var price = document.getElementById("addPrice").value;
        price = Number(price);
        var color = document.getElementById("addColors").value;
        var stock = document.getElementById("addStock").value;
        var size = document.getElementById("addSize").value;
        var firstLetter = name.charAt(0).toUpperCase();
        var remain = name.slice(1).toLowerCase();
        name = firstLetter + remain;

        document.getElementById("addName").value = "";
        document.getElementById("addPrice").value = "";
        document.getElementById("addColors").value = "";
        document.getElementById("addStock").value = "";
        document.getElementById("addSize").value = "";
        document.getElementById("modeForAdd").style.display = 'none';

        var objName = name;
        console.log(objName)
        for (var i = 0; i < objName.length; i++) {
            if (objName[i] === " ") {
                objName = objName.slice(0, i) + objName.slice(i + 1);
            }
            if (objName[i] === "  ") {
                objName = objName.slice(0, i) + objName.slice(i + 2);
            }
            if (objName[i] === "-") {
                objName = objName.slice(0, i) + objName.slice(i + 1);
            }
            if (objName[i] === "_") {
                objName = objName.slice(0, i) + objName.slice(i + 1);
            }
            objName = objName.toLowerCase();
        }

        for (var key in products) {
            if (key === id) {
                products[key].newProduct = new Products(id, name, price, color, stock, size)
            }
        }
        counterForFoot++;
        var maintarget = document.getElementById("newAddedOfClothes");

        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "newOne");
        mainDiv.setAttribute("id", name);

        var subDiv = document.createElement("div");
        subDiv.setAttribute("class", "imgCover");
        subDiv.setAttribute("id", 'c' + counterForFoot);
        subDiv.setAttribute("onmouseover", 'changee(' + "'" + 'c' + counterForFoot + "'" + ')');
        subDiv.setAttribute("onmouseout", 'changeeag(' + "'" + 'c' + counterForFoot + "'" + ')');

        var img = document.createElement("img");
        img.setAttribute("src", "images/addimage2.jpg");
        img.setAttribute("width", "200px");
        img.setAttribute("height", "150px");
        img.setAttribute("alt", "Please wait Loading...")
        subDiv.appendChild(img);

        var plus = document.createElement("div");
        plus.setAttribute("class", "b");
        plus.setAttribute("onclick", 'details(' + "'" + name + "'" + ',' + "'" + 'images/addimage2.jpg' + "'" + ')');
        var plustext = document.createTextNode("+");
        plus.appendChild(plustext);
        subDiv.appendChild(plus);
        mainDiv.appendChild(subDiv);


        // mu???n ?????i ???nh li??n t???c th?? thay t??n ???nh b???ng bi???n counterForFoot
        var p = document.createElement("p");
        p.setAttribute("class", "proInfoN");
        p.setAttribute("id", objName + "1");
        p.setAttribute("onclick", 'details(' + "'" + name + "'" + ',' + "'" + 'images/addimage2.jpg' + "'" + ')')
        var ptext = document.createTextNode(name);
        p.appendChild(ptext);

        mainDiv.appendChild(p);
        var priceInfo = document.createElement("p");
        priceInfo.setAttribute("class", "proInfo");
        var priceText = document.createTextNode("" + price);
        priceInfo.appendChild(priceText);
        mainDiv.appendChild(priceInfo);
        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "adminBtnsEdit");
        editBtn.setAttribute("title", "More");
        editBtn.setAttribute("onclick", 'details(' + "'" + name + "'" + ',' + "'" + 'images/addimage2.jpg' + "'" + ')')
        var editBtnFa = document.createElement("i");
        editBtnFa.setAttribute("class", "fa fa-arrow-up");
        editBtn.appendChild(editBtnFa);
        var editBtnText = document.createTextNode(" TH??M");
        editBtn.appendChild(editBtnText);
        mainDiv.appendChild(editBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "adminBtnsDelete");
        deleteBtn.setAttribute("title", "Delete Product");
        deleteBtn.setAttribute("onclick", 'remove(' + "'" + name + "'" + ')')
        var deleteBtnFa = document.createElement("i");
        deleteBtnFa.setAttribute("class", "fa fa-trash");
        deleteBtn.appendChild(deleteBtnFa);
        var deleteBtnText = document.createTextNode(" X??A");
        deleteBtn.appendChild(deleteBtnText);
        mainDiv.appendChild(deleteBtn);
        maintarget.appendChild(mainDiv);
        var a = document.getElementById("clothesAdd");
        a.removeAttribute("onclick");
        a.style.backgroundColor = "rgb(164, 252, 164)"
    }
    if (id === "accessory") {
        var name = document.getElementById("addName").value;
        var price = document.getElementById("addPrice").value;
        price = Number(price);
        var color = document.getElementById("addColors").value;
        var stock = document.getElementById("addStock").value;
        var size = document.getElementById("addSize").value;
        var firstLetter = name.charAt(0).toUpperCase();
        var remain = name.slice(1).toLowerCase();
        name = firstLetter + remain;

        document.getElementById("addName").value = "";
        document.getElementById("addPrice").value = "";
        document.getElementById("addColors").value = "";
        document.getElementById("addStock").value = "";
        document.getElementById("addSize").value = "";
        document.getElementById("modeForAdd").style.display = 'none';

        var objName = name;
        console.log(objName)
        for (var i = 0; i < objName.length; i++) {
            if (objName[i] === " ") {
                objName = objName.slice(0, i) + objName.slice(i + 1);
            }
            if (objName[i] === "  ") {
                objName = objName.slice(0, i) + objName.slice(i + 2);
            }
            if (objName[i] === "-") {
                objName = objName.slice(0, i) + objName.slice(i + 1);
            }
            if (objName[i] === "_") {
                objName = objName.slice(0, i) + objName.slice(i + 1);
            }
            objName = objName.toLowerCase();
        }

        for (var key in products) {
            if (key === id) {
                products[key].newProduct = new Products(id, name, price, color, stock, size)
            }
        }
        counterForFoot++;
        var maintarget = document.getElementById("newAddedOfWatches");

        var mainDiv = document.createElement("div");
        mainDiv.setAttribute("class", "newOne");
        mainDiv.setAttribute("id", name);

        var subDiv = document.createElement("div");
        subDiv.setAttribute("class", "imgCover");
        subDiv.setAttribute("id", 'w' + counterForFoot);
        subDiv.setAttribute("onmouseover", 'changee(' + "'" + 'w' + counterForFoot + "'" + ')');
        subDiv.setAttribute("onmouseout", 'changeeag(' + "'" + 'w' + counterForFoot + "'" + ')');

        var img = document.createElement("img");
        img.setAttribute("src", "images/addimage3.jpg");
        img.setAttribute("width", "200px");
        img.setAttribute("height", "150px");
        img.setAttribute("alt", "Please wait Loading...")

        subDiv.appendChild(img);

        var plus = document.createElement("div");
        plus.setAttribute("class", "b");
        plus.setAttribute("onclick", 'details(' + "'" + name + "'" + ',' + "'" + './images/addimage3.jpg' + "'" + ')');
        var plustext = document.createTextNode("+");
        plus.appendChild(plustext);
        subDiv.appendChild(plus);
        mainDiv.appendChild(subDiv);

        var p = document.createElement("p");
        p.setAttribute("class", "proInfoN");
        p.setAttribute("id", objName + "1");
        p.setAttribute("onclick", 'details(' + "'" + name + "'" + ',' + "'" + './images/addimage3.jpg' + "'" + ')')
        var ptext = document.createTextNode(name);
        p.appendChild(ptext);

        mainDiv.appendChild(p);

        var priceInfo = document.createElement("p");
        priceInfo.setAttribute("class", "proInfo");
        var priceText = document.createTextNode("" + price);
        priceInfo.appendChild(priceText);
        mainDiv.appendChild(priceInfo);

        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "adminBtnsEdit");
        editBtn.setAttribute("title", "More");
        editBtn.setAttribute("onclick", 'details(' + "'" + name + "'" + ',' + "'" + './images/addimage3.jpg' + "'" + ')')
        var editBtnFa = document.createElement("i");
        editBtnFa.setAttribute("class", "fa fa-arrow-up");
        editBtn.appendChild(editBtnFa);
        var editBtnText = document.createTextNode(" TH??M");
        editBtn.appendChild(editBtnText);
        mainDiv.appendChild(editBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "adminBtnsDelete");
        deleteBtn.setAttribute("title", "Delete Product");
        deleteBtn.setAttribute("onclick", 'remove(' + "'" + name + "'" + ')')
        var deleteBtnFa = document.createElement("i");
        deleteBtnFa.setAttribute("class", "fa fa-trash");
        deleteBtn.appendChild(deleteBtnFa);
        var deleteBtnText = document.createTextNode(" X??A");
        deleteBtn.appendChild(deleteBtnText);
        mainDiv.appendChild(deleteBtn);


        maintarget.appendChild(mainDiv);
        var a = document.getElementById("watchesAdd");
        a.removeAttribute("onclick");
        a.style.backgroundColor = "rgb(164, 252, 164)"
    }
}
console.log(products)
function saleDayGo() {
    setTimeout(function () {
        location = 'sale.html'
    }, 1000)
}

function soldList() {
    var b = JSON.parse(localStorage.getItem("sold"));
    console.log(b.length);
    var tp = 0;
    for (var i = 0; i < b.length; i++) {
        var D = b[i].date;
        var N = b[i].name;
        var Q = b[i].quantity;
        var TP = b[i].totalprice;
        TP = Number(TP);
        tp = tp + b[i].totalprice;
        var target = document.getElementById("Table");
        var target2 = target.childNodes[2];
        var tr = document.createElement("tr");
        var dateTd = document.createElement("td");
        var dateTdText = document.createTextNode(D);
        dateTd.appendChild(dateTdText);
        tr.appendChild(dateTd);
        var productTd = document.createElement("td");
        var productTdText = document.createTextNode(N);
        productTd.appendChild(productTdText);
        tr.appendChild(productTd);
        var quantityTd = document.createElement("td");
        var quantityTdText = document.createTextNode(Q);
        quantityTd.appendChild(quantityTdText);
        tr.appendChild(quantityTd);
        var tpTd = document.createElement("td");
        var tpTdText = document.createTextNode("RS." + TP);
        tpTd.appendChild(tpTdText);
        tr.appendChild(tpTd);
        target.insertBefore(tr, target2);
    }
    document.getElementById("some").innerHTML = b.length + " Items has been Sold!"
    document.getElementById("saleTotal").innerHTML = "RS." + tp;
}
soldList()
