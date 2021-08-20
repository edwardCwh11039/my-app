import { Radio } from "antd";
import { useState } from "react";

export default function CustomRadio({ value = {}, onChange, data }) {
  const [select, setSelect] = useState(value.data);
  const triggerChange = (changedValue) => {
    onChange?.({
      ...value,
      ...changedValue,
    });
  };
  const onRadioChange = (e) => {
    const newData = e.target.value;
    setSelect(newData);
    triggerChange({ data: newData });
  };

  return (
    <Radio.Group onChange={onRadioChange} value={value.data || select}>
      {data.map((item, index) => (
        <Radio.Button value={index + 1} key={item}>
          {item}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}
