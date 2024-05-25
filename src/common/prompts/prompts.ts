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
