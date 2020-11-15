import Turbolinks from "turbolinks";
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import $ from "jquery";
import Tabs from "%modules%/tabs/tabs"
global.jQuery = $;

require ("@fancyapps/fancybox/dist/jquery.fancybox");


Turbolinks.start();

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

$('[data-fancybox]').fancybox({
  protect: true
});
