import requests
import json

url = "https://im.diningcode.com/API/profile/"
data = {"v_rid": "iu0nMSqLYPxl"} # 서촌 곳간
res = requests.post(url, data=data, headers={"User-Agent": "Mozilla/5.0", "Referer": "https://www.diningcode.com/"})
try:
    j = res.json()
    result_data = j.get('result_data', {})
    for section in result_data:
        key = section.get('key')
        if key == 'restaurant':
            print("addr", section.get('addr'))
        elif key == 'menu':
            print("menu", len(section.get('menu', [])))
            for m in section.get('menu', []):
                print(m.get('name'))
except Exception as e:
    print(e)
