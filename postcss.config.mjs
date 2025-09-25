const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-pxtorem": {
      rootValue: 16, // 设计稿中 html 元素字体大小 / rootValue = 转换后 rem 值
      unitPrecision: 5, // 转换后保留的小数点位数
      propList: ["*"], // 需要转换的属性
      mediaQuery: false, // 是否转换 @media 条件中的 px（只影响条件，不影响代码块）
      minPixelValue: 2, // 1px 不转换，大于等于 2px 的转换
    },
  },
};

export default config;
