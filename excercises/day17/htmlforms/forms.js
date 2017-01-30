$("#register").click(function() {
    var firstname = $("#fn").val();
    var lastname = $("#ln").val();
    var age = $("#age").val();
    var gender= $('input:radio[name=gender]').val();
    var location = $("#location").val();
    var food= $('input:checkbox[name=diet]').each();
    alert("Firstname: " + firstname + ", Lastname: " + lastname + ", Age: " + age+ ", Gender: " + gender + " Location: " + location + ", Diet: " + food);
})