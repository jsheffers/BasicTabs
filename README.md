BasicTabs
=========

BasicTabs is a simple script to get tabs up and running in no time at all.  The source has an extremely light footprint and can be added into any project seemlessly.


## Basic Usage ##

First add the javascript file to your page after your jQuery call.

```
<script src="js/basicTabs-min.js"></script>
```

Then use the following jQuery snippet to initiate the tab magic.

```
$(document).ready(function(){
  $('.container').basicTabs();
});
```

## Options ##

```
$('.container').basicTabs({
  active_class: "current",
  list_class: "tabs",
  content_class: 'tab_content',
  starting_tab: 1
});
```

## HTML Structure ##

```
<div class="container">
  <ul class="tabs">
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
    <li><a href="#tab4">Tab 4</a></li>
  </ul>
  <div class="tab_content">
    <div id="tab1">
      <p>Tab Content</p>
    </div>
    <div id="tab2">
      <p>Tab Content</p>
    </div>
    <div id="tab3">
      <p>Tab Content</p>
    </div>
    <div id="tab4">
      <p>Tab Content</p>
    </div>
  </div>
</div>

```


Demo
----

Check out the demo at http://basictabs.shanejeffers.com/