<?php get_header(); ?>

<div class="backLayer"></div>

<div class="colorLayer colorLayerHome">
	<div id="pt" class="pt-container">
	</div>
</div>

<div class="screenLayer" id="screenLayerID">
	<div class="home-container">
		<div class="home-container-inner info-container-inner">

			<div class="home-name-wrap">
				<div class="home-skills">
					<span class="home-skill">
						Design
					</span>
					<span class="home-add">+</span>
					<span class="home-skill">
						Motion
					</span>
					<span>+</span>
					<span class="home-skill">
						Frontend
					</span>
					<span class="home-portfolio">
						Portfolio
					</span>
				</div>
				<div class="home-name">
					<h1>Blake Rutledge</h1>
				</div>
			</div>

			<div class="projectsWrap">
				<div class="info-container">
					<p class="info-emphasis">I am a Brooklyn-based interactive & motion designer.</p>
					<p class="info-more">I work as <span class="strike-through">an Artist in Residence</span> a Designer & Creative Technologist at Ogilvy & Mather. I'm passionate about concepting and designing for film and web, hybrid processes, and the outdoors. Here's <a target="_blank" href="http://blakerutledge.com/wp/wp-content/uploads/2016/01/BlakeRutledge_Resume_032716.pdf">my resume,</a> and if you'd like to get in touch, send me <a class="info-email-fakeout" >an email,</a> I read 'em all.</p>
				</div>
				<div class="info-nav">
					<a href="projects" class="info-button">
						<div class="info-link info-link-projects">
							Projects
						</div>
					</a>
					<!--<div class="info-button info-button-resume">
						<a href="<? echo home_url(); ?>/wp-content/uploads/2016/01/BlakeRutledge_resume_011016.pdf" class="info-link info-link-resume">
							Resume
						</a>
					</div>-->
				</div>
			</div>

			<div class="home-footer-wrap">
				<?php get_template_part( 'template-parts/footer-icons'); ?>
			</div>

		</div>
	</div>
</div> <!-- - - - - END SCREEN LAYER - - - - -->

<?php get_footer(); ?>