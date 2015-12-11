<?php get_header(); ?>

<div class="gridWrap">
	<div class="menuWrap menuWrapBot">
		<a href="/wordpress/projects">
			<h1 class="linklyBack blackLinklyBackThin "> WORK THINGS </h1>
		</a>
		<a href="/wordpress">
			<h4> BLAKE RUTLEDGE </h4>
		</a>
	</div>
</div>
	
<div class="gridWrap">
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<header class="entry-header screenModule">
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header><!-- .entry-header -->

		<div class="entry-content">
			<?php the_content(); ?>
			<?php
				wp_link_pages( array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'br16' ),
					'after'  => '</div>',
				) );
			?>
		</div>
	</article><!-- #post-## -->
</div>

<div class="postBottomIndex gridWrap">
	<div class="projectLinkWrap">
		
	</div>
</div>


<?php get_footer(); ?>
	