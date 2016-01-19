<?php get_header(); ?>

<div class="post-container-outer">
	<div class="projects-container-inner">

		<div class="menuWrap">
			<a href="<? echo get_site_url(); ?>/projects">
				<div class="post-back-wrap-inner">
					<div class="post-back-wrap-inner-line"></div>
					<h4> Projects </h4>
				</div>
			</a>
			<a href="<? echo get_site_url(); ?>" class="menu-wrap-name-inner">
				<div class="name-line-hover name-line-hover-post"></div>
				<h1>Blake Rutledge</h1>
			</a>
		</div>

		<div class="post-container">
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header">
					<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
				</header><!-- .entry-header -->

				<div class="entry-content">
					<?php the_content(); ?>
					<?php
						#wp_link_pages( array(
						#	'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'br16' ),
						#	'after'  => '</div>',
						#) );
					?>
				</div>
			</article><!-- #post-## -->
		</div>

		<div class="bottom-nav-container">
			<a class="bottom-nav-back" href="<? echo get_site_url(); ?>/projects">
				<div class="bottom-back-wrap-inner">
					<!-- <svg class="bottom-back-arrow bottom-back-arrow-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path class="home-work-arrow-path" d="M6.22 21.19l-2.43-3.17 9.2-7.05L3.7 4.01 6.1.81l11.4 8.53c.5.38.8.96.8 1.59 0 .63-.29 1.22-.78 1.6l-11.3 8.66z"/></svg> -->
					<div class="bottom-nav-back-line"></div>
					<h4> PROJECTS </h4>
					<!-- <svg class="bottom-back-arrow bottom-back-arrow-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M6.22 21.19l-2.43-3.17 9.2-7.05L3.7 4.01 6.1.81l11.4 8.53c.5.38.8.96.8 1.59 0 .63-.29 1.22-.78 1.6l-11.3 8.66z"/></svg> -->
				</div>
			</a>
			<div class="bottom-nav-spacer"></div>
			<a class="bottom-nav-next" href="<?php 
				
				$next_post = get_adjacent_post(false, '', true);
						if (!empty($next_post)) {
							echo get_permalink($next_post); 
						}
						else {
							echo Get_most_recent_permalink();
						}
				?>">
				<div class="bottom-next-wrap-inner">
					<!-- <svg class="bottom-next-arrow bottom-next-arrow-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path class="home-work-arrow-path" d="M6.22 21.19l-2.43-3.17 9.2-7.05L3.7 4.01 6.1.81l11.4 8.53c.5.38.8.96.8 1.59 0 .63-.29 1.22-.78 1.6l-11.3 8.66z"/></svg> -->
					<h4> <?php 
						$next_post = get_adjacent_post(false, '', true);
						if (!empty($next_post)) {
							echo $next_post->post_title;
						}
						else {
							echo Get_most_recent_title();
						}
					?>
					</h4>
					<!-- <svg class="bottom-next-arrow bottom-next-arrow-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M6.22 21.19l-2.43-3.17 9.2-7.05L3.7 4.01 6.1.81l11.4 8.53c.5.38.8.96.8 1.59 0 .63-.29 1.22-.78 1.6l-11.3 8.66z"/></svg> -->
				</div>
			</a>
			
		</div>


		<div class="post-footer-container">
			<?php get_template_part( 'template-parts/footer-icons'); ?>
		</div>
		
		<?php get_footer(); ?>

	</div>
</div>