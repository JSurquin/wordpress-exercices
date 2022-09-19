<?php

get_header(); ?>

<!-- example react component -->
<div id="notre_theme_wordpress"></div>
<!-- end example react component -->

<?php if (have_posts()) {
  while(have_posts()) {
    the_post(); ?>
    <div class="body-content">
      <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
      <?php the_content(); ?>
    </div>
  <?php }
}

get_footer();
