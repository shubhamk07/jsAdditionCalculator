		$(function(){
		$("#fade").fadeIn(1500); 	
		//JavaSCript code to find addition
		
		var numOne = document.getElementById("num-one");
		var numTwo = document.getElementById("num-two");
		var sum = document.getElementById("add-sum");
		numOne.addEventListener("input",add);
		numTwo.addEventListener("input",add);
		
		function add (){
			var one = parseFloat(numOne.value)  || 0;
			var two = parseFloat(numTwo.value) || 0;
			
			sum.innerHTML = "The Sum is : "+(one+two);

		}
		

		//JQUERY code to calculate addition !

		/*$(".btn-default").on("click", function(){
			var one = parseFloat($("#num-one").val());
			var two =  parseFloat($("#num-two").val());
			var sum = one + two;
			$("#show").append("THe sum is +",sum);
			console.log(sum);
		});
		*/

	});
