$(document).ready(function() {
	$("#start-btn").click(function() {
		$(this).hide();
		$("#welcome").hide();
		$("#questions .q1, .a1").show();
	});

	$(".a1 .correct, .a1 .wrong").click(function() {
		$(".a1 .wrong").css("background", "red");
		$(".a1 .correct").css("background", "green");

		setTimeout(function() {
			$("#questions .q1, .a1").hide();
			$("#questions .q2, .a2").show();

			$(".a2 .correct, .a2 .wrong").click(function() {
				$(".a2 .wrong").css("background", "red");
				$(".a2 .correct").css("background", "green");

				setTimeout(function() {
					$("#questions .q2, .a2").hide();
					$("#questions .q3, .a3").show();

					$(".a3 .correct, .a3 .wrong").click(function() {
						$(".a3 .wrong").css("background", "red");
						$(".a3 .correct").css("background", "green");

						setTimeout(function() {
							$("#questions .q3, .a3").hide();
							$("#questions .q4, .a4").show();

							$(".a4 .correct, .a4 .wrong").click(function() {
								$(".a4 .wrong").css("background", "red");
								$(".a4 .correct").css("background", "green");

								setTimeout(function() {
									$("#questions .q4, .a4").hide();
									$("#questions .q5, .a5").show();

									$(".a5 .correct, .a5 .wrong").click(function() {
										$(".a5 .wrong").css("background", "red");
										$(".a5 .correct").css("background", "green");

										setTimeout(function() {
											$("#questions .q5, .a5").hide();
											$("#thankYou").show();
										}, 2000);
									});
								}, 2000);
							});
						}, 2000);
					});

				}, 2000);
			});

		}, 2000);
	});
});