import React from 'react'
import { Col, Input, Row, Select } from "antd";
import { CODES } from "../constants";

const CurrentRow = ({
  inputValue,
  selectedValue,
  onInputChange,
  onSelectChange,
}) => {
  return (
    <Row gutter={15} >
    <Col span={12}>
      <Input
        placeholder="Введите значение"
        size="large"
        type="number"
        value={inputValue}
        onChange={onInputChange}
      />
    </Col>
    <Col span={12}>
      <Select
        optionFilterProp="label"
        size="large"
        placeholder="Выберите валюту"
        options={CODES}
        value={selectedValue}
        onChange={onSelectChange}
      />
    </Col>
  </Row>
  )
}

export default CurrentRow