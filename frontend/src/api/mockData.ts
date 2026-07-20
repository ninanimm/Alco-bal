export const RECENT_SEARCHES = [
  "강남역",
  "홍대입구",
  "이태원",
  "성수"
];

export interface HotPlace {
  id: number;
  name: string;
  imageUrl: string;
}

export const HOT_PLACES: HotPlace[] = [
  { 
    id: 1, 
    name: "강남역", 
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGk4frC1SG1q9sIBMiOUPi6M54DeHIe5dQ7tzzv098u5y4-tP6DU6A9ppT8PVeLgjdTAuvk7CXvW6bC3mBkgFtjur1tFst7yE-GkKK2ooNynG9cVLfQwvPHyQ625bsmF2L44EKR1ZW2BIlwn0oshjxzE4YcwxukOWqgc2DEHFIxhfWwM3_t9ieBEH2evz535d8Md18ipyk2aK6JI_x95TQLfpm8GJFb9c2MZO135IR-tb9Xl4bUviBFMN5H6alNYu_Dgj_0NC0njW9" 
  },
  { 
    id: 2, 
    name: "종로/익선", 
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgRkR0aVCyViCJfn-0GfRICEbF8BvVBIuFm3Qfep1tbDvkLF12MlHuOCgExA40IXB-Cw2VLReNn4UzCtYA32L_KBa4mHDlJOa8PWhZZWpt-dd-S_ZuGO2ljhgVHowAusSA1iyKbFymaQeV2LKWAOGFuzSV4d9vQ46nn_mZKR6shymx_UqAcu7H2yctmvQW9apvhlPNuQYKM2VCXjjbF9-AJ0p1WQbPwKxU7wQiRJE8eWHlfVPqpumxas_ZUPdli6X-0BX_SG__Ehh4" 
  },
  { 
    id: 3, 
    name: "이태원/한남", 
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGk4frC1SG1q9sIBMiOUPi6M54DeHIe5dQ7tzzv098u5y4-tP6DU6A9ppT8PVeLgjdTAuvk7CXvW6bC3mBkgFtjur1tFst7yE-GkKK2ooNynG9cVLfQwvPHyQ625bsmF2L44EKR1ZW2BIlwn0oshjxzE4YcwxukOWqgc2DEHFIxhfWwM3_t9ieBEH2evz535d8Md18ipyk2aK6JI_x95TQLfpm8GJFb9c2MZO135IR-tb9Xl4bUviBFMN5H6alNYu_Dgj_0NC0njW9" 
  },
  { 
    id: 4, 
    name: "성수/뚝섬", 
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgRkR0aVCyViCJfn-0GfRICEbF8BvVBIuFm3Qfep1tbDvkLF12MlHuOCgExA40IXB-Cw2VLReNn4UzCtYA32L_KBa4mHDlJOa8PWhZZWpt-dd-S_ZuGO2ljhgVHowAusSA1iyKbFymaQeV2LKWAOGFuzSV4d9vQ46nn_mZKR6shymx_UqAcu7H2yctmvQW9apvhlPNuQYKM2VCXjjbF9-AJ0p1WQbPwKxU7wQiRJE8eWHlfVPqpumxas_ZUPdli6X-0BX_SG__Ehh4" 
  },
];

export interface Restaurant {
  id: number;
  name: string;
  location: string;
  distance: string;
  balanceScore: number;
  imageUrl: string;
  isFavorite: boolean;
  tags: string[];
  nonAlcoholOptions: string[];
  corkageInfo?: string;
  menu?: string[]; // 메뉴 목록
  recommendationReason?: string; // 추천 이유
}

export const RESTAURANT_RESULTS: Restaurant[] = [
  {
    id: 1,
    name: "미도인 성수",
    location: "성수동1가",
    distance: "320m",
    balanceScore: 98,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1lFtTgM3-JlwhCh_NLErRa72uQcC5D57dHAkkGMEmlbcHIPx35ioivAIOCipJK-szmPgLndlFLGLZ1MigYb7FHhmB8aO1FlrrWOCTm_saKVVF5GFcEK1X6yonyksOMhvs54M6aDyW_-Rjm_CeV-uu4JSMEf83WgjTkJuTndpbBe3Fc6gh5WnrUs2640cWBBCeeyEAMbJo0z5IlR6YtL31diSIRp2Z4p2mwooxR-EueZ-_hZSfSTUw_srARUSdDC53aSDuCFVRtm3J",
    isFavorite: true,
    tags: ["#논알콜와인", "#콜키지프리", "#무알콜맥주"],
    menu: ["무알콜 와인", "논알콜 칵테일", "무알콜 맥주"],
    recommendationReason: "알코올/논알콜 밸런스가 뛰어나 추천"
  },
  {
    id: 2,
    name: "아연 다이닝",
    location: "성수동2가",
    distance: "450m",
    balanceScore: 94,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2J5BgVnoxgeYE7xAK2QA9mmSJso76K2as5dHz3pK4f0tNfsidHI4t0pZS6ooowJyPUslb6kSFe_tJpcXIIFtH-5JIqmjtrIMD7AvYlxLn-iaXE_DFg5vvhHXmD1yqwJxQa7VFh_hHQKurBzJBEh0tVUZ6MEtJlCOl7466mgybu02s6qwTOBr3MTPKTqKRScb8NXJJBrFhjAC6cx5nDmRKJBj9OQX5_hsCSpdkwMGtEH4iM4XvAtgfsKiXvZ0TgvHxveIP75d9CzKH",
    isFavorite: false,
    tags: ["#수제콤부차", "#하이볼맛집"],
  },
  {
    id: 3,
    name: "누적 성수",
    location: "성수동1가",
    distance: "1.1km",
    balanceScore: 91,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP6iF1Xf4_D2DyCk2gOSJgNJxAPJOOj_1qvDXzg-XSoJ8CZzxPQN7JdfeZlQ_gWyh3RYkekt57GDQs1AKi6y9ORhKTCRrOnCysfnFLF8sdH9WHYgUaIrjr3PIRUJWsNWVYjhr1mHuLHoUup7cRpPJKYy9gBdy9lbmJ315lClG_enX9e79Ek58PSg3qKKpu5si4hQ43jsbyZY1T1n1lYFSGuOBvwqeCQryGCcustTjw0sGVzmz_jnaw0Ce2l2DLRaZEVr3AsvWVXEN2",
    isFavorite: false,
    tags: ["#비건옵션", "#프라이빗룸"],
  },
  {
    id: 4,
    name: "그리드 키친",
    location: "자양동",
    distance: "1.5km",
    balanceScore: 88,
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6RyFQEruBcu7q67-v2PlxoDaNT-0qKFUKI9G1JxE5LwxtXZ7ccpPzDbuNkEj_m_9bXz-zRKtQJUkukbbD3RthGMjsLzILE5aMsUDYMJ0AVMCm_RmBxzalXtaXs8BvEK-nxgp7XIsojZVYqMnxZQQLpfIa1B6z-WlNq77WONs6CaV1lJRjNTz5WeI0tEZcH1M0OWHByZBBQ9mrQIT5ZiMNIsD8p_mo5BN590ZeEIn3BX94IndYt9RreIycT2ysWXRTWpb5D12UE-kE",
    isFavorite: false,
    tags: ["#내추럴와인", "#다양한논알콜"],
  },
];
