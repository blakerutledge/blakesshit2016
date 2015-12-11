<?php get_header(); ?>

<div class="backLayer"></div>

<div class="colorLayer colorLayerHome">
	<div id="pt" class="pt-container">
	</div>
</div>

<div class="screenLayer" id="screenLayerID">
	<div class="home-container">
		<div class="home-container-inner">

			<div class="home-name-wrap">
				<div class="home-skills">
					<span class="home-skill">
						Design
					</span>
					<span class="home-add">+</span>
					<span class="home-skill">
						Motion
					</span>
					<span>+</span>
					<span class="home-skill">
						Frontend
					</span>
					<span class="home-portfolio">
						Portfolio
					</span>
				</div>
				<div class="home-name">
					<h1>Blake Rutledge</h1>
				</div>
			</div>

			<div class="home-work-wrap">
				<a class="home-work-anchor" href='projects'>
					<div class="home-work-wrap-inner">
						<svg class="home-work-arrow home-work-arrow-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path class="home-work-arrow-path" fill="#ffffff" d="M6.22 21.19l-2.43-3.17 9.2-7.05L3.7 4.01 6.1.81l11.4 8.53c.5.38.8.96.8 1.59 0 .63-.29 1.22-.78 1.6l-11.3 8.66z"/></svg>
						<div class='home-work'>
							The Work
						</div>
						<svg class="home-work-arrow home-work-arrow-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path fill="#000000" d="M6.22 21.19l-2.43-3.17 9.2-7.05L3.7 4.01 6.1.81l11.4 8.53c.5.38.8.96.8 1.59 0 .63-.29 1.22-.78 1.6l-11.3 8.66z"/></svg>
					</div>
				</a>
			</div>

			<div class="home-footer-wrap">
				<?php get_template_part( 'template-parts/footer-icons'); ?>
			</div>

		</div>
	</div>
</div> <!-- - - - - END SCREEN LAYER - - - - -->

<?php get_footer(); ?>
