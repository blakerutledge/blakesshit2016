		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'single' ); ?>
			
		<?php endwhile; // End of the loop. ?>


	<div class="postBottomIndex gridWrap">
		
		<div class="projectLinkWrap">
			<?php get_template_part( 'template-parts/projectsList'); ?>
		</div> <!--projectsWrap -->
	</div></div>

	<div class="">
		<?php get_footer(); ?>
	</div>