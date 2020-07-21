var cityData = null;
var districtsSelected = null;
var wardsSelected = null;

$(function () {
    $.getJSON('./data/local.json', function (citys) {
        citys.forEach(city => {
            $('#city').append("<option value='" + city.code + "'>" + city.name + "</option>");
        });
        cityData = citys;
    });
    $('#city').change(function (e) {
        var cityCode = e.target.value; // Get the value of the selected optiona
        var city =  cityData.find( ({ code }) => code === cityCode );
        districtsSelected = city.districts;
        $('#district').find('option').remove().end().append('<option selected>Chọn...</option>');;
        $('#ward').find('option').remove().end().append('<option selected>Chọn...</option>');
        city.districts.forEach(district => {
            $('#district').append("<option value='" + district.id + "'>" + district.name + "</option>");
        });
        // $("#districts option[value='"+x+"']").remove(); // Remove the selected option
    });
    $('#district').change(function (e) {
        var districtId = e.target.value; // Get the value of the selected optiona
        var districts =  districtsSelected.find( ({ id }) => id === districtId );
        $('#ward').find('option').remove().end();
        districts.wards.forEach(ward => {
            $('#ward').append("<option value='" + ward.id + "'>" + ward.prefix + ' ' + ward.name + "</option>");
        });
        // $("#districts option[value='"+x+"']").remove(); // Remove the selected option
    });
});
