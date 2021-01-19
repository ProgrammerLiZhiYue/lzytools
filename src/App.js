import "./App.css";
import "antd-mobile/dist/antd-mobile.css";
import { WingBlank, TextareaItem, Button, Card, Toast } from "antd-mobile";
import { useState } from "react";
import { parse } from "url";
import Clipboard from "clipboard";

function App() {
  const [originString, setOriginString] = useState("");
  const [convertedString, setConvertedString] = useState("");

  let clipboard = new Clipboard("#btnCopy");
  clipboard.on("success", () => {
    Toast.success("复制成功", 1.5);
  });
  clipboard.on("error", () => {
    Toast.fail("复制失败，请手动复制", 1.5);
  });

  function convert() {
    const id = parse(originString, true).query.id;
    setConvertedString(
      `https://h5.m.taobao.com/cart/order.html?buyParam=${id}_1`
    );
  }
  return (
    <div className="App">
      <WingBlank>
        <TextareaItem
          autoHeight
          value={originString}
          onChange={(e) => setOriginString(e)}
          rows={5}
        ></TextareaItem>
      </WingBlank>
      <br />
      <WingBlank>
        <Button type="primary" onClick={convert}>
          转换
        </Button>
      </WingBlank>
      <br />
      <WingBlank>
        <Card>
          <Card.Header title="转换结果"></Card.Header>
          <Card.Body>
            <div>
              <span id="copiedSpan">{convertedString}</span>
            </div>
          </Card.Body>
        </Card>
        <br />
        <Button
          id="btnCopy"
          type="primary"
          data-clipboard-action="copy"
          data-clipboard-target="#copiedSpan"
        >
          点我复制
        </Button>
      </WingBlank>
    </div>
  );
}

export default App;
