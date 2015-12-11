<div class="backLayer"></div>
<div class="colorLayer colorLayerHome">
	<!--<video class="bgScale bgVideo" autoplay loop muted>
		<source src="<?php echo get_template_directory_uri(); ?>/videos/motionreel-bg-v2.mp4" type="video/mp4"/>
		<source src="<?php echo get_template_directory_uri(); ?>/videos/motionreel-bg-v2.ogv" type="video/ogv"/>
		<source src="<?php echo get_template_directory_uri(); ?>/videos/motionreel-bg-v2.webm" type="video/webm"/>
	</video> -->
	<div>
		
	</div>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post();?>
	
	<?php if ( in_category( 'poster-still' ) ) : ?>
		<div class='backgroundThumbnail backgroundThumbnail-<?php echo $post->post_name;?>' style="background-image:url('<?php
				$args = array( 'post_type' => 'attachment', 'posts_per_page' => -1, 'post_status' =>'any', 'post_parent' => $post->ID ); 
				$attachments = get_posts( $args );
				if ( $attachments ) {
					foreach ( $attachments as $attachment ) {
						$imgID = $attachment->ID;
						$imgURI = wp_get_attachment_url( $imgID );
						echo $imgURI;
					}
				}
			 ?>')">
		</div>

	<?php endif; ?>
	<?php if ( in_category( 'poster-movie' ) ) : ?>
		<div class="backgroundThumbnail backgroundThumbnail-<?php echo $post->post_name;?>">
			<video class="bgScale bgVideo" autoplay loop muted>
				<?php
					$args = array( 'post_type' => 'attachment', 'posts_per_page' => 1, 'post_status' =>'any', 'post_parent' => $post->ID ); 
					$attachments = get_posts( $args );
					if ( $attachments ) {
						foreach ( $attachments as $attachment ) {
							$imgID = $attachment->ID;
							$imgURI = wp_get_attachment_url( $imgID );
							$imgType = pathinfo($imgURI, PATHINFO_EXTENSION);
							echo "<source src='".$imgURI."' type='video/".$imgType."'/>";
						}
					}
				 ?>'
				</video>
		</div>

	<?php endif; ?>

	<?php endwhile; else : ?>
	<!-- The very first "if" tested to see if there were any Posts to -->
	<!-- display.  This "else" part tells what do if there weren't any. -->
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
	
	<!-- REALLY stop The Loop. -->
<?php endif; ?>

</div>
