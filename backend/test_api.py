import requests
import json

url = "https://im.diningcode.com/API/isearch/"
data = {"query": "서촌 술집", "page": 1}
res = requests.post(url, data=data, headers={"User-Agent": "Mozilla/5.0", "Referer": "https://www.diningcode.com/"})
try:
    j = res.json()
    items = j.get('result_data', {}).get('poi_section', {}).get('list', [])
    if items:
        print(json.dumps(items[0], ensure_ascii=False, indent=2))
    else:
        print("No items")
except Exception as e:
    print(e)
    print(res.text[:500])
