
const languageList = [
  {
    value: 'Chinese',
    label: '汉语'
  },
  {
    value: 'English',
    label: '英语'
  },
  {
    value: 'Japanese',
    label: '日语'
  },
  {
    value: 'Korean',
    label: '韩语'
  }
]
export const SearchDataSource = {
  condition: [
    {
      type: 'sex',
      value: '性别',
      data: [
        {
          value: 'F',
          label: '男'
        },
        {
          value: 'M',
          label: '女'
        },
      ]
    },
    {
      type: 'language',
      value: '母语',
      data: languageList,
    },
    {
      type: 'second_language',
      value: '第二语言',
      data: languageList
    },
    {
      type: 'kindergarten',
      value: '幼儿园语言',
      data: languageList
    },
    {
      type: 'primary',
      value: '小学',
      data: languageList,
    },
    {
      type: 'middle_school',
      value: '中学',
      data: languageList
    },
    {
      type: 'living',
      value: '生活用语',
      data: languageList
    },
    {
      type: 'nationality',
      value: '国籍',
      data: languageList
    },
  ]
};
