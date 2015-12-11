<?php get_header(); ?>

<?php get_template_part( 'template-parts/color-projects'); ?>

<div class="screenLayer">

	<div class="gridWrap">
		<div class="menuWrap menuWrapMid">
			<h1> WORK THINGS </h1>
			<a href="/wordpress">
				<h4> BLAKE RUTLEDGE </h4>
			</a>
		</div>
	</div>

	<div class="gridWrap">
		<div class="projectsWrap">
			<?php get_template_part( 'template-parts/projects-icon-wrap'); ?>
			<div class="projectLinkWrap">
				<?php get_template_part( 'template-parts/projectsList'); ?>
			</div> <!--projectsWrap -->
		</div>
	</div>

	<?php get_footer(); ?>

</div>