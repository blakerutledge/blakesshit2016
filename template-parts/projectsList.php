<!-- Start the Loop. -->
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<?php if ( !in_category('poster-movie') && !in_category('poster-still') ) : ?>
		<a href="<?php the_permalink(); ?>">
			<div class="projectModule <?php 
				if ( in_category( 'design' ) ) : echo "designProject "; endif;
				if ( in_category( 'motion' ) ) : echo "motionProject "; endif;
				if ( in_category( 'frontend' ) ) : echo "frontendProject "; endif;
				?>" id="<?php echo $post->post_name; ?>" data-teaser="<?php $key="data-teaser"; $attr = get_post_meta($post->ID, $key, true); echo "" . $attr; ?>" 
				data-static="<?php echo wp_get_attachment_image_src( get_post_thumbnail_id(), 'full', false )[0] ?>">
				<div class="linklyWrap">
					<h3 class='linkly whiteLinkly'><?php the_title(); ?></h3>
				</div>
				<div class='moduleDeetsGroup'>
					<h5> <?php the_time('m'); ?> &nbsp;&vert;&nbsp;  <?php the_time('Y'); ?></h5>
					<div class='projectModuleIcons'>
						<?php if ( in_category( 'design' ) ) : ?>
							<div class='projectModuleIcon projectModuleIconDesign projectModuleIconTrue'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M3.61 2.1h14.78c.83 0 1.51.68 1.51 1.51v14.78c0 .83-.68 1.51-1.51 1.51H3.61c-.83 0-1.51-.68-1.51-1.51V3.61c0-.83.68-1.51 1.51-1.51z"/></svg>
							</div>
						<?php else : ?>
							<div class='projectModuleIcon projectModuleIconDesign projectModuleIconFalse'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"></svg>
							</div>
						<?php endif; ?>

						<?php if ( in_category( 'motion' ) ) : ?>
							<div class='projectModuleIcon projectModuleIconMotion projectModuleIconTrue'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M11 1.26A9.74 9.74 0 0 1 20.74 11 9.74 9.74 0 0 1 11 20.74 9.74 9.74 0 0 1 1.26 11 9.74 9.74 0 0 1 11 1.26z"/></svg>
							</div>
						<?php else : ?>
							<div class='projectModuleIcon projectModuleIconMotion projectModuleIconFalse'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"></svg>
							</div>
						<?php endif; ?>

						<?php if ( in_category( 'frontend' ) ) : ?>
							<div class='projectModuleIcon projectModuleIconFrontend projectModuleIconTrue'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M4.93 19.76L.37 11.87c-.31-.54-.31-1.2 0-1.74l4.56-7.89c.32-.54.89-.88 1.51-.88h9.11c.62 0 1.2.33 1.51.87l4.56 7.89c.31.54.31 1.2 0 1.74l-4.56 7.89c-.31.54-.89.87-1.51.87H6.44c-.62.02-1.19-.32-1.51-.86z"/></svg>
							</div>
						<?php else : ?>
							<div class='projectModuleIcon projectModuleIconFrontend projectModuleIconFalse'>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"></svg>
							</div>
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
