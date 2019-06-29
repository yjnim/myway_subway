// 샌드위치 선택 메소드
function sandwichCategory() {
    var select = document.getElementById('swcategory');
    var cateval = select.options[select.selectedIndex].value;

    var classicdiv = document.getElementById('classic');
    var freshdiv = document.getElementById('fresh');
    var premiumdiv = document.getElementById('premium');

    var classicRadio = document.getElementsByName('classic');
    var freshRadio = document.getElementsByName('fresh');
    var premiumRadio = document.getElementsByName('premium');

    if (cateval == "random") {
        classicdiv.style.display = "none";
        freshdiv.style.display = "none";
        premiumdiv.style.display = "none";

        for (i=0; i<classicRadio.length; i++) {
            if (classicRadio[i].checked == true){
                continue;
            }
            classicRadio[i].checked = false;
        }
        for (i=0; i<freshRadio.length; i++) {
            if (classicRadio[i].checked == true){
                continue;
            }
            freshRadio[i].checked = false;
        }
        for (i=0; i<premiumRadio.length; i++) {
            if (classicRadio[i].checked == true){
                continue;
            }
            premiumRadio[i].checked = false;
        }
    } 
    else if (cateval == "classic") {
        classicdiv.style.display = "inline-block";
        freshdiv.style.display = "none";
        premiumdiv.style.display = "none";

    } else if (cateval == "fresh") {
        classicdiv.style.display = "none";
        freshdiv.style.display = "inline-block";
        premiumdiv.style.display = "none";

    } else if (cateval == "premium") {
        classicdiv.style.display = "none";
        freshdiv.style.display = "none";
        premiumdiv.style.display = "inline-block";

    }
}

// 채소 직접 결정할지 랜덤으로 할지 선택
function vegetableRandom() {
    var selectVege = document.getElementsByName('selectvege');
    var selectVegeValue;
    for (i=0; i<selectVege.length; i++) {
        if (selectVege[i].checked) {
            selectVegeValue = selectVege[i].value;
        }
    }

    var vegeDiv = document.getElementById('vegetable');
    var vegeCbox = document.getElementsByName('vagetable');
    if (selectVegeValue == "select") {
        vegeDiv.style.display = "inline-block";
        for (i=0; i<vegeCbox.length; i++) {
            vegeCbox[i].checked = true;
        }
    } else if (selectVegeValue == "random") {
        vegeDiv.style.display = "none";
        for (i=0; i<vegeCbox.length; i++) {
            vegeCbox[i].checked = false;
        }
    }
}

// 채소나 소스를 최소 1개 이상 선택했는지 보기
// function vegetableMin() {
    
// }

// 토핑 넣을지 말지 선택
function toppingYesOrNo() {
    var addtopping = document.getElementsByName('addtopping');
    var addtoppinglength = addtopping.length;
    var toppingDiv = document.getElementById('toppingmenu');
    var toppingCbox = document.getElementsByName('topping');
    var addtoppingValue;
    for (i=0; i<addtoppinglength; i++) {
        if (addtopping[i].checked) {
            addtoppingValue = addtopping[i].value;
        }
    }
    if (addtoppingValue == "yes") {
        toppingDiv.style.display = 'block';
    } else {
        toppingDiv.style.display = 'none';
        for (i=0; i<toppingCbox.length; i++) {
            if (toppingCbox[i].checked) {
                toppingCbox[i].checked = false;
            }
        }
    }
}

// 소스 직접 결정할지 랜덤으로 할지 선택
function sauceRandom() {
    var selectSauce = document.getElementsByName('selectsauce');
    var selectSauceValue;
    for (i=0; i<selectSauce.length; i++) {
        if (selectSauce[i].checked) {
            selectSauceValue = selectSauce[i].value;
        }
    }

    var sauceDiv = document.getElementById('sauceselect');
    var sauceCbox = document.getElementsByName('sauce');
    if (selectSauceValue == "select") {
        sauceDiv.style.display = "inline-block";
    } else if (selectSauceValue == "random") {
        sauceDiv.style.display = "none";
        for (i=0; i<sauceCbox.length; i++) {
            sauceCbox[i].checked = false;
        }
    }
}

// 소스 3개 초과하지 않게 조절 
function sauceAmount() {
    var selectedSauce = [];
    var sauce = document.getElementsByName('sauce')
    for (i=0; i<sauce.length; i++) {
        if (sauce[i].checked) {
            selectedSauce.push(sauce[i].value);
            if (selectedSauce.length >= 4) {
                alert('소스는 최대 3가지만 선택할 수 있습니다.');
                selectedSauce.pop();
                sauce[i].checked = false;
            }
        }
    }
    
}

// 세트메뉴 선택할 시 나타남
function setmenuSelect() {
    var setRadio = document.getElementsByName('setyn');
    var setRadioValue;
    for (i=0; i<setRadio.length; i++) {
        if (setRadio[i].checked) {
            setRadioValue = setRadio[i].value;
        }
    }

    var setmenuDiv = document.getElementById('setmenu');
    var cookieRadio = document.getElementsByName('cookie');
    var drinkRadio = document.getElementsByName('drink');
    if (setRadioValue == "single") {
        setmenuDiv.style.display = "none";
        for (i=0; i<cookieRadio.length; i++) {
            cookieRadio[i].checked = false;
        }
        for (i=0; i<drinkRadio.length; i++) {
            drinkRadio[i].checked = false;
        }
    } else if (setRadioValue == "set") {
        setmenuDiv.style.display = "block";
        cookieRadio[6].checked = true;
        drinkRadio[5].checked = true;    
    }
}

// 샌드위치 설명 업데이트
function saveIntroduction() {
    var intro = document.getElementById("intro");
    intro.innerHTML = document.getElementById("introduction").value;
}

// 샌드위치 설명 초기화
function cleanIntroduction() {
    document.getElementById("intro").innerHTML = "오늘의 메뉴를 설명하자면?";
    document.getElementById("introduction").value = "";
}

var sandwichDic = { 
    'eggmayo':4300, 'italianbmt':5100, 'blt':5100, 'meatball':4900, 'ham':4700, 'tuna':4800,
    'rotisseriechicken':5900, 'roastchicken':5900, 'roastbeef':5900, 'subwayclub':5600, 'turkey':5100, 'veggie':3900,
    'pulledpork':5900, 'steakncheese':6300, 'turkeybaconavocado':6300, 'chickenbaconlanch':5900, 'subwaymelt':5900, 'turkeybacon':5600, 'spicyitalian':5600, 'chickenteriyaki':5600
}

var sandwich30cmDic = {
    'eggmayo':8000, 'italianbmt':8900, 'blt':8900, 'meatball':8700, 'ham':8400, 'tuna':8500,
    'rotisseriechicken':9900, 'roastchicken':9900, 'roastbeef':9900, 'subwayclub':9500, 'turkey':8900, 'veggie':7400,
    'pulledpork':9900, 'steakncheese':10300, 'turkeybaconavocado':10300, 'chickenbaconlanch':9900, 'subwaymelt':9900, 'turkeybacon':9500, 'spicyitalian':9500, 'chickenteriyaki':9500
}

var sandwichArr = [
    'eggmayo', 'italianbmt', 'blt', 'meatball', 'ham', 'tuna',
    'rotisseriechicken', 'roastchicken', 'roastbeef', 'subwayclub', 'turkey', 'veggie',
    'pulledpork', 'steakncheese', 'turkeybaconavocado', 'chickenbaconlanch', 'subwaymelt', 'turkeybacon', 'spicyitalian', 'chickenteriyaki'
]

var toppingDic = {
    'doubleup':1500, 'eggmayotoppping':1500, 'omlet':1100, 'avocado':1100, 'bacon':900, 'pepperoni':800, 'doublecheese':800
}

var topping30cmDic = {
    'doubleup':3000, 'eggmayotoppping':3000, 'omlet':2200, 'avocado':2200, 'bacon':1800, 'pepperoni':1600, 'doublecheese':1600
}

var engToKor = {
    'eggmayo':'에그마요', 'italianbmt':'이탈리안 비엠티', 'blt':'비엘티',  'meatball':'미트볼',  'ham':'햄',  'tuna':'참치', 
    'rotisseriechicken':'로티세리 치킨', 'roastchicken':'로스트 치킨', 'roastbeef':'로스트 비프', 'subwayclub':'써브웨이 클럽', 'turkey':'터키', 'veggie':'베지', 
    'pulledpork':'풀드포크', 'steakncheese':'스테이크 & 치즈', 'turkeybaconavocado':'터키 베이컨 아보카도', 'chickenbaconlanch':'치킨 베이컨 랜치', 'subwaymelt':'써브웨이 멜트', 'turkeybacon':'터키 베이컨', 'spicyitalian':'스파이시 이탈리안', 'chickenteriyaki':'치킨 데리야끼', 
    'honeyoat':'허니오트', 'hearty':'하티', 'wheat':'위트', 'parmesanoregano':'파마산 오레가노', 'white':'화이트', 'flatbread':'플랫 브레드', 
    'american':'아메리칸 치즈', 'sheredded':'슈레드 치즈', 
    'lettuce':'양상추', 'tomato':'토마토', 'cucumber':'오이', 'pepper':'피망', 'onion':'양파', 'pickle':'피클', 'olive':'올리브', 'jalapeno':'할라피뇨', 
    'doubleup':'더블업', 'eggmayotoppping':'에그마요', 'omlet':'오믈렛', 'avocado':'아보카도', 'bacon':'베이컨', 'pepperoni':'페퍼로니', 'doublecheese':'더블치즈', 
    'mustard':'머스타드', 'thousandisland':'사우전 아일랜드', 'italiandressing':'이탈리안 드레싱', 'redwinevinegar':'레드와인 식초', 
    'sweetonion':'스위트 어니언', 'honeymustard':'허니 머스타드', 'sweetchili':'스위트 칠리', 'bbq':'스모크 바비큐', 
    'ranch':'랜치', 'mayonnaise':'마요네즈', 'hotchili':'핫 칠리', 'southwest':'사우스 웨스트', 'horseradish':'홀스레디쉬', 'oliveoil':'올리브 오일', 'salt':'소금', 'blackpepper':'후추', 
    'doublechocochips':'더블 초코칩 쿠키', 'chocochip':'초코칩 쿠키', 'oatmeal':'오트밀 레이즌', 'raspberry':'라즈베리 치즈케익', 'whitechoco':'화이트 초코 마카다미아', 'chips':'칩', 
    'cocacola':'코카콜라', 'sprite':'스프라이트', 'pineapple':'환타 파인애플', 'grape':'환타 포도', 'orange':'환타 오렌지', 
    'nothing':'고르지 않음'
}

// 결정된 사항들이 담길 배열
var selectedArr = [];
// 샌드위치 설명
var introduction = "";


//오늘의 샌드위치 결정
function sandwichRandomSelect() {
    var selectVege = document.getElementsByName('selectvege');
    var vageRadio = document.getElementsByName('vagetable');
    var vageAmount = 0;
    
    // 배열 초기화
    selectedArr = [];
    // 샌드위치 설명 초기화
    introduction = "";

    for (i=0; i<vageRadio.length; i++) {
        if (vageRadio[i].checked == true) {
            vageAmount += 1;
        }
    }
    if (selectVege[0].checked == true) {
        if (vageAmount == 0) {
            alert('최소한 한 가지의 채소는 선택해야 합니다.');
            return false;
        }
    }

    var selectSauce = document.getElementsByName('selectsauce');
    var sauceCbox = document.getElementsByName('sauce');
    var sauceAmount = 0;
    for (i=0; i<sauceCbox.length; i++) {
        if (sauceCbox[i].checked == true) {
            sauceAmount += 1;
        }
    }
    if (selectSauce[0].checked == true) {
        if (sauceAmount == 0) {
            alert('최소한 한 가지의 소스는 선택해야 합니다.');
            return false;
        }
    }
    
    selectedArr.length = 0;

    // 샌드위치 종류 결정
    var select = document.getElementById('swcategory');
    var cateval = select.options[select.selectedIndex].value;

    if (cateval == 'random') {
        var randSandwichInt = Math.floor(Math.random()*(sandwichArr.length-1+1));
        var sandwichName = sandwichArr[randSandwichInt];
        selectedArr.push(sandwichName);
    }
    else if (cateval == 'classic') {
        var classicRadio = document.getElementsByName('classic');
        var checkedSandwichName;
        for (i=0; i<classicRadio.length; i++) {
            if (classicRadio[i].checked == true) {
                checkedSandwichName = classicRadio[i].value;
                selectedArr.push(checkedSandwichName);
            }
        }
    } else if (cateval == 'fresh') {
        var freshRadio = document.getElementsByName('fresh');
        var checkedSandwichName;
        for (i=0; i<freshRadio.length; i++) {
            if (freshRadio[i].checked == true) {
                checkedSandwichName = freshRadio[i].value;
                selectedArr.push(checkedSandwichName);
            }
        }
    } else if (cateval == 'premium') {
        var premiumRadio = document.getElementsByName('premium');
        var checkedSandwichName;
        for (i=0; i<premiumRadio.length; i++) {
            if (premiumRadio[i].checked == true) {
                checkedSandwichName = premiumRadio[i].value;
                selectedArr.push(checkedSandwichName);
            }
        }
    }

    // 빵 결정
    var breadRadio = document.getElementsByName('bread');
    var checkedBreadName;
    for (i=0; i<breadRadio.length; i++) {
        if (breadRadio[i].checked == true) {
            if (breadRadio[i].value == 'random') {
                var randBreadInt = Math.floor(Math.random()*(6-1+1));
                checkedBreadName = breadRadio[randBreadInt].value;
                selectedArr.push(checkedBreadName);
            } else {
                checkedBreadName = breadRadio[i].value;
                selectedArr.push(checkedBreadName);
            }
        }
    }

    // 치즈 결정
    var cheeseRadio = document.getElementsByName('cheese');
    var checkedCheeseName;
    for (i=0; i<cheeseRadio.length; i++) {
        if (cheeseRadio[i].checked == true) {
            if (cheeseRadio[i].value == 'random') {
                var randCheeseInt = Math.floor(Math.random()*(2-1+1));
                checkedCheeseName = cheeseRadio[randCheeseInt].value;
                selectedArr.push(checkedCheeseName);
            } else {
                checkedCheeseName = cheeseRadio[i].value;
                selectedArr.push(checkedCheeseName);
            }
        }
    }    

    // 야채 결정
    var selectVegeRadio = document.getElementsByName('selectvege');
    var selectedVegeArr = [];
    
    var selectVegeCheckbox = document.getElementsByName('vagetable');
    if (selectVegeRadio[0].checked == true) {
        for (i=0; i<selectVegeCheckbox.length; i++) {
            if (selectVegeCheckbox[i].checked == true) {
                selectedVegeArr.push(selectVegeCheckbox[i].value);
            }
        }
        selectedArr.push(selectedVegeArr)
    } else if (selectVegeRadio[1].checked == true) {
        var randVegeIntAmount = Math.floor(Math.random()*(8-1+1)+1); //야채 갯수
        var randVegeArr = []; //야채 인덱스 번호가 들어가는 리스트
        for (i=0; i<randVegeIntAmount; i++) {
            randVegeArr[i] = Math.floor(Math.random()*(8-1+1));
            for (j = 0; j<i; j++) {
                if (randVegeArr[i] == randVegeArr[j]) {
                    i--;
                    break;
                }
            }
        }
        for (i=0; i<randVegeArr.length; i++) {
            selectedVegeArr.push(selectVegeCheckbox[randVegeArr[i]].value);
        }
        selectedArr.push(selectedVegeArr);
    }

    // 토핑 추가
    var addtopping = document.getElementsByName('addtopping');
    if (addtopping[1].checked == true) {
        selectedArr.push([])
        var selectedArr4 = selectedArr[4]
        var toppingCheckbox = document.getElementsByName('topping');
        var checkedToppingName;
        for (i=0; i<toppingCheckbox.length; i++) {
            if (toppingCheckbox[i].checked == true) {
                checkedToppingName = toppingCheckbox[i].value;
                selectedArr4.push(checkedToppingName);
            }
        }
    } else {
        selectedArr.push(['nothing']);
    }

    // 소스 고르기
    var sauceRadio = document.getElementsByName('selectsauce');
    var sauceCheckbox = document.getElementsByName('sauce');
    var selectedSauceArr = [];
    if (sauceRadio[0].checked == true) {
        for (i=0; i<sauceCheckbox.length; i++) {
            if (sauceCheckbox[i].checked) {
                selectedSauceArr.push(sauceCheckbox[i].value);
            }
        }
        selectedArr.push(selectedSauceArr);
    } else {
        var randSauceIntAmount = Math.floor(Math.random()*(3-1+1)+1);
        var randSauceArr = [];
        for (i=0; i<randSauceIntAmount; i++) {
            randSauceArr[i] = Math.floor(Math.random()*(16-1+1));
            for (j = 0; j<i; j++) {
                if (randSauceArr[i] == randSauceArr[j]) {
                    i--;
                    break;
                }
            }
        }
        for (i=0; i<randSauceArr.length; i++) {
            selectedSauceArr.push(sauceCheckbox[randSauceArr[i]].value);
        }
        selectedArr.push(selectedSauceArr);
    }

    // 길이 결정
    var lengthRadio = document.getElementsByName('length');
    if (lengthRadio[0].checked == true) {
        selectedArr.push('15cm');
    } else {
        selectedArr.push('30cm');
    }

    var setRadio = document.getElementsByName('setyn');
    if (setRadio[1].checked == true) {
        //쿠키 결정
        var cookieRadio = document.getElementsByName('cookie');
        for (i=0; i<cookieRadio.length; i++) {
            if (cookieRadio[i].checked == true) {
                if (cookieRadio[i].value == 'random') {
                    var randCookieInt = Math.floor(Math.random()*(6-1+1));
                    selectedArr.push([cookieRadio[randCookieInt].value])
                } else {
                    selectedArr.push([cookieRadio[i].value])
                }
            }
        }

        //음료 결정
        var drinkRadio = document.getElementsByName('drink');
        for (i=0; i<drinkRadio.length; i++) {
            if (drinkRadio[i].checked == true) {
                if (drinkRadio[i].value == 'random') {
                    var randDrinkInt = Math.floor(Math.random()*(5-1+1));
                    selectedArr.push([drinkRadio[randDrinkInt].value])
                } else {
                    selectedArr.push([drinkRadio[i].value])
                }
            }
        }
    } else {
        selectedArr.push(['nothing']);
        selectedArr.push(['nothing']);
    }
    // 샌드위치 introduction 저장
    introduction = document.getElementById("intro").innerHTML;
    // 결과 표시
    sandwichResult(selectedArr);
    // 저장버튼 표시
    document.getElementById('savemenu').style.display = "inline-block";
    // 샌드위치 설명 초기화
    cleanIntroduction()
}

function sandwichResult(array) {
    var receipt = document.getElementsByClassName('receipt');    
    var totalPriceTd = document.getElementsByClassName('receipt_tb');
    var receiptTb = document.getElementById('receipt_table');
    receipt[0].style.display = "block";
    receiptTb.innerHTML = "";
    for (i=0; i<totalPriceTd.length; i++) {
        totalPriceTd[i].innerHTML = "";
    }
    var totalPriceArr = [];
    for (i=0; i<array.length; i++) {
        if (i == 3 || i == 5) {
            var trObj = document.createElement('tr')
            for (j=0; j<2; j++) {
                var tdObj = document.createElement("td");
                if (j == 0) {
                    var nameStr = "";
                    for (x=0; x<array[i].length; x++) {
                        if (x == array[i].length - 1) {
                            nameStr += engToKor[array[i][x]];
                        } else {
                            nameStr += engToKor[array[i][x]]+', ';
                        }
                    }
                    tdObj.className = "receipt_name";
                    tdObj.innerHTML = nameStr;
                    trObj.appendChild(tdObj);
                } else {
                    if (array[i] !== "nothing") {
                        tdObj.className = "receipt_price";
                        tdObj.innerHTML = '　';
                        trObj.appendChild(tdObj);
                    }
                }
            }
            receiptTb.appendChild(trObj);
        } else if (i == 4) {
            var trObj = document.createElement('tr')
            for (j=0; j<2; j++) {
                var tdObj = document.createElement("td");
                if (j == 0) {
                    if (array[i][0] != "nothing") {
                        var nameStr = "";
                        for (x=0; x<array[i].length; x++) {
                            if (x == array[i].length - 1) {
                                nameStr += engToKor[array[i][x]];
                            } else {
                                nameStr += engToKor[array[i][x]]+', ';
                            }
                        }
                        tdObj.className = "receipt_name";
                        tdObj.innerHTML = nameStr;
                        trObj.appendChild(tdObj);
                    }
                } else if (j == 1) {
                    if (array[i][0] != "nothing") {
                        tdObj.className = "receipt_price";
                        if (array[6] == '15cm') {
                            var toppingPrice = 0;
                            for (x=0; x<array[4].length; x++) {
                                toppingPrice += toppingDic[array[4][x]];
                            }
                            tdObj.innerHTML = toppingPrice + '원';
                            totalPriceArr.push(toppingPrice);
                            trObj.appendChild(tdObj);
                        } else if (array[6] == '30cm') {
                            var toppingPrice = 0;
                            for (x=0; x<array[4].length; x++) {
                                toppingPrice += topping30cmDic[array[4][x]];
                            }
                            tdObj.innerHTML = toppingPrice + '원';
                            totalPriceArr.push(toppingPrice);
                            trObj.appendChild(tdObj);
                        }
                    } else {
                        totalPriceArr.push(0);
                    }
                }
            }
            receiptTb.appendChild(trObj);
        } else if (i == 6) {
            var trObj = document.createElement('tr')
            for (j=0; j<2; j++) {
                var tdObj = document.createElement("td");
                if (j == 0) {
                        tdObj.className = "receipt_name";
                        tdObj.innerHTML = array[i];
                        trObj.appendChild(tdObj);
                } else {
                        tdObj.className = "receipt_price";
                        if (array[i] == '15cm') {
                            tdObj.innerHTML = sandwichDic[array[0]]+'원';
                            totalPriceArr.push(sandwichDic[array[0]]);
                        } else {
                            tdObj.innerHTML = sandwich30cmDic[array[0]]+'원';
                            totalPriceArr.push(sandwich30cmDic[array[0]]);
                        }
                        
                        trObj.appendChild(tdObj);
                }
            }
            receiptTb.appendChild(trObj);
        } else if (i == 7 || i == 8) {
            var trObj = document.createElement('tr')
            for (j=0; j<2; j++) {
                var tdObj = document.createElement("td");
                if (j == 0) {
                    if (array[i][0] !== "nothing") {
                        var nameStr = engToKor[array[i]];
                        tdObj.className = "receipt_name";
                        tdObj.innerHTML = '(세트메뉴) '+nameStr;
                        trObj.appendChild(tdObj);
                    }
                } else {
                    if (array[i][0] !== "nothing") {
                        tdObj.className = "receipt_price";
                        if (i == 7) {
                            tdObj.innerHTML = '1900원';
                            totalPriceArr.push(1900);
                        } else {
                            tdObj.innerHTML = '　';
                        }
                        trObj.appendChild(tdObj);
                    } else {
                        totalPriceArr.push(0);
                    }
                }
            }
            receiptTb.appendChild(trObj);
        } else {
            var trObj = document.createElement('tr')
            for (j=0; j<2; j++) {
                var tdObj = document.createElement("td");
                if (j == 0) {
                    if (array[i][0] !== "nothing") {
                        var nameStr = engToKor[array[i]];
                        tdObj.className = "receipt_name";
                        tdObj.innerHTML = nameStr;
                        trObj.appendChild(tdObj);
                    }
                } else {
                    if (array[i][0] !== "nothing") {
                        tdObj.className = "receipt_price";
                        tdObj.innerHTML = '　';
                        trObj.appendChild(tdObj);
                    }
                }
            }
            receiptTb.appendChild(trObj);
        }
    }

    var totalPrice = 0;

    for (j=0; j<totalPriceArr.length; j++) {
        totalPrice += totalPriceArr[j]
    }
    // console.log(totalPrice);
    var trObj = document.createElement('tr');
    for (j=0; j<2; j++) {
        var tdObj = document.createElement("td");
        if (j == 0) {
            tdObj.className = "receipt_name";
            tdObj.innerHTML = '총계';
            trObj.appendChild(tdObj);
        } else {
            tdObj.className = "receipt_price";
            tdObj.innerHTML = totalPrice+'원';
            trObj.appendChild(tdObj);
        }
    }
    totalPriceTd[1].appendChild(trObj);
    console.log(selectedArr);
}

function saveMenu(){
    var selectedArr = window.selectedArr;
    var introduction = document.getElementById('intro').innerHTML;
    getSelectedArr(selectedArr, introduction);
}