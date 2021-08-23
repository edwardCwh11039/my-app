import { Button, Card, Carousel, Col, Image, Row } from "antd";
import { EditOutlined, DeleteOutlined, RedoOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { gutter } from "../lib/constant";
import apiService from "../lib/services/api-service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledRow = styled(Row)`
  position: relative;
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    background: #f0f0f0;
    width: 100%;
    height: 1px;
  }
`;
const Dot = styled.span`
  height: 15px;
  width: 15px;
  background-color: ${(props) => (props.status ? "green" : "red")};
  border-radius: 50%;
  display: inline-block;
`;
const CarouselWrapper = styled(Carousel)`
  > .slick-dots {
    margin: 0;
  }
`;
export default function CarOverview(props) {
  const actions = props.modify
    ? [
        props.children,
        <Button
          shape="circle"
          icon={<EditOutlined key="edit" />}
          onClick={() => props.handleEdit(props.id)}
          key={"Edit Button"}
        />,
        <Button
          key={"Delete Button"}
          shape="circle"
          icon={
            props.status ? (
              <DeleteOutlined key="delete" />
            ) : (
              <RedoOutlined key="redo" />
            )
          }
          onClick={() =>
            apiService
              .updateStatus({ ids: [props.id] })
              .then((res) => props.removeAndUndo(res.data))
          }
        />,
      ]
    : [props.children];

  return (
    <Card
      extra={props.modify ? <Dot status={props.status} /> : null}
      cover={
        <CarouselWrapper autoplay>
          {props.images &&
            props.images.map((img, index) => (
              <Image key={index} src={"http://localhost:3001/files/" + img} />
            ))}
        </CarouselWrapper>
      }
      {...props.cardProps}
      actions={actions}
    >
      <Row gutter={gutter}>
        <h3>{props.name.split("_").join(" ")}</h3>
      </Row>

      <StyledRow gutter={gutter} justify="space-between">
        <Col>Make:</Col>
        <Col>
          <b>{props.make.name}</b>
        </Col>
      </StyledRow>

      <StyledRow gutter={gutter} justify="space-between">
        <Col>Model:</Col>
        <Col>
          <b>{props.model.name}</b>
        </Col>
      </StyledRow>

      <StyledRow gutter={gutter} justify="space-between">
        <Col>Condition:</Col>
        <Col>
          <b>{props.condition.name}</b>
        </Col>
      </StyledRow>

      <StyledRow gutter={gutter} justify="space-between">
        <Col>Transmission:</Col>
        <Col>
          <b>{props.transmission.name}</b>
        </Col>
      </StyledRow>
    </Card>
  );
}
