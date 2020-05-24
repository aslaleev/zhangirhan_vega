from flask import Flask 
import csv
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/todo/api/v1.0/food/<int:id_category>', methods=['GET'])
def give_value(id_category):
    with open(r'C:/Users/User/PycharmProjects/project_1/OpenServer/domains/wwe/data/food.csv' , encoding='utf-8') as ff:
        value = []
        food_dict = dict()
        reader = csv.DictReader(ff)
        for line in reader:
            value.append(line)
        for i in range(len(value)):
            new_value=dict()
            if int(id_category) == int(value[i]['categoryid']):
                new_value['name'] = value[i]['name']
                new_value['price'] = value[i]['price']
                new_value['image'] = value[i]['image'].replace("\\" , "/")
                food_dict[i+1]=new_value
                # for j in food_dict:
            #     file = open("food.json", "w")
            #     file.write(str(j))
            #     file.close()
    return food_dict



@app.route('/todo/api/v1.0/test', methods=['GET'])
def test_func():
    return "1"


if __name__ == '__main__':
    app.run(debug=True)
