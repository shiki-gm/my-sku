import "./styles.css";
import { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { goodsAttributeList, goodsSkuList } from "./util";
import classnames from "classnames";

export default function App() {
  const [btntype, setBtntype] = useState([]);
  const [formatSku, setFormatSku] = useState({});
  const [selectedSku, setSelectedSku] = useState({}); // {黑色+小码+老版: 1}
  const [selectedTag, setSelectedTag] = useState({}); // {0: '黑色'}

  useEffect(() => {
    const tempData = {};
    goodsSkuList.forEach((item) => {
      tempData[item.attributeBrief.join("+")] = item.stockNum;
    });
    setFormatSku(tempData);
    // const temp = goodsSkuList.map((item) => {
    //   return { [item.attributeBrief.join("+")]: item.stockNum };
    // });
    // console.log("temp", temp);
    // setFormatSku(temp);
  }, []);
  useEffect(() => {
    let tempData = [];
    goodsAttributeList.forEach((data, index) => {
      tempData[index] = {};
      tempData[index]["value"] = [];
      data.goodsAttributeValueList.length > 0 &&
        data.goodsAttributeValueList.forEach((data1) => {
          tempData[index][data1.name] = {
            rootDefault: data1.stockNum === 0,
            default: data1.stockNum === 0,
            value: false
          };
        });
    });
    setBtntype(tempData);
    console.log(tempData);
  }, []);

  const mbutton = (btnNames, value, data, onClick) => {
    return (
      <div className="mbtn-group">
        {btnNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classnames([
                "defaultBtn",
                { selecedBtn: value[0] === item },
                { marginLeft: index > 0 }
              ])}
              onClick={() => onClick(item)}
            >
              {(data[item]["default"] || data[item]["rootDefault"]) && (
                <div
                  className={classnames([
                    "tips",
                    { selecedBtn: value[0] === item }
                  ])}
                >
                  售罄
                </div>
              )}
              {item}
            </div>
          );
        })}
      </div>
    );
  };

  const onChange = (checkedValues, position) => {
    // 点击按钮样式
    const tempData = JSON.parse(JSON.stringify(btntype));
    const isCancel = tempData[position].value[0] === checkedValues;

    const tempSelectedTag = JSON.parse(JSON.stringify(selectedTag));
    // console.log(tempSelectedTag, isCancel, position, checkedValues);
    if (isCancel) {
      delete tempSelectedTag[position];
    } else {
      tempSelectedTag[position] = checkedValues;
    }
    // console.log(tempSelectedTag);
    setSelectedTag(tempSelectedTag);

    for (let item in tempData[position]) {
      if (item === "value") {
        tempData[position].value = isCancel ? [] : [checkedValues];
      } else {
        tempData[position][item]["value"] = isCancel && item === checkedValues;
      }
    }

    console.log("tempSelectedTag", tempSelectedTag);

    // 1.isCancel是true时，表示取消按钮选中，则应清空相关其他按钮点选状态
    // 2.isCancel是false时，表示选中，则应关联相关其他阿牛的点选状态

    // checkedValues: 黑色
    // position: 位置
    // formatSku: {黑色+小码+老版: 1}

    // 其他联动按钮样式
    //

    let selectedStr = Object.values(tempSelectedTag).join("+");
    let selectedArr = Object.values(tempSelectedTag);
    // 黑色+小码
    const tempSelect = {};
    for (let item in formatSku) {
      console.log("item", item);
      // item: 黑色+小码+老版 ， 这里没有考虑跳着选的情况
      const filter1 = item.indexOf(selectedStr) > -1;
      tempSelect[item] = formatSku[item];

      const keyArr = item.split("+");
      console.log("keyArr", keyArr);
      if (filter1) {
        // 如果进入已选列表，则标记
        // 过滤如果数量尾0，则继续标记售罄
        if (formatSku[item] === 0) {
          keyArr.forEach((keyName, index) => {
            tempData[index][keyName]["default"] = true;
          });
        }
      } else {
        selectedArr.forEach((item, index) => {
          // 其他进入选出列表，取消标记
          if (!keyArr.includes(item)) {
            tempData[index][item]["default"] = false;
          }
        });
      }
    }

    setBtntype(tempData);
    // 对已选中的组合进行过滤，缩小遍历范围
    setSelectedSku(tempSelect);

    // const tempSelectKeys = Object.keys(tempSelect);

    // for (let keyName in tempSelectKeys) {
    //   console.log("keyName", tempSelectKeys[keyName]);
    //   const keyArr = tempSelectKeys[keyName].split("+");
    //   console.log(keyArr);

    //   if (tempSelect[keyName] === 0) {
    //     //过滤如果数量尾0，则继续标记售罄
    //     for (let item in keyArr) {

    //     }
    //   }
    // }

    // const tempFormatSku = JSON.parse(JSON.stringify(formatSku));
    // if (selectedSku.length === 0) {
    //   const tempSelect = {}
    //   for (let item in formatSku) {
    //     // item: 黑色+小码+老版
    //     const filter1 = item.indexOf(checkedValues) > -1;
    //     if (filter1) {
    //       if (isCancel) {
    //         tempSelect[item] = formatSku[item]
    //       }
    //     }
    //   }
    // }
  };

  return (
    <div className="App">
      {btntype.map((data, index) => {
        let key = Object.keys(data);
        return (
          <div key={index}>
            {mbutton(key.slice(1), data.value, data, (value) =>
              onChange(value, index)
            )}
            <br />
          </div>
        );
      })}
      {btntype.map((data) => {
        return <div>{data.value[0]}</div>;
      })}
    </div>
  );
}
