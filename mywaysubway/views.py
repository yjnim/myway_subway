from django.shortcuts import render, redirect

from django.views import View
from django.views.generic import DetailView

from .models import Menu
import logging

class HomeView(View):
    template_name = 'home.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {})

class CreateMenu(View):
    template_name = 'home.html'

    def get(self, request, *args, **kwargs):
        # GET 으로 받아온 쿼리를 딕셔너리로 변환
        qeurydic = dict(request.GET)
        # Menu 모델에 저장할 딕셔너리 생성
        dic = {}
        # 한글화 되어있는 딕셔너리 선언
        global dic_kor
        
        # 제목, 빵, 치즈가 정보가 담겨있는 쿼리를 가져온 후 저장
        information = qeurydic['selectedArr[]']
        dic['title'] = dic_kor[information[0]]
        dic['bread'] = dic_kor[information[1]]
        dic['cheeze'] = dic_kor[information[2]]

        # 채소 리스트를 쿼리에서 가져온 후 저장
        vegetable_list = qeurydic['selectedArr[3][]']
        for i in range(0, len(vegetable_list)): 
            vegetable_list[i] = dic_kor[vegetable_list[i]]
        dic['vegetable'] = ', '.join(vegetable_list)

        # 소스 리스트를 쿼리에서 가져온 후 저장
        source_list = qeurydic['selectedArr[5][]']
        for j in range(0, len(source_list)):
            source_list[j] = dic_kor[source_list[j]]
        dic['source'] = ', '.join(source_list)

        # 토핑이 선택되었다면 쿼리에서 가져온 후 저장
        try:
            topping_list = []
            for value in qeurydic['selectedArr[4][]']:
                topping_list.append(dic_kor[value])
            dic['topping'] = ', '.join(topping_list)
        except:
            dic['topping'] = dic_kor['nothing']

        # 쿠키와 음료가 선택되었다면 쿼리에서 가져온 후 저장
        try:
            dic['cookie'] = dic_kor[qeurydic['selectedArr[7][]'][0]]
            dic['beverage'] = dic_kor[qeurydic['selectedArr[8][]'][0]]
        except:
            dic['cookie'] = dic['beverage'] = dic_kor['nothing']
        
        # 메뉴 설명 쿼리에서 가져옴
        dic['introduction'] = qeurydic['introduction'][0]

        # 메뉴 모델 생성 후 저장
        menu = Menu(
            title = dic['title'],
            bread = dic['bread'],
            cheeze = dic['cheeze'],
            vegetable = dic['vegetable'],
            source = dic['source'],
            topping = dic['topping'],
            cookie = dic['cookie'],
            beverage = dic['beverage'],
            introduction = dic['introduction']
        )
        menu.save()

        return render(request, self.template_name, {})


def results(request):
    menus = Menu.objects.all().order_by('pk').reverse()
    return render(request, 'results.html', {'menus': menus})



dic_kor = {
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