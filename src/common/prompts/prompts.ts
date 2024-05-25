import { StationExcelEnum } from '../enums/enum';
import { Prompt } from './types';

export const PROMPT_MAP = {
  postgres: {
    case_not_found: {
      id: 1,
      status: 'FAILURE',
      code: '20000',
      labels: [
        'Contact administrators',
        'Связаться с администраторами',
        'Adminlarga aloqaga chiqing',
        'Aдминистратор алокага чикинг',
      ],
    },
  },
  application: {
    base_not_found: {
      id: 10001,
      status: 'NOT FOUND',
      code: 'BASE',
      labels: [' not found!', ' не найден!', ' topilmadi!', ' топильмади!'],
    },
    login_or_password_wrong: {
      id: 10002,
      status: 'UNAUTHORIZED',
      code: 'AUTH',
      labels: [
        'User login or password Wrong!',
        'Логин или пароль пользователя Неправильный!',
        'User login toki password xato!',
        'User login toki password xato!',
      ],
    },
    authorization_error: {
      id: 10003,
      status: 'AUTHORIZATION',
      code: 'AUTH STRATEGY',
      labels: [
        'Authorization Error!',
        'Ошибка авторизации!',
        "Avtarizatsiyadan o'tmadi",
        "Avtarizatsiyadan o'tmadi",
      ],
    },
    forbidden_error: {
      id: 10004,
      status: 'FORBIDDEN',
      code: 'AUTH ROLE',
      labels: [
        'Forbidden Error!',
        'Ошибка Запрещенная!',
        'Taqiqlangan xato!',
        'Taqiqlangan xato!',
      ],
    },
    login_already_used: {
      id: 10005,
      status: 'BAD REQUEST',
      code: 'USER',
      labels: [
        'Login already used!',
        'Логин уже использован!',
        'Login allaqachon foydalanilgan!',
        'Login allaqachon foydalanilgan!',
      ],
    },
    one_id_already_used: {
      id: 10006,
      status: 'BAD REQUEST',
      code: 'USER',
      labels: [
        'OneId already used!',
        'OneId уже использован!',
        'OneId allaqachon foydalanilgan!',
        'OneId allaqachon foydalanilgan!',
      ],
    },
    jshshir_already_used: {
      id: 10006,
      status: 'BAD REQUEST',
      code: 'USER',
      labels: [
        'jshshir already used!',
        'jshshir уже использован!',
        'jshshir allaqachon foydalanilgan!',
        'jshshir allaqachon foydalanilgan!',
      ],
    },
    term_basket_not_found: {
      id: 10007,
      status: 'NOT FOUND',
      code: 'TERM',
      labels: [
        'term basket not found!',
        'term basket не найдена!',
        'term basket topilmadi!',
        'term basket topilmadi!',
      ],
    },
    station_code_already_used: {
      id: 10008,
      status: 'BAD REQUEST',
      code: 'STATION',
      labels: [
        'station code already used!',
        'station code уже использован!',
        'station code allaqachon foydalanilgan!',
        'station code allaqachon foydalanilgan!',
      ],
    },
    term_parent_not_mtu: {
      id: 10009,
      status: 'BAD REQUEST',
      code: 'TERM',
      labels: [
        'term parent is not mtu!',
        'term parent это не МТУ!',
        'term parent mtu emas!',
        'term parent mtu emas!',
      ],
    },
    term_delete_not_allowed: {
      id: 10010,
      status: 'NOT ACCEPTABLE',
      code: 'TERM',
      labels: [
        'deletion of the term is not allowed!',
        'удаление term не допускается!!',
        "term ni o'chirishga ruxsat yo'q!",
        "term ni o'chirishga ruxsat yo'q!",
      ],
    },
    term_parent_not_line: {
      id: 10010,
      status: 'NOT ACCEPTABLE',
      code: 'TERM',
      labels: [
        'term parent is not line!',
        'term parent это не линия!',
        'term parent line emas!',
        'term parent line emas!',
      ],
    },
    file_required: {
      id: 10011,
      status: 'BAD REQUEST',
      code: 'FILE',
      labels: [
        'file must be required!',
        'файл должен быть обязательным!',
        "file bo'lishi shart!",
        "file bo'lishi shart!",
      ],
    },
    station_osm_id_already_used: {
      id: 10012,
      status: 'BAD REQUEST',
      code: 'STATION',
      labels: [
        'station osmId already used!',
        'station osmId уже использован!',
        'station osmId allaqachon foydalanilgan!',
        'station osmId allaqachon foydalanilgan!',
      ],
    },
    file_type_must_be_image: {
      id: 10012,
      status: 'BAD REQUEST',
      code: 'FILE',
      labels: [
        'file type must be image!',
        'тип файла должен быть изображением!',
        "fayl turi rasm bo'lishi kerak!",
        "fayl turi rasm bo'lishi kerak!",
      ],
    },
    code_must_be_required: {
      id: 10013,
      status: 'BAD REQUEST',
      code: 'XLSX',
      labels: [
        'code must be required!',
        'код должен быть обязательным!',
        "code bo'lishi shart!",
        "code bo'lishi shart!",
      ],
    },
    station_excel_header: {
      id: 10014,
      status: 'BAD REQUEST',
      code: 'XLSX',
      labels: [
        'station excel header must be N, code, name_ru, name_uz, name_en, name_kril, load_operation, load_station, turi, toifa, sinf, coordinates!',
        'Заголовок станции Excel должен быть N, code, name_ru, name_uz, name_en, name_kril, load_operation, load_station, turi, toifa, sinf, coordinates!',
        "stantsiya excel sarlavhasi N, code, name_ru, name_uz, name_en, name_kril, load_operation, load_station, turi, toifa, sinf, coordinates bo'lishi kerak!",
        "stantsiya excel sarlavhasi N, code, name_ru, name_uz, name_en, name_kril, load_operation, load_station, turi, toifa, sinf, coordinates bo'lishi kerak!",
      ],
    },
    godesa_report_excel_station_code: {
      id: 10015,
      status: 'BAD REQUEST',
      code: 'XLSX',
      labels: [
        `code must be ${StationExcelEnum.CODE}`,
        `код должен быть ${StationExcelEnum.CODE}`,
        `kod ${StationExcelEnum.CODE} bo'lishi kerak!`,
        `kod ${StationExcelEnum.CODE} bo'lishi kerak!`,
      ],
    },
    godesa_report_excel_code_prefix: {
      id: 10015,
      status: 'BAD REQUEST',
      code: 'XLSX',
      labels: [
        `code prefix wrong!`,
        `префикс кода неправильный!`,
        `kod prefiksi noto'g'ri!`,
        `kod prefiksi noto'g'ri!`,
      ],
    },
    godesa_report_excel_code_suffix: {
      id: 10016,
      status: 'BAD REQUEST',
      code: 'XLSX',
      labels: [
        `code suffix wrong!`,
        `суффикс кода неправильный!`,
        `kod suffix noto'g'ri!`,
        `kod suffix noto'g'ri!`,
      ],
    },
    godesa_report_excel_category_not_completed: {
      id: 10017,
      status: 'BAD REQUEST',
      code: 'XLSX',
      labels: [
        `category is not completed!`,
        `категория не заполнена!`,
        `category tugallanmagan!`,
        `category tugallanmagan!`,
      ],
    },
    godesa_report_excel_data_int: {
      id: 10018,
      status: 'BAD REQUEST',
      code: 'XLSX',
      labels: [
        `data must be integer number!`,
        `данные должны быть целым числом!`,
        `malumot integer number bo'lishi shart!`,
        `malumot integer number bo'lishi shart!`,
      ],
    },
    godesa_categories_not_full_found: {
      id: 10019,
      status: 'NOT FOUND',
      code: 'GODESA_CATEGORY',
      labels: [
        `Godesa category was not fully found!`,
        `Категория Godesa не найдена полностью!`,
        `godesa categoriyasi to'liq topilmadi!`,
        `godesa categoriyasi to'liq topilmadi!`,
      ],
    },
    station_not_full_found: {
      id: 10020,
      status: 'NOT FOUND',
      code: 'STATION',
      labels: [
        `Station was not fully found!`,
        `Station не найдена полностью!`,
        `Station to'liq topilmadi!`,
        `Station to'liq topilmadi!`,
      ],
    },
    godesa_report_already_exist: {
      id: 10021,
      status: 'BAD REQUEST',
      code: 'GODESA_REPORT',
      labels: [
        `godesa report already exist in stations!`,
        `отчет Godesa уже существует на станциях!`,
        `godesa hisoboti allaqachon mavjud bu statnsiyalada!`,
        `godesa hisoboti allaqachon mavjud bu statnsiyalada!`,
      ],
    },
    mtu_osm_id_already_used: {
      id: 10022,
      status: 'BAD REQUEST',
      code: 'MTU',
      labels: [
        'MTU osmId already used!',
        'MTU osmId уже использован!',
        'MTU osmId allaqachon foydalanilgan!',
        'MTU osmId allaqachon foydalanilgan!',
      ],
    },
    mtu_code_already_used: {
      id: 10023,
      status: 'BAD REQUEST',
      code: 'MTU',
      labels: [
        'MTU code already used!',
        'MTU code уже использован!',
        'MTU code allaqachon foydalanilgan!',
        'MTU code allaqachon foydalanilgan!',
      ],
    },
    line_osm_id_already_used: {
      id: 10024,
      status: 'BAD REQUEST',
      code: 'LINE',
      labels: [
        'LINE osmId already used!',
        'LINE osmId уже использован!',
        'LINE osmId allaqachon foydalanilgan!',
        'LINE osmId allaqachon foydalanilgan!',
      ],
    },
    line_code_already_used: {
      id: 10025,
      status: 'BAD REQUEST',
      code: 'LINE',
      labels: [
        'LINE code already used!',
        'LINE code уже использован!',
        'LINE code allaqachon foydalanilgan!',
        'LINE code allaqachon foydalanilgan!',
      ],
    },
    station_category_not_found_by_code: {
      id: 10026,
      status: 'NOT FOUND',
      code: 'STATION_CATEGORY',
      labels: [
        `Station category was not found by code!`,
        `Категория станции не найдена по коду!`,
        `Bekat toifasi kod bo'yicha topilmadi!`,
        `Bekat toifasi kod bo'yicha topilmadi!`,
      ],
    },
    station_type_not_found_by_code: {
      id: 10027,
      status: 'NOT FOUND',
      code: 'STATION_TYPE',
      labels: [
        `Station type was not found by code!`,
        `Категория тип не найдена по коду!`,
        `Bekat turi kod bo'yicha topilmadi!`,
        `Bekat turi kod bo'yicha topilmadi!`,
      ],
    },
    station_class_not_found_by_code: {
      id: 10028,
      status: 'NOT FOUND',
      code: 'STATION_CLASS',
      labels: [
        `Station type was not found by code!`,
        `Категория класс не найдена по коду!`,
        `Bekat sinf kod bo'yicha topilmadi!`,
        `Bekat sinf kod bo'yicha topilmadi!`,
      ],
    },
  },
};

type PromptMap = {
  [K1 in keyof typeof PROMPT_MAP]: {
    [K2 in keyof (typeof PROMPT_MAP)[K1]]: Prompt;
  };
};

export interface PromptDataType {
  [key: string]: Prompt;
}

const PromptsMap: PromptMap = <PromptMap>PROMPT_MAP;

export function getPrompt<
  K1 extends keyof PromptMap,
  K2 extends keyof PromptMap[K1],
>(origin: K1, condition: K2): Prompt {
  return PromptsMap[origin][condition];
}
