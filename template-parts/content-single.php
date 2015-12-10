<?php get_header(); ?>
<?php get_template_part( 'template-parts/color-posts'); ?>	
<?php get_template_part( 'template-parts/menu-bot'); ?>
	
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
	</div>