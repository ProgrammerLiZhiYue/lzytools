import "./App.css";
import "antd-mobile/dist/antd-mobile.css";
import { WingBlank, TextareaItem, Button,Card } from "antd-mobile";
import { useState } from "react";
import { parse } from "url";


function App() {
  const [originString, setOriginString] = useState("");
  const [convertedString, setConvertedString] = useState("");

  function convert() {
    const id = parse(originString, true)
      .query.id;
    setConvertedString(`https://h5.m.taobao.com/cart/order.html?buyParam=${id}_1`);
  }
  return (
    <div className="App">
      <WingBlank>
        <TextareaItem
          autoHeight
          value={originString}
          onChange={(e) => setOriginString(e)}
        ></TextareaItem>
      </WingBlank>
      <WingBlank>
        <Button type="primary" onClick={convert}>
          转换
        </Button>
      </WingBlank>
      <WingBlank>
        <Card>
          <Card.Header>转换结果</Card.Header>
          <Card.Body>
            <div><span>{convertedString}</span></div>
          </Card.Body>
        </Card>
      </WingBlank>
    </div>
  );
}

export default App;
