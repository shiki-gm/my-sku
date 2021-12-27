export const goodsAttributeList = [
  {
    name: "颜色", // 规格名称
    appGoodsAttributeUuid: "20211", // 规格uuid
    isUseImage: 1, //c端是否显示该类规格图片
    goodsAttributeValueList: [
      {
        appGoodsAttributeValueUuid: "11",
        imgUrl:
          "http://img.wifenxiao.com/16/79/6/2020-11/5fb71cebbd915.png@!80x80",
        name: "黑色",
        stockNum: 4
      },
      {
        appGoodsAttributeValueUuid: "12",
        imgUrl:
          "http://img.wifenxiao.com/16/79/6/2020-11/5fb71cebbd915.png@!80x80",
        name: "白色",
        stockNum: 0
      }
    ]
  },
  {
    name: "尺码",
    appGoodsAttributeUuid: "20212",
    isUseImage: 0, // 是否选择该规格展示图片
    goodsAttributeValueList: [
      {
        appGoodsAttributeValueUuid: "21",
        imgUrl:
          "http://img.wifenxiao.com/16/79/6/2020-11/5fb71cebbd915.png@!80x80",
        name: "小码",
        stockNum: 2
      },
      {
        appGoodsAttributeValueUuid: "22",
        imgUrl:
          "http://img.wifenxiao.com/16/79/6/2020-11/5fb71cebbd915.png@!80x80",
        name: "中码",
        stockNum: 2
      }
    ]
  },
  {
    name: "版本",
    appGoodsAttributeUuid: "20213",
    isUseImage: 0, // 是否选择该规格展示图片
    goodsAttributeValueList: [
      {
        appGoodsAttributeValueUuid: "31",
        imgUrl:
          "http://img.wifenxiao.com/16/79/6/2020-11/5fb71cebbd915.png@!80x80",
        name: "老版",
        stockNum: 2
      },
      {
        appGoodsAttributeValueUuid: "32",
        imgUrl:
          "http://img.wifenxiao.com/16/79/6/2020-11/5fb71cebbd915.png@!80x80",
        name: "新版",
        stockNum: 2
      }
    ]
  }
];

export const goodsSkuList = [
  {
    appGoodsSkuUuid: "066773",
    attributeRelation: ["11", "21", "31"],
    attributeBrief: ["黑色", "小码", "老版"],
    stockNum: 1,
    currentPrice: "30.00",
    marketPrice: "200.00"
  },
  {
    appGoodsSkuUuid: "066774",
    attributeRelation: ["11", "21", "32"],
    attributeBrief: ["黑色", "小码", "新版"],
    stockNum: 1,
    currentPrice: "30.00",
    marketPrice: "200.00"
  },
  {
    appGoodsSkuUuid: "066775",
    attributeRelation: ["11", "22", "31"],
    attributeBrief: ["黑色", "中码", "老版"],
    stockNum: 1,
    currentPrice: "30.00",
    marketPrice: "200.00"
  },
  {
    appGoodsSkuUuid: "066776",
    attributeRelation: ["11", "22", "32"],
    attributeBrief: ["黑色", "中码", "新版"],
    stockNum: 1,
    currentPrice: "30.00",
    marketPrice: "200.00"
  },
  {
    appGoodsSkuUuid: "066775",
    attributeRelation: ["12", "21", "31"],
    attributeBrief: ["白色", "小码", "老版"],
    stockNum: 0,
    currentPrice: "30.00",
    marketPrice: "200.00"
  },
  {
    appGoodsSkuUuid: "066776",
    attributeRelation: ["12", "21", "32"],
    attributeBrief: ["白色", "小码", "新版"],
    stockNum: 0,
    currentPrice: "30.00",
    marketPrice: "200.00"
  },
  {
    appGoodsSkuUuid: "066775",
    attributeRelation: ["12", "22", "31"],
    attributeBrief: ["白色", "中码", "老版"],
    stockNum: 0,
    currentPrice: "30.00",
    marketPrice: "200.00"
  },
  {
    appGoodsSkuUuid: "066776",
    attributeRelation: ["12", "22", "32"],
    attributeBrief: ["白色", "中码", "新版"],
    stockNum: 0,
    currentPrice: "30.00",
    marketPrice: "200.00"
  }
];
