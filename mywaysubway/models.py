from django.db import models


class Menu(models.Model):


    title = models.CharField(max_length=30, default='제목 없음')
    bread = models.CharField(max_length=30, default=' ')
    cheeze = models.CharField(max_length=30, default=' ')
    vegetable = models.CharField(max_length=30, default=' ')
    source = models.CharField(max_length=30, default=' ')
    topping = models.CharField(max_length=30, default=' ')
    cookie = models.CharField(max_length=30, default=' ')
    beverage = models.CharField(max_length=30, default=' ')
    introduction = models.TextField(default='설명 없음')

    
    def __str__(self):
        return self.title