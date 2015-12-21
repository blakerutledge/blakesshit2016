<!-- Start the Loop. -->
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<?php if ( !in_category('poster-movie') && !in_category('poster-still') ) : ?>
		<a href="<?php the_permalink(); ?>">
			<div class="projectModule <?php 
				if ( in_category( 'design' ) ) : echo "designProject "; endif;
				if ( in_category( 'motion' ) ) : echo "motionProject "; endif;
				if ( in_category( 'frontend' ) ) : echo "frontendProject "; endif; 
				?>" id="<?php echo $post->post_name; ?>" data-teaser="<?php $key="data-teaser"; $attr = get_post_meta($post->ID, $key, true); echo "" . $attr; ?>">
				<h3 class='linkly whiteLinkly'><?php the_title(); ?></h3>
				<div class='moduleDeetsGroup'>
					<h5> <?php the_time('m'); ?> &nbsp;&vert;&nbsp;  <?php the_time('Y'); ?></h5>
					<div class='projectModuleIcons'>
						<?php if ( in_category( 'design' ) ) : ?>
							<div class='projectModuleIcon projectModuleIconDesign projectModuleIconTrue'></div>
						<?php else : ?>
							<div class='projectModuleIcon projectModuleIconDesign projectModuleIconFalse'></div>
						<?php endif; ?>

						<?php if ( in_category( 'motion' ) ) : ?>
							<div class='projectModuleIcon projectModuleIconMotion projectModuleIconTrue'></div>
						<?php else : ?>
							<div class='projectModuleIcon projectModuleIconMotion projectModuleIconFalse'></div>
						<?php endif; ?>

						<?php if ( in_category( 'frontend' ) ) : ?>
							<div class='projectModuleIcon projectModuleIconFrontend projectModuleIconTrue'></div>
						<?php else : ?>
							<div class='projectModuleIcon projectModuleIconFrontend projectModuleIconFalse'></div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</a>
	<?php endif; ?>
<?php endwhile; else : ?>


	<!-- The very first "if" tested to see if there were any Posts to -->
	<!-- display.  This "else" part tells what do if there weren't any. -->
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
	<!-- REALLY stop The Loop. -->
<?php endif; ?>
