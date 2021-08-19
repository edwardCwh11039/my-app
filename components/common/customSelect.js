import { PlusOutlined } from "@ant-design/icons";
import { Divider, Input, Select } from "antd";
import Form from "antd/lib/form/Form";
import { useEffect, useState } from "react";
const { Option } = Select;

export default function CustomSelect({ value = {}, onChange, data }) {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const triggerChange = (changedValue) => {
    onChange?.({
      ...value,
      ...changedValue,
    });
  };
  const onSelectChange = (data) => {
    triggerChange({ data: data });
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const addItem = () => {
    setItems([...items, name]);
    setName("");
  };
  useEffect(() => {
    setItems(Array.from(new Set(data.map((item) => item.name))));
  }, [data]);
  return (
    <Select
      style={{ width: 240 }}
      placeholder="custom dropdown render"
      onChange={onSelectChange}
      dropdownRender={(menu) => (
        <div>
          {menu}
          <Divider style={{ margin: "4px 0" }} />
          <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
            <Input
              style={{ flex: "auto" }}
              value={name}
              onChange={onNameChange}
            />
            <a
              style={{
                flex: "none",
                padding: "8px",
                display: "block",
                cursor: "pointer",
              }}
              onClick={addItem}
            >
              <PlusOutlined /> Add item
            </a>
          </div>
        </div>
      )}
    >
      {items.map((item, index) => {
        return <Select.Option key={item}>{item}</Select.Option>;
      })}
    </Select>
  );
}
