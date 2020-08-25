$(function () {
  $("#buttonOne").click(function (){
    const numSet = [5, 10, 15];
    let sum = 0;
    const num = parseInt($("#inputOne").val());
    let sum2 = numSet.reduce(function(sum, value){
      return sum + value;
    });
    sum2 = sum2 + num;
      alert(sum2);
  });
});
