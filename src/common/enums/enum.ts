export enum RoleEnum {
  SUPER_ADMIN = 'super-admin',
  SUPER_KUZATUVCHI = 'super-kuzatuvchi',
  MTU_AKT = 'mtu-akt',
  MTU_KUZATUVCHI = 'mtu-kuzatuvchi',
  MTU_TEX_OTDEL = 'mtu-tex-otdel',
  MTU_EKONOMIST = 'mtu-ekonomist',
  MTU_OTDEL_UCHOT = 'mtu-otdel-uchot',
  UCHASTKA_KUZATUVCHI = 'uchastka-kuzatuvchi',
  DC = 'dc',
}

export enum TaxonomyEnum {
  // place taxonomy
  PLACE_1 = 'place-1', // place-basket, 1 ta
  PLACE_2_MTU = 'place-2-mtu', // mtu - shoba
  PLACE_3_LINE = 'place-3-line', // uchastka
  PLACE_4_STATION = 'place-4-station', // station
}

export enum TermEnum {
  PLACE_BASKET = 'place-basket',
}

export enum FileTypeEnum {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

export enum LanguageEnum {
  UZ = 'UZ',
  EN = 'EN',
  RU = 'RU',
  KRIL = 'KRIL',
}

export enum StationExcelEnum {
  CODE = '10',
  COMPARATIVELY_PREFIX = '1',
  PLAN_PREFIX = '2',
  FACT_PREFIX = '3',
}

export enum GodesaReportStatusEnum {
  UP = 'up',
  DOWN = 'down',
  EQUAL = 'equal',
}
