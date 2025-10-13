<?php $currentPage = 'contact';?>

<!DOCTYPE html>
<html>
	<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Red Tower Contact Us | Really Good Stuff</title>
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:900" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Nobile:400,700' rel='stylesheet' type='text/css'>
	<link href="../css/bootstrap.min.css" rel="stylesheet" />
	<link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
  	<link href="../css/custom.css" rel="stylesheet" />
  	<link href="../css/contactform.css" rel="stylesheet" />
  	<script src="../js/respond.js"></script>
	</head>

<body class="fade-out">
	<div class="header">
		<?php include '../includes/navigation.php'; ?>

		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-9 col-sm-offset-2">
					<div class="title">
						<h1>This Is<br />Gonna Be Rad</h1>
						<p>Our contact form is pretty handy, and we're pretty good about getting back to you when you have questions too.</p>
					</div>
				</div>
			</div>

		</div> <!-- END OF CONTAINER -->
	</div> <!-- END OF HEADER -->

    <div class="form-section">
        <div class="container-fluid">
            <div class="row fadeSooner">
                <div class="col-sm-9 col-sm-offset-3">
                    <form id="form" class="contact-form form-horizontal" action="/send.php" method="POST" target="no-target">
                        <div id="name" class="input-group">
                            <label for="name" class="control-label">Hey there! My name is</label>
                            <input id="name-input" name="name" type="text" placeholder="your name is required" ></input>
                        </div>
                        <div id="company" class="input-group">
                            <label for="company" class="control-label">And I work for</label>
                            <input id="company-input" name="company" type="text" placeholder="company name isn't required"></input>
                        </div>
                        <div id="description" class="input-group">
                            <label for="description" class="control-label">I could really use some help with</label>
                            <textarea id="description-input" name="description" rows="5" placeholder="description of your project" ></textarea>
                        </div>
                        <div id="budget" class="input-group">
                            <label for="budget" class="control-label">I have a budget of about</label>
                            <input id="budget-input" name="budget" placeholder="budget isn't required"></input>
                        </div>
                        <div id="timeframe" class="input-group">
                            <label for="timeframe" class="control-label">with a timeframe of around</label>
                            <input class="border" id="timeframe-input" name="timeframe" type="text" placeholder="end date or number of weeks"></input>
                        </div>
                        <div id="email" class="input-group">
                            <label for="email" class="control-label">Just email me back at</label>
                            <input id="email-input" name="email" type="email" placeholder="email is required" ></input>
                        </div>
                        <div id="phone" class="input-group">
                            <label for="phone" class="control-label">or hit up my cell at</label>
                            <input id="phone-input" name="phone" type="phone" placeholder="phone isnt required"></input>
                        </div>
                        <button type="submit" id="submit" class="send-button disabled">
                            <p>Tell Us</p>
                            <span id="strike-through"></span>
                            <div id="arrow"><span id="point"></span></div>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </div>


		<?php include '../includes/footer.php';?>


		<!-- JavaScript -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="../js/bootstrap.min.js"></script>
		<script src="../js/custom.js"></script>
		<script>
		$(function() {

		    function getValues() {
		        var name = $("#name-input").val();
		        var company = $("#company-input").val();
		        var description = $("#description-input").val();
		        var budget = $("#budget-input").val();
		        var timeframe = $("#timeframe-input").val();
		        var email = $("#email-input").val();
		        var phone = $("#phone-input").val();
		        return {
		            name: name,
		            company: company,
		            description: description,
		            budget: budget,
		            timeframe: timeframe,
		            email: email,
		            phone: phone
		        };
		    }

		    function validate() {
		        var formVals = getValues();

		        if (!formVals.name) {
		            return "Name is required";
		        }

		        if (!formVals.description) {
		            return "Description is required";
		        }

		        if (!formVals.email) {
		            return "Email is required";
		        }

		        return null;
		    }

		    $(".contact-form input").on("keyup", function(e) {
		        var $sendBtn = $(".send-button");
		        if (validate() == null) {
		            $sendBtn.removeClass("disabled").addClass("sendable");
		        } else {
		            $sendBtn.removeClass("sendable").addClass("disabled");
		        }
		    });

		    $(".contact-form").on("submit", function(e) {
		        e.preventDefault();

		        var error = validate();
		        if (error) {
		            alert(error);
		        } else {
		            var data = getValues();
		            $.ajax({
		                type: "POST",
		                url: "send.php",
		                dataType: "json",
		                data: data,
		                success: function(data) {
		                    if (data.code == "200") {
		                        $(".contact-form")[0].reset()
		                        $(".send-button")
		                            .removeClass("sendable")
		                            .addClass("disabled");
		                        alert("Form submitted Successfully");
		                    } else {
		                        var pretty = "";
		                        $.each(data.errors, function(key, error) {
		                            pretty += error + "\n";
		                        });
		                        alert(pretty);
		                    }
		                }
		            });
		        }
		    });
		});
		</script>
	</body>
</html>
