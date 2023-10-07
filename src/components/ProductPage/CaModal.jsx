import React, { useState } from "react";
import { Button, Modal } from "antd";
import imgPic from "../../assets/930f59df53404b3a94cac82e588377aa.jpg";
const CaModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ color: "#fff", backgroundColor: "red" }}
      >
        დეტალური ინფორმაცია
      </Button>
      <Modal
        title="დეტალური ინფორმაცია"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <img src={imgPic} alt="alo" />
      </Modal>
    </>
  );
};
export default CaModal;
