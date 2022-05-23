import{s as l,r as c,j as k,L as B,R as J,a as q,b as w,c as D,d as E,B as O}from"./vendor.33f398dd.js";const j=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}};j();var U="data:image/png;base64,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",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsgAAALIBa5Ro4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAdLSURBVFiFrZd7UNNXFse/95eEJCQhBklCHgQEguL4WHkY3fqmWG07vh+0q7bu1PqYrnatqztuZ6haO0urpdqqiGOXsuq61tqtTkWxOshCVaxS1EZAKYJIxCUQJCEPkt/ZP+oy0pWSdDwzv3/uPedzvvf+zu/c+2NEhFCMMSaQiUSr1bLwLLvHayaeF4SLRdVd3u4ip8+XQ0TukHihCGCMJRkj5GcseoN++fhnhCkxJggFHKqam3HgSqX7yPdV9g6PZy4RVTx1AYwxhUYma/owY2JE6pBk/OVcCSruNMDP8/iN0Yh3Jk1Ap9eLuQWFHQ+93mFE1BQUmIiCekxKxefr01Oo5LWlFKPTUd7uPXTl8hUqKy2jw4cOU7zRSP9csoh2z53tV0mlZcFyg3MCJCqJpLt15TJKMpmo6OuTZLtno4ULFtIYyxi6XHGZqiqryKTRUHP222RSDXAASAiGzQX5qkaMVEeh2umEzmRCWloajp84jvst9zFzxkxIxBLExsZi8pQMlNyuw/j4OA5AajDgYAUkmAcoudvtDsQnJoKIx4jhI1BfX48Ptn+AH6w//OSUnIxb9jYM1WjDhRxnfpoCqs43NXeb5TLUVleD53moVCq8/NLLSE9Lh9VqBQDUXL+OweoonKyuafPzfOXTFHCzxe3qkgsFsDc3o7y8HACPGzdugIiw7LVlqL1Vi9LzJUgxGlDZdC8MQFlQ5GCrVSYSvZphigmUvTSP9FotvZ+TQ/8uLaWzZ76hffn7KEanoy+XvkJL0lJdSonk3WC5ofQBiVQkbN01ZaJskjkRm69Xo7y+Hj6/H6Pj4vD2WAtaXS5k7t3n54lMRGQLihuMAMZYrE4TXjp5rCam9HwrOzp9GkaZk8Dkih6fuw4Hnt2fjwkTTN3HiqpbO53e6URU1R+73xpgjE2LihRXb1033HQw18IO7BmHrKJiNN5tBLm7AAAdHg9mFhbg/U3PomDHLNHBXXN0SoW4XCoVLu2X39cOMMa4uISIXU0NzhXnDk7C+HQ1IFABIg2OHLNiy+YSnJ0zE3KdHi/+4xBmzDfjzZWWnviaOjtGZeYF5ErxF/9pcS0hIm/QAhhjkQlJERUKI5cQnSxGbbETX+6agxHD4nt8cj+5gOMHrdDLZNBYVMjd+lzPXENTB+auPIKoZBkCPp4qS2wN9gddE4mosV8BjLFUrV7yrSVLFTbldTWUXBjuXZEg78/XsGH5OLzxanqP78bss2i2deLTvJngOAYAOPq1FWs2ncKCjSMwepoRAFB69A4O/7XK7WjzzCKi4j4FaPXha3nw27JyDMxskUPHKUACPQLg0Nnuxf4/fQetRIbPts+CSinpJdzj9WN1dhHKrt/Fih0WqI2yXvMNVgd2rCj3+zyB3LZW9wZ6lJgRERhjkqTkAcWQBsYv2mGEShOGWIEaTm5gLwgRcOrTWpQerMehnXPw27QYAMDNW62Yt/IIzOOiMG/dMAiET67trofdyFt7ib9703G1xeaaSkTtDEB8TJy8MmlieMQL67VQCEXQCA1wsfAnQgCg7lob8tdW4PWFqYiOkiE7twSLt4zCyIm6PmMeX8SJ3TfpdMGth+129xQWl6j40ZASNmjBFgM4MBiFcXAzSb8gu60LG547Ba/Hj83HMjFomKrfmMft89wbOPf3ulaBo813Ai7BUvs9rzhxrAx+OKHipOhmoj6D62+0Y9uyMkzOisfoaUYUbroKg1kJbaw8qORnCm/j1P7aDke7J1NIRD8yxrTSS8LivUvujP/dR0Z41I2IFWjg5CL/L/jU32pRVFCL5TmjMXSMBgAwJF2Nj9dcQGqGAfPfGg6BgPWZXM5EPr/Nv6Xd7t5NRG29voLo6PA3SUgfZuUYWEK6DAYuAgGBDgFwcHX4kLe+AoFuHiu3W6BQiXuBvV1+FLxzFbb6Tvxh51gM1PWuobs1Hdj7x0vdGdNiR+fnVn7/v/En9YGUaIP022cWR4onLB0IJQvD/WvhyH3rKjIXJWL67weD9b1AlB9vwJFt1/FKdgpSMvQ/jX3ViEPvVrrb7Z7ZRHS6V74+OqEqYXDE5chBggRtshjffeXA+u0piB4Z03fmx6ylwYmPV1/A4PQowA+6fLqpsbWla0JQnfAxESw+MeKThjudq94ojEd8qgyxXCQ8Ag14/MIWPLL7dzqx8cViilBKvnhgcy4K6Sz4mZCpA7Xik8+v1QrSZg1AFJNCLDDCx4R9xlwrvY/8dRU+T5d/lcvl2/+L/CDvAybTIHnloDGSyBkbdVCEiRAtNMD5s2ZFBPxrp5W+OXDb0W53TyKia/2yQ7gRhZmTlSd4YWDq4p0xiNSLECfQ9LRrp8OHPWsu8s23Oy+22JzPE1FHUNxQf07VaslyCLFn/lY9GzJOAR2nQJ1Vio9WXfR3u/3v2e3u7FB4IQsAAMbY8GijtCJttlIijxLizK5Wv/2BJ5OISkJm/RoBj0REDB46oNwf4CPrah6mE1Hzr+H8Fyoj3bPhnwgvAAAAAElFTkSuQmCC",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALiSURBVFiF7ZZLSFRRHMZ//ztznRkdNZUhHHpAbqJBJaQ0X9AmC5KEaBGatHchbYoIKloU7gqC1tWqpWWFiwjSchZuHKlVi/BVhDE+snHUe0+L8erMON6ZO+OuPrhwzvedx3f+53/OPfCvQ6xCJBJZBvw59ouKyDNN066HQqG1QgxoSeVxB/0qlFL9pmnOTk5OjhRiYCsCExMTnSLyMs9x5oDnLpfrttOIbEWgvr7+lYjct2lr2GhB4IZhGPecTJ5iAKC2tvaWiHQqpd4Dvze/dyJyWin1ML2ziMwDI6Zptm1SV5wakOxNEhgfH9d1XX8gIr2bxp+6XK6bVsgjkYgCqKury3lMRwZ2w9oQH4HmNHq06DxtdppV0SgcZgZO5aABexCBso5rlbF47FcyV1wilYuvn0TtNKvuLtSA8ugB3edJ4VZFAkDUTrPqBW+Bwh1M53Slgtm0vTMgRnU6Z0B1Ns2Coy34VHrxqMvY6FFIN6jZpj+DraAF0/IKLXExYa/laOCD/1JANzYuI6pHDOOE2s7bWQDErE7PZdNapZ1mZ+AN5zwVxUVnROQK5noXgg4g3nWKQj8obZ6iZqCvHQZBaUFkl1XaaZkMhIu7GhDVi5JuoAoFoin0mnl8J6eoOjWHv9LA7QYZuJs446J27PN2BGy0dAPh4gtjQBMqETL3wSjehhkqWmco2x/Hk3qakrEj05NWaaelGkBpMVfVCp7jM5S1TLPvyDI+H0iWq2ptaelQBvpwNs1CyvDRFyifD7TNwxmLwdc77ax/q7R34RDij39p/Pk2BGk5UFKSobWmMpCFOtg+mykRWBtix2yLixCYH95bA/0dW/PmdhGVlwMw3HKAxkDi3RqeX+Hs6HRefDIc3YSNAT/H+h4hAp8f9+fNJ8Pxv2C3U+GUt+AoAuHvC1srGZtbyJtPMZhc2TUJ18OJymoMVuOJsscLPm9+/NUmh0lowetLfIXySdiLN+F/FIS/oYMQ8WaExVMAAAAASUVORK5CYII=",Q="data:image/png;base64,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",X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATmSURBVFiFxZZbbFRVFIb/fa4zc047nSntFGgLrTACIpRAQgPSSCCA4CWAoBHkqQ8mIoQYvARJTEQRlWDaeAnhgTQBvJCgUaOAgBIoiAWLta1CW0AK7UwL7dwPM2fO8qG0dtqZ9kyj6Z/sl7XW3uvba8+adRgRIR0xxkQAi7Jd1vVx3XjcMIgH2Cl/172vAOwnIiOt89IBYIzxOeNt5/IK1FklZXlC6eJ8qKqI+l+9OPp5S7Dpj7vnQ/7Yk0QU+V8AHLm2w9PmjFm1fusM5nDIsFj4Ph8R8OmbFyOnv7t5TQvFdgKoJqKW/wSAMVaUkSV96Jqgrtj8fimvqAIcDjlp7Jnvb6L2jCfQeKkz5rujtYUCsZVEdHVEAIyxjNx85bBh0KORoC698NZsPPCwE9nZMiSJT7mvV+dP3KJPttcE/F3RlUR0MlmMMETyLEeO5dLshWOLlq2bjP07azFxqqNnk8ClTLpz41nc9Wp4duM0lC4az1zjlcztG376jDE2iYj8g/IkqwBjjHPkWJoWri4qWry2OMHHcQwulzUlgB4zcO5YKw5W1KN8Wwlml41F1e666A+HmvaEg7HXBsYnvQov8usnz3QWDkzO8wxOZ/K375UgcliwohDPvDgNX3zUAACYvyxfkmR+abL4QQCMMV7NECoee96d8MiiyCE72wJRTF3+/pq3JB/O3J5KTXzQDi2sTzYFAGBSzjib1VWgJBjtdgk8z0wlBwDJwuPVynkAgI7bYSh2yWsWYPrY4syEHyfHMdM3T6bL1R5kOqRjyXyDuoDjUOzIsSRkk+XhWy6Vqo+2omp3XSwcjO1N5h90LcNAU0drKN7fxsxXfpBK5rnAi0wHkGUKAMDlG1d8CQAVr1yAEU9vaPXKliFiy665ViVDqjQLcC3oi2pt1wN9hu5ODTeu+kYEAACzFuRBsnCFjLHpwwIQEYV898oP7qnrq8KUOWPw7YEmpDu6+8s902kAeGhYAADQdfrybnuk8bfT7QCApc9NQmNNJ77efwUjZSie6lA4DoWmAADAd0c74L0VAgCIEofNH8xF7VkPXl51HPveqcWddtMjHwDQ3NAdMAw0DLSnHEaGgbq2Fn8cAA8AmU4ZW3aXotsTQUtDV1rJAeDK5U4OQI1pAAA1zfXdRi8AAGhaHBPcdkxw29NKful0O2JR8hCRZ6Av5RMQkceIG97Gi519NsMgBAKxhDgtouPkketobR40aQEAoUAMFa9fCIT80aeT+Yf7IJnhdFlrtu0rE63Kv8X6+69uHNn7J1zjFNScakNE07H3xHKMybMl7G+7EcS7m6qDne2RXSHfvR3Jcgz5B09EvzOOvVe59Ze4tzXUZy9wZ+Gp8im4cPw2XiqbD8Uikr8rCi2iI+iPou68F4cq6/Wta37sutUc3JAq+bAV6JUgC6tVVah65IlCm7skG4VuO4w44e11Z7Bn7XJsOvhNMByPXWc8yxd4pkuyUBcO6T9HNf1jIuoY8nAiMrUA5NgypR2uAqVWzZLCkoXXxzkyjKryNZSbqXYDKDJ7Vv81VBcMBO0A8Mb9BcbYDFkRLgIQrKJAAFSzZ/XXyIc8oFrEHn6rNHoArAdAYqMBoMiiyADAJoncaACostBTAUUWhVEB6H0CRZZGDJB229xvyVIAYZ7j4pLAR3mO6QDCAErTPesfo25lO6pCAx0AAAAASUVORK5CYII=",Z=l.header`
  height: 6vh;
  background-color: #585ad4;
  display: flex;
  .bg {
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .globe {
    background-image: url(${U});
  }
  .Champ {
    background-image: url(${K});
  }
  .Usine {
    background-image: url(${W});
  }
  .Vache {
    background-image: url(${Q});
  }
  .Arbre {
    background-image: url(${X});
  }

  .catFiltre {
    height: 100%;
    width: 45vw;
    margin-left: 2rem;
    button {
      aspect-ratio: 1/1;
      height: 100%;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 600px) {
    .catFiltre {
      display: none;
    }
    img {
      margin-top: 0.1rem;
    }
  }
`;function h(i,o){const t=c.exports.useRef();c.exports.useEffect(()=>{t.current=i},[i]),c.exports.useEffect(()=>{function r(){t.current()}if(o!==null){const n=setInterval(r,o);return()=>clearInterval(n)}return null},[o])}var Y="/assets/terre1.e74493f4.png",T="/assets/terre2.77edfcd5.png",I="/assets/terre3.c9baf0d3.png",G="/assets/terre4.466f5f8f.png",_="/assets/terre5.613b7519.png";const e=k.exports.jsx,s=k.exports.jsxs,S=k.exports.Fragment,u=c.exports.createContext();function $({children:i}){const[o,t]=c.exports.useState(2022),[r,n]=c.exports.useState(4e5),[a,d]=c.exports.useState(0),[p,A]=c.exports.useState(0),[g,m]=c.exports.useState(!1),[f,x]=c.exports.useState(0),[v,b]=c.exports.useState("vide"),[C,z]=c.exports.useState(!1),[Oe,V]=c.exports.useState(!1);h(()=>{g&&t(R=>R+1)},5e3);const N=()=>{m(!1)},P=()=>{if(a<1e3)return e("img",{src:Y});if(a>1e3&&a<1999)return e("img",{src:T});if(a>2e3&&a<2999)return e("img",{src:I});if(a>3e3&&a<3999)return e("img",{src:G});if(a>4e3&&a<1e4)return e("img",{src:_})},M=()=>{(a>=8e3||o>=2100||r<=0)&&(V(!0),N(),z(!0))};return e(u.Provider,{value:{timer:o,setTimer:t,timerActive:g,setTimerActive:m,money:r,setMoney:n,impacctEcolo:p,setImpactEcolo:A,reset:N,annualProfit:f,setAnnualProfit:x,earth:a,setEarth:d,defineImg:P,choice:v,setChoice:b,endGameFunc:M,modal:C,setModal:z},children:i})}var F="/assets/logoBigBill1.b4d26dba.png";function ee(){const{choice:i,setChoice:o}=c.exports.useContext(u);return s(Z,{children:[s("div",{className:"catFiltre",children:[e("button",{className:"globe bg",value:"vide",onClick:t=>{o(t.target.value)}}),e("button",{className:"Champ bg",value:"Champ",onClick:t=>{o(t.target.value)}}),e("button",{className:"Usine bg",value:"Usine",onClick:t=>{o(t.target.value)}}),e("button",{className:"Vache bg",value:"Elevage",onClick:t=>{o(t.target.value)}}),e("button",{className:"Arbre bg",value:"positif",onClick:t=>{o(t.target.value)}})]}),e("img",{src:F,alt:"logo"})]})}var te=l.section`
  font-family: "Roboto", "Andika New Basic", sans-serif;
  background-color: #fbb7a2;
  height: 100vh;
  .gallery {
    height: 60vh;
    overflow: scroll;
  }
  .stats {
    position: fixed;
  }
`,ie=l.header`
  background-color: #585ad4;
  background-image: url(${F});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 2vh;
`;function oe(){return e(ie,{})}var ae=l.div`
  text-decoration: none;
  button {
    font-size: 40px;
    box-shadow: 3px 3px 3px 4px #014829;
    background: linear-gradient(to bottom, #5ad79d 5%, #5ad79d 100%);
    background-color: #5ad79d;
    border: 1px solid #5ad79d;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    padding: 1rem 3rem;
    text-decoration: none;
    text-shadow: 0px 1px 0px #35c61f;
  }
  button:active {
    text-decoration: none;
  }
`;function re(){const{timerActive:i,setTimerActive:o,setMoney:t,setTimer:r,setEarth:n,setAnnualProfit:a}=c.exports.useContext(u);return e(ae,{children:e("button",{onClick:()=>{o(!0),r(2022),t(4e5),n(0),a(0)},children:"START"})})}var L=l.section`
  font-weight: Bold;
  text-shadow: 5px 2px 2px #fbb7a2;
  //HOMEPAGE
  .start {
    color: #1e212b;
    background: url("src/assets/home.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 94vh;
    div {
      display: flex;
      align-items: center;
    }
  }
  h1 {
    font-size: 50px;
    margin-bottom: 8vh;
  }
  ul {
    list-style: square;
    li {
      font-size: 18px;
      margin: 0.5em;
    }
  }
  p {
    text-align: center;
    font-size: 25px;
    margin-bottom: 4vh;
  }
  //HOMEPAGE
  img {
    height: 30px;
    margin-left: 2em;
  }
  a {
    color: #1e212b;
    font-size: 20px;
    text-decoration: none;
    margin-top: 2vh;
  }

  .myButton {
    box-shadow: 3px 4px 0px 0px #070707;
    background: linear-gradient(to bottom, #003cff 5%, #067aed 100%);
    background-color: #1e212b;
    border: 1px solid #1e212b;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 30px;
    padding: 1rem 3rem;
    text-decoration: none;
    text-shadow: 0px 1px 0px #000000;
  }

  .myButton:active {
    position: relative;
    top: 1px;
  }
  .stop {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    h1 {
      text-align: center;
    }
  }
`;function ne(){return e(S,{children:e(L,{children:s("div",{className:"start",children:[e("h1",{children:"Bienvenue chez Big Bill ! "}),s("ul",{children:[e("p",{children:"R\xE8gles du jeu :"}),e("li",{children:"Vous d\xE9marrez avec 400 000 \u20AC"}),e("li",{children:"Vous avez jusqu'\xE0 l'ann\xE9e 2100 pour investir et gagner de l'argent (une ann\xE9e = 5 secondes)"}),e("li",{children:"Maintenez l'indicateur de la plan\xE8te en dessous de 8000"}),e("li",{children:"Maintenez votre argent au-dessus de 0 \u20AC"})]}),e(B,{to:"/game",children:e(re,{})})]})})})}var ce=l.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`,se=l.div`
  color: #1e212b;
  height: 20rem;
  width: 15rem;
  background-color: white;
  box-sizing: border-box;
  border: 10px solid #585ad4;
  box-shadow: 19px 16px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1vh;
  span {
    font-size: 10px;
  }
  li {
    font-size: 18px;
    text-align: center;
    text-shadow: 2px 2px 2px #fbb7a2;
  }
  .moin {
    box-shadow: inset 0px 1px 0px 0px #a30000;
    background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
    background-color: #d0451b;
    border: 1px solid #942911;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 20px;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #854629;
    width: 50%;
  }
  .plus {
    background: linear-gradient(to bottom, #5ad79d 5%, #5ad79d 100%);
    background-color: #77b55a;
    border: 1px solid #4b8f29;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    padding: 6px 12px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #5b8a3c;
    width: 50%;
  }

  img {
    height: 100px;
  }
  h1 {
    text-shadow: 2px 2px 2px #fbb7a2;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  h2 {
    text-shadow: 2px 2px 2px #fbb7a2;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
  }
`;function y(i){const{money:o,setMoney:t,timerActive:r,earth:n,setEarth:a,annualProfit:d,setAnnualProfit:p}=c.exports.useContext(u),[A,g]=c.exports.useState(0);h(()=>{r&&t(o+i.profit*A)},5e3),h(()=>{if(d>1)return d;r&&p(i.profit*A)},5e3),h(()=>{r&&a(n+i.impact_ecologique*A)},5e3);const m=()=>{t(o+i.cout_achat*.8)},f=()=>{t(o-i.cout_achat)},x=()=>{p(d+i.profit)},v=()=>{p(d-i.profit)},b=()=>{a(n-i.impact_ecologique)},C=()=>{a(n+i.impact_ecologique)};return s(se,{children:[e("h1",{children:i.nom}),s("ul",{children:[s("li",{children:["Profits : ",i.profit,"\u20AC/",e("span",{children:"an"})]}),s("li",{children:["PEF : ",i.impact_ecologique,"kg CO2 eq/",e("span",{children:"kg"})]}),s("li",{children:[e("button",{className:"moin",onClick:()=>{if(A===0)return t(o);m(),b(),v(),g(A-1)},children:"-"}),e("button",{className:"plus",onClick:()=>{f(),x(),C(),g(A+1)},children:"+"})]}),e("h2",{children:A})]}),e("img",{src:i.image,alt:"img"}),s("h2",{children:["PRIX D'ACHAT :",i.cout_achat,"\u20AC"]})]})}var le="/assets/avocat.749060a4.png",de="/assets/mais.fe686d19.png",ue="/assets/volaille.76c54a49.png",Ae="/assets/boeuf.33379938.png",pe="/assets/fraise.68c514be.png",ge="/assets/porc.b571c10a.png",me="/assets/sushi.23d6836e.png",he="/assets/foret.2ce729de.png",fe="/assets/moulin.1518551f.png",xe="/assets/usine.5b737a07.png",ve="/assets/cafe.b1c23553.png",be="/assets/platCuisin\xE9.270e6314.png",Ce="/assets/ble.6f468b5a.png",we="/assets/nouille.49fe73fd.png",ke="/assets/glace.a4a67ce3.png",Be="/assets/ail.7becd9a2.jpg",Se="/assets/moule.6a989708.jpg",ze="/assets/liqueur.3ab716a0.jpg";const H=[{nom:"Champ d'avocat",profit:17e3,impact_ecologique:275,image:le,categorie:"Champ",cout_achat:213160,superficie:"1hectar",production:10},{nom:"Champs de ma\xEFs",profit:350,impact_ecologique:124,image:de,categorie:"Champ",cout_achat:76673,superficie:"1hectar",production:100},{nom:"Ferme de volaille",profit:3800,impact_ecologique:731,image:ue,categorie:"Elevage",cout_achat:41218,superficie:"1hectar",production:80},{nom:"Ferme de boeuf",profit:6500,impact_ecologique:1323,image:Ae,categorie:"Elevage",cout_achat:19343,superficie:"1hectar",production:.6},,{nom:"Champ de fraise",profit:600,impact_ecologique:53,image:pe,categorie:"Champ",cout_achat:28290,superficie:"1hectar",production:34},,{nom:"Ferme de porc",profit:1900,impact_ecologique:95,image:ge,categorie:"Elevage",cout_achat:59648,superficie:"1hectar",production:9},{nom:"Usine de sushi",profit:3400,impact_ecologique:263,image:me,categorie:"Elevage",cout_achat:61860,superficie:"1hectar",production:8},{nom:"For\xEAt",profit:0,impact_ecologique:-400,image:he,categorie:"positif",cout_achat:1e5,superficie:"1hectar",production:0},{nom:"Moulin",profit:0,impact_ecologique:-100,image:fe,categorie:"positif",cout_achat:4e4,superficie:"1hectar",production:0},{nom:"Usine de Pastis",profit:8600,impact_ecologique:116,image:xe,categorie:"Usine",cout_achat:213200,superficie:"1hectar",production:10},{nom:"Champ de caf\xE9",profit:600,impact_ecologique:94,image:ve,categorie:"Champ",cout_achat:73690,superficie:"1hectar",production:7},{nom:"Usine de Plat cuisin\xE9",profit:1500,impact_ecologique:3273,image:be,categorie:"Usine",cout_achat:22e4,superficie:"1hectar",production:100},{nom:"Champ de bl\xE9",profit:8500,impact_ecologique:87,image:Ce,categorie:"Champ",cout_achat:105720,superficie:"1hectar",production:640},{nom:"Usine de nouilles asiatiques",profit:2e3,impact_ecologique:117,image:we,categorie:"Usine",cout_achat:87840,superficie:"1hectar",production:1268},{nom:"Usine de glace \xE0 l'eau",profit:5700,impact_ecologique:237,image:ke,categorie:"Usine",cout_achat:93550,superficie:"1hectar",production:13},{nom:"Ferme \xE0 Moules",profit:6300,impact_ecologique:524,image:Se,categorie:"Elevage",cout_achat:124500,superficie:"1hectar",production:19},{nom:"Champ d'ail",profit:800,impact_ecologique:37,image:Be,categorie:"Champ",cout_achat:18740,superficie:"1hectar",production:9},{nom:"Usine de liqueur",profit:7800,impact_ecologique:25,image:ze,categorie:"Usine",cout_achat:246800,superficie:"1hectar",production:9}];function Ne(){const{choice:i,setChoice:o}=c.exports.useContext(u);return e(ce,{children:H.filter(t=>i==="vide"?H.map(r=>e(y,{nom:r.nom,profit:r.profit,impact_ecologique:r.impact_ecologique,categorie:r.categorie,cout_achat:r.cout_achat,superficie:r.superficie,production:r.production,image:r.image,realeState:r.realeState},r.nom)):t.categorie===i).map(t=>e(y,{nom:t.nom,profit:t.profit,impact_ecologique:t.impact_ecologique,categorie:t.categorie,cout_achat:t.cout_achat,superficie:t.superficie,production:t.production,image:t.image,realeState:t.realeState},t.nom))})}var ye=l.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 8vh;
  .money {
    color: #ffe100;
    font-size: 50px;
    text-shadow: 5px 5px 5px #000000;
    font-weight: bold;
    background: url("src/assets/billet.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }
  .earth {
    color: #ffffff;
    font-size: 50px;
    text-shadow: 5px 5px 5px #000000;
    font-weight: bold;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    img {
      aspect-ratio: 1/1;
      width: 12rem;
      position: absolute;
      z-index: -1;
    }
  }
  @media screen and (max-width: 600px) {
    .money {
      height: 5vh;
      font-size: 40px;
      margin-top: -6rem;
    }
    .earth {
      width: 6rem;
      font-size: 40px;
      margin-top: 2rem;
      margin: 1rem -5rem 0 0;

      img {
        width: 8rem;
      }
    }
  }
`;function He(){const{money:i,earth:o,defineImg:t}=c.exports.useContext(u);return s(ye,{children:[s("div",{className:"earth",children:[t(),o]}),s("div",{className:"money",children:[i.toFixed(2),"\u20AC"]})]})}var Fe=l.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  img {
    margin-bottom: 0;
    height: 15em;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;function Le(){return e(Fe,{children:e("img",{src:"src/assets/riche.png"})})}var Ve=l.div`
  color: #1e212b;
  font-weight: bold;
  text-shadow: 4px 0px 0px #f9f9f9;
  position: fixed;
  bottom: 2vh;
  margin-left: 1vw;

  .timer {
    font-size: 20px;
    img {
      width: 70px;
    }
  }
  @media screen and (max-width: 600px) {
    .timer {
      font-size: 18px;
      margin-bottom: 0.5rem;
    }
  }
`;function Pe(){const{timer:i,timerActive:o,annualProfit:t}=c.exports.useContext(u);return e(Ve,{children:s("div",{className:"timer",children:[e("img",{src:"src/assets/timer.png"}),s("p",{children:["Ann\xE9e : ",i]}),s("p",{children:["B\xE9n\xE9fices par an : ",t,"\u20AC"]})]})})}var Me=l.div`
  body.active-modal {
    overflow-y: hidden;
  }

  .btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
  }

  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .modal-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 40%;
    left: 50%;
    transition-delay: 1s;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: transparent;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
  }

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
  }
  p {
    background-color: black;
    border-radius: 2%;
    opacity: 0.8;
    color: #e76b19;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
  }
`,Re="data:image/png;base64,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";function Je(){const{modal:i,setModal:o}=c.exports.useContext(u),t=()=>{o(!i)};return e(S,{children:e(Me,{children:i&&e("div",{className:"modal",children:s(B,{to:"/gameover",children:[e("div",{onClick:t,className:"overlay"}),s("div",{className:"modal-content",children:[e("img",{src:Re,className:!0}),e("p",{children:"De toute fa\xE7on il est d\xE9j\xE0 trop tard... La responsabilit\xE9 de l\u2019Homme sur le r\xE9chauffement climatique est sans \xE9quivoque."}),e("button",{onClick:t,className:"close-modal",children:"X"})]})]})})})})}function qe(){const{timer:i,money:o,endGameFunc:t,earth:r}=c.exports.useContext(u);return c.exports.useEffect(()=>{t()},[i,o,r]),s("main",{children:[e(Je,{}),e("section",{className:"gallery",children:e(Ne,{})}),s("section",{className:"stats",children:[e(He,{}),e(Pe,{}),e(Le,{})]})]})}function De(){return c.exports.useContext(u),e(S,{children:e(L,{children:s("ul",{className:"stop",children:[e("li",{children:e("a",{href:"https://climate.selectra.com/fr/actualites/rapport-giec-2022",children:"Rapport du GIEC"})}),e("li",{children:e("a",{href:"https://agribalyse.ademe.fr/",children:"Agribalyse"})}),e(B,{to:"/",children:e("button",{className:"myButton",children:"ACCUEIL"})})]})})})}function Ee(){return e("div",{className:"App",children:s($,{children:[e(J,{}),s(te,{children:[e(ee,{}),s(q,{children:[e(w,{path:"/",element:e(ne,{})}),e(w,{path:"/game",element:e(qe,{})}),e(w,{path:"/gameover",element:e(De,{})})]}),e(oe,{})]})]})})}D.render(e(E.StrictMode,{children:e(O,{children:e(Ee,{})})}),document.getElementById("root"));
