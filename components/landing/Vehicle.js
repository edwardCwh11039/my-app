import { Col, Row } from "antd";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import apiService from "../../lib/services/api-service";
import InfiniteScrollComponent from "../common/infiniteScroll";

export default function Vehicle() {
  const [data, setData] = useState([]);
  useEffect(() => {
    apiService.getVehicleCategories().then((res) => console.log(res));
  }, []);
  return (
    <div style={{ margin: "2rem 1rem" }} className="Vehicle">
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 6 }}>
          hi
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 18 }}>
          <InfiniteScrollComponent status={[true]} modify={false} />
        </Col>
      </Row>
    </div>
  );
}
