<?php

namespace Drupal\createnode\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for createnode routes.
 */
class NewNode extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {
    dpm(getcwd( ));
    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
