let breweries_info=[
    {
        name:"Eesha's Cafe & Brew Corner",
        type:"Open for All",
        address:"24/A lane , Monasco Ville ,CDA,63736,Banaras,UP, India",
        websiteURL:"http://www.madtreebrewing.com",
        phone: 8000100100,
        picture:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fb.zmtcdn.com%2Fdata%2Freviews_photos%2F452%2F02325d9224207e55a9300f3fd00a9452_1538245704.jpg%3Ffit%3Daround%7C300%3A273%26crop%3D300%3A273%3B*%2C*&imgrefurl=https%3A%2F%2Fwww.zomato.com%2Fcuttack%2Fla-cafeotheque-cda-cda-sector-6&tbnid=DVHBPyoSBNLjrM&vet=12ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQ..i&docid=X8jtH6tGTSpVuM&w=300&h=273&itg=1&q=lacafethequ&ved=2ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fb.zmtcdn.com%2Fdata%2Freviews_photos%2F452%2F02325d9224207e55a9300f3fd00a9452_1538245704.jpg%3Ffit%3Daround%7C300%3A273%26crop%3D300%3A273%3B*%2C*&imgrefurl=https%3A%2F%2Fwww.zomato.com%2Fcuttack%2Fla-cafeotheque-cda-cda-sector-6&tbnid=DVHBPyoSBNLjrM&vet=12ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQ..i&docid=X8jtH6tGTSpVuM&w=300&h=273&itg=1&q=lacafethequ&ved=2ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fb.zmtcdn.com%2Fdata%2Freviews_photos%2F452%2F02325d9224207e55a9300f3fd00a9452_1538245704.jpg%3Ffit%3Daround%7C300%3A273%26crop%3D300%3A273%3B*%2C*&imgrefurl=https%3A%2F%2Fwww.zomato.com%2Fcuttack%2Fla-cafeotheque-cda-cda-sector-6&tbnid=DVHBPyoSBNLjrM&vet=12ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQ..i&docid=X8jtH6tGTSpVuM&w=300&h=273&itg=1&q=lacafethequ&ved=2ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fb.zmtcdn.com%2Fdata%2Freviews_photos%2F452%2F02325d9224207e55a9300f3fd00a9452_1538245704.jpg%3Ffit%3Daround%7C300%3A273%26crop%3D300%3A273%3B*%2C*&imgrefurl=https%3A%2F%2Fwww.zomato.com%2Fcuttack%2Fla-cafeotheque-cda-cda-sector-6&tbnid=DVHBPyoSBNLjrM&vet=12ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQ..i&docid=X8jtH6tGTSpVuM&w=300&h=273&itg=1&q=lacafethequ&ved=2ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQhttps://www.google.com/imgres?imgurl=https%3A%2F%2Fb.zmtcdn.com%2Fdata%2Freviews_photos%2F452%2F02325d9224207e55a9300f3fd00a9452_1538245704.jpg%3Ffit%3Daround%7C300%3A273%26crop%3D300%3A273%3B*%2C*&imgrefurl=https%3A%2F%2Fwww.zomato.com%2Fcuttack%2Fla-cafeotheque-cda-cda-sector-6&tbnid=DVHBPyoSBNLjrM&vet=12ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQ..i&docid=X8jtH6tGTSpVuM&w=300&h=273&itg=1&q=lacafethequ&ved=2ahUKEwiswLqymaP1AhVgObcAHfCQCaIQMygAegUIARCoAQ",
    }
]

const container = document.createElement("div");
const row= document.createElement("div");
container.setAttribute("class","container-fluid");
row.setAttribute("class","row");
container.append(row);

breweries_info.forEach((item )=>
{
    row.innerHTML+=`
    <div class="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-centre p-2">
    <div class="main-container card">
    <div class="image-container">
    <img src="${item.picture}" alt="Cafeteria" class = picture w-100 h-100>
    
    </div>

    <div class="content-container">
    <h3 class="name">${item.name}</h3>
    <p class="content">type:${item.type}</p>
    <p class="content">address:${item.address}</p>
    <p class="content">websiteURL:${item.websiteURL}</p>
    <p class="content">phone:${item.phone}</p>

    `
})
document.body.append(container);

const api_url="https://api.openbrewerydb.org/breweries";
async function getapi(url) {
    try {
        const response = await fetch(url, {
            method: "GET", 
            headers: {
                'Content-Type': 'application/json'
                
            }
        });
        const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    } catch (error) {
        errorName=error.message;
        
    }
    
}
getapi(api_url);