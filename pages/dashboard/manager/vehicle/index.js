import { Button, Col, Row, Modal, Radio, BackTop } from "antd";
import React, { useState } from "react";
import InfiniteScrollComponent from "../../../../components/common/infiniteScroll";
import ModalForm from "../../../../components/common/modalForm";
import AppLayout from "../../../../components/layout/layout";
import { gutter } from "../../../../lib/constant";

export default function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [newData, setNewData] = useState({});
  const [state, setState] = useState([false, true]);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const cancel = () => {
    setIsModalVisible(false);
    setEditingVehicle(null);
  };

  return (
    <AppLayout>
      <Row gutter={gutter} justify={"space-between"}>
        <Col>
          <Row>
            <h2>Vehicle</h2>
          </Row>
          <Row gutter={[16, 16]}>
            <Radio.Group
              onChange={(e) => setState(e.target.value)}
              defaultValue={state}
            >
              <Radio.Button value={[false, true]}>All Vehicle</Radio.Button>
              <Radio.Button value={[true]}>Active</Radio.Button>
              <Radio.Button value={[false]}>Inactive</Radio.Button>
            </Radio.Group>
          </Row>
        </Col>
        <Col>
          <Button type="primary" onClick={showModal}>
            Add Vehicle
          </Button>
        </Col>
      </Row>
      <div style={{ margin: "1rem 0" }}>
        <InfiniteScrollComponent
          status={state}
          newData={newData}
          modify={true}
        />
      </div>
      <BackTop target={() => document.getElementById("contentLayout")} />
      <Modal
        centered
        title={!!editingVehicle ? "Edit Vehicle" : "Add Vehicle"}
        visible={isModalVisible}
        onCancel={cancel}
        destroyOnClose={true}
        maskClosable={false}
        footer={[
          <Button key="cancel" onClick={cancel}>
            Cancel
          </Button>,
        ]}
      >
        <ModalForm
          onFinish={(vehicle) => {
            if (!!editingVehicle) {
              setNewData({ data: vehicle, isEdit: true });
            } else {
              setNewData({ data: vehicle, isEdit: false });
            }
            setIsModalVisible(false);
          }}
          vehicle={editingVehicle}
        />
      </Modal>
    </AppLayout>
  );
}
