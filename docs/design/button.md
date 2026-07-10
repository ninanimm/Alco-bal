# 버튼 컴포넌트

버튼의 상태를 기반으로 생각해보기

## 기본

* **위계 상 (Primary)**
* 배경: `{colors.primary}` (`#000000`)
* 텍스트: `{colors.on-dark}` (`#ffffff`)
* 서체: `{typography.body-md-strong}` (16px, Weight 500)
* 형태: `{rounded.pill}` (999px)
* 크기: 모바일 터치 타겟 최적화를 위한 최소 높이 `56px` (`h-14`)

* **위계 중 (Secondary / Outline)**
* 배경: `{colors.canvas}` (`#ffffff`)
* 테두리: 1px 선 (`#e2e2e2`)
* 텍스트: `{colors.ink}` (`#000000`)
* 형태: `{rounded.pill}` (999px)

* **위계 하 (Subtle / Text-only)**
* 배경: 투명 또는 일부 칩 구성 시 `{colors.canvas-soft}` (`#efefef`)
* 텍스트: `{colors.ink}` (`#000000`) 또는 하단 탭바 미선택 시 `{colors.body}` (`#5e5e5e`)
* 테두리: 없음

## hover - 마우스를 올렸을 때

> **모바일 환경 최적화 노트:** 모바일은 마우스 포인터가 없으므로 `hover` 대신 터치 시 동작하는 `active` 마이크로 인터랙션을 적용합니다.
> 
> 

* **위계 상 (Primary):** 터치 다운(active) 시 `scale-[0.98]` 효과로 시각적 눌림 피드백 제공 (또는 투명도 조절 무시 후 미세한 크기 변형만 적용).

* **위계 중/하 (Secondary/Subtle):** 터치 다운(active) 시 `scale-95` 크기 감소 및 투명도 낮춤(`opacity-70~80`) 인터랙션 반영.



## disabled - 비활성 상태

* 배경: `{colors.canvas-soft}` (`#f3f3f3` 또는 대등한 그레이스케일 소프트 톤)
* 텍스트/아이콘: 고대비 가이드에 맞추어 흐릿하게 처리된 `{colors.body}` (`#5e5e5e`) 또는 더 옅은 그레이 계열
* 상호작용: 포인터 이벤트 원천 차단 (`pointer-events-none`), 터치 시 크기 변화(`scale`)나 투명도 변화 반응 없음.

