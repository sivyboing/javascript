<?php include_once 'header.php'; ?>
	<section class="container">
		<div class="row">
			<div class="applicant">
				<h2 class="title">Who pays the bill?</h2>
				<input type="text" class="input" id="applicant_value" placeholder="Enter applicant">
				<button class="button applicant-id" id="applicant-add">add</button>
				<div class="applicant-list">
					<h3 class="title">Who's participanting</h3>
					<ul class="list-inline applicant-list">
						<li class="applicant-list-item">John</li>
						<li class="applicant-list-item">Erick</li>
					</ul>
				</div>
				<button class="button show-results">Get the loser</button>
			</div>
			<div class="results">
				<h2 class="title">The looser is:</h2>
				<div class="result">
					<h3 class="title">John</h3>
				</div>
				<div class="result-action">
					<button class="button run">Run it again</button>
					<button class="button start">Start again</button>
				</div>
			</div>
		</div>
	</section>
    <footer class="footer">
        <navbar class="navbar">
        </navbar>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="../templates/assets/js/pay-app.js"></script>
</body>
</html>

