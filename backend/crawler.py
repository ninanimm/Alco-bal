from playwright.sync_api import sync_playwright
import requests
import json
import time
from bs4 import BeautifulSoup

# 검색어 URL (한남 술집)
BASE_URL = "https://www.diningcode.com/list.dc?query=%ED%95%9C%EB%82%98%EB%A7%88%EC%9D%B4"

def get_restaurant_links():
    """초기 페이지에서 JSON-LD 데이터를 파싱하여 레스토랑 이름과 상세 URL 목록을 가져온다."""
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    res = requests.get(BASE_URL, headers=headers)
    res.raise_for_status()
    res.encoding = 'utf-8'
    
    soup = BeautifulSoup(res.text, "html.parser")
    script = soup.find('script', type='application/ld+json')
    if not script:
        return []
        
    try:
        data = json.loads(script.string)
        items = data.get('itemListElement', [])
        results = []
        for item in items:
            results.append({
                "name": item.get("name"),
                "url": item.get("url")
            })
        return results
    except Exception as e:
        print("JSON 파싱 오류:", e)
        return []

def parse_detail(page, url):
    """상세 페이지로 이동해 상세 정보(메뉴, 주소, 전화번호 등)를 가져온다."""
    try:
        page.goto(url, timeout=15000)
        page.wait_for_load_state('load', timeout=10000)
        page.wait_for_timeout(1000) # 렌더링 대기
    except:
        pass
        
    html = page.content()
    soup = BeautifulSoup(html, "html.parser")
    
    tel = ""
    address = ""
    menu = []
    
    # 전화번호 추출
    tel_tag = soup.select_one('.tel')
    if tel_tag:
        tel = tel_tag.get_text(strip=True)
    
    # 주소 추출
    locat_tag = soup.select_one('.locat')
    if locat_tag:
        address = locat_tag.get_text(strip=True)
    else:
        for p in soup.find_all(['p', 'span', 'div']):
            text = p.get_text(strip=True)
            if ('서울' in text or '길' in text) and len(text) > 5 and len(text) < 50:
                if not address and ('구' in text or '동' in text):
                    address = text
                    break
                    
    # 메뉴 추출
    menu_elements = soup.select('.restaurant-menu')
    for m in menu_elements:
        t = m.get_text(strip=True)
        if t and t not in menu:
            menu.append(t)
                
    return {
        "address": address,
        "tel": tel,
        "menu": menu
    }

def crawl():
    print("레스토랑 목록을 가져옵니다...")
    links = get_restaurant_links()
    print(f"총 {len(links)}개의 식당 링크를 찾았습니다.")
    
    if not links:
        print("데이터를 찾을 수 없습니다.")
        return
        
    # 테스트를 위해 상위 20개만 수집합니다. 
    # 전체 100개를 수집하려면 target_links = links 로 변경하세요.
    target_links = links[:20] 
    restaurants = []
    
    print("브라우저를 열고 상세 정보를 수집합니다...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # 브라우저 컨텍스트 설정 (마치 새 신분증을 보여주는 것과 같습니다)
        context = browser.new_context(user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
        page = context.new_page()
        
        for idx, item in enumerate(target_links):
            print(f"[{idx+1}/{len(target_links)}] 수집 중: {item['name']}")
            detail = parse_detail(page, item['url'])
            
            # 수집한 퍼즐 조각들을 하나로 맞춥니다.
            restaurants.append({
                "name": item['name'],
                "url": item['url'],
                "address": detail['address'],
                "tel": detail['tel'],
                "menu": detail['menu']
            })
            
        browser.close()
        
    with open("restaurants.json", "w", encoding="utf-8") as f:
        json.dump(restaurants, f, ensure_ascii=False, indent=4)
    print(f"성공적으로 {len(restaurants)}개의 식당 정보를 restaurants.json 에 저장했습니다.")

if __name__ == "__main__":
    crawl()
