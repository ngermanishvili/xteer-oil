import { Divider, Row, Col } from "antd";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageStyle = {
  width: "100%",
  height: "400px",
  padding: "20px",
  borderRadius: "15px",
};

const CenteredImages = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  const slideFromLeft = {
    hidden: { x: -200 },
    visible: { x: 0, transition: { duration: 1.5 } },
  };

  const slideFromRight = {
    hidden: { x: 200 },
    visible: { x: 0, transition: { duration: 1.5 } },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div>
        <Divider orientation="left">კომპანია</Divider>
        <Row>
          <Col span={12}>
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={slideFromLeft}
              style={{ width: "100%", height: "300px" }}
            >
              <img
                style={imageStyle}
                src="https://www.hyundai-lube-me.com/wp-content/uploads/2020/01/img_sub1_04-2.jpg"
                alt="xteer"
              />
            </motion.div>
          </Col>
          <Col span={12}>
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={slideFromRight}
              style={{ width: "100%", height: "300px" }}
            >
              <img
                style={imageStyle}
                src="https://www.hyundai-lube-me.com/wp-content/uploads/2020/04/87230310_176618223781424_2292460187472101376_o-768x432.jpg"
                alt="xteer"
              />
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CenteredImages;
