import { ReadOutlined } from "@ant-design/icons";
import { Spin, List, Button } from "antd";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import apiService from "../../lib/services/api-service";
import CarOverview from "../carOverview";
import { useListEffect } from "../custom-hooks/list-effects";

export default function InfiniteScrollComponent({
  status,
  newData,
  modify,
  handleEdit,
}) {
  const [items, setItems] = useState([]);
  const { paginator, setPaginator, hasMore, data, setData } = useListEffect(
    apiService.getVehicle.bind(apiService),
    "vehicles",
    false
  );

  useEffect(() => {
    if (!!data) {
      setItems(data.filter((value) => status.indexOf(value.status) !== -1));
    }
  }, [status, data]);
  useEffect(() => {
    if (!!newData) {
      if (newData.isEdit) {
        const index = data.findIndex((item) => item.id === newData.data.id);

        data[index] = newData.data;
        setData([...data]);
      }
    }
  }, [newData]);
  return (
    <InfiniteScroll
      scrollableTarget="contentLayout"
      next={() => setPaginator({ ...paginator, page: paginator.page + 1 })}
      hasMore={hasMore}
      loader={
        <div style={{ textAlign: "center" }}>
          <Spin size="large" />
        </div>
      }
      dataLength={data.length}
      endMessage={<div style={{ textAlign: "center" }}>No more Vehicle!</div>}
      style={{ overflow: "hidden" }}
    >
      <List
        id="container"
        grid={{
          gutter: 14,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <CarOverview
              {...item}
              modify={modify}
              removeAndUndo={(vehicles) => {
                const newData = data.map(
                  (obj) => vehicles.find((o) => o.id === obj.id) || obj
                );
                setData(newData);
              }}
              handleEdit={() => handleEdit(item)}
            >
              <Button
                shape="circle"
                icon={<ReadOutlined key="read" />}
                href={`/dashboard/manager/vehicle/${item.id}`}
                style={{ paddingTop: "6px !important" }}
              />
            </CarOverview>
          </List.Item>
        )}
      ></List>
    </InfiniteScroll>
  );
}
