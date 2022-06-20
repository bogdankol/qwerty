IconTextWithHeader component

<IconTextWithHeader 
  iconSrc=string              ---------------- ↓↓↓
  iconAlt=string                               ↓↓↓
  iconTitle=string                             both are mandatory for icon and text to be rendered
  introduceText=string        ---------------- ↑↑↑
  header=string               ---------------- h2 tag, no header no render,
  iconStyle="grey"            ---------------- styles for icon*s text, possible values: "grey" || "blue" || "white" - default: "grey" 
  headerStyle="colored"       ---------------- possible values: "colored" || "blue" - default: "colored"
/>

<Description 
  description=string          ----------------  mandatory for h3 tag description render
  text=string                 ----------------  mandatory for p tag text render
  textStyle="grey-dark"       ----------------  possible values: "grey-dark" || "grey-light", default - "grey-dark"
/>