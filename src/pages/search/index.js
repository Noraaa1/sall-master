import React from 'react';
import {Input, Select} from 'antd';
import {SearchDataSource} from './data.sourc';
import './search.less';

const Search = Input.Search;
const Option = Select.Option;

const SearchPage = () => {
  const condition = SearchDataSource.condition;
  return (
    <div className="search-page">
      <div className="title">
        <h1>SALT 语音库</h1>
        <p>超过100g的录音数据，覆盖xxx个国家学生</p>
      </div>
      <div className="search-box">
        <div>
          <Search
            enterButton="搜索"
            size="large"
            onSearch={value => console.log(value)}
            placeholder="查询录音文本"
            className="salt-search"
          />
          <div className="select-box">
            {
              condition.map((item) => {
                return (
                  <Select
                    key={item.type}
                    placeholder={item.value}
                  >
                    {
                      item.data.map(option => {
                        return (
                          <Option  key={option.value} value={option.value}>{option.label}</Option>
                        )
                      })
                    }
                  </Select>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage;
