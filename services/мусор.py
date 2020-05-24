import csv
from flask import Flask , render_template
from flask_cors import CORS
from flask import send_from_directory
import mysql.connector
import datetime



def give_value(id_category):
    with open(r'C:\Users\User\PycharmProjects\project_1\project_three\food.csv' , encoding='utf-8') as ff:
        value = []
        food_dict = dict()
        new_value = dict()
        reader = csv.DictReader(ff)
        for line in reader:
            value.append(line)  
        for i in range(len(value)):
            if int(id_category) == int(value[i]['categoryid']):
                new_value['name'] = value[i]['name']
                new_value['price'] = value[i]['price']
                new_value['image'] = value[i]['image']
            food_dict[i+1]=[new_value]
        return food_dict
        

        

print(give_value(1))

