BasicTabs
=========

BasicTabs is a simple script to get tabs up and running in no time at all.  The source has an extremely light footprint and can be added into any project seamlessly.


## Basic Usage ##

First add the javascript file to your page after your jQuery call.

```
<script src="js/basicTabs-min.js"></script>
```

Then use the following jQuery snippet to initiate the tab magic.

```
$(document).ready(function(){
  $('.c-tabs').basicTabs();
});
```

## Options ##

```
$('.c-tabs').basicTabs({
  active_class: "current",
  list_class: "tabs",
  open_class: "is-open"
  starting_tab: 1
});
```

## HTML Structure ##

```
<ul class="c-tabs">
  <li class="c-tabs__item">
    <a href="javascript:void(0)">Tab 1</a>
    <div class="c-tabs__content">
      <p>Content goes here.</p>
    </div>
  </li>
  <li class="c-tabs__item">
    <a href="javascript:void(0)">Tab 2</a>
    <div class="c-tabs__content">
      <p>Content goes here.</p>
    </div>
  </li>
  <li class="c-tabs__item">
    <a href="javascript:void(0)">Tab 3</a>
    <div class="c-tabs__content">
      <p>Content goes here.</p>
    </div>
  </li>
</ul>

```


Demo
----

Check out the demo at http://basictabs.shanejeffers.com/