<?php
/*
Template Name: Info
*/
?>

<?php get_header(); ?>

<div class="backLayer"></div>

<div class="colorLayer colorLayerHome">
	<div id="pt" class="pt-container">
	</div>
</div>

<div class="screenLayer" id="screenLayerID">
	<div class="home-container">
		<div class="home-container-inner info-container-inner">

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

			<div class="projectsWrap">
				<div class="info-container">
					<p class="info-emphasis">I am Brooklyn-based full-stack designer.</p>
					<p class="info-more">Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				</div>
				<div class="info-nav">
					<div class="info-button">
						<a href="<? echo get_site_url(); ?>/wp-content/uploads/2016/01/BlakeRutledge_resume_011016.pdf" class="info-link info-link-resume">
							Resume
						</a>
					</div>
					<div class="info-button">
						<a href="projects" class="info-link info-link-projects">
							Projects
						</a>
					</div>
				</div>
			</div>

			<div class="home-footer-wrap">
				<?php get_template_part( 'template-parts/footer-icons'); ?>
			</div>

		</div>
	</div>
</div> <!-- - - - - END SCREEN LAYER - - - - -->

<?php get_footer(); ?>