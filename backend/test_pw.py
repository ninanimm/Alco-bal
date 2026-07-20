from playwright.sync_api import sync_playwright
import time

def crawl():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # add user_agent
        page = browser.new_page(user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")
        print("Navigating...")
        page.goto("https://www.diningcode.com/list.dc?query=%EC%84%9C%EC%B4%8C%20%EC%88%A0%EC%A7%91")
        print("Waiting for network idle...")
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(2000)
        
        html = page.content()
        with open("test_pw.html", "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Saved {len(html)} bytes to test_pw.html")
        browser.close()

if __name__ == "__main__":
    crawl()
