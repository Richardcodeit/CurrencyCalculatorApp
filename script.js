const select = document.querySelector(".forFrom")
const select2 = document.querySelector(".forTO")
const ImgOne = document.querySelector(".fromImage")
const ImgTwo = document.querySelector(".TOImg")
const inputValue = document.querySelector(".amount-input")
const toInfo = document.querySelector(".toInfo")
const fromInfo = document.querySelector(".fromInfo") 




    for(i = 0 ; i < dataOfcountry.length ; i++){
    let selected1;
    let selected2
    if(i === 149){
        selected1 = dataOfcountry[i].name === "Nigeria" ? "selected" : null
    }
    else if (i === 222 ){
        selected2 = dataOfcountry[i].name === "United States of America" ? "selected" : null
    }
     const option = `<option ${selected1}>${dataOfcountry[i].currency.code}</option>`
     const option2 = `<option ${selected2}>${dataOfcountry[i].currency.code}</option>`
     select.insertAdjacentHTML("beforeend" , option)
     select2.insertAdjacentHTML("beforeend" , option2)
    if (select.value === dataOfcountry[i].currency.code){
       ImgOne.src = dataOfcountry[i].flag
       console.log(dataOfcountry[i].flag , ImgOne.src)
    }
    if (select2.value === dataOfcountry[i].currency.code){
        ImgTwo.src = dataOfcountry[i].flag
    }
   }
   function chooseImage(e){
    const Image = e.target.parentElement.childNodes[1]
    const optit = e.target.childNodes
    console.log(optit)
    dataOfcountry.forEach((data , i)=>{
        if(e.target.value === data.currency.code){
            Image.src = data.flag
        }
    })
    console.log(Image)
   }

   function getExchangeRate(){
    let resultedValue;
    let url = `https://v6.exchangerate-api.com/v6/4439cc18d0f66e2e1aa92d31/latest/${select.value}`
    fetch(url)
    .then(response=>
        response.json()
    )
    .then((data)=>{
        console.log(data)
        let exchange = data.conversion_rates[select2.value]
        console.log(exchange , inputValue.value)
        resultedValue = Number(inputValue.value) * exchange
        console.log(resultedValue)
    })
    .finally(()=>{
        fromInfo.innerHTML = `${inputValue.value} ${select.value}`
        toInfo.innerHTML = `${select2.value} is equivalent to ${resultedValue}`
    })
   }
