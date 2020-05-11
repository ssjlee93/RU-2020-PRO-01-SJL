$(document).ready(function () {
  $('body').bootstrapMaterialDesign();

  var city = "";
  var product = "";
  var index = 0;
  var counter = 0;
  var obj = {};
  var inputs = ["eggs", "bread","milk","orange juice","rice","steak","butter"];

  $(".city").on("click", function (event) {
    event.preventDefault();
    city = $(this).attr("data-city");
    $("#citiesBtn").text($(this).text());
  })

  $("#searchBtn").on("click", function (event) {
    event.preventDefault();
    product = $("#product").val().trim();
    if (inputs.includes(product)){
     search();
    } else {
    $("#validation").modal('show');
    }
  });


  async function search() {
    
    let response = await prices();
    obj.price = response[0].price;

    response = await nutrition();

    var thumbnail = response.common[0].photo.thumb;
    var itemName = response.common[0].food_name;
    var itemNameUp = itemName.toString().charAt(0).toUpperCase() + itemName.slice(1);
    $("#itemName").text(itemNameUp);
    $("#productImg").attr("src", thumbnail);
    obj.name = itemName;

    response = await nutrients();

    $("#brandName").text(response.hits[index].fields.brand_name);
    $("#calcium").text(response.hits[index].fields.nf_calcium_dv);
    $("#calories").text(response.hits[index].fields.nf_calories);
    $("#cholesterol").text(response.hits[index].fields.nf_cholesterol);
    $("#df").text(response.hits[index].fields.nf_dietary_fiber);
    $("#iron").text(response.hits[index].fields.nf_iron_dv);
    $("#protein").text(response.hits[index].fields.nf_protein);
    $("#saturated").text(response.hits[index].fields.nf_saturated_fat);
    $("#sodium").text(response.hits[index].fields.nf_sodium);
    $("#sugars").text(response.hits[index].fields.nf_sugars);
    $("#carbs").text(response.hits[index].fields.nf_total_carbohydrate);
    $("#fat").text(response.hits[index].fields.nf_total_fat);
    $("#trans").text(response.hits[index].fields.nf_trans_fatty_acid);
    $("#a").text(response.hits[index].fields.nf_vitamin_a_dv);
    $("#c").text(response.hits[index].fields.nf_vitamin_c_dv);
    obj.calories = response.hits[index].fields.nf_calories;
    obj.brand = response.hits[index].fields.brand_name;

    printTables();
    console.log(obj);
  }


  function prices() {
    var settings = {
      "url": "https://grocerybear.com/getitems?city=" + city + "&product=" + product + "&num_days=1",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "api-key": "D88BB3392503C0DB49C15ADA11395CD1BFD7886CF8CB5763FFF5A228A0EF93A0"
      }
    };

    return $.ajax(settings)
    
  }

  function nutrition() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://trackapi.nutritionix.com/v2/search/instant?query=" + product,
      "method": "GET",
      "headers": {
        "x-app-id": "84d7c19a",
        "x-app-key": "b8834860ea9e6560026dfa655c816765"
      }

    }
    return $.ajax(settings)

  }

  function nutrients() {

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://nutritionix-api.p.rapidapi.com/v1_1/search/" + product + "?fields=item_name,item_id,brand_name,brand_id,nf_calories,nf_total_fat,nf_saturated_fat,nf_monounsaturated_fat,nf_polyunsaturated_fat,nf_trans_fatty_acid,nf_cholesterol,nf_sodium,nf_total_carbohydrate,nf_dietary_fiber,nf_sugars,nf_protein,nf_vitamin_a_dv,nf_vitamin_c_dv,nf_calcium_dv,nf_iron_dv,nf_potassium,",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
        "x-rapidapi-key": "d091112254mshfa882a9bf0c3d19p1a1894jsn938871f9c5a2"
      }
    }
    return $.ajax(settings)
  }

  function printTables() {
    counter++;
    var newItem = $("<tr>");
    var newRow = $("<th>");
    newRow.attr("scope", "row");
    newRow.text(counter);
    newItem.append(newRow);
    var nametd = $("<td>");
    nametd.text(obj.name);
    newItem.append(nametd);
    var brandtd = $("<td>").text(obj.brand);
    newItem.append(brandtd);
    var caloriestd = $("<td>").text(obj.calories);
    newItem.append(caloriestd);
    var pricetd = $("<td>").text(obj.price);
    newItem.append(pricetd);
    var priceInt = parseInt(obj.price);
    var caloriesInt = parseInt(obj.calories);
    var efficiency = ((caloriesInt / priceInt) * 100).toFixed(2);
    var efficiencytd = $("<td>").text(efficiency);
    newItem.append(efficiencytd);

    $("tbody").append(newItem);
    return;

  }
  
});
