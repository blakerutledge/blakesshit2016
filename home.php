<?php get_header(); ?>

<?php get_template_part( 'template-parts/color-projects'); ?>

<div class="screenLayer">
	<div class="projects-container">
		<div class="projects-container-inner">

			<div class="menuWrap">
				<h4 class="projectsHeaderToggle"> Projects </h4>
				<a href="/wordpress">
					<h1>Blake Rutledge</h1>
				</a>
			</div>

			<div class="projectsWrap">
				<?php get_template_part( 'template-parts/projects-icon-wrap'); ?>
				<div class="projectLinkWrap">
					<?php get_template_part( 'template-parts/projectsList'); ?>
				</div> <!--projectsWrap -->
			</div>

			<div class="projects-footer-container">
				<?php get_template_part( 'template-parts/footer-icons'); ?>
			</div>
			
	    	<?php get_footer(); ?>

	    </div>
    </div>

</div>