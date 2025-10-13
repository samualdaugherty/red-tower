<?php $currentPage = 'schedule';?>

<!DOCTYPE html>
<html>
	<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="google-site-verification" content="E00IA2gwlcPkwUkoD4XlI4o3Sf7cWoAQ06XIWrDO8eE" />
	<title>Jacaranda | Yoga • Barre • Pilates</title>
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,700" rel="stylesheet">
	<link href="/css/bootstrap.min.css" rel="stylesheet" />
	<link href="/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="/css/custom.css" rel="stylesheet" />
    
	<meta property="og:url" content="http://jacarandapeoria.com" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Jacaranda | Yoga • Barre • Pilates" />
	<meta property="og:description" content="Jacaranda understands that every single person and body is unique and it’s what ties us together. Jacaranda desires to instill hearts with compassion, bodies with confidence and minds with strength – no matter where you’re at in life’s journey. We believe in and are committed to providing authentic classes that will benefit you physically and will inspire a healthy lifestyle." />
	<meta property="og:image" content="http://jacarandapeoria.com/img/social-share.png" />
    	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Jacaranda | Yoga • Barre • Pilates" />
	<meta name="twitter:description" content="Jacaranda understands that every single person and body is unique and it’s what ties us together. Jacaranda desires to instill hearts with compassion, bodies with confidence and minds with strength – no matter where you’re at in life’s journey. We believe in and are committed to providing authentic classes that will benefit you physically and will inspire a healthy lifestyle." />
	<meta name="twitter:image" content="http://jacarandapeoria.com/img/social-share.png" />
		
    <script src="/js/respond.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110895495-1"></script>
    <script>
     window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());

     gtag('config', 'UA-110895495-1');
    </script>

	</head>

<body class="fade-out">
	<?php include '../includes/overlay.php';?>

	<header class="class-header">
		<?php include '../includes/navigation.php';?>

		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-7">
					<div class="title">
						<h1>Schedule</h1>
						<p>We offer a full range of classes, throughout the day, every day. We use the MindBody app for all of our scheduling, so you can access our full schedule on the go, sign up for classes, and always be in-the-know.</p>
					</div>
				</div>
			</div>
		</div> <!-- END OF CONTAINER -->
	</header> <!-- END OF HEADER -->
	
	<section>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4 col-sm-5 col-md-push-8 col-sm-push-7 right-images">
					<img class="img-responsive shadow" src="/img/yoga-5.png">
				</div>
				<div class="col-sm-7 col-md-pull-4 col-sm-pull-5">
					<h3>Class Etiquette</h3>
					<p>Remember: class etiquette is important! Arrive 5-10 minutes early and hydrate before, during, and after each class. Check your shoes (and your ego) in the lobby before entering the studio, as well as your cell phone. Clean up after yourself. Minimize conversation, respect your instructor, the students, and yourself. We are here together.</p>
					<p>And <em>never</em> skip Savasana.</p>
				</div>
			</div>
		</div>
	
		<div class="container-fluid schedule-embed">
			<script src="https://widgets.healcode.com/javascripts/healcode.js" type="text/javascript"></script>
	
			<healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="636670260d4" data-widget-version="1"></healcode-widget>
		</div>
	</section>

	<?php include '../includes/footer.php';?>


<!-- JavaScript -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="/js/bootstrap.min.js"></script>
	<script src="/js/custom.js"></script>
</body>
</html>
