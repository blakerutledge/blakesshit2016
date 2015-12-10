<?php get_header(); ?>
<?php get_template_part( 'template-parts/color-projects'); ?>
<?php get_template_part( 'template-parts/menu-mid'); ?>
<div class="gridWrap">
	<div class="projectsWrap">
		<?php get_template_part( 'template-parts/projects-icon-wrap'); ?>
		<div class="projectLinkWrap">
			<?php get_template_part( 'template-parts/projectsList'); ?>
		</div> <!--projectsWrap -->
	</div>
</div>
<?php get_footer(); ?>